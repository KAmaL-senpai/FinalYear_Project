 <script>
        function generateRoutine() {
            const form = document.getElementById('routineForm');
            const workoutRegularly = form.workoutRegularly.value;
            const workoutDuration = parseInt(form.workoutDuration.value);
            const studyHours = parseFloat(form.studyHours.value);
            const hobbies = form.hobbies.value;
            const skincareRoutine = form.skincareRoutine.value;
            const skincareQuestion = form.skincareQuestion.value;
            const waterIntake = parseInt(form.waterIntake.value);
            const readBooks = form.readBooks.value;
            const readingDuration = parseInt(form.readingDuration.value);

            let routine = '';

            const timestamp = new Date().toLocaleString();

            if (workoutRegularly === 'Yes') {
                if (workoutDuration >= 30) {
                    routine += '1. Workout for ' + workoutDuration + ' minutes\n';
                    routine += '   Start Time: ' + timestamp + '\n';
                    const workoutTimer = document.getElementById('workoutTimer');
                    startTimer(workoutDuration * 60, workoutTimer);
                } else {
                    routine += '1. Workout for at least 30 minutes\n';
                    routine += '   Start Time: ' + timestamp + '\n';
                    const workoutTimer = document.getElementById('workoutTimer');
                    startTimer(30 * 60, workoutTimer);
                }
            }

            if (studyHours > 0) {
                routine += '2. Study for ' + studyHours + ' hours\n';
            }

            if (hobbies.trim() !== '') {
                routine += '3. Spend time on hobbies: ' + hobbies + '\n';
            }

            if (skincareRoutine === 'Yes') {
                routine += '4. Follow your skincare routine: ' + skincareQuestion + '\n';
            }

            if (!isNaN(waterIntake) && waterIntake > 0) {
                routine += '5. Drink ' + waterIntake + ' glasses of water\n';
            }

            if (readBooks === 'Yes') {
                if (readingDuration > 0) {
                    routine += '6. Read for ' + readingDuration + ' minutes\n';
                    routine += '   Start Time: ' + timestamp + '\n';
                    const readingTimer = document.getElementById('readingTimer');
                    startTimer(readingDuration * 60, readingTimer);
                } else {
                    routine += '6. Read a book\n';
                }
            }

            const generatedRoutine = document.getElementById('generatedRoutine');
            generatedRoutine.innerText = routine === '' ? 'No routine generated based on your answers.' : 'Your personalized routine:\n\n' + routine;
        }

        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        // Show/hide extra questions based on user's answers
        document.getElementById('workoutRegularly').addEventListener('change', function() {
            const workoutDurationDiv = document.getElementById('workoutDurationDiv');
            if (this.value === 'Yes') {
                workoutDurationDiv.style.display = 'block';
            } else {
                workoutDurationDiv.style.display = 'none';
            }
        });

        document.getElementById('skincareRoutine').addEventListener('change', function() {
            const skincareQuestionDiv = document.getElementById('skincareQuestionDiv');
            if (this.value === 'Yes') {
                skincareQuestionDiv.style.display = 'block';
            } else {
                skincareQuestionDiv.style.display = 'none';
            }
        });

        document.getElementById('readBooks').addEventListener('change', function() {
            const readingDurationDiv = document.getElementById('readingDurationDiv');
            if (this.value === 'Yes') {
                readingDurationDiv.style.display = 'block';
            } else {
                readingDurationDiv.style.display = 'none';
            }
        });
    </script>
