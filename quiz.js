/* # DOCUMENTATION: Milestone 2 Quiz Logic
   This script handles the interactive grading of the web evolution quiz.
   It uses Vanilla JavaScript to manipulate the DOM based on user input.
*/

function gradeQuiz() {
    // # DEBUG: This sends a message to the browser console (F12) to prove the button worked.
    console.log("Grading function started...");

    // # INITIALIZATION: Start the score at 0.
    let score = 0;

    // # DOM REFERENCES: Connecting the JS to the HTML elements.
    const resultsArea = document.getElementById('resultsArea');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');

    // # QUESTION 1: Text Input (Tables)
    // .toLowerCase() ensures "TABLES" and "tables" are both marked correct.
    const q1Value = document.getElementById('ans1').value.toLowerCase().trim();
    if (q1Value === "tables" || q1Value === "table") {
        score++;
        console.log("Q1: Correct");
    }

    // # QUESTION 2: Radio Buttons (56k)
    // We check if an element is selected before trying to read its value to avoid errors.
    const q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value === "56k") {
        score++;
        console.log("Q2: Correct");
    }

    // # QUESTION 3: Radio Buttons (Flexbox/Grid)
    const q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === "flex") {
        score++;
        console.log("Q3: Correct");
    }

    // # QUESTION 4: Radio Buttons (Mobile-First)
    const q4Selected = document.querySelector('input[name="q4"]:checked');
    if (q4Selected && q4Selected.value === "mobile") {
        score++;
        console.log("Q4: Correct");
    }

    // # QUESTION 5: Checkboxes (Multi-select)
    // Milestone 2 requires checking for 2 specific correct answers.
    const q5Checked = document.querySelectorAll('.q5-check:checked');
    const q5Values = Array.from(q5Checked).map(cb => cb.value);
    if (q5Values.length === 2 && q5Values.includes("smartphones") && q5Values.includes("desktops")) {
        score++;
        console.log("Q5: Correct");
    }

    // # UI UPDATE: Showing the results to the user.
    // We change the 'display' from 'none' to 'block' to make it visible.
    if (resultsArea) {
        resultsArea.style.display = "block";
        scoreDisplay.innerText = "Final Score: " + score + " / 5";

        // # PASS/FAIL LOGIC: 60% (3/5) is the passing threshold.
        if (score >= 3) {
            feedbackMessage.innerText = "PASS: You have a solid grasp of web history!";
            feedbackMessage.style.color = "#10b981"; // Success Green
        } else {
            feedbackMessage.innerText = "FAIL: Review the 'Past' and 'Present' pages and try again.";
            feedbackMessage.style.color = "#ef4444"; // Error Red
        }
    } else {
        console.log("Error: Could not find the resultsArea ID in the HTML.");
    }
}

// # RESET: Hides the results box when the user clears the form.
function resetQuiz() {
    document.getElementById('resultsArea').style.display = "none";
}
