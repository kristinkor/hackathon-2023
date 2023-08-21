import './App.css';
import Navbar from "./components/navbar"
import CTPImg from "./components/landing-image"
import Theme from "./components/theme"
import CardGray from "./components/gray-card"
import CardWhite from "./components/white-card"
import Sponsors from "./components/sponsors"
import Footer from "./components/footer"
import painter from "./assets/painter.png"
import getInvolved from "./assets/getinvolved2.png"
import presentation from "./assets/presentation.png"


function App() {

  const bulletPoints = [
    'Social media-esque web app where users can post about art pieces with ratings and comments',
    'Proof of concept music player?',
    'Machine learning to explore human perceptions and expectations of art and creativity',
    'Data science algorithms to generate art and music',
    'Simple neural network trained on a certain art or set of images to generate stunning visual imagery',
    'E-commerce app to share and sell fine art pieces'
];

const HackathonHighlights = [
  'Networking Authentically workshop with DEI and First Gen Advocate | Career Coach, Bedillia Ramirez',
  'Info Session and Tech Resume Overview with Oscar Health’s Recruiting Manager, Campus and Early Career, Joelle Molina',
  'Intro to Forage’s Virtual Work Programs with Harrison Bass, Global Head of Educational Partnerships, Forage',
  'LinkedIn Best Practices workshop with Abdullah Haydar, Senior Engineering Leader, LinkedIn',
  'Project Mentorship from our partners, including Nextdoor, NuArch, Salesforce, and LinkedIn',
];

  return (
    <div>
      <Navbar />
      <CTPImg />
      <Theme />
      <CardGray
        heading="Theme: The Arts & Tech"
        text="Here are some project ideas:"
        bulletPoints={bulletPoints}
        buttonInfo="Join on DevPost"
        buttonHref="https://ctp-arts-tech-hackathon.devpost.com/?preview_token=MstTTyUmDrxRNEOiczOlkaI5njCCrsCqBbZCdW7v234%3D"
        imageSrc={painter}
      />
      <CardWhite
        heading="Hackathon Itinerary"
        text="Planned events students can attend during the duration of the Hackathon."
        bulletPoints={HackathonHighlights}
        imageSrc={presentation}
      />
      <CardGray
        heading="Get Involved"
        text="We need your help to make this event memorable and productive for our new cohort! Click below if you’d like to mentor our fellows, judge projects, or make a donation so that fellows can earn prizes."
        imageSrc={getInvolved}
        buttonInfo="Get Involved"
        buttonHref="/test"
/>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
