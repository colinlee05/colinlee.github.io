// Fun fact button
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

// Password demo button
document.getElementById('demo-btn').addEventListener('click', function() {
    var demoOutput = document.getElementById('demo-output');
    if (demoOutput.classList.contains('hidden')) {
        demoOutput.classList.remove('hidden');
        this.textContent = 'Hide Sample Output';
    } else {
        demoOutput.classList.add('hidden');
        this.textContent = 'Show Sample Output';
    }
});