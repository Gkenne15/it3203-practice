/* # LOGIC: Function to evaluate quiz answers and update the DOM */
function gradeQuiz() {
    let score = 0;
    const details = document.getElementById('details');
    details.innerHTML = ""; // Clear old data

    // # Q1: Checking text input (Fill-in-the-blank)
    const a1 = document.getElementById('ans1').value.toLowerCase().trim();
    if(a1 === "tables") { 
        score++; 
        details.innerHTML += "<p style='color:#10b981'>1. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>1. Wrong (Answer: Tables)</p>"; 
    }

    // # Q2-4: Checking Radio selections
    const a2 = document.querySelector('input[name="q2"]:checked')?.value;
    if(a2 === "dialup") score++;

    const a3 = document.querySelector('input[name="q3"]:checked')?.value;
    if(a3 === "flexbox") score++;

    const a4 = document.querySelector('input[name="q4"]:checked')?.value;
    if(a4 === "mobile") score++;

    // # Q5: Multi-selection logic (Both must be checked)
    const q5Checks = document.querySelectorAll('input[name="q5"]:checked');
    const q5Vals = Array.from(q5Checks).map(c => c.value);
    if(q5Vals.includes("mobile") && q5Vals.includes("desktop") && q5Vals.length === 2) {
        score++;
    }

    /* # UI UPDATE: Showing pass/fail and final score */
    document.getElementById('quizResults').style.display = "block";
    document.getElementById('finalScore').innerText = "Score: " + score + "/5";
    document.getElementById('passFail').innerText = score >= 3 ? "PASS" : "FAIL";
    document.getElementById('passFail').style.color = score >= 3 ? "#10b981" : "#ef4444";
}

// # UI HELPER: Resets result visibility
function hideResults() { 
    document.getElementById('quizResults').style.display = "none"; 
}
