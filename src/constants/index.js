import web from '../images/web.svg';
import website from '../images/website.svg';
import fullStack from '../images/full-stack.svg';
import quotedInfotech from '../images/QI.png';
import hometales from '../images/hometales.png';
import klimates from '../images/klimates.svg';

import klimatesLandingHome from '../images/klimates-landing/home.png';
import klimatesLandingProjects from '../images/klimates-landing/projects.png';
import klimatesLandingBusiness from '../images/klimates-landing/business.png';
import klimatesLandingIndividual from '../images/klimates-landing/individuals.png';

import klimatesAppUserSignIn from '../images/klimates-app/klimates-sign-in.png';
import klimatesAppUserSignUp from '../images/klimates-app/klimates-sign-up.png';
import klimatesAppUserDashboard from '../images/klimates-app/user-dashboard.png';
import klimatesAppUserSubscribe from '../images/klimates-app/user-subscribe.png';
import klimatesAppUserBuyOneTime from '../images/klimates-app/user-buy-one-time.png';
import klimatesAppUserProjects from '../images/klimates-app/user-projects.png';
import klimatesAppUserProjectDetails from '../images/klimates-app/user-project-details.png';
import klimatesAppUserGiftImpact from '../images/klimates-app/user-gift-impact.png';
import klimatesAppUserGiftRedeem from '../images/klimates-app/user-gift-redeem.png';
import klimatesAppBusinessDashboard from '../images/klimates-app/business-dashboard.png';
import klimatesAppBusinessCampaign from '../images/klimates-app/business-campaign.png';
import klimatesAppBusinessCampaignDetails from '../images/klimates-app/business-campaign-details.png';
import klimatesAppBusinessCampaignCreate from '../images/klimates-app/business-create-campaign.png';
import klimatesAppBusinessProfileSettings from '../images/klimates-app/business-profile-settings.png';

import hometalesHome from '../images/hometales/hometales-home.png';
import hometalesHomeNl from '../images/hometales/hometales-home-nl.png';
import hometalesProfessionals from '../images/hometales/hometales-professionals.png';
import tales from '../images/hometales/tales.png';
import talesNl from '../images/hometales/tales-nl.png';
import search from '../images/hometales/search.png';
import searchList from '../images/hometales/search-list.png';
import searchFilter from '../images/hometales/search-filter.png';
import messages from '../images/hometales/messages.png';
import connections from '../images/hometales/connections.png';
import homeprofileDetails from '../images/hometales/homeprofile-details.png';
import favoriteHomes from '../images/hometales/favorite-homes.png';
import notifications from '../images/hometales/notifications.png';
import hometalesBlogDetails from '../images/hometales/hometales-blog-details.png';

import linkedInIcon from '../images/icons/linkedin.png';
import githubIcon from '../images/icons/github.png';
import githubBlackIcon from '../images/icons/github-black.png';
import instagramIcon from '../images/icons/instagram.png';

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
    link: `https://hometales.eu/`,
    images: [
      { src: hometalesHome },
      { src: hometalesHomeNl },
      { src: hometalesProfessionals },
      { src: tales },
      { src: talesNl },
      { src: search },
      { src: searchList },
      { src: searchFilter },
      { src: messages },
      { src: connections },
      { src: homeprofileDetails },
      { src: favoriteHomes },
      { src: notifications },
      { src: hometalesBlogDetails }
    ]
  },
  {
    id: 2,
    title: `Klimates Web App`,
    icon: klimates,
    images: [
      { src: klimatesAppUserSignIn },
      { src: klimatesAppUserSignUp },
      { src: klimatesAppUserDashboard },
      { src: klimatesAppUserSubscribe },
      { src: klimatesAppUserBuyOneTime },
      { src: klimatesAppUserProjects },
      { src: klimatesAppUserProjectDetails },
      { src: klimatesAppUserGiftImpact },
      { src: klimatesAppUserGiftRedeem },
      { src: klimatesAppBusinessDashboard },
      { src: klimatesAppBusinessCampaign },
      { src: klimatesAppBusinessCampaignDetails },
      { src: klimatesAppBusinessCampaignCreate },
      { src: klimatesAppBusinessProfileSettings }
    ]
  },
  {
    id: 3,
    title: `Klimates Landing Page`,
    icon: klimates,
    link: `https://www.klimates.earth/`,
    images: [
      { src: klimatesLandingHome },
      { src: klimatesLandingProjects },
      { src: klimatesLandingBusiness },
      { src: klimatesLandingIndividual }
    ]
  }
];

export const socialLinks = [
  {
    id: 'linkedin',
    icon: linkedInIcon,
    link: `https://www.linkedin.com/in/sukhdev-kanjariya`,
  },
  {
    id: 'github',
    icon: githubBlackIcon,
    darkThemeIcon: githubIcon,
    link: `https://github.com/skthewish`,
  },
  {
    id: 'instagram',
    icon: instagramIcon,
    link: `https://instagram.com/iamsk_.04?igshid=MzMyNGUyNmU2YQ==`,
  },
];
