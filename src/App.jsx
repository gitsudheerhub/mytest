import React, {useState} from 'react';
import './App.css';
import SearchDropdown from './component/SearchList';
import UserInput from './component/Input';

const App = () => {
  const [user, setUser] = useState('');
  const onChange = (e) => { 
    setUser(e.target.value)
  };
  return (
    <div className="App">
      <UserInput onChange={onChange}/>
      {user !=='' && <SearchDropdown user={user}/>}
    </div>
  );
}

export default App;
