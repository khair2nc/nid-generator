function generateCard() {
    const ids = ['NameBN', 'NameEN', 'Father', 'Mother', 'DOB', 'ID', 'Address', 'Blood', 'Place', 'IssueDate'];
    ids.forEach(id => {
        document.getElementById('out' + id).innerText = document.getElementById('in' + id).value;
    });

    // ছবি সেট করা
    const file = document.getElementById('inPhoto').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) { document.getElementById('outPhoto').src = e.target.result; }
        reader.readAsDataURL(file);
    }

    // মাইক্রো কিউআর কোড তৈরি (ID দিয়ে)
    document.getElementById('micro-qr').innerHTML = "";
    new QRCode(document.getElementById("micro-qr"), {
        text: document.getElementById('inID').value,
        width: 45,
        height: 45
    });

    document.getElementById('nid-pdf-area').classList.remove('hidden');
    document.getElementById('dlBtn').style.display = 'block';
}

function downloadPDF() {
    const element = document.getElementById('nid-pdf-area');
    const opt = {
        margin:       0.5,
        filename:     'Bangladesh_NID_Card.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
}