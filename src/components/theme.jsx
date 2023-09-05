import React from 'react';

const Theme = () => {
    return (
        <div className="flex items-center justify-center pt-0 mb-52">
            <div className="text-justify max-w-2xl">
                <h1 className="text-center text-lg font-semibold mb-4 text-purple-700">HACKATHON 2023</h1>
                <h1 className="text-center text-4xl font-extrabold mb-8">Theme: The Arts & Technology</h1>
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                This year, the hackathon revolved around the theme of <span className="font-bold">The Arts and Tech.</span> Participants were encouraged to create teams of three to four individuals to tackle challenges that bridged the gap between arts and technology. 
                 </p>
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                CUNY Tech Prep held its usual summer hackathon, but we changed things up. We decided to make it different from the typical hackathon with its high-pressure vibe, super competitive tasks, and stressful all-nighters. Instead, we focused on creating an event where people could learn, work together, and have a good time.                  </p>

                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                The hackathon mixed together opportunities for learning, improving technical skills, and making connections, all while teams worked together on projects for a week.                 </p>
                <p className="pt-4 text-xl text-purple-800 text-center font-extrabold mb-14">
                    Let's see the results of participants hard work! 
                
                </p>
                <div class="down-arrow">
                    <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Theme;
               