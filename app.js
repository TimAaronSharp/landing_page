// Moves the skills/technology logos when toolbox button is clicked.
function skillAnimator() {
  document.getElementById('skills-toolbox').addEventListener('click', () => {
    // setTimeout(fadeInSections, 1000)
    document.getElementById('skills-section-id').classList.toggle('skills-section-grow')
    // Logos.
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

  // NOTE Without this check audioPlayer.src is flagged with an error because getElementById returns a generic HTMLElement, which doesn't have a src attribute.
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

function disappearArrows() {
  window.addEventListener('scroll', () => {
    const arrows = document.getElementById('arrows');
    const scrollThreshold = 150;
    // console.log(arrowWrapper);

    if (window.scrollY > scrollThreshold) {
      document.getElementById('left-arrow').classList.add('arrow-fade')
      document.getElementById('right-arrow').classList.add('arrow-fade')
    } else {
      document.getElementById('left-arrow').classList.remove('arrow-fade')
      document.getElementById('right-arrow').classList.remove('arrow-fade')
    }
  })
}
function getSectionRects() {
  const skillsSectionElem = document.getElementById('skills-section-link');
  const portfolioSectionElem = document.getElementById('portfolio-section-link');
  const aboutSectionElem = document.getElementById('about-section-fade-link');

  const rectObject = {
    skillsRect: skillsSectionElem.getBoundingClientRect(),
    portfolioRect: portfolioSectionElem.getBoundingClientRect(),
    aboutRect: aboutSectionElem.getBoundingClientRect(),
  }
  return rectObject;
}

// NOTE Will come back to this later and attempt to improve and implement it. It works but I need to get a way to quickly and reliably adjust for the portfolio and about section rect.top when the skills section grows after clicking the toolbox. I can get the new rect.top, but currently you have to wait at least a second for the skills section grow to finish to get the new rect.top for the lower sections, which is not guaranteed that the user will do (nor should they be expected to). I also need to figure out how to make it consistent between mobile and desktop.

// function fadeInSections() {
//   const rectObject = getSectionRects()
//   const skillsSectionElem = document.getElementById('skills-section-link');
//   const portfolioSectionElem = document.getElementById('portfolio-section-link');
//   const aboutSectionElem = document.getElementById('about-section-fade-link');

//   const skillsY = (rectObject.skillsRect.top + window.scrollY) * .1
//   const portY = (rectObject.portfolioRect.top + window.scrollY) * .6
//   const aboutY = (rectObject.aboutRect.top + window.scrollY) * .77
//   console.log('portY is ', portY);
//   console.log('aboutY is ', aboutY);

//   window.addEventListener('scroll', () => {
//     console.log('scrollY is ', window.scrollY);
//     console.log('port y pos is ', window.scrollY + rectObject.portfolioRect.top);
//     console.log('skillsY is ', skillsY);
//     console.log('portY is ', portY);
//     console.log('aboutY is ', aboutY);

//     if (window.scrollY >= skillsY) {
//       skillsSectionElem.classList.add('section-fade')
//     } else {
//       skillsSectionElem.classList.remove('section-fade')
//     }

//     if (window.scrollY >= portY) {
//       portfolioSectionElem.classList.add('section-fade')
//     } else {
//       portfolioSectionElem.classList.remove('section-fade')
//     }
//     if (window.scrollY >= aboutY) {
//       aboutSectionElem.classList.add('section-fade')
//     } else {
//       aboutSectionElem.classList.remove('section-fade')
//     }
//   })
// }
playAudio()
skillAnimator()
disappearArrows()
// fadeInSections()