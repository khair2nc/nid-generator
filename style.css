function generateCard() {
    const fields = ['NameBN', 'NameEN', 'Father', 'Mother', 'DOB', 'ID', 'Address', 'Blood', 'Place', 'IssueDate'];
    fields.forEach(f => {
        document.getElementById('out' + f).innerText = document.getElementById('in' + f).value;
    });

    const photoInput = document.getElementById('inPhoto');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => { document.getElementById('outPhoto').src = e.target.result; };
        reader.readAsDataURL(photoInput.files[0]);
    }

    // ২য় পেজের নিচে QR কোড
    document.getElementById('outQR').innerHTML = "";
    new QRCode(document.getElementById("outQR"), {
        text: document.getElementById('inID').value,
        width: 35,
        height: 35
    });

    document.getElementById('nid-pdf-area').classList.remove('hidden');
    document.getElementById('dlBtn').style.display = 'block';
}

function downloadPDF() {
    const element = document.getElementById('nid-pdf-area');
    const opt = {
        margin:       0.1,
        filename:     'Original_Size_NID.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 4, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
}