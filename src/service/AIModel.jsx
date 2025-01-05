import { GoogleGenerativeAI } from "@google/generative-ai";
// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/generative-ai");



const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format." },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "Okay, here's a JSON format travel plan for a couple visiting Las Vegas on a cheap budget for 3 days. It includes hotel options, a daily itinerary, and all the requested details:\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"budget\": \"Cheap\",\n    \"travelers\": \"Couple\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n       \"hotelImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/4b/1f/8d/exterior.jpg?w=700&h=500&s=1\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1446,\n        \"longitude\": -115.1676\n      },\n      \"rating\": 3.5,\n      \"description\": \"A classic Las Vegas hotel with a circus theme, affordable rooms, and free attractions. Great for budget-conscious travelers.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$50 - $90 per night\",\n      \"hotelImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/33/31/83/exterior.jpg?w=700&h=500&s=1\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0984,\n        \"longitude\": -115.1722\n      },\n       \"rating\": 3.8,\n      \"description\": \"A medieval-themed hotel with affordable accommodations, a variety of dining options, and a pool area. Good for budget and family fun.\"\n    },\n    {\n       \"hotelName\": \"Strat Hotel, Casino & Skypod\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": \"$45 - $85 per night\",\n       \"hotelImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/69/5b/7e/strat-hotel-casino-skypod.jpg?w=700&h=500&s=1\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1522,\n        \"longitude\": -115.1546\n      },\n      \"rating\": 4.0,\n      \"description\": \"Offers an iconic view from its SkyPod, this hotel provides affordable rooms, casino, and a thrill experience.\"\n    }\n\n  ],\n    \"itinerary\": {\n        \"day1\": {\n            \"theme\": \"Exploring the Strip (South)\",\n            \"bestTimeToVisit\": \"Late Afternoon and Evening\",\n            \"places\": [\n              {\n                  \"placeName\": \"Welcome to Las Vegas Sign\",\n                  \"placeDetails\": \"An iconic photo opportunity! This is a must-see on any Las Vegas trip. Get here before sunset for best light.\",\n                 \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Welcome_to_Las_Vegas_sign.JPG/800px-Welcome_to_Las_Vegas_sign.JPG\",\n                  \"geoCoordinates\": {\n                    \"latitude\": 36.0826,\n                    \"longitude\": -115.1726\n                  },\n                  \"ticketPricing\": \"Free\",\n                  \"timeToTravel\": \"Varies depending on Hotel (5-15min drive from hotel)\"\n              },\n                 {\n                    \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n                    \"placeDetails\": \"Stroll through the beautifully themed indoor gardens, a peaceful escape from the city's hustle. The display changes with the seasons.\",\n                    \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/a5/28/16/bellagio-conservatory.jpg?w=700&h=500&s=1\",\n                     \"geoCoordinates\": {\n                      \"latitude\": 36.1128,\n                      \"longitude\": -115.1751\n                     },\n                      \"ticketPricing\": \"Free\",\n                      \"timeToTravel\": \"5-10 min drive/walk from the Welcome Sign\"\n                   },\n                 {\n                    \"placeName\": \"Bellagio Fountains\",\n                    \"placeDetails\": \"Watch the magnificent fountain show, a free spectacle of water, music, and light. Check show times in advance.\",\n                   \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/00/e0/6e/bellagio-fountains-las.jpg?w=700&h=500&s=1\",\n                    \"geoCoordinates\": {\n                      \"latitude\": 36.1125,\n                       \"longitude\": -115.1742\n                    },\n                    \"ticketPricing\": \"Free\",\n                   \"timeToTravel\": \"Walking distance from the Conservatory\"\n                   },\n                   {\n                    \"placeName\": \"Explore the LINQ Promenade\",\n                    \"placeDetails\": \"Enjoy the vibrant atmosphere with outdoor shops, restaurants, and the High Roller observation wheel. \",\n                     \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d2/6e/4e/linq-promenade.jpg?w=700&h=500&s=1\",\n                     \"geoCoordinates\": {\n                      \"latitude\": 36.1165,\n                      \"longitude\": -115.1694\n                     },\n                      \"ticketPricing\": \"Free to wander (additional cost for rides)\",\n                    \"timeToTravel\": \"10 mins walk from Bellagio Fountains.\"\n                    }\n                ]\n            },\n        \"day2\": {\n            \"theme\": \"Downtown Las Vegas\",\n            \"bestTimeToVisit\": \"Afternoon and Evening\",\n            \"places\": [\n             {\n                  \"placeName\": \"Fremont Street Experience\",\n                  \"placeDetails\": \"A pedestrian mall in downtown Vegas, famous for its Viva Vision light show and street performers. Visit at night for the full experience.\",\n                 \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/51/9d/52/fremont-street-experience.jpg?w=700&h=500&s=1\",\n                 \"geoCoordinates\": {\n                    \"latitude\": 36.1707,\n                    \"longitude\": -115.1414\n                   },\n                  \"ticketPricing\": \"Free\",\n                 \"timeToTravel\": \"20-30 min drive from the Strip\"\n              },\n              {\n                \"placeName\": \"Container Park\",\n                \"placeDetails\": \"A shopping and entertainment center built from repurposed shipping containers. Unique shops, art, and activities.\",\n                  \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a7/7f/16/container-park.jpg?w=700&h=500&s=1\",\n                \"geoCoordinates\": {\n                    \"latitude\": 36.1690,\n                     \"longitude\": -115.1403\n                },\n                 \"ticketPricing\": \"Free to enter (additional cost for shops)\",\n                  \"timeToTravel\": \"Walking distance from Fremont Street\"\n              },\n               {\n                  \"placeName\": \"Golden Nugget\",\n                  \"placeDetails\": \" A famous hotel and casino downtown, with a shark tank swimming pool, and other activities to look at. Explore the interior, but don't have to spend to enjoy.\",\n                 \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/54/0c/f9/golden-nugget-hotel-casino.jpg?w=700&h=500&s=1\",\n                  \"geoCoordinates\": {\n                      \"latitude\": 36.1707,\n                      \"longitude\": -115.1435\n                  },\n                   \"ticketPricing\": \"Free to enter\",\n                  \"timeToTravel\": \"Walking distance from Fremont Street\"\n                }\n             ]\n        },\n        \"day3\": {\n            \"theme\": \"Relax and Departure\",\n              \"bestTimeToVisit\":\"Morning and Afternoon\",\n            \"places\": [\n               {\n                  \"placeName\": \"Red Rock Canyon National Conservation Area\",\n                 \"placeDetails\": \"Take a scenic drive and visit Red Rock Canyon for a quick hike, and enjoy the desert beauty. It's a refreshing change from the Strip.\",\n                  \"placeImageUrl\":\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/47/99/6d/red-rock-canyon.jpg?w=700&h=500&s=1\",\n                  \"geoCoordinates\":{\n                       \"latitude\": 36.1325,\n                      \"longitude\": -115.4165\n                    },\n                    \"ticketPricing\": \"$15 per vehicle\",\n                    \"timeToTravel\": \"25-35 min drive from the Strip\"\n                },\n             {\n                  \"placeName\": \"Shopping at the Las Vegas Premium Outlets (Optional)\",\n                  \"placeDetails\":\"If time allows, check out the Las Vegas Premium Outlets for discounted shopping before heading to the airport.\",\n                   \"placeImageUrl\":\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3c/75/4d/premium-outlets-south.jpg?w=700&h=500&s=1\",\n                  \"geoCoordinates\": {\n                    \"latitude\":36.0737,\n                    \"longitude\": -115.1741\n                  },\n                 \"ticketPricing\": \"Free to enter\",\n                  \"timeToTravel\":\"15-20 mins drive from the Red Rock Canyon (South Outlet).\"\n\n              }\n\n            ]\n        }\n    }\n}\n```\n**Additional Tips for a Cheap Trip:**\n\n*   **Walk When Possible:** The Strip is very walkable, which will save on transportation costs.\n*   **Free Attractions:** There are many free things to do in Vegas, like watching the Bellagio Fountains, exploring hotel lobbies, and walking along the Strip.\n*   **Happy Hour:** Look for happy hour deals at restaurants and bars.\n*   **Avoid Weekends:** Hotels and flights are often cheaper mid-week.\n*   **Pack Snacks:** Bringing some snacks can cut down on food expenses.\n*   **Free Wi-Fi:** Take advantage of free Wi-Fi at hotels and cafes.\n*   **Transportation:** Use public transportation (buses) instead of cabs/ride shares when possible.\n*   **Gambling:** Set a strict budget for gambling and stick to it.\n\n**Note:** Prices and information can change. It's recommended to verify details and make reservations in advance. Some image URLs may redirect to larger photos or a carousel. Please make sure the images are used in compliance with their licenses.\n" },
            ],
        },
    ],
});