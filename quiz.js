/* # DOCUMENTATION: Milestone 2 Quiz Logic
   NAME: Gavin Kennedy
   PURPOSE: This script validates user input from the quiz.html form, 
   calculates a score, and updates the Document Object Model (DOM) 
   to show a pass/fail message without reloading the page.
*/

function gradeQuiz() {
    // # INITIALIZATION: Setting the starting score to zero.
    let score = 0;

    // # DOM REFERENCES: Grabbing the elements where we will display results.
    // We use 'const' because these references to the HTML tags won't change.
    const resultsArea = document.getElementById('resultsArea');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');

    /* # QUESTION 1: Text Input Validation 
       Logic: Get the value, make it lowercase, and remove extra spaces (trim).
       Why: This makes the quiz "smart" enough to accept "Tables" or "tables".
    */
    const q1Input = document.getElementById('ans1');
    if (q1Input) {
        const q1Answer = q1Input.value.toLowerCase().trim();
        if (q1Answer === "tables" || q1Answer === "table") {
            score++;
        }
    }

    /* # QUESTION 2: Radio Button Validation (Dial-up speed)
       Logic: We look for the 'checked' button in the 'q2' group.
    */
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "56k") {
        score++;
    }

    /* # QUESTION 3: Radio Button Validation (Modern CSS)
       Logic: Standard multiple choice check.
    */
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "flex") {
        score++;
    }

    /* # QUESTION 4: Radio Button Validation (Design Approach)
    */
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "mobile") {
        score++;
    }

    /* # QUESTION 5: Checkbox Validation (Multiple Choice)
       Logic: We convert the NodeList of checked boxes into an array of values.
       Why: Milestone 2 requires checking for TWO correct answers.
    */
    const q5Checked = document.querySelectorAll('.q5-check:checked');
    const q5Values = Array.from(q5Checked).map(cb => cb.value);
    
    // The user gets a point only if they picked exactly 2 items AND they are the correct ones.
    if (q5Values.length === 2 && q5Values.includes("smartphones") && q5Values.includes("desktops")) {
        score++;
    }

    /* # UI UPDATE: Displaying the Results
       Logic: Change the CSS 'display' property from 'none' to 'block'.
    */
    if (resultsArea) {
        resultsArea.style.display = "block";
        scoreDisplay.innerText = "Your Final Score: " + score + " / 5";

        // # CONDITIONAL FEEDBACK: Providing Pass/Fail styling.
        if (score >= 3) {
            feedbackMessage.innerText = "STATUS: PASS - Great job understanding web evolution!";
            feedbackMessage.style.color = "#10b981"; // Success Green
        } else {
            feedbackMessage.innerText = "STATUS: FAIL - Please review the research pages and try again.";
            feedbackMessage.style.color = "#ef4444"; // Error Red
        }
    }
}

/* # HELPER FUNCTION: Clears the results UI when the user hits 'Reset' */
function resetQuiz() {
    const resultsArea = document.getElementById('resultsArea');
    if (resultsArea) {
        resultsArea.style.display = "none";
    }
}
