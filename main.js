const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="images/Icon-Cancel.svg" alt="cancel image"></img>
      <ul class="menu-list-item">
          <li class="about-1"><a class="menu-list-items" href="./about.html">About</a></li>
          <li class="programm"><a class="menu-list-items" href="./">Home</a></li>
          <li class="join"><a class="menu-list-items" href="#join">Join</a></li>
          <li class="sponsor"><a class="menu-list-items" href="#partners">Partners</a></li>
          <li class="news"><a class="menu-list-items" href="#speakers">Guest</a></li>
          <li class="muson-2021"><a class="menu-list-items" href="#about-muson">MUSON 2021</a></li>
      </ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';

const menuIcon = document.querySelector('.menu-toggle');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

const featuredSpeakers = [

  {
    image: './images/presenters/400-5.jfif',
    name: 'John W. Richmond',
    speakerInfo: 'Professor and Dean of the College of Music at the University of North Texas',
    description: 'Richmond served as Professor and Director of the Glenn Korff School of Music at the University of Nebraska-Lincoln and various other Universities.',
  },

  {
    image: './images/presenters/400.jfif',
    name: 'Chukwudi Mbanefo',
    speakerInfo: 'Music professional and lecturer of the University of Nigeria Nsukka',
    description: 'CEO of Potters music academy. A live perfomer and a lecturer since 1992.',
  },

  {
    image: './images/presenters/speaker-3.jpg',
    name: 'Dr. Kofi Gbolonyo',
    speakerInfo: 'Lecturer in African Music and African Studies',
    description: 'Dr. Kofi J. S. Gbolonyo was a Visiting Assistant Professor in September 2009, soon after completing his Ph.D. in Ethnomusicology with a Graduate Certificate in African Studies at the University of Pittsburgh.',
  },

  {
    image: './images/presenters/speaker-4.jfif',
    name: 'Liz Shropshire',
    speakerInfo: 'Founder of the Shropshire Music Foundation',
    description: 'brought free instruments and music classes to more than 15,000 war-impacted children in some of the world`s fiercest conflict zones including Uganda, Northern Ireland, and Kosovo.',
  },

  {
    image: './images/presenters/400-3.jfif',
    name: 'George Dor',
    speakerInfo: 'Professor of music at the University of Mississippi',
    description: 'Widely known in his home country of Ghana as a composer, performer and teacher of Ghanaian music, Dor has composed more than 60 choral pieces, a symphonic suite and five one-movement orchestral works.',
  },

  {
    image: './images/presenters/400-4.jfif',
    name: 'Dr. Ryan Hourigan',
    speakerInfo: 'Currently teaches music education and is the Associate Director of the School of Music',
    description: '2010 Indiana Music Educators Association Outstanding University Music Educator of the Year',
  },

];

const speakerProfile = document.querySelector('.fs-container');

function createSpeaker(item) {
  return `<li class="fs-frames-2">
                <div class="speaker-profile">
                <div class="image-wrapper">
                    <img class="speaker-image" src="${item.image}" alt="">
                </div>
                <div class="speaker-contents">
                    <h6 class="speaker-name fw-bold">${item.name}</h6>
                    <p class="speaker-info color-2">
                    <i>${item.speakerInfo}</i>
                    </p>
                    <div class="break-line"></div>
                    <p class="speaker-description">${item.description}</p>
                </div>
                </div>
            </li> `;
}

speakerProfile.innerHTML = featuredSpeakers.map((item) => createSpeaker(item)).join('');