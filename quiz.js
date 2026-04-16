/* # LOGIC: Main function to calculate the score and provide feedback */
function gradeQuiz() {
    // 1. Initialize the score counter
    let score = 0;

    // 2. Identify the feedback elements in the HTML
    const resultsArea = document.getElementById('resultsArea');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');

    // 3. Check Question 1 (Text Input)
    // We use .toLowerCase() and .trim() so "TABLES ", "Tables", and "tables" are all correct.
    const q1Answer = document.getElementById('ans1').value.toLowerCase().trim();
    if (q1Answer === "tables" || q1Answer === "table") {
        score++;
    }

    // 4. Check Question 2 (Radio Buttons)
    // We use querySelector to find the 'checked' radio button in the q2 group.
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "56k") {
        score++;
    }

    // 5. Check Question 3 (Radio Buttons)
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "flex") {
        score++;
    }

    // 6. Check Question 4 (Radio Buttons)
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "mobile") {
        score++;
    }

    // 7. Check Question 5 (Checkboxes - Multiple Choice)
    // We collect all checked boxes and verify if the correct two (and ONLY those two) are picked.
    const q5Checked = document.querySelectorAll('.q5-check:checked');
    const q5Values = Array.from(q5Checked).map(cb => cb.value);
    
    if (q5Values.length === 2 && q5Values.includes("smartphones") && q5Values.includes("desktops")) {
        score++;
    }

    // 8. Display the results
    // We make the hidden div visible and update the text based on the score.
    resultsArea.style.display = "block";
    scoreDisplay.innerText = "Final Score: " + score + " / 5";

    // 9. Logic for Pass/Fail message
    if (score >= 3) {
        feedbackMessage.innerText = "Congratulations! You passed the Web Evolution check.";
        feedbackMessage.style.color = "#10b981"; // Green color for success
    } else {
        feedbackMessage.innerText = "Please review the Past and Present pages and try again.";
        feedbackMessage.style.color = "#ef4444"; // Red color for failure
    }
}

/* # HELPER: Function to clear results when the user resets the form */
function resetQuiz() {
    document.getElementById('resultsArea').style.display = "none";
}
