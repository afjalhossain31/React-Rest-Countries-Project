import React, { use } from 'react';
// countriesPromise ke distructure kore countriesData te rakha hocche

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
        </div>
    );
};

export default Countries;