import React, { use } from 'react';
import Country from './Country';
import './countries.css'
const Countries = ({ FechCunt }) => {
  const cntry = use(FechCunt);
  const countries = cntry.countries;
  console.log(countries);

  return (
    <div>
      <h1>In the Countries total: {countries.length}</h1>
    <div className='countries'>
    {countries.map(country => (
        <Country  country={country}  />
      ))}
    </div>
    </div>
  );
};

export default Countries;