function generateCard() {
    document.getElementById('outNameBN').innerText = document.getElementById('inNameBN').value;
    document.getElementById('outNameEN').innerText = document.getElementById('inNameEN').value;
    document.getElementById('outFather').innerText = document.getElementById('inFather').value;
    document.getElementById('outMother').innerText = document.getElementById('inMother').value;
    document.getElementById('outDOB').innerText = document.getElementById('inDOB').value;
    document.getElementById('outID').innerText = document.getElementById('inID').value;
    document.getElementById('outAddress').innerText = document.getElementById('inAddress').value;
    document.getElementById('outIssueDate').innerText = document.getElementById('inIssueDate').value;

    const photoInput = document.getElementById('inPhoto');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('outPhoto').src = e.target.result;
        }
        reader.readAsDataURL(photoInput.files[0]);
    }

    document.getElementById('nid-wrapper').classList.remove('hidden');
    document.getElementById('downloadBtn').style.display = 'block';
}

function downloadCard() {
    const element = document.getElementById('nid-wrapper');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'BD-NID-Card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
