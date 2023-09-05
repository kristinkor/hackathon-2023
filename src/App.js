import './App.css';
import Navbar from "./components/navbar"
import CTPImg from "./components/landing-image"
import Theme from "./components/theme"
import CardGray from "./components/gray-card"
import CardWhite from "./components/white-card"
import Sponsors from "./components/sponsors"
import Winner from "./components/winner"
import Footer from "./components/footer"
import painter from "./assets/painter.png"
import getInvolved from "./assets/getinvolved2.png"
import presentation from "./assets/presentation.png"
import winner1 from "./assets/gallery.jpg"
import winner2 from "./assets/winner2.jpg"
import winner3 from "./assets/winner3.png"
import Participants from './components/participants-list';



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
    <div className="body">
      <Navbar />
      <CTPImg />
      <Theme />
      <Winner
              heading="Ba-Nanos Art Generator"
              imgDescription="Hackathon participants banner"
              names="Brendan Costello, Methila Deb, Cristian Abad, Savannah Chhann"
              text="A fun way to turn your photos into works of art, with the ultimate goal of building a socially conscious database for users to create art without pulling from other artists work without crediting them"
              buttonHref="https://devpost.com/software/ba-nanos-art-generator"
              imageSrc={winner1}
              gitHub="https://github.com/BrendanCostello/Ba-Nanos/tree/main"
      />
      <Winner
        heading="ArtiFusion"
        imgDescription="Hackathon participants banner"
        names="Tasneem Hasanat, Yuyou Liu"
        text="Unlocking the Power of AI: An Advanced Full-Stack Platform for Conversation, Image, and Music Generation"
        buttonHref="https://devpost.com/software/artifusion-y9d5h3"
        imageSrc={winner2}
        gitHub="https://github.com/Y2JT"
      />
      <Winner
        heading="Music Genre Classification"
        imgDescription="Hackathon participants banner"
        names="Mohammad Bhuiyan, Aviv Cohen, Panagiotis 'Peter' Kokolis"
        text="Have you ever wondered exactly what genre of music you're listening to? We have a solution for you, simply give us the song and our neural network will tell you!"
        buttonHref="https://devpost.com/software/ba-nanos-art-generator"
        imageSrc={winner3}
        gitHub="https://github.com/BrendanCostello/Ba-Nanos/tree/main"
      />
      <Participants

      />
      {/* <CardGray
        heading="Theme: The Arts & Tech"
        text="Here are some project ideas:"
        bulletPoints={bulletPoints}
        buttonInfo="Join on DevPost"
        buttonHref="https://ctp-arts-tech-hackathon.devpost.com/?preview_token=MstTTyUmDrxRNEOiczOlkaI5njCCrsCqBbZCdW7v234%3D"
        imageSrc={painter}
      /> */}
      <CardGray
        heading="Hackathon Itinerary"
        text="Planned events students attended during the duration of the Hackathon."
        bulletPoints={HackathonHighlights}
        imageSrc={presentation}
      />
      <CardWhite
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
