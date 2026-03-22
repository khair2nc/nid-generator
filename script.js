function generateCard() {
    // ইনপুট থেকে তথ্য নেওয়া
    const name = document.getElementById('inName').value;
    const father = document.getElementById('inFather').value;
    const mother = document.getElementById('inMother').value;
    const dob = document.getElementById('inDOB').value;
    const id = document.getElementById('inID').value;
    const photoInput = document.getElementById('inPhoto');

    // আউটপুটে তথ্য বসানো
    document.getElementById('outName').innerText = name;
    document.getElementById('outFather').innerText = father;
    document.getElementById('outMother').innerText = mother;
    document.getElementById('outDOB').innerText = dob;
    document.getElementById('outID').innerText = id;

    // ছবি প্রসেসিং
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('outPhoto').src = e.target.result;
            document.getElementById('outPhoto').style.display = 'block';
            document.getElementById('photoText').style.display = 'none';
        }
        reader.readAsDataURL(file);
    }

    // কার্ডটি দেখানো
    document.getElementById('nid-card').classList.remove('hidden');
}
