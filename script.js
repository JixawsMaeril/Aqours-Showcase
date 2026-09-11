/* ============================================
   Aqours Showcase — script.js
   One-page site with List-Detail member view,
   About section, and Discography catalog
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
        'Hobbies': 'Swimming, Peeling Mikans',
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
        'Blood Type': 'B',
        'Agency': 'Sony Music Artists',
        'Debut': '2013',
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
        'Hobbies': 'Piano, Painting, Reading',
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
        'Blood Type': 'O',
        'Agency': 'DMM.com / Aoni Production',
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
        'Hobbies': 'Diving, Ship Handling',
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
        'Blood Type': 'A',
        'Agency': 'Stay Luck',
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
        'Hobbies': 'Watching Movies, Reading',
      }
    },
    seiyuu: {
      name: 'Komiya Arisa',
      nameJp: '小宮 有紗',
      initial: '有',
      image: 'assets/img/seiyuu/arisa-fix.png',
      fields: {
        'Birthday': 'February 5, 1994',
        'Birthplace': 'Tochigi',
        'Blood Type': 'B',
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
        'Hobbies': 'Weight Training, Running',
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
        'Blood Type': 'A',
        'Agency': 'Holy Peak',
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
        'Hobbies': 'Little Demon Fashion, Video Games',
      }
    },
    seiyuu: {
      name: 'Kobayashi Aika',
      nameJp: '小林 愛香',
      initial: '愛',
      image: 'assets/img/seiyuu/aikyan-fix.png',
      fields: {
        'Birthday': 'October 23, 1993',
        'Birthplace': 'Kanagawa',
        'Blood Type': 'O',
        'Agency': 'Newcome Inc.',
        'Debut': '2011',
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
        'Hobbies': 'Reading, Choir',
      }
    },
    seiyuu: {
      name: 'Takatsuki Kanako',
      nameJp: '高槻 かなこ',
      initial: '佳',
      image: 'assets/img/seiyuu/kanako-fix.png',
      fields: {
        'Birthday': 'September 25, 1993',
        'Birthplace': 'Hyogo',
        'Blood Type': 'AB',
        'Agency': 'Amuse',
        'Debut': '2012',
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
        'Hobbies': 'Sports, Horse Riding',
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
        'Debut': '2014',
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
        'Hobbies': 'Needlework, Clothing',
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
        'Agency': 'Purple Inc.',
        'Debut': '2014',
        'Nickname': 'Aiai / Furirin',
      }
    }
  }
};


/* ---- Top 10 Most Popular Songs (Source: JOYSOUND Karaoke Ranking) ---- */
var TOP_SONGS = [
  {
    rank: 1, title: "Aozora Jumping Heart", year: 2016,
    single: "Aozora Jumping Heart",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    accent: "#d4a017"
  },
  {
    rank: 2, title: "WATER BLUE NEW WORLD", year: 2018,
    single: "WATER BLUE NEW WORLD / WONDERFUL STORIES",
    gradient: "linear-gradient(135deg, #a8c0cc 0%, #d7d2cc 100%)",
    accent: "#8a8a8a"
  },
  {
    rank: 3, title: "HAPPY PARTY TRAIN", year: 2017,
    single: "HAPPY PARTY TRAIN",
    gradient: "linear-gradient(135deg, #cd7f32 0%, #e8b87a 100%)",
    accent: "#b8733e"
  },
  {
    rank: 4, title: "Koi ni Naritai AQUARIUM", year: 2016,
    single: "Koi ni Naritai AQUARIUM",
    gradient: "linear-gradient(135deg, #00b4d8, #48cae4)",
    accent: "#2e86c1"
  },
  {
    rank: 5, title: "Kimi no Kokoro wa Kagayaiteru kai?", year: 2015,
    single: "Kimi no Kokoro wa Kagayaiteru kai?",
    gradient: "linear-gradient(135deg, #1a5276, #2980b9)",
    accent: "#2e86c1"
  },
  {
    rank: 6, title: "Omoi yo Hitotsu ni Nare", year: 2016,
    single: "Omoi yo Hitotsu ni Nare / MIRAI TICKET",
    gradient: "linear-gradient(135deg, #e91e63, #9c27b0)",
    accent: "#c2185b"
  },
  {
    rank: 7, title: "Yuuki wa doko ni? Kimi no Mune ni!", year: 2017,
    single: "Yuuki wa doko ni? Kimi no Mune ni!",
    gradient: "linear-gradient(135deg, #e65100, #ff9800)",
    accent: "#e65100"
  },
  {
    rank: 8, title: "Yume Kataru yori Yume Utaou", year: 2016,
    single: "Yume Kataru yori Yume Utaou",
    gradient: "linear-gradient(135deg, #8e44ad, #d2b4de)",
    accent: "#8e44ad"
  },
  {
    rank: 9, title: "Mirai no Bokura wa Shitteru yo", year: 2017,
    single: "Mirai no Bokura wa Shitteru yo",
    gradient: "linear-gradient(135deg, #1565c0, #42a5f5)",
    accent: "#1565c0"
  },
  {
    rank: 10, title: "MIRAI TICKET", year: 2016,
    single: "Omoi yo Hitotsu ni Nare / MIRAI TICKET",
    gradient: "linear-gradient(135deg, #c2185b, #ad1457)",
    accent: "#c2185b"
  }
];


/* ---- Ordered member keys for navigation ---- */
const MEMBER_KEYS = Object.keys(MEMBERS);
let currentIndex = 0;

/* ---- DOM References ---- */
const navbar         = document.getElementById('navbar');
const viewList       = document.getElementById('view-list');
const viewDetail     = document.getElementById('view-detail');
const btnBack        = document.getElementById('btn-back');
const membersSection = document.getElementById('members');

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


/* ---- Member Visual Meta (Signature Colors & Gradients) ---- */
const MEMBER_COLORS = {
  chika:    { primary: '#FF6B35', gradient: 'var(--chika-grad)', bgGradient: 'linear-gradient(145deg, #fff2e8 0%, #ffdfcc 50%, #ffd0b5 100%)', tint: 'rgba(255, 107, 53, 0.12)', border: 'rgba(255, 107, 53, 0.35)' },
  riko:     { primary: '#FF3366', gradient: 'var(--riko-grad)', bgGradient: 'linear-gradient(145deg, #fff0f3 0%, #ffdfe7 50%, #ffd0dc 100%)', tint: 'rgba(255, 51, 102, 0.12)', border: 'rgba(255, 51, 102, 0.35)' },
  kanan:    { primary: '#00C98E', gradient: 'var(--kanan-grad)', bgGradient: 'linear-gradient(145deg, #effbf6 0%, #daf6ec 50%, #c2f1de 100%)', tint: 'rgba(0, 201, 142, 0.12)', border: 'rgba(0, 201, 142, 0.35)' },
  dia:      { primary: '#D90429', gradient: 'var(--dia-grad)', bgGradient: 'linear-gradient(145deg, #fff0f2 0%, #ffdfe3 50%, #ffd0d6 100%)', tint: 'rgba(217, 4, 41, 0.12)', border: 'rgba(217, 4, 41, 0.35)' },
  you:      { primary: '#00A8E8', gradient: 'var(--you-grad)', bgGradient: 'linear-gradient(145deg, #f0f8ff 0%, #dff0fe 50%, #c8e5fd 100%)', tint: 'rgba(0, 168, 232, 0.12)', border: 'rgba(0, 168, 232, 0.35)' },
  yoshiko:  { primary: '#8338EC', gradient: 'var(--yoshiko-grad)', bgGradient: 'linear-gradient(145deg, #f7f2ff 0%, #eee4fd 50%, #e0d0fb 100%)', tint: 'rgba(131, 56, 236, 0.12)', border: 'rgba(131, 56, 236, 0.35)' },
  hanamaru: { primary: '#F5A623', gradient: 'var(--hanamaru-grad)', bgGradient: 'linear-gradient(145deg, #fffbf0 0%, #fff3d4 50%, #ffe9b5 100%)', tint: 'rgba(245, 166, 35, 0.12)', border: 'rgba(245, 166, 35, 0.35)' },
  mari:     { primary: '#B833D6', gradient: 'var(--mari-grad)', bgGradient: 'linear-gradient(145deg, #faf0fc 0%, #f4dcf9 50%, #ebc2f4 100%)', tint: 'rgba(184, 51, 214, 0.12)', border: 'rgba(184, 51, 214, 0.35)' },
  ruby:     { primary: '#FF006E', gradient: 'var(--ruby-grad)', bgGradient: 'linear-gradient(145deg, #fff0f5 0%, #ffe0ec 50%, #ffcfdf 100%)', tint: 'rgba(255, 0, 110, 0.12)', border: 'rgba(255, 0, 110, 0.35)' }
};

/* ---- Field Icon Helper ---- */
function getFieldIconSvg(key) {
  switch (key) {
    case 'Year':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
    case 'Sub-unit':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
    case 'Birthday':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
    case 'Blood Type':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>';
    case 'Height':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3a2.4 2.4 0 0 1-3.4 0L2.7 18.7a2.4 2.4 0 0 1 0-3.4L15.3 2.7a2.4 2.4 0 0 1 3.4 0l2.6 2.6a2.4 2.4 0 0 1 0 3.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/></svg>';
    case 'Hobbies':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    case 'Birthplace':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
    case 'Agency':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>';
    case 'Debut':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>';
    case 'Nickname':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>';
    default:
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';
  }
}

/** Render a key-value object into structured mini-card chips */
function renderFields(container, fields) {
  container.innerHTML = '';
  for (const [key, val] of Object.entries(fields)) {
    const chip = document.createElement('div');
    chip.className = 'profile-field-chip';

    const iconBadge = document.createElement('span');
    iconBadge.className = 'field-chip-icon';
    iconBadge.innerHTML = getFieldIconSvg(key);

    const info = document.createElement('div');
    info.className = 'field-chip-info';

    const dt = document.createElement('dt');
    dt.className = 'field-chip-label';
    dt.textContent = key;

    const dd = document.createElement('dd');
    dd.className = 'field-chip-val';
    dd.textContent = val;

    info.appendChild(dt);
    info.appendChild(dd);
    chip.appendChild(iconBadge);
    chip.appendChild(info);
    container.appendChild(chip);
  }
}

/** Get the CSS accent color for a member key */
function getAccent(memberKey) {
  const member = MEMBER_COLORS[memberKey];
  if (member) return member.primary;
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--' + memberKey)
    .trim();
}


/* ---- Detail View Logic ---- */

function showDetail(memberKey) {
  const data = MEMBERS[memberKey];
  if (!data) return;

  const colors = MEMBER_COLORS[memberKey] || {
    primary: '#2e86c1',
    gradient: 'linear-gradient(135deg, #1a5276, #2e86c1)',
    bgGradient: 'linear-gradient(145deg, #f0f8ff 0%, #e0f0fe 100%)',
    tint: 'rgba(46, 134, 193, 0.12)',
    border: 'rgba(46, 134, 193, 0.35)'
  };

  document.documentElement.style.setProperty('--detail-accent', colors.primary);
  document.documentElement.style.setProperty('--detail-accent-tint', colors.tint);
  document.documentElement.style.setProperty('--detail-accent-border', colors.border);
  document.documentElement.style.setProperty('--detail-gradient', colors.gradient);
  document.documentElement.style.setProperty('--detail-bg-gradient', colors.bgGradient);

  document.body.classList.add('in-detail-view');
  profileLayout.setAttribute('data-member', memberKey);

  /* Populate character pane */
  if (data.char.image) {
    avatarChar.innerHTML = '<img src="' + data.char.image + '" alt="' + data.char.name + '">';
    avatarChar.classList.add('has-image');
  } else {
    avatarChar.textContent = data.char.initial;
    avatarChar.style.background = colors.primary;
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
    avatarSeiyuu.style.background = colors.primary;
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
  viewList.classList.add('hidden');
  viewDetail.classList.add('visible');

  /* Hide other sections and wave dividers, keep navbar */
  document.querySelectorAll('.hero-section, .about-section, .discography-section, .site-footer, .section-wave-divider').forEach(function(el) {
    el.style.display = 'none';
  });
  const sectionContainer = membersSection.querySelector('.section-container');
  if (sectionContainer) {
    sectionContainer.style.display = 'none';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ---- Navigation: Update Prev/Next Labels ---- */

function updateNav() {
  const total = MEMBER_KEYS.length;
  navIndicator.textContent = (currentIndex + 1) + ' / ' + total;

  /* Previous button (wraps to last) */
  const prevIdx = (currentIndex - 1 + total) % total;
  const prevKey = MEMBER_KEYS[prevIdx];
  const prevMember = MEMBERS[prevKey];
  const prevColors = MEMBER_COLORS[prevKey] || { primary: '#2e86c1', tint: 'rgba(46, 134, 193, 0.12)' };
  prevLabel.textContent = prevMember.char.name.split(' ').pop();
  btnPrev.style.setProperty('--target-color', prevColors.primary);
  btnPrev.style.setProperty('--target-tint', prevColors.tint);

  /* Next button (wraps to first) */
  const nextIdx = (currentIndex + 1) % total;
  const nextKey = MEMBER_KEYS[nextIdx];
  const nextMember = MEMBERS[nextKey];
  const nextColors = MEMBER_COLORS[nextKey] || { primary: '#2e86c1', tint: 'rgba(46, 134, 193, 0.12)' };
  nextLabel.textContent = nextMember.char.name.split(' ').pop();
  btnNext.style.setProperty('--target-color', nextColors.primary);
  btnNext.style.setProperty('--target-tint', nextColors.tint);
}


/* ---- Restore All Sections & Switch back to Grid ---- */

function restoreAllSections() {
  if (viewDetail && viewDetail.classList.contains('visible')) {
    viewDetail.classList.remove('visible');
    viewList.classList.remove('hidden');
    document.body.classList.remove('in-detail-view');

    /* Restore all page sections and wave dividers */
    document.querySelectorAll('.hero-section, .about-section, .discography-section, .site-footer, .section-wave-divider').forEach(function(el) {
      el.style.display = '';
    });
    const sectionContainer = membersSection.querySelector('.section-container');
    if (sectionContainer) {
      sectionContainer.style.display = '';
    }
  }
}

function showList() {
  restoreAllSections();
  /* Smooth scroll to members section */
  membersSection.scrollIntoView({ behavior: 'smooth' });
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
if (btnBack) {
  btnBack.addEventListener('click', showList);
}

/* Photo click → toggle character ⇄ seiyuu */
if (profileFlip) {
  profileFlip.addEventListener('click', function () {
    const isCurrentlySeiyuu = profileLayout.classList.contains('show-seiyuu');
    
    if (isCurrentlySeiyuu) {
      toggleBio(bioSeiyuu, bioChar, false);
    } else {
      toggleBio(bioChar, bioSeiyuu, true);
    }
  });
}

/* Previous / Next navigation with 3D Flip */
function navigateWithFlip(memberKey, direction) {
  if (profileLayout.classList.contains('anim-out') || profileLayout.classList.contains('anim-in')) return;

  const outClass = direction === 'next' ? 'layout-flip-out-next' : 'layout-flip-out-prev';
  const inClass = direction === 'next' ? 'layout-flip-in-next' : 'layout-flip-in-prev';
  
  profileLayout.classList.add('anim-out', outClass);
  
  setTimeout(() => {
    showDetail(memberKey);
    
    profileLayout.classList.remove('anim-out', outClass);
    profileLayout.classList.add(inClass);
    
    void profileLayout.offsetWidth;
    
    profileLayout.classList.remove(inClass);
    profileLayout.classList.add('anim-in');
    
    setTimeout(() => {
      profileLayout.classList.remove('anim-in');
    }, 250);
  }, 250);
}

if (btnPrev) {
  btnPrev.addEventListener('click', function () {
    const prevIdx = (currentIndex - 1 + MEMBER_KEYS.length) % MEMBER_KEYS.length;
    navigateWithFlip(MEMBER_KEYS[prevIdx], 'prev');
  });
}

if (btnNext) {
  btnNext.addEventListener('click', function () {
    const nextIdx = (currentIndex + 1) % MEMBER_KEYS.length;
    navigateWithFlip(MEMBER_KEYS[nextIdx], 'next');
  });
}


/* ============================================
   Navbar Logic
   ============================================ */

const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  /* Close menu when clicking outside */
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

/* Navbar links click handling: restore sections if detail is open, close mobile menu */
document.querySelectorAll('.nav-link, .nav-logo, #hero-cta').forEach(function (el) {
  el.addEventListener('click', function () {
    if (hamburger && navLinks) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
    restoreAllSections();
  });
});

/* Scroll effect: solid background */
window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* Active link tracking via IntersectionObserver */
const sections = document.querySelectorAll('section[id], .hero-section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

const observerOptions = {
  rootMargin: '-40% 0px -40% 0px',
  threshold: 0
};

const sectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinksAll.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});


/* ============================================
   About Section: Sub-unit Cards (from MEMBERS data)
   ============================================ */

function buildSubunitCards() {
  const subunits = {};
  
  /* Extract sub-unit info from member data */
  for (const [key, data] of Object.entries(MEMBERS)) {
    const unit = data.char.fields['Sub-unit'];
    if (!subunits[unit]) {
      subunits[unit] = [];
    }
    subunits[unit].push(data.char.name);
  }

  const grid = document.getElementById('subunit-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const unitMeta = {
    'CYaRon!': {
      color: '#ff6b35',
      icon: '⚡',
      class: 'subunit-cyaron',
      tagline: 'Energetic & Pop',
      desc: 'Formed by Chika, You, and Ruby — delivering cheering, high-energy pop anthems full of sunshine.'
    },
    'AZALEA': {
      color: '#00c98e',
      icon: '🌸',
      class: 'subunit-azalea',
      tagline: 'Pure & Electro-Pop',
      desc: 'Formed by Kanan, Dia, and Hanamaru — known for gentle, elegant, and atmospheric electronic melodies.'
    },
    'Guilty Kiss': {
      color: '#8338ec',
      icon: '💋',
      class: 'subunit-guiltykiss',
      tagline: 'Gothic Rock & Electronic',
      desc: 'Formed by Riko, Yoshiko, and Mari — bringing hard-hitting rock vibes, deep bass, and stylish vocals.'
    }
  };

  for (const [unitName, members] of Object.entries(subunits)) {
    const meta = unitMeta[unitName] || { color: '#2e86c1', icon: '♪', class: '', tagline: 'Sub-unit', desc: '' };
    
    const card = document.createElement('div');
    card.className = 'subunit-card fade-in ' + meta.class;
    
    const header = document.createElement('div');
    header.className = 'subunit-card-top';

    const iconBadge = document.createElement('span');
    iconBadge.className = 'subunit-genre-icon';
    iconBadge.textContent = meta.icon;

    const tagEl = document.createElement('span');
    tagEl.className = 'subunit-card-tag';
    tagEl.textContent = meta.tagline;

    header.appendChild(iconBadge);
    header.appendChild(tagEl);

    const nameEl = document.createElement('h4');
    nameEl.className = 'subunit-card-name';
    nameEl.textContent = unitName;
    
    const descEl = document.createElement('p');
    descEl.className = 'subunit-card-desc';
    descEl.textContent = meta.desc;

    const membersWrap = document.createElement('div');
    membersWrap.className = 'subunit-card-members';
    
    const membersPills = document.createElement('div');
    membersPills.className = 'subunit-pills';
    members.forEach(function (m) {
      const pill = document.createElement('span');
      pill.className = 'member-pill';
      pill.textContent = m.split(' ').pop();
      membersPills.appendChild(pill);
    });
    membersWrap.appendChild(membersPills);
    
    card.appendChild(header);
    card.appendChild(nameEl);
    card.appendChild(descEl);
    card.appendChild(membersWrap);
    grid.appendChild(card);
  }
}

buildSubunitCards();


/* ============================================
   Top Songs Section: Render
   ============================================ */

function renderTopSongs() {
  var podium = document.getElementById('disco-podium');
  var leaderboard = document.getElementById('disco-leaderboard');
  if (!podium || !leaderboard) return;

  podium.innerHTML = '';
  leaderboard.innerHTML = '';

  /* 1. Render Podium Cards (Rank 1, 2, 3) */
  var top3 = TOP_SONGS.filter(function (s) { return s.rank <= 3; });
  top3.forEach(function (song) {
    var card = document.createElement('div');
    card.className = 'disco-card fade-in';
    if (song.rank === 1) card.classList.add('disco-card--podium', 'disco-card--podium-1');
    else if (song.rank === 2) card.classList.add('disco-card--podium', 'disco-card--podium-2');
    else if (song.rank === 3) card.classList.add('disco-card--podium', 'disco-card--podium-3');

    /* Cover art area with gradient + rank badge */
    var cover = document.createElement('div');
    cover.className = 'disco-cover';

    var gradientEl = document.createElement('div');
    gradientEl.className = 'disco-cover-gradient';
    gradientEl.style.background = song.gradient;

    var vinylCircle = document.createElement('div');
    vinylCircle.className = 'disco-vinyl-ring';

    /* Year label in top-left corner */
    var yearLabel = document.createElement('div');
    yearLabel.className = 'disco-jacket-header';
    yearLabel.textContent = song.year;

    /* Top 3 Podium Pill (Top Right) */
    var podiumPill = document.createElement('span');
    podiumPill.className = 'disco-podium-pill';
    if (song.rank === 1) {
      podiumPill.classList.add('disco-podium--gold');
      podiumPill.textContent = '👑 TOP 1';
    } else if (song.rank === 2) {
      podiumPill.classList.add('disco-podium--silver');
      podiumPill.textContent = '🥈 TOP 2';
    } else if (song.rank === 3) {
      podiumPill.classList.add('disco-podium--bronze');
      podiumPill.textContent = '🥉 TOP 3';
    }
    cover.appendChild(podiumPill);

    /* Rank Disc for high contrast readability */
    var rankDisc = document.createElement('div');
    rankDisc.className = 'disco-rank-disc';
    if (song.rank === 1) rankDisc.classList.add('disco-rank-disc--gold');
    else if (song.rank === 2) rankDisc.classList.add('disco-rank-disc--silver');
    else if (song.rank === 3) rankDisc.classList.add('disco-rank-disc--bronze');

    /* Rank badge (number) */
    var rankBadge = document.createElement('span');
    rankBadge.className = 'disco-rank-badge';
    if (song.rank === 1) rankBadge.classList.add('disco-rank--gold');
    else if (song.rank === 2) rankBadge.classList.add('disco-rank--silver');
    else if (song.rank === 3) rankBadge.classList.add('disco-rank--bronze');
    rankBadge.textContent = '#' + song.rank;

    rankDisc.appendChild(rankBadge);

    cover.appendChild(gradientEl);
    cover.appendChild(vinylCircle);
    cover.appendChild(yearLabel);
    cover.appendChild(rankDisc);

    /* Body: song title */
    var body = document.createElement('div');
    body.className = 'disco-card-body';

    var title = document.createElement('div');
    title.className = 'disco-card-title';
    title.textContent = song.title;

    body.appendChild(title);

    card.appendChild(cover);
    card.appendChild(body);
    podium.appendChild(card);
  });

  /* 2. Render Leaderboard List (Rank 4 to 10) */
  /* User directive: "aksen warna 4-10 dibuat sama." -> uniform accent color */
  var ranks4to10 = TOP_SONGS.filter(function (s) { return s.rank >= 4; });
  ranks4to10.forEach(function (song) {
    var row = document.createElement('div');
    row.className = 'disco-row fade-in';

    var leftCol = document.createElement('div');
    leftCol.className = 'disco-row-left';

    var rankNum = document.createElement('span');
    rankNum.className = 'disco-row-rank';
    rankNum.textContent = '#' + song.rank;

    var titleEl = document.createElement('span');
    titleEl.className = 'disco-row-title';
    titleEl.textContent = song.title;

    leftCol.appendChild(rankNum);
    leftCol.appendChild(titleEl);

    var rightCol = document.createElement('div');
    rightCol.className = 'disco-row-right';

    var yearTag = document.createElement('span');
    yearTag.className = 'disco-row-year';
    yearTag.textContent = song.year;

    rightCol.appendChild(yearTag);

    row.appendChild(leftCol);
    row.appendChild(rightCol);
    leaderboard.appendChild(row);
  });

  /* Observe dynamically rendered elements if reveal observer is active */
  if (window.__scrollRevealObserver) {
    podium.querySelectorAll('.disco-card.fade-in:not(.in-view)').forEach(function (el) {
      window.__scrollRevealObserver.observe(el);
    });
    leaderboard.querySelectorAll('.disco-row.fade-in:not(.in-view)').forEach(function (el) {
      window.__scrollRevealObserver.observe(el);
    });
  }
}

/* Initial render */
renderTopSongs();


/* ============================================
   Fade-in Scroll Reveal Animation (designrev1.md)
   ============================================ */

function initScrollReveal() {
  var revealCallback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  };

  /* Main observer — cards, headings, etc. */
  var revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  /* Lenient observer — for elements near the page bottom (footer) that
     can never satisfy a large rootMargin / threshold combination. */
  var bottomObserver = new IntersectionObserver(revealCallback, {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
  });

  window.__scrollRevealObserver = revealObserver;

  // Observe all elements with .fade-in that are not yet .in-view
  document.querySelectorAll('.fade-in:not(.in-view)').forEach(function (el) {
    // Use the lenient observer for elements inside the footer
    if (el.closest('.site-footer')) {
      bottomObserver.observe(el);
    } else {
      revealObserver.observe(el);
    }
  });
}

initScrollReveal();


/* ============================================
   Daily Like Feature (count.md)
   ============================================ */

function initDailyLike() {
  var likeBtn = document.getElementById('hero-like-btn');
  var likeText = document.getElementById('like-btn-text');
  var counterBadge = document.getElementById('like-counter-badge');
  var counterNum = document.getElementById('like-counter-number');
  var likeHint = document.getElementById('like-hint');
  var particlesContainer = document.getElementById('like-particles-container');

  if (!likeBtn || !counterNum) return;

  var API_BASE = 'https://abacus.jasoncameron.dev';
  var NAMESPACE = 'aqours-showcase';
  var KEY = 'daily-like';
  var LOCAL_KEY = 'aqours-last-liked';
  var CACHE_KEY = 'aqours-cached-likes';
  var FALLBACK_COUNT = 1258;

  // Format today's date YYYY-MM-DD
  var todayStr = new Date().toISOString().slice(0, 10);
  var hasLikedToday = localStorage.getItem(LOCAL_KEY) === todayStr;

  // Current counter state
  var currentCount = parseInt(localStorage.getItem(CACHE_KEY), 10) || FALLBACK_COUNT;

  // Set initial UI based on local storage
  if (hasLikedToday) {
    setLikedState(false);
  }

  // Display initial cached/fallback number
  counterNum.textContent = currentCount.toLocaleString('en-US');

  // Fetch latest global count from API
  fetchWithTimeout(API_BASE + '/get/' + NAMESPACE + '/' + KEY, 4000)
    .then(function (res) {
      if (!res.ok) throw new Error('Status ' + res.status);
      return res.json();
    })
    .then(function (data) {
      if (data && typeof data.value === 'number') {
        var newGlobal = data.value;
        if (newGlobal > currentCount) {
          currentCount = newGlobal;
          localStorage.setItem(CACHE_KEY, currentCount);
          counterNum.textContent = currentCount.toLocaleString('en-US');
        }
      }
    })
    .catch(function (err) {
      // Silent fail: continue with cached or fallback count
      console.warn('Daily Like API: using local cached count', err);
    });

  // Handle Like click
  likeBtn.addEventListener('click', function () {
    if (likeBtn.classList.contains('liked') || likeBtn.disabled) {
      return;
    }

    // 1. Immediately disable and mark as liked
    likeBtn.disabled = true;
    localStorage.setItem(LOCAL_KEY, todayStr);

    // 2. Spawn playful floating heart particles
    spawnHeartParticles();

    // 3. Count-up animation (+1)
    var startVal = currentCount;
    var targetVal = currentCount + 1;
    currentCount = targetVal;
    localStorage.setItem(CACHE_KEY, targetVal);

    if (counterBadge) {
      counterBadge.classList.remove('bump');
      void counterBadge.offsetWidth; // trigger reflow
      counterBadge.classList.add('bump');
    }

    animateCountUp(counterNum, startVal, targetVal, 700);

    // 4. Update button visual state
    setLikedState(true);

    // 5. Send increment (+1) to global API
    fetchWithTimeout(API_BASE + '/hit/' + NAMESPACE + '/' + KEY, 5000)
      .then(function (res) {
        if (!res.ok) throw new Error('Status ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (data && typeof data.value === 'number' && data.value > currentCount) {
          currentCount = data.value;
          localStorage.setItem(CACHE_KEY, currentCount);
          counterNum.textContent = currentCount.toLocaleString('en-US');
        }
      })
      .catch(function (err) {
        console.warn('Daily Like API hit failed, count preserved locally:', err);
      });
  });

  function setLikedState(animate) {
    likeBtn.classList.add('liked');
    likeBtn.disabled = true;
    likeBtn.setAttribute('aria-label', 'Already loved today');
    likeText.textContent = 'Already loved today! Come back tomorrow ✨';
    if (likeHint) {
      likeHint.textContent = "You've sent your love today! See you tomorrow 💖";
    }
  }

  function spawnHeartParticles() {
    if (!particlesContainer) return;
    var colors = ['#ff4b6e', '#ff7660', '#ff9e58', '#ff69b4', '#ffd166', '#00b4d8'];
    var heartCount = 10;

    for (var i = 0; i < heartCount; i++) {
      var heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.innerHTML = '❤️';

      // Random trajectories
      var angle = (Math.PI * 2 * i) / heartCount + (Math.random() - 0.5) * 0.5;
      var dist = 50 + Math.random() * 70;
      var tx = Math.cos(angle) * dist;
      var ty = Math.sin(angle) * dist - (30 + Math.random() * 40);
      var rot = (Math.random() - 0.5) * 70;
      var size = 16 + Math.floor(Math.random() * 14);

      heart.style.fontSize = size + 'px';
      heart.style.setProperty('--tx', tx + 'px');
      heart.style.setProperty('--ty', ty + 'px');
      heart.style.setProperty('--rot', rot + 'deg');

      // Random slight delay
      heart.style.animationDelay = (Math.random() * 0.1) + 's';

      particlesContainer.appendChild(heart);

      (function (el) {
        setTimeout(function () {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        }, 1300);
      })(heart);
    }
  }

  function animateCountUp(el, start, end, duration) {
    var startTime = performance.now();
    function step(currentTime) {
      var progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutCubic
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (end - start) * ease);
      el.textContent = current.toLocaleString('en-US');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = end.toLocaleString('en-US');
      }
    }
    requestAnimationFrame(step);
  }

  function fetchWithTimeout(url, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var timer = setTimeout(function () {
        reject(new Error('Request timed out'));
      }, timeoutMs);

      fetch(url)
        .then(function (res) {
          clearTimeout(timer);
          resolve(res);
        })
        .catch(function (err) {
          clearTimeout(timer);
          reject(err);
        });
    });
  }
}

initDailyLike();
