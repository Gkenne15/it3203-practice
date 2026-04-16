function calculateScore() {
    let score = 0;
    const feedback = document.getElementById('feedback-details');
    const resultsDiv = document.getElementById('results');
    feedback.innerHTML = ""; // Clear previous

    // Q1 Check (Answer: tables)
    const q1 = document.getElementById('q1').value.toLowerCase().trim();
    if(q1 === "tables") {
        score++;
        feedback.innerHTML += "<p class='correct'>Q1: Correct! (Tables)</p>";
    } else {
        feedback.innerHTML += "<p class='incorrect'>Q1: Incorrect. Answer: Tables</p>";
    }

    // Q2 Check (Answer: flexbox)
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    if(q2 === "flexbox") {
        score++;
        feedback.innerHTML += "<p class='correct'>Q2: Correct!</p>";
    } else {
        feedback.innerHTML += "<p class='incorrect'>Q2: Incorrect. Answer: Flexbox</p>";
    }

    // Q3 Check (Answer: dialup)
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    if(q3 === "dialup") {
        score++;
        feedback.innerHTML += "<p class='correct'>Q3: Correct!</p>";
    } else {
        feedback.innerHTML += "<p class='incorrect'>Q3: Incorrect. Answer: Dial-up</p>";
    }

    // Q4 Check (Answer: mobile)
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    if(q4 === "mobile") {
        score++;
        feedback.innerHTML += "<p class='correct'>Q4: Correct!</p>";
    } else {
        feedback.innerHTML += "<p class='incorrect'>Q4: Incorrect. Answer: Mobile-First</p>";
    }

    // Q5 Multi-select Check (Correct: whitespace AND responsive)
    const q5Checks = document.querySelectorAll('input[name="q5"]:checked');
    const q5Values = Array.from(q5Checks).map(cb => cb.value);
    if(q5Values.includes("whitespace") && q5Values.includes("responsive") && q5Values.length === 2) {
        score++;
        feedback.innerHTML += "<p class='correct'>Q5: Correct!</p>";
    } else {
        feedback.innerHTML += "<p class='incorrect'>Q5: Incorrect. Answer: Whitespace and Responsive</p>";
    }

    // Display Final Grade
    resultsDiv.style.display = "block";
    const pass = score >= 3 ? "PASS" : "FAIL";
    document.getElementById('grade').innerText = `Result: ${pass}`;
    document.getElementById('score-text').innerText = `Your total score is ${score} out of 5.`;
    document.getElementById('grade').style.color = score >= 3 ? "#10b981" : "#ef4444";
}

function resetQuiz() {
    document.getElementById('results').style.display = "none";
}
