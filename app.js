// Moves the skills/technology logos when toolbox button is clicked.
function skillAnimator() {
  document.getElementById('skills-toolbox').addEventListener('click', () => {
    document.getElementById('html-logo').classList.toggle('html-logo-move')
    document.getElementById('css-logo').classList.toggle('css-logo-move')
    document.getElementById('bootstrap-logo').classList.toggle('bootstrap-logo-move')
    document.getElementById('javascript-logo').classList.toggle('javascript-logo-move')
    document.getElementById('vue-logo').classList.toggle('vue-logo-move')
    document.getElementById('csharp-logo').classList.toggle('csharp-logo-move')
    document.getElementById('mysql-logo').classList.toggle('mysql-logo-move')
    document.getElementById('mongodb-logo').classList.toggle('mongodb-logo-move')
    document.getElementById('nodejs-logo').classList.toggle('nodejs-logo-move')
  })
}

skillAnimator()