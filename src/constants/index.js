import web from '../images/web.svg';
import website from '../images/website.svg';
import fullStack from '../images/full-stack.svg';
import quotedInfotech from '../images/QI.png';
import hometales from '../images/hometales.png';
import klimates from '../images/klimates.svg';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'experience',
    title: 'Experience'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

export const services = [
  {
    id: 1,
    title: `Web App\nDeveloper`,
    icon: web
  },
  {
    id: 2,
    title: `Website\nDeveloper`,
    icon: website
  },
  {
    id: 3,
    title: `Full Stack\nDeveloper`,
    icon: fullStack
  }
];

export const experiences = [
  {
    title: 'Software Engineer',
    companyName: 'Quoted Infotech',
    icon: quotedInfotech,
    iconBg: '#E6DEDD',
    date: 'Oct 2021 - Dec 2022',
    points: [
      'Responsible to manage Responsive Frontend Design, Integrating API (with 3rd party APIs i.e. Google API, Social Login), Manage Redux state, I18n, etc. using Next.js, React.js, HTML, CSS, Bootstrap. Correcting the backend part as per requirements',
      'Created REST API using Service Layer Architecture and backend technologies - Node.js, Express.js, PostgreSQL, Knex.js, Redis',
      'Lead, Managed and guided freshers in their training'
    ]
  },
  {
    title: 'Sr. Software Engineer',
    companyName: 'Quoted Infotech',
    icon: quotedInfotech,
    iconBg: '#383E56',
    date: 'Jan 2023 - Present',
    points: [
      'Responsible for developing and maintaining web applications, helping internal and external technical challenges and bug fixes using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design, scalable and efficient solutions on time',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: `Home Tales`,
    icon: hometales,
    link: `https://hometales.eu/`
  },
  {
    id: 2,
    title: `Klimates Web App`,
    icon: klimates
  },
  {
    id: 3,
    title: `Klimates Landing Page`,
    icon: klimates,
    link: `https://www.klimates.earth/`
  }
];
