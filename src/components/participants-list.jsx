import React from 'react';
import Participant from "./participant"
import photo1 from "../assets/medium.gif"
import defaultph from "../assets/default.gif"
import photo3 from "../assets/photo3.png"
import photo4 from "../assets/medium.gif"


const Participants = () => {
    return (
        <div className="mt-24">
            <h1 className="text-center text-4xl font-bold mb-8">Participants
            </h1>
        <div className="home-projects__list projects__list">
        <Participant
              heading="ArtBid"
              imgDescription="Hackathon participants banner"
              names="David Mejia, Hamzat Olowu, Khaled Ahmed, ramyghoneim"
              text="Artists can independently auction off their art online and purchase art."
              buttonHref="https://devpost.com/software/artbid"
              imageSrc={photo1}
              gitHub="https://github.com/CHA0sTIG3R/Art-Auction-Frontend"
      />
        <Participant
        heading="The Peter Parkers"
        imgDescription="Hackathon participants banner"
        names="LordFarquaadtheCreator Faruqi,Tenzin Choezom, Ochanya Itodo"
        text="bridging art and technology with a love for spiderman (who may or may not be peter parker)! Allowing you to both draw and submit photos of the masked menace!"
        buttonHref="https://devpost.com/software/the-peter-parkers"
        imageSrc={defaultph}
        gitHub="https://the-peter-parkers-final.fahadfaruqi.repl.co/static/homepage.html"
      />
        <Participant
        heading="Ba-Nanos Art Generator"
        imgDescription="Hackathon participants banner"
        names="Brendan Costello, Methila Deb, Cristian Abad, Savannah Chhann"
        text="A fun way to turn your photos into works of art, with the ultimate goal of building a socially conscious database for users to create art without pulling from other artists work without crediting them"
        buttonHref="https://devpost.com/software/ba-nanos-art-generator"
        imageSrc={photo3}
        gitHub="https://github.com/BrendanCostello/Ba-Nanos/tree/main"
      />
              {/* <Participant
        heading="Ba-Nanos Art Generator"
        imgDescription="Hackathon participants banner"
        names="Brendan Costello, Methila Deb, Cristian Abad, Savannah Chhann"
        text="A fun way to turn your photos into works of art, with the ultimate goal of building a socially conscious database for users to create art without pulling from other artists work without crediting them"
        buttonHref="https://devpost.com/software/ba-nanos-art-generator"
        imageSrc={photo2}
        gitHub="https://github.com/BrendanCostello/Ba-Nanos/tree/main"
      />
        <Participant
        heading="Ba-Nanos Art Generator"
        imgDescription="Hackathon participants banner"
        names="Brendan Costello, Methila Deb, Cristian Abad, Savannah Chhann"
        text="A fun way to turn your photos into works of art, with the ultimate goal of building a socially conscious database for users to create art without pulling from other artists work without crediting them"
        buttonHref="https://devpost.com/software/ba-nanos-art-generator"
        imageSrc={photo3}
        gitHub="https://github.com/BrendanCostello/Ba-Nanos/tree/main"
      /> */}
      
      </div>
      </div>
    );
};
export default Participants;