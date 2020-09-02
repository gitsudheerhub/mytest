import React, {useState, useEffect} from 'react';
// import Select from 'react-select';
const postsPerPage = 5; 
    const arrayForHoldingPosts = [];
    
function Countrie(){
    const intialPosts = [];
    const [postsToShow, setPostsToShow] = useState([]);
const [count, setCount] = useState(1);
    useEffect(() => {
        setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
countries();
    }, []);
    
const [countrie, setCountries] = useState([]);
const countries = async () => {
    const data = await fetch('http://13.57.235.126:5000/countries');
    const countrie = await data.json();
    setCountries(countrie.countries);
    
    intialPosts.push.apply(intialPosts,countrie.countries);
    console.log(intialPosts);
    console.log(countrie.countries);
}    
const loopThroughPosts = (count) => {
    for (
      let i = count * postsPerPage - postsPerPage;
      i < postsPerPage * count;
      i++
    ) {
        const sudheer = intialPosts; 
        console.log(sudheer);
      if (intialPosts[i] !== undefined) {
        console.log(intialPosts[i]);
        const postsToShow = countrie[i]; 
        arrayForHoldingPosts.push(countrie[i]);
      }
    }
    // console.log(arrayForHoldingPosts);
    setPostsToShow(arrayForHoldingPosts);
    
  };
         
       function handleChange(e) {
        console.log(e.target.value);
      }
      const handleShowMorePosts = () => {
        setCount((prevCount) => prevCount + 1);
        loopThroughPosts(count);
      };
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
export default Countrie;