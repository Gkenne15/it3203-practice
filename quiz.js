<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Knowledge Check | Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="main-nav">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="topic1.html">The Past</a></li>
                <li><a href="topic2.html">The Present</a></li>
                <li><a href="quiz.html">Quiz</a></li>
                <li><a href="concepts.html">Concepts</a></li>
                <li><a href="resources.html">Resources</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    </header>

    <main class="card">
        <h2>Web Evolution Quiz</h2>
        <p>Test your knowledge of the transition from 90s web design to the modern era.</p>
        
        <form id="quiz-form">
            <div class="q-box">
                <p>1. In the 1990s, developers used invisible HTML _______ to create page layouts.</p>
                <input type="text" id="ans1" placeholder="Type answer here...">
            </div>

            <div class="q-box">
                <p>2. What technology caused the most design constraints in 1999?</p>
                <input type="radio" name="q2" value="dialup"> Dial-up Bandwidth<br>
                <input type="radio" name="q2" value="fiber"> High-speed Fiber<br>
                <input type="radio" name="q2" value="gpu"> Graphic Card speed
            </div>

            <div class="q-box">
                <p>3. Modern CSS layout is best achieved using:</p>
                <input type="radio" name="q3" value="flexbox"> Flexbox and Grid<br>
                <input type="radio" name="q3" value="tables"> Nested Tables<br>
                <input type="radio" name="q3" value="frames"> iFrames
            </div>

            <div class="q-box">
                <p>4. What is a key principle of modern Web UI design?</p>
                <input type="radio" name="q4" value="minimalism"> Minimalist Whitespace<br>
                <input type="radio" name="q4" value="clutter"> Maximum Text Density<br>
                <input type="radio" name="q4" value="popups"> Aggressive Pop-ups
            </div>

            <div class="q-box">
                <p>5. Select ALL characteristics of modern UI (Select two):</p>
                <input type="checkbox" name="q5" value="mobile"> Mobile-First Fluidity<br>
                <input type="checkbox" name="q5" value="desktop"> Desktop Responsiveness<br>
                <input type="checkbox" name="q5" value="blink"> Blinking Text Tags
            </div>

            <button type="button" onclick="gradeQuiz()">Submit Quiz</button>
            <button type="reset" onclick="hideResults()">Reset Quiz</button>
        </form>

        <div id="quizResults" class="result-area" style="display:none;">
            <h3 id="passFail"></h3>
            <p id="finalScore"></p>
            <div id="details"></div>
        </div>
    </main>

    <script src="quiz.js"></script>
</body>
</html>
