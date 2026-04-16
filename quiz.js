/* # DOCUMENTATION: Milestone 2 Quiz Logic
   NAME: Gavin Kennedy
   PURPOSE: This script evaluates user inputs from the quiz.html form, 
   calculates a score, and provides specific feedback for both correct 
   and incorrect answers directly in the DOM.
*/

function gradeQuiz() {
    // # INITIALIZATION: Setting the score to zero and clearing previous feedback results.
    let score = 0;
    const details = document.getElementById('details');
    details.innerHTML = ""; 

    /* # QUESTION 1: Text Input Validation (Fill-in-the-blank)
       Logic: Normalize the string by converting to lowercase and removing spaces (trim).
       Feedback: Appends a specific success or correction message to the details area.
    */
    const a1 = document.getElementById('ans1').value.toLowerCase().trim();
    if(a1 === "tables") { 
        score++; 
        details.innerHTML += "<p style='color:#10b981'>1. Correct! (Tables)</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>1. Incorrect. Correct answer: Tables</p>"; 
    }

    /* # QUESTION 2: Radio Button Selection (Multiple Choice)
       Logic: Uses Optional Chaining (?.) to check if a selection exists before reading the value.
    */
    const a2 = document.querySelector('input[name="q2"]:checked')?.value;
    if(a2 === "dialup") { 
        score++; 
        details.innerHTML += "<p style='color:#10b981'>2. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>2. Incorrect. Correct: Dial-up</p>"; 
    }

    /* # QUESTION 3: Radio Button Selection (Technical standards)
    */
    const a3 = document.querySelector('input[name="q3"]:checked')?.value;
    if(a3 === "flexbox") { 
        score++; 
        details.innerHTML += "<p style='color:#10b981'>3. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>3. Incorrect. Correct: Flexbox</p>"; 
    }

    /* # QUESTION 4: Radio Button Selection (Design principles)
    */
    const a4 = document.querySelector('input[name="q4"]:checked')?.value;
    if(a4 === "whitespace") { 
        score++; 
        details.innerHTML += "<p style='color:#10b981'>4. Correct!</p>"; 
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>4. Incorrect. Correct: Whitespace</p>"; 
    }

    /* # QUESTION 5: Checkbox Validation (Multi-selection)
       Logic: Converts a NodeList of checked boxes into an Array to verify exactly 
       two specific values are present.
    */
    const q5Checks = document.querySelectorAll('input[name="q5"]:checked');
    const q5Vals = Array.from(q5Checks).map(c => c.value);
    if(q5Vals.includes("mobile") && q5Vals.includes("desktop") && q5Vals.length === 2) {
        score++; 
        details.innerHTML += "<p style='color:#10b981'>5. Correct!</p>";
    } else { 
        details.innerHTML += "<p style='color:#ef4444'>5. Incorrect. Correct: Mobile and Desktop</p>"; 
    }

    /* # UI UPDATE: Displaying final results.
       Logic: Reveals the hidden results box and updates text/colors based on score.
       A score of 3 or higher results in a 'PASS' status.
    */
    document.getElementById('quizResults').style.display = "block";
    document.getElementById('finalScore').innerText = "Score: " + score + "/5";
    document.getElementById('passFail').innerText = score >= 3 ? "PASS" : "FAIL";
    document.getElementById('passFail').style.color = score >= 3 ? "#10b981" : "#ef4444";
}

/* # UTILITY: Reset function
   Logic: Sets the display property to 'none' to hide the results container.
*/
function hideResults() { 
    document.getElementById('quizResults').style.display = "none"; 
}
