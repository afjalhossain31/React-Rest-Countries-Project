import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
// countriesPromise ke distructure kore countriesData te rakha hocche

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log('Handle visited countries clicked', country);

        // visitedCountries state er copy newa hocche, tarpor new country add kora hocche, and then setVisitedCountries diye update kora hocche
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    } 

    const handleVisitedFlags = (flag) => {
        // console.log('Handle visited flags clicked', flag);

        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (

        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map((country, index) => <li
                        key={`${country.cca3?.cca3 || country.cca3 || country.name?.common}-${index}`}>{country.name.common}</li>)
                }
            </ol>
            
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index}
                        src={flag} />)
                }
            </div>

            <div className="countries">
                {
                    countries.map((country, index) => <Country
                        key={`${country.cca3?.cca3 || country.cca3 || country.name?.common}-${index}`}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        ></Country>)
                } 

            </div>
        </div>
    );
};

export default Countries;