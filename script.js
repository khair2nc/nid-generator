function generateCard() {
    // ডাটা ম্যাপিং
    const fields = {
        'inNameBN': 'outNameBN',
        'inNameEN': 'outNameEN',
        'inFather': 'outFather',
        'inMother': 'outMother',
        'inDOB': 'outDOB',
        'inID': 'outID',
        'inAddress': 'outAddress',
        'inBlood': 'outBlood',
        'inPlace': 'outPlace',
        'inIssueDate': 'outIssueDate'
    };

    for (let inputId in fields) {
        let value = document.getElementById(inputId).value;
        document.getElementById(fields[inputId]).innerText = value;
    }

    // ছবি প্রসেসিং
    const photoInput = document.getElementById('inPhoto');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('outPhoto').src = e.target.result;
        }
        reader.readAsDataURL(photoInput.files[0]);
    }

    // কিউআর কোড জেনারেশন
    const idValue = document.getElementById('inID').value || "0000000000";
    const qrContainer = document.getElementById("qrcode-box");
    qrContainer.innerHTML = ""; // আগের কোড মুছে ফেলা
    new QRCode(qrContainer, {
        text: idValue,
        width: 40,
        height: 40
    });

    // কার্ড দেখানো এবং ডাউনলোড বাটন সক্রিয় করা
    document.getElementById('nid-pdf-area').classList.remove('hidden');
    document.getElementById('dlBtn').style.display = 'block';
}

function downloadPDF() {
    const element = document.getElementById('nid-pdf-area');
    const options = {
        margin:       0.2,
        filename:     'NID_Card_Professional.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 3, useCORS: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
    };

    // ডাউনলোড শুরু
    html2pdf().set(options).from(element).save();
}