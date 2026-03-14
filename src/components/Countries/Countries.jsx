import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
// countriesPromise ke distructure kore countriesData te rakha hocche

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('Handle visited countries clicked', country);
    } 

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (

        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited:</h3>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca3?.cca3 || country.name?.common}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        ></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;