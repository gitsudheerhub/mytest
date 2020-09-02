import React from 'react';

const SearchInput = ({onTextChange, value}) =>{
    return (<input onChange= {onTextChange} value={value}/>);
}

export default React.memo(SearchInput);