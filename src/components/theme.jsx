import React from 'react';

const Theme = () => {
    return (
        <div className="flex items-center justify-center pt-0 mb-24">
            <div className="text-justify max-w-2xl">
                <h1 className="text-center text-lg font-semibold mb-4 text-blue-800">HACKATHON 2023</h1>
                <h1 className="text-center text-4xl font-extrabold mb-8">Theme: Art & Technology</h1>
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                This year, our hackathon theme is <span className="font-bold">The Arts and Tech</span>, and we're inviting fellows to form three to four person teams to take on challenges at the intersection of the arts and technology.
                </p>
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                Every summer, CUNY Tech Prep welcomes our incoming cohort of fellows with a hackathon that’s a bit different. 
                </p>
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                We’ve done away with the intimidating environment, hyper-competitive challenges and stressful all-nighters found in traditional hackathons to create an event that focuses on learning, collaboration, and fun.  
                </p>
                <p className="leading-relaxed pb-4 text-xl text-gray-700">
                Our hackathon combines professional development,  technical skill programming, and networking alongside the weeklong collaborative team hacking.
                </p>
                <p className="pt-4 text-md text-gray-700">Hackers will design and build their data visualizations or Minimum Viable Products (MVPs) from <span className="font-bold">August 21 - August 25, 2023</span>. </p>
            </div>
        </div>
    );
};

export default Theme;
