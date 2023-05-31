const ham = document.getElementById('ham');
const mobile = document.querySelector('.mobiles-menu');
const hide = document.querySelector('#hide');
const links = document.querySelectorAll('li');

mobile.classList.add('removed');
hide.style.display = 'none';

ham.addEventListener('click', () => {
  mobile.style.display = 'block';
  hide.style.display = 'block';
  ham.style.display = 'none';
  ham.classList.add('remove');
});

hide.addEventListener('click', () => {
  mobile.style.display = 'none';
  hide.style.display = 'none';
  ham.style.display = 'block';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    mobile.style.display = 'none';
    hide.style.display = 'none';
    ham.style.display = 'block';
  });
});

const speakersData = [
  {
    id: '01',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: 'Img/speaker_01 1 (1).svg',
  },

  {
    id: '02',
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    featuredImage: 'Img/speaker_01 1 (2).svg',
  },
  {
    id: '03',
    name: 'Kilnam Chon',
    role: 'Student service team leader',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    featuredImage: 'Img/speaker_01 1 (1).svg',
  },

  {
    id: '04',
    name: 'Julia Leda',
    role: 'President of Young Pirates of Europe',
    description: 'European integration, political democracy, and participation of youth through online as her major concern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    featuredImage: 'img/speaker_05.png',
  },

  {
    id: '05',
    name: 'Lila Tretikov',
    role: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    featuredImage: 'img/speaker_01 1 (3).svg',
  },

  {
    id: '06',
    name: 'Ryan Merkley',
    role: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source movement',
    featuredImage: 'img/speaker_06.png',
  },
];

const speakerContainer = document.querySelector('.featured-speakers');

let output = '';
speakersData.forEach((speaker) => {
  output += `
    <div class="grid">
      <img src="${speaker.featuredImage}" alt="first speaker">
      <ul>
        <li>
          <h2 id="sp1">${speaker.name}</h2>
        </li>
        <li>
          <p class="p1">${speaker.role}</p>
        </li>
        <li>
          <hr class="linejs">
        </li>
        <li>
          <p class="p2">${speaker.description}</p>
        </li>
      </ul>
    </div>  
  `;
});

speakerContainer.innerHTML = output;

const moreSpeakersContainer = document.querySelector('.featured-speakers2');
const moreBtn = document.querySelector('.more');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('active');
  moreSpeakersContainer.classList.toggle('active');
});
