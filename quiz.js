/* # DOCUMENTATION: Milestone 3 Quiz Logic
   Handles responsive feedback and dynamic DOM manipulation.
*/

function gradeQuiz() {
    let score = 0;
    const details = document.getElementById('details');
    details.innerHTML = ""; 

    // Q1 - Text
    const a1 = document.getElementById('ans1').value.toLowerCase().trim();
    if(a1 === "tables") { 
        score++; 
        details.innerHTML += "<p style='color:#10b981'>1. Correct! (Tables)</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>1. Incorrect. Correct: Tables</p>"; 
    }

    // Q2 - Radio
    const a2 = document.querySelector('input[name="q2"]:checked')?.value;
    if(a2 === "dialup") { 
        score++; details.innerHTML += "<p style='color:#10b981'>2. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>2. Incorrect. Correct: Dial-up</p>"; 
    }

    // Q3 - Radio
    const a3 = document.querySelector('input[name="q3"]:checked')?.value;
    if(a3 === "flexbox") { 
        score++; details.innerHTML += "<p style='color:#10b981'>3. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>3. Incorrect. Correct: Flexbox</p>"; 
    }

    // Q4 - Radio
    const a4 = document.querySelector('input[name="q4"]:checked')?.value;
    if(a4 === "whitespace") { 
        score++; details.innerHTML += "<p style='color:#10b981'>4. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>4. Incorrect. Correct: Whitespace</p>"; 
    }

    // Q5 - Checkboxes
    const q5Checks = document.querySelectorAll('input[name="q5"]:checked');
    const q5Vals = Array.from(q5Checks).map(c => c.value);
    if(q5Vals.includes("mobile") && q5Vals.includes("desktop") && q5Vals.length === 2) {
        score++; details.innerHTML += "<p style='color:#10b981'>5. Correct!</p>";
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>5. Incorrect. Correct: Mobile and Desktop</p>"; 
    }

    document.getElementById('quizResults').style.display = "block";
    document.getElementById('finalScore').innerText = "Final Score: " + score + "/5";
    document.getElementById('passFail').innerText = score >= 3 ? "PASS" : "FAIL";
    document.getElementById('passFail').style.color = score >= 3 ? "#10b981" : "#ef4444";
}

function hideResults() { 
    document.getElementById('quizResults').style.display = "none"; 
}
