function generateCard() {
    // ডাটা সেট করা
    document.getElementById('outNameBN').innerText = document.getElementById('inNameBN').value;
    document.getElementById('outNameEN').innerText = document.getElementById('inNameEN').value;
    document.getElementById('outFather').innerText = document.getElementById('inFather').value;
    document.getElementById('outMother').innerText = document.getElementById('inMother').value;
    document.getElementById('outDOB').innerText = document.getElementById('inDOB').value;
    document.getElementById('outID').innerText = document.getElementById('inID').value;
    document.getElementById('outAddress').innerText = document.getElementById('inAddress').value;
    document.getElementById('outIssueDate').innerText = document.getElementById('inIssueDate').value;

    // ফটো সেট করা
    const file = document.getElementById('inPhoto').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('outPhoto').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

    // বাটন দেখানো
    document.getElementById('dlBtn').style.display = 'block';
}

function downloadCard() {
    const element = document.getElementById('capture-area');
    html2canvas(element, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'My-Digital-NID.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
