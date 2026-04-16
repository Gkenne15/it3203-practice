function gradeQuiz() {
    let score = 0;
    const details = document.getElementById('details');
    details.innerHTML = ""; 

    // Q1: Fill-in-the-blank (Correct: tables)
    const a1 = document.getElementById('ans1').value.toLowerCase().trim();
    if(a1 === "tables") { 
        score++; 
        details.innerHTML += "<p class='correct'>Q1: Correct! (Tables were used for layouts).</p>"; 
    } else { 
        details.innerHTML += "<p class='incorrect'>Q1: Incorrect. Answer: Tables</p>"; 
    }

    // Q2-Q4: Multiple Choice
    const a2 = document.querySelector('input[name="q2"]:checked')?.value;
    if(a2 === "dialup") { score++; details.innerHTML += "<p class='correct'>Q2: Correct!</p>"; }
    else { details.innerHTML += "<p class='incorrect'>Q2: Incorrect. Answer: Dial-up</p>"; }

    const a3 = document.querySelector('input[name="q3"]:checked')?.value;
    if(a3 === "flexbox") { score++; details.innerHTML += "<p class='correct'>Q3: Correct!</p>"; }
    else { details.innerHTML += "<p class='incorrect'>Q3: Incorrect. Answer: Flexbox</p>"; }

    const a4 = document.querySelector('input[name="q4"]:checked')?.value;
    if(a4 === "minimalism") { score++; details.innerHTML += "<p class='correct'>Q4: Correct!</p>"; }
    else { details.innerHTML += "<p class='incorrect'>Q4: Incorrect. Answer: Minimalism</p>"; }

    // Q5: Multi-selection (Correct: mobile AND desktop)
    const q5Checks = document.querySelectorAll('input[name="q5"]:checked');
    const q5Vals = Array.from(q5Checks).map(c => c.value);
    if(q5Vals.includes("mobile") && q5Vals.includes("desktop") && q5Vals.length === 2) {
        score++; details.innerHTML += "<p class='correct'>Q5: Correct!</p>";
    } else { details.innerHTML += "<p class='incorrect'>Q5: Incorrect. Correct: Mobile and Desktop</p>"; }

    // Final Display logic
    document.getElementById('quizResults').style.display = "block";
    document.getElementById('finalScore').innerText = `Total Score: ${score}/5`;
    const pf = document.getElementById('passFail');
    pf.innerText = score >= 3 ? "RESULT: PASS" : "RESULT: FAIL";
    pf.style.color = score >= 3 ? "#10b981" : "#ef4444";
}

function hideResults() { document.getElementById('quizResults').style.display = "none"; }
