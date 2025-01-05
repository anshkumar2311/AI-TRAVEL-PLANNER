import React, { useState, useEffect } from 'react';
import LocationSearch from '../components/ui/LocationSearch';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from '../constants/options';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';

function CreateTrip() {
    const [place, setPlace] = useState(null);
    const [formData, setFormData] = useState([]);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const OnGenerateTrip = async () => {
        if (formData?.days > 5 && !formData?.destination || !formData?.budget || !formData?.people || !formData?.days) {
            toast("Please fill all the details")
            return;
        }

        const FINAL_PROMPT = AI_PROMPT
            .replace('{destination}', formData?.destination?.label)
            .replace('{days}', formData?.days)
            .replace('{people}', formData?.people)
            .replace('{budget}', formData?.budget);

        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result?.response?.text());
    };

    return (
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
            <h1 className="animated-text font-bold text-3xl">Tell us Your Preferences🌴🏕️</h1>
            <style>
                {`
                    .animated-text {
                    background: linear-gradient(90deg, #4b0082, #8a2be2, #dda0dd);
                    background-size: 300%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: color-animation 3s infinite;
                    }

                    @keyframes color-animation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                    }
                `}
            </style>

            <p className="text-gray-500 mt-3 text-xl">
                Share your travel interests to get personalized recommendations and plans.
            </p>
            <div className="mt-20 flex flex-col gap-10">
                <div className="w-90px">
                    <h2 className="text-xl my-3 font-medium">What is destination of choice?</h2>
                    <LocationSearch
                        selectProps={{
                            onChange: (v) => {
                                setPlace(v);
                                handleInputChange("destination", v);
                            },
                        }}
                    />
                </div>

                <div>
                    <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
                    <input
                        type="number"
                        placeholder="Ex. 3"
                        onChange={(e) => handleInputChange('days', e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-purple-500 focus:outline-none hover:border-purple-700 text-gray-700"
                    />
                </div>

                <div>
                    <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {SelectBudgetOptions.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleInputChange('budget', item.title)}
                                className={`p-4 border rounded-lg hover:translate-y-[-5px] cursor-pointer hover:shadow-md hover:scale-105
                                    ${formData?.budget === item.title && 'bg-gradient-to-r from-purple-500 to-pink-500 delay-125 text-white ease-in-out'}
                                `}
                            >
                                <h2 className="text-4xl">{item.icon}</h2>
                                <h2 className="text-lg font-sans font-extrabold">{item.title}</h2>
                                <h2 className="text-sm opacity-60">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
                    <div className="grid grid-cols-4 gap-5 mt-5">
                        {SelectTravelsList.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleInputChange('people', item.title)}
                                className={`p-4 border rounded-lg hover:translate-y-[-5px] cursor-pointer hover:shadow-md hover:scale-105
                                    ${formData?.people === item.title && 'bg-gradient-to-r from-purple-500 to-pink-500 delay-125 text-white ease-in-out'}
                                `}
                            >
                                <h2 className="text-4xl">{item.icon}</h2>
                                <h2 className="text-lg font-sans font-extrabold">{item.title}</h2>
                                <h2 className="text-sm opacity-60">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 flex justify-end">
                <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:scale-105 text-white hover:text-black"
                    onClick={OnGenerateTrip}
                >
                    Generate Trip
                </Button>
            </div>
        </div>
    );
}

export default CreateTrip;
