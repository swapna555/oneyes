function submitQuiz(quizId, quizName) {
  const form = document.getElementById(quizId);
  const answers = {
    "html-quiz": { q1: "b", q2: "b", q3: "c", q4: "c", q5: "a", q6: "b", q7: "a", q8: "a" },
    "css-quiz": { q1: "b", q2: "b", q3: "b", q4: "b", q5: "b", q6: "a", q7: "a" },
    "js-quiz": { q1: "b", q2: "c", q3: "a", q4: "b", q5: "a", q6: "b", q7: "a" },
  };

  let score = 0;
  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    if (answers[quizId][key] === value) {
      score++;
    }
  }

  // Save progress to localStorage
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  progress[quizName] = score; // Use quizName here for correct saving
  localStorage.setItem('progress', JSON.stringify(progress));

  alert(`You scored ${score} out of ${Object.keys(answers[quizId]).length}!`);

  // Optionally reload the page to reflect the updated score
  window.location.reload();
}
