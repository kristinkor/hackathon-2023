import Linkedin from "../assets/companies/Linkedin.png";
import Nuarch from "../assets/companies/nuarch.png";
import Salesforce from "../assets/companies/salesforce.webp";

const Sponsors = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-24 mb-24">
            <div className="text-justify max-w-2xl">
                <h1 className="text-center text-4xl font-extrabold">Special Thanks to Our Sponsors:</h1>
            </div>
            <div className="flex items-center gap-x-12 mt-16 mb-16">
                <img src={Linkedin} alt="" className="h-12" />
                <img src={Nuarch} alt="" className="h-12" />
                <img src={Salesforce} alt="" className="h-12" />
            </div>
            <div className="text-justify max-w-lg">
                <p className="leading-relaxed text-xl text-gray-700">
                    Would you like to get yourself or your company involved in a future hackathon or other CUNY Tech Prep initiatives? Reach out to
                    <span className="underline"> volunteer@cunytechprep.org</span>
                </p>
            </div>
        </div>
    );
};

export default Sponsors;
