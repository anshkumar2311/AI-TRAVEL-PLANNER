import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

const LocationSearch = () => {
    const [options, setOptions] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

    // Fetch location data from API
    const fetchLocations = async (inputValue) => {
        if (!inputValue || inputValue.length < 3) return;

        try {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${apiKey}&limit=5`
            );

            const results = response.data.results || [];
            const formattedOptions = results.map((result) => ({
                value: result.formatted,
                label: result.formatted,
                placeId: result.place_id,
            }));

            setOptions(formattedOptions);
        } catch (error) {
            console.error("Error fetching locations:", error);
        }
    };

    // Handle input change in dropdown
    const handleInputChange = (inputValue) => {
        fetchLocations(inputValue);
    };

    // Handle selection
    const handleChange = (selectedOption) => {
        console.log("Selected location:", selectedOption);
    };

    // Custom styles for react-select
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? 'purple' : provided.borderColor, // Change border color on focus
            boxShadow: state.isFocused ? '0 0 0 2px #purple' : provided.boxShadow, // Add shadow on focus
            '&:hover': {
                borderColor: 'purple', // Change border color on hover
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'gray', // Placeholder text color
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black', // Selected value text color
        }),
    };

    return (
        <div className="w-full max-w-full">
            <Select
                className="w-full"
                options={options}
                onInputChange={handleInputChange}
                onChange={handleChange}
                placeholder="Type to search..."
                noOptionsMessage={() => "No locations found"}
                isClearable
                styles={customStyles}
            />
        </div>
    );
};

export default LocationSearch;
