/* ============================================
   Aqours Showcase — script.js
   List-Detail pattern with photo-click toggle
   ============================================ */

/* ---- Member Data ---- */
const MEMBERS = {
  chika: {
    char: {
      name: 'Takami Chika',
      nameJp: '高海 千歌',
      initial: '千',
      image: 'assets/img/chika.png',
      fields: {
        'Year': '2nd Year',
        'Sub-unit': 'CYaRon!',
        'Birthday': 'August 1',
        'Blood Type': 'B',
        'Height': '157 cm',
        'Hobbies': 'Swimming, Sticker Collecting',
      }
    },
    seiyuu: {
      name: 'Inami Anju',
      nameJp: '伊波 杏樹',
      initial: '杏',
      image: 'assets/img/seiyuu/anchan-fix.png',
      fields: {
        'Birthday': 'February 7, 1996',
        'Birthplace': 'Kanagawa',
        'Blood Type': 'O',
        'Agency': 'Sony Music Artists',
        'Debut': '2015',
        'Nickname': 'Anchan',
      }
    }
  },
  riko: {
    char: {
      name: 'Sakurauchi Riko',
      nameJp: '桜内 梨子',
      initial: '梨',
      image: 'assets/img/riko.png',
      fields: {
        'Year': '2nd Year',
        'Sub-unit': 'Guilty Kiss',
        'Birthday': 'September 19',
        'Blood Type': 'A',
        'Height': '160 cm',
        'Hobbies': 'Piano, Composing Music',
      }
    },
    seiyuu: {
      name: 'Aida Rikako',
      nameJp: '逢田 梨香子',
      initial: '莉',
      image: 'assets/img/seiyuu/rikako-fix.png',
      fields: {
        'Birthday': 'August 8, 1992',
        'Birthplace': 'Tokyo',
        'Blood Type': 'Unknown',
        'Agency': 'Aoni Production',
        'Debut': '2014',
        'Nickname': 'Rikyako',
      }
    }
  },
  kanan: {
    char: {
      name: 'Matsuura Kanan',
      nameJp: '松浦 果南',
      initial: '果',
      image: 'assets/img/kanan.png',
      fields: {
        'Year': '3rd Year',
        'Sub-unit': 'AZALEA',
        'Birthday': 'February 10',
        'Blood Type': 'O',
        'Height': '162 cm',
        'Hobbies': 'Diving, Fishing',
      }
    },
    seiyuu: {
      name: 'Suwa Nanaka',
      nameJp: '諏訪 ななか',
      initial: '諏',
      image: 'assets/img/seiyuu/suwawa-fix.png',
      fields: {
        'Birthday': 'November 2, 1994',
        'Birthplace': 'Saitama',
        'Blood Type': 'Unknown',
        'Agency': 'Anisma',
        'Debut': '2015',
        'Nickname': 'Suwawa',
      }
    }
  },
  dia: {
    char: {
      name: 'Kurosawa Dia',
      nameJp: '黒澤 ダイヤ',
      initial: '黛',
      image: 'assets/img/dia.png',
      fields: {
        'Year': '3rd Year',
        'Sub-unit': 'AZALEA',
        'Birthday': 'January 1',
        'Blood Type': 'A',
        'Height': '162 cm',
        'Hobbies': 'Reading, Idol Research',
      }
    },
    seiyuu: {
      name: 'Komiya Arisa',
      nameJp: '小宮 有紗',
      initial: '有',
      image: 'assets/img/seiyuu/arisa-fix.png',
      fields: {
        'Birthday': 'February 5, 1994',
        'Birthplace': 'Chiba',
        'Blood Type': 'A',
        'Agency': 'Box Corporation',
        'Debut': '2012',
        'Nickname': 'Arisha',
      }
    }
  },
  you: {
    char: {
      name: 'Watanabe You',
      nameJp: '渡辺 曜',
      initial: '曜',
      image: 'assets/img/you.png',
      fields: {
        'Year': '2nd Year',
        'Sub-unit': 'CYaRon!',
        'Birthday': 'April 17',
        'Blood Type': 'AB',
        'Height': '157 cm',
        'Hobbies': 'Swimming, High Diving',
      }
    },
    seiyuu: {
      name: 'Saitō Shuka',
      nameJp: '斉藤 朱夏',
      initial: '朱',
      image: 'assets/img/seiyuu/shuka-fix.png',
      fields: {
        'Birthday': 'August 16, 1996',
        'Birthplace': 'Saitama',
        'Blood Type': 'O',
        'Agency': 'Hornets Entertainment',
        'Debut': '2015',
        'Nickname': 'Shukashū',
      }
    }
  },
  yoshiko: {
    char: {
      name: 'Tsushima Yoshiko',
      nameJp: '津島 善子',
      initial: '善',
      image: 'assets/img/yohane.png',
      fields: {
        'Year': '1st Year',
        'Sub-unit': 'Guilty Kiss',
        'Birthday': 'July 13',
        'Blood Type': 'O',
        'Height': '156 cm',
        'Hobbies': 'Little Devil Cosplay, Fortune Telling',
      }
    },
    seiyuu: {
      name: 'Kobayashi Aika',
      nameJp: '小林 愛香',
      initial: '愛',
      image: 'assets/img/seiyuu/aikyan-fix.png',
      fields: {
        'Birthday': 'October 23, 1996',
        'Birthplace': 'Kanagawa',
        'Blood Type': 'B',
        'Agency': 'Avex Pictures',
        'Debut': '2015',
        'Nickname': 'Aikyan',
      }
    }
  },
  hanamaru: {
    char: {
      name: 'Kunikida Hanamaru',
      nameJp: '国木田 花丸',
      initial: '花',
      image: 'assets/img/hanamaru.png',
      fields: {
        'Year': '1st Year',
        'Sub-unit': 'AZALEA',
        'Birthday': 'March 4',
        'Blood Type': 'O',
        'Height': '152 cm',
        'Hobbies': 'Reading, Singing',
      }
    },
    seiyuu: {
      name: 'Takatsuki Kanako',
      nameJp: '高槻 かなこ',
      initial: '佳',
      image: 'assets/img/seiyuu/kanako-fix.png',
      fields: {
        'Birthday': 'September 25, 1997',
        'Birthplace': 'Chiba',
        'Blood Type': 'A',
        'Agency': 'Amuse',
        'Debut': '2015',
        'Nickname': 'King',
      }
    }
  },
  mari: {
    char: {
      name: 'Ohara Mari',
      nameJp: '小原 鞠莉',
      initial: '鞠',
      image: 'assets/img/mari.png',
      fields: {
        'Year': '3rd Year',
        'Sub-unit': 'Guilty Kiss',
        'Birthday': 'June 13',
        'Blood Type': 'AB',
        'Height': '163 cm',
        'Hobbies': 'Singing, Horse Riding',
      }
    },
    seiyuu: {
      name: 'Suzuki Aina',
      nameJp: '鈴木 愛奈',
      initial: '愛',
      image: 'assets/img/seiyuu/ainyan-fix.png',
      fields: {
        'Birthday': 'July 23, 1995',
        'Birthplace': 'Hokkaido',
        'Blood Type': 'O',
        'Agency': 'IAM Agency',
        'Debut': '2015',
        'Nickname': 'Ainyan',
      }
    }
  },
  ruby: {
    char: {
      name: 'Kurosawa Ruby',
      nameJp: '黒澤 ルビィ',
      initial: '瑠',
      image: 'assets/img/ruby.png',
      fields: {
        'Year': '1st Year',
        'Sub-unit': 'CYaRon!',
        'Birthday': 'September 21',
        'Blood Type': 'A',
        'Height': '154 cm',
        'Hobbies': 'Idol Appreciation, Fashion',
      }
    },
    seiyuu: {
      name: 'Furihata Ai',
      nameJp: '降幡 愛',
      initial: '藍',
      image: 'assets/img/seiyuu/ai-fix.png',
      fields: {
        'Birthday': 'February 19, 1994',
        'Birthplace': 'Nagano',
        'Blood Type': 'B',
        'Agency': 'Crocodile',
        'Debut': '2015',
        'Nickname': 'Aiai',
      }
    }
  }
};


/* ---- Ordered member keys for navigation ---- */
const MEMBER_KEYS = Object.keys(MEMBERS);
let currentIndex = 0;

/* ---- DOM References ---- */
const siteHeader  = document.getElementById('header');
const viewList    = document.getElementById('view-list');
const viewDetail  = document.getElementById('view-detail');
const btnBack     = document.getElementById('btn-back');

const profileLayout = document.getElementById('profile-layout');
const profileFlip   = document.getElementById('profile-flip');

const bioChar    = document.getElementById('bio-char');
const bioSeiyuu  = document.getElementById('bio-seiyuu');

const avatarChar  = document.getElementById('avatar-char');
const charName    = document.getElementById('char-name');
const charNameJp  = document.getElementById('char-name-jp');
const charFields  = document.getElementById('char-fields');

const avatarSeiyuu = document.getElementById('avatar-seiyuu');
const seiyuuName   = document.getElementById('seiyuu-name');
const seiyuuNameJp = document.getElementById('seiyuu-name-jp');
const seiyuuFields = document.getElementById('seiyuu-fields');

const btnPrev      = document.getElementById('btn-prev');
const btnNext      = document.getElementById('btn-next');
const prevLabel    = document.getElementById('prev-label');
const nextLabel    = document.getElementById('next-label');
const navIndicator = document.getElementById('nav-indicator');

/* Track which pane is showing */
let isToggling = false;


/* ---- Helpers ---- */

/** Render a key-value object into a <dl> element */
function renderFields(container, fields) {
  container.innerHTML = '';
  for (const [key, val] of Object.entries(fields)) {
    const dt = document.createElement('dt');
    dt.textContent = key;
    const dd = document.createElement('dd');
    dd.textContent = val;
    container.appendChild(dt);
    container.appendChild(dd);
  }
}

/** Get the CSS accent color for a member key */
function getAccent(memberKey) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--' + memberKey)
    .trim();
}


function showDetail(memberKey) {
  const data = MEMBERS[memberKey];
  if (!data) return;

  const accent = getAccent(memberKey);
  document.documentElement.style.setProperty('--detail-accent', accent);

  /* Populate character pane */
  if (data.char.image) {
    avatarChar.innerHTML = '<img src="' + data.char.image + '" alt="' + data.char.name + '">';
    avatarChar.classList.add('has-image');
  } else {
    avatarChar.textContent = data.char.initial;
    avatarChar.style.background = accent;
    avatarChar.classList.remove('has-image');
  }
  charName.textContent = data.char.name;
  charNameJp.textContent = data.char.nameJp;
  renderFields(charFields, data.char.fields);

  /* Populate seiyuu pane */
  if (data.seiyuu.image) {
    avatarSeiyuu.innerHTML = '<img src="' + data.seiyuu.image + '" alt="' + data.seiyuu.name + '">';
    avatarSeiyuu.classList.add('has-image');
  } else {
    avatarSeiyuu.textContent = data.seiyuu.initial;
    avatarSeiyuu.style.background = accent;
    avatarSeiyuu.classList.remove('has-image');
  }
  seiyuuName.textContent = data.seiyuu.name;
  seiyuuNameJp.textContent = data.seiyuu.nameJp;
  renderFields(seiyuuFields, data.seiyuu.fields);

  /* Reset layout: show character by default */
  profileLayout.classList.remove('show-seiyuu');
  bioChar.className   = 'bio-content active';
  bioSeiyuu.className = 'bio-content';

  /* Track current index */
  currentIndex = MEMBER_KEYS.indexOf(memberKey);
  updateNav();

  /* Switch views */
  siteHeader.style.display = 'none';
  viewList.classList.add('hidden');
  viewDetail.classList.add('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ---- Navigation: Update Prev/Next Labels ---- */

function updateNav() {
  const total = MEMBER_KEYS.length;
  navIndicator.textContent = (currentIndex + 1) + ' / ' + total;

  /* Previous button (wraps to last) */
  const prevIdx = (currentIndex - 1 + total) % total;
  prevLabel.textContent = MEMBERS[MEMBER_KEYS[prevIdx]].char.name.split(' ').pop();

  /* Next button (wraps to first) */
  const nextIdx = (currentIndex + 1) % total;
  nextLabel.textContent = MEMBERS[MEMBER_KEYS[nextIdx]].char.name.split(' ').pop();
}


/* ---- View: Back to List ---- */

function showList() {
  viewDetail.classList.remove('visible');
  viewList.classList.remove('hidden');
  siteHeader.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ---- Toggle: Character ⇄ Seiyuu ---- */

function toggleBio(hideBio, showBio, isShowingSeiyuu) {
  if (isToggling) return;
  isToggling = true;

  /* Toggle the flip animation class on the wrapper */
  if (isShowingSeiyuu) {
    profileLayout.classList.add('show-seiyuu');
  } else {
    profileLayout.classList.remove('show-seiyuu');
  }

  /* Fade out the current bio */
  hideBio.classList.remove('active');
  hideBio.classList.add('fading-out');

  /* After fade-out animation ends, swap */
  hideBio.addEventListener('animationend', function onEnd() {
    hideBio.removeEventListener('animationend', onEnd);
    hideBio.className = 'bio-content';          /* hidden */
    showBio.className = 'bio-content active';   /* fade in */
    isToggling = false;
  }, { once: true });
}


/* ---- Event Listeners ---- */

/* Card clicks → show detail */
document.querySelectorAll('.card-wrapper').forEach(function (wrapper) {
  wrapper.addEventListener('click', function () {
    showDetail(this.dataset.member);
  });
});

/* Back button */
btnBack.addEventListener('click', showList);

/* Photo click → toggle character ⇄ seiyuu */
profileFlip.addEventListener('click', function () {
  const isCurrentlySeiyuu = profileLayout.classList.contains('show-seiyuu');
  
  if (isCurrentlySeiyuu) {
    toggleBio(bioSeiyuu, bioChar, false);
  } else {
    toggleBio(bioChar, bioSeiyuu, true);
  }
});

/* Previous / Next navigation with 3D Flip */
function navigateWithFlip(memberKey, direction) {
  // Prevent multiple clicks during animation
  if (profileLayout.classList.contains('anim-out') || profileLayout.classList.contains('anim-in')) return;

  const outClass = direction === 'next' ? 'layout-flip-out-next' : 'layout-flip-out-prev';
  const inClass = direction === 'next' ? 'layout-flip-in-next' : 'layout-flip-in-prev';
  
  profileLayout.classList.add('anim-out', outClass);
  
  // Wait half of the flip (250ms)
  setTimeout(() => {
    // Swap content while card is edge-on
    showDetail(memberKey);
    
    // Switch to incoming rotation state
    profileLayout.classList.remove('anim-out', outClass);
    profileLayout.classList.add(inClass);
    
    // Force reflow
    void profileLayout.offsetWidth;
    
    // Animate to 0 degrees
    profileLayout.classList.remove(inClass);
    profileLayout.classList.add('anim-in');
    
    // Cleanup after animation ends
    setTimeout(() => {
      profileLayout.classList.remove('anim-in');
    }, 250);
  }, 250);
}

btnPrev.addEventListener('click', function () {
  const prevIdx = (currentIndex - 1 + MEMBER_KEYS.length) % MEMBER_KEYS.length;
  navigateWithFlip(MEMBER_KEYS[prevIdx], 'prev');
});

btnNext.addEventListener('click', function () {
  const nextIdx = (currentIndex + 1) % MEMBER_KEYS.length;
  navigateWithFlip(MEMBER_KEYS[nextIdx], 'next');
});


/* ============================================
   Music Player (Local Audio)
   ============================================ */

const musicBar     = document.getElementById('music-bar');
const musicToggle  = document.getElementById('music-toggle');
const audioPlayer  = document.getElementById('audio-player');
if (audioPlayer) audioPlayer.volume = 0.25; // Default to 25% volume
const audioPlayBtn = document.getElementById('audio-play');
const progressWrap = document.getElementById('audio-progress-wrap');
const progressBar  = document.getElementById('audio-progress-bar');
const timeCurrent  = document.getElementById('audio-current');
const timeDuration = document.getElementById('audio-duration');
const trackNameEl  = document.getElementById('audio-track-name');
const trackBtns    = document.querySelectorAll('.track-btn');

/** Format seconds to m:ss */
function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

/* Toggle panel open/close */
musicToggle.addEventListener('click', function () {
  musicBar.classList.toggle('open');
});

/* Play / Pause */
audioPlayBtn.addEventListener('click', function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

audioPlayer.addEventListener('play', function () {
  audioPlayBtn.classList.add('playing');
});

audioPlayer.addEventListener('pause', function () {
  audioPlayBtn.classList.remove('playing');
});

/* Progress updates */
audioPlayer.addEventListener('timeupdate', function () {
  const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = pct + '%';
  timeCurrent.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('loadedmetadata', function () {
  timeDuration.textContent = formatTime(audioPlayer.duration);
});

/* Click to seek */
progressWrap.addEventListener('click', function (e) {
  const rect = this.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audioPlayer.currentTime = pct * audioPlayer.duration;
});

/* Track selection */
trackBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const src = this.dataset.src;
    const name = this.textContent;

    /* Update active state */
    trackBtns.forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');

    /* Switch track and play */
    audioPlayer.src = src;
    trackNameEl.textContent = name;
    audioPlayer.play();
  });
});

/* Auto-advance to next track when current ends */
audioPlayer.addEventListener('ended', function () {
  const btns = Array.from(trackBtns);
  const activeIdx = btns.findIndex(function (b) { return b.classList.contains('active'); });
  const nextIdx = (activeIdx + 1) % btns.length;
  btns[nextIdx].click();
});

/* Pause music when tab is hidden, resume when active */
let wasPlayingBeforeHidden = false;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    wasPlayingBeforeHidden = !audioPlayer.paused;
    if (wasPlayingBeforeHidden) {
      audioPlayer.pause();
    }
  } else {
    if (wasPlayingBeforeHidden) {
      audioPlayer.play().catch(function() {});
    }
  }
});




/* ============================================
   Weather Machine (Background Effect)
   ============================================ */

function initWeatherMachine() {
  const container = document.getElementById('weather-machine');
  if (!container) return;

  const logos = [
    'assets/img/Chika_Logo.webp',
    'assets/img/riko_Logo.webp',
    'assets/img/Kanan_Logo.webp',
    'assets/img/Dia_Logo.webp',
    'assets/img/You_Logo.webp',
    'assets/img/Yoshiko_Logo.webp',
    'assets/img/Hanamaru_Logo.webp',
    'assets/img/Mari_Logo.webp',
    'assets/img/Ruby_Logo.webp'
  ];

  function spawnParticle() {
    const particle = document.createElement('img');
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    
    particle.src = randomLogo;
    particle.className = 'weather-particle';
    
    // Only set width, let height scale naturally
    const size = Math.random() * 40 + 40;
    particle.style.width = size + 'px';
    
    // Random horizontal position (0% to 100%)
    const posX = Math.random() * 95;
    particle.style.left = posX + 'vw';
    
    // Random fall duration (8s to 15s)
    const duration = Math.random() * 7 + 8;
    
    // Assign fall animation
    particle.style.animation = `fall ${duration}s linear forwards`;

    // Remove element from DOM when animation ends to prevent memory leak
    particle.addEventListener('animationend', function() {
      particle.remove();
    });

    container.appendChild(particle);
  }

  // Spawn a new particle every 4.5 seconds, but only when tab is active
  let spawnInterval = setInterval(spawnParticle, 4500);

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      clearInterval(spawnInterval); // Pause spawning when tab is inactive
    } else {
      spawnInterval = setInterval(spawnParticle, 4500); // Resume when active
    }
  });

  // Initial burst of particles so the screen isn't empty when loading
  for (let i = 0; i < 4; i++) {
    // Start them with random negative animation delays so they spawn already on-screen
    setTimeout(function() {
      const particle = document.createElement('img');
      const randomLogo = logos[Math.floor(Math.random() * logos.length)];
      
      particle.src = randomLogo;
      particle.className = 'weather-particle';
      
      const size = Math.random() * 40 + 40;
      particle.style.width = size + 'px';
      
      const posX = Math.random() * 95;
      particle.style.left = posX + 'vw';
      
      const duration = Math.random() * 10 + 10;
      
      // Random negative delay pushes them forward in time (they appear midway down)
      const delay = -(Math.random() * duration);
      
      particle.style.animation = `fall ${duration}s linear forwards`;
      particle.style.animationDelay = delay + 's';

      particle.addEventListener('animationend', function() {
        particle.remove();
      });

      container.appendChild(particle);
    }, 50); // slight timeout to ensure DOM is ready
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initWeatherMachine);
