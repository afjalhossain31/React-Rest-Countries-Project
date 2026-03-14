import React, { useState } from 'react';
import './Country.css';


// distructure country from props
const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country);
    // console.log(handleVisitedCountries);

    const handleVisited = () => {
        // 1st way
        // if(visited) {
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }

        // 2nd way
        // setVisited(visited ? false : true);
        
        // 3rd way
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (

        // <div className={`
        // country ${visited ? 'country-visited' : 'country-not-visited'

        // }`}>

        <div className={`country ${visited && 'country-visited'}`}>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <p>Capital: {country.capital.capital}</p>
            {/* currencies is an object, so we need to use Object.values to get the values of the object and then access the symbol property of the first currency. If there are no currencies, we will display 'N/A'. */}

            {/* <p>Currencies: {Object.values(country.currencies?.currencies || country.currencies || {})[0]?.symbol || 'N/A'}</p> */}
            {/* 
            <p>Languages: {Object.values(country.languages?.languages || country.languages || {}).join(', ')}</p> */}
            <p>Area: {country.area.area} {country.area.area > 300000 ? " Big" : "Small country"}</p>

            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>


        </div>
    );

};

export default Country;


/**
 * 1. inline css (style object)
 * 2. 
 * 
*/