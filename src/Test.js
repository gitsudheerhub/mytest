import React, {useState, useEffect} from 'react';
// import Select from 'react-select';
function Test(){
    useEffect(() => {
countries();
    }, []);
    
const [countrie, setCountries] = useState([]);
       const countries = async () => {
           const data = await fetch('http://13.57.235.126:5000/countries');
           const countrie = await data.json();
           setCountries(countrie.countries);
           console.log(countrie.countries);
       }      
       function handleChange(e) {
        console.log(e.target.value);
      }
      
       return (
              <div>                
                    <select onChange={handleChange}>
                    {countrie.map(country => (
                            <option value={country}> {country} </option>
                            ))}
                    </select>
              </div>
            )
}
export default Test;