/* # DOCUMENTATION: Milestone 2 Quiz Logic with Advanced Feedback
   NAME: Gavin Kennedy
   PURPOSE: This script grades the quiz and dynamically generates 
   a 'Correction Report' showing the right answers for missed questions.
*/

function gradeQuiz() {
    // # INITIALIZATION: Reset score and clear the detail report from any previous tries.
    let score = 0;
    const reportArea = document.getElementById('detailsReport');
    reportArea.innerHTML = ""; // This clears the "Correction" list each time you click.

    // # DOM REFERENCES: Results UI elements.
    const resultsArea = document.getElementById('resultsArea');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');

    // --- QUESTION 1: TEXT INPUT (Tables) ---
    const q1Value = document.getElementById('ans1').value.toLowerCase().trim();
    if (q1Value === "tables" || q1Value === "table") {
        score++;
    } else {
        // If wrong, we append a 'Correction' to the reportArea div.
        reportArea.innerHTML += "<p style='color:#ef4444'><strong>Q1 Incorrect:</strong> The correct answer was 'Tables'.</p>";
    }

    // --- QUESTION 2: RADIO (56k) ---
    const q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value === "56k") {
        score++;
    } else {
        reportArea.innerHTML += "<p style='color:#ef4444'><strong>Q2 Incorrect:</strong> The standard dial-up speed was 56kbps.</p>";
    }

    // --- QUESTION 3: RADIO (Flexbox/Grid) ---
    const q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === "flex") {
        score++;
    } else {
        reportArea.innerHTML += "<p style='color:#ef4444'><strong>Q3 Incorrect:</strong> Modern grids use Flexbox and CSS Grid.</p>";
    }

    // --- QUESTION 4: RADIO (Mobile-First) ---
    const q4Selected = document.querySelector('input[name="q4"]:checked');
    if (q4Selected && q4Selected.value === "mobile") {
        score++;
    } else {
        reportArea.innerHTML += "<p style='color:#ef4444'><strong>Q4 Incorrect:</strong> Modern design is 'Mobile-First'.</p>";
    }

    // --- QUESTION 5: CHECKBOXES (Smartphones & Desktops) ---
    const q5Checked = document.querySelectorAll('.q5-check:checked');
    const q5Values = Array.from(q5Checked).map(cb => cb.value);
    const q5IsCorrect = q5Values.length === 2 && q5Values.includes("smartphones") && q5Values.includes("desktops");

    if (q5IsCorrect) {
        score++;
    } else {
        reportArea.innerHTML += "<p style='color:#ef4444'><strong>Q5 Incorrect:</strong> You must select both Smartphones and Desktops.</p>";
    }

    // # UI UPDATE: Finalizing the display.
    resultsArea.style.display = "block"; // Make the results container visible.
    scoreDisplay.innerText = "Final Score: " + score + " / 5";

    // # PASS/FAIL STYLING
    if (score >= 3) {
        feedbackMessage.innerText = "STATUS: PASS";
        feedbackMessage.style.color = "#10b981"; // Success Green
    } else {
        feedbackMessage.innerText = "STATUS: FAIL";
        feedbackMessage.style.color = "#ef4444"; // Error Red
    }
}

// # RESET: Function to hide the results area when form is cleared.
function resetQuiz() {
    document.getElementById('resultsArea').style.display = "none";
    document.getElementById('detailsReport').innerHTML = "";
}
