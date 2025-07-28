// Moves the skills/technology logos when toolbox button is clicked.
function skillAnimator() {
  document.getElementById('skills-toolbox').addEventListener('click', () => {
    document.getElementById('skills-section-id').classList.toggle('skills-section-grow')
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

function playAudio() {
  const audioPlayer = document.getElementById('audio-player')
  const playButton = document.getElementById('audio-play-button')
  const playlist = [
    'assets/audio/what_you_want.mp3',
    'assets/audio/something_need_doing.mp3',
    'assets/audio/dabu.mp3',
    'assets/audio/zug_zug.mp3',
    'assets/audio/work_work.mp3',
    'assets/audio/me_busy.mp3',
    'assets/audio/leave_me_alone.mp3',
    'assets/audio/no_time_for_play.mp3'
  ]

  let currentPlaylistIndex = 0

  // Without this check audioPlayer.src is flagged with an error because getElementById returns a generic HTMLElement, which doesn't have a src attribute.
  if (audioPlayer instanceof HTMLAudioElement) {

    playButton.addEventListener('click', () => {
      audioPlayer.src = playlist[currentPlaylistIndex]
      audioPlayer.play()

      currentPlaylistIndex++

      if (currentPlaylistIndex >= playlist.length) {
        currentPlaylistIndex = 0
      }
    })
  }
}

playAudio()
skillAnimator()