import React, { useState } from 'react'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import LocationSearch from '../components/ui/LocationSearch'
import { SelectBudgetOptions } from '../constants/options';

function CreateTrip() {
    const [place, setPlace] = useState(null);
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h1 className='animated-text font-bold text-3xl'>Tell us Your Preferences</h1>
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

            <p className='text-gray-500 mt-3 text-xl'>Share your travel interests to get personalized recommendations and plans.
            </p>
            <div className='mt-20 flex flex-col gap-10'>
                <div className='w-90px'>
                    <h2 className='text-xl my-3 font-medium'>What is destination of choice ?</h2>
                    <LocationSearch
                        selectProps={{
                            place,
                            onChange: (v) => {
                                setPlace(v);
                                console.log(v)
                            }
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip ?</h2>
                    <input type="number" placeholder={'Ex. 3'} className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-purple-500 focus:outline-none hover:border-purple-700" />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What is your budget ?</h2>
                    <div>
                        {SelectBudgetOptions.map((item, index) => (
                            <div key={index}>
                                <h2>{item.icon}</h2>
                                <h2>{item.title}</h2>
                                <h2>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTrip
