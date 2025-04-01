document.getElementById('robot-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('answer').value;
    if (parseInt(answer) === 19) {
        window.location.href = 'final.html';
    } else {
        alert('Incorrect answer. Please try again.');
    }
});
