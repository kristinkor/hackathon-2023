import React from 'react';

const Cards = ({ heading, text, bulletPoints, buttonInfo, buttonHref, imageSrc }) => {
    return (
        <div className="bg-gray-100 flex justify-center items-center py-16">
            <div className="rounded-lg px-8">
                <div className="flex">
                    <div className="w-1/4 rounded-lg mx-10 overflow-hidden relative">
                        <img
                            src={imageSrc}
                            alt=""
                            className="w-full h-full object-cover inset-0"
                        />
                    </div>
                    <div className="w-2/3 ml-4">
                        <h1 className="text-4xl font-bold mb-4">{heading}</h1>
                        <p className="text-xl font-medium leading-loose text-gray-700 mb-4">{text}</p>
                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul className="text-l font-medium list-disc pl-6 pb-7">
                                {bulletPoints.map((point, index) => (
                                    <li key={index} className="text-gray-700">{point}</li>
                                ))}
                            </ul>
                        )}
                        {buttonInfo && buttonHref && (
                            <a
                                href={buttonHref}
                                className="font-bold bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-700"
                            >
                                {buttonInfo}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
