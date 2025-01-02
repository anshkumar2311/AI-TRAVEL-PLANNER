import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { BackgroundBeams } from '../ui/background-beams';

function Hero() {
    return (
        <main className="relative">
            <BackgroundBeams className="absolute inset-0 -z-10" />


            <div className="flex flex-col items-center mx-56 gap-9 mt-16 relative z-10">
                <h1 className="font-extrabold text-[67px] text-center">
                    <span className="animated-text">Explore the World with Ease :</span> Your AI Travel Companion
                </h1>
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

                <p className="text-xl text-gray-500 text-center">
                    Plan your perfect trip effortlessly with our AI-powered travel planner. Get personalized recommendations, create custom itineraries, and explore destinations tailored to your preferences—all in one place.
                </p>
                <Link to="/create-trip">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:scale-105 text-white">
                        Get Started, It's Free
                    </Button>
                </Link>
            </div>
        </main>
    );
}

export default Hero;
