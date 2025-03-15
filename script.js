document.getElementById('fun-fact-btn').addEventListener('click', function() {
    var funFact = document.getElementById('fun-fact');
    if (funFact.classList.contains('hidden')) {
        funFact.classList.remove('hidden');
        this.textContent = 'Hide Fun Fact';
    } else {
        funFact.classList.add('hidden');
        this.textContent = 'Show Fun Fact';
    }
});