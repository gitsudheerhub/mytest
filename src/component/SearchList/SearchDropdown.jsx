import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { getCountriesAction } from '.../action/getCountriesAction.jsx';
import { addCountryAction } from '.../action/addCountryAction.jsx';
import SearchInput from './SearchInput.jsx';
import {filterCountries} from 'constants/helperFunctions'
import {MAX_COUNTRIES} from 'constants/index';

class SearchDropdown extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {searchText:'', 
        filteredCountries:[], 
        selectedValue:'',
        show:false, 
        showMore:false,
        addCountryStatus:''};

      this.onMenuClick = this.onMenuClick.bind(this);
      this.onDropdownClick = this.onDropdownClick.bind(this);
      this.onTextChange = this.onTextChange.bind(this);
      this.onMoreClick = this.onMoreClick.bind(this);
      this.onAddCountry = this.onAddCountry.bind(this);
    }

    onMenuClick(e){
        if(e.target.nodeName === "INPUT" || 
            e.target.className.search("dropdown--more")> -1
            ){
                
        }
        else if(e.target.nodeName === "BUTTON"){
            this.setState({show:false, addCountryStatus:''});
        }
        else{
            this.setState({
                selectedValue:e.target.innerText,
                show:false,
                addCountryStatus: '',
                searchText: ''});
        }
            
    }

    onDropdownClick(e){
        const {show} = this.state;
        this.setState({show:!show, searchText: '', addCountryStatus: ''});
    }

    onTextChange(e){
        const {countries} = this.props;
        const {value} = e.target
        if(value !== ""){
            const filteredCountries = filterCountries(countries, value)
            this.setState({filteredCountries: filteredCountries});
        }

        this.setState({searchText:value})
    }

    onMoreClick(){
        const {showMore} = this.state;
        this.setState({showMore: !showMore});
    }

    onAddCountry(){
        const {searchText} = this.state;
        const { addCountry } = this.props;
        addCountry(searchText)
        .then(({status}) => {
            this.setState({ addCountryStatus: status, show:false, selectedValue: searchText });
        }).catch((err) => console.log('an error occurred', err));
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getCountriesAction());
    }

    render() {
        const {show, 
            filteredCountries, 
            searchText, 
            showMore, 
            selectedValue, 
            addCountryStatus  } = this.state;
        const {countries, user} = this.props;
        const displayedCountries = (searchText !== '' ? filteredCountries: countries)
        
        return (
            <>
            <span>Items inside dropdown are case Sensitive</span>
            <Dropdown  show={show}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={this.onDropdownClick}>
                   {(selectedValue==='')? 'Select a country': selectedValue}
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={this.onMenuClick} >
                    {/*********** Search Input ***********/}
                    <Dropdown.Item>
                        <SearchInput onTextChange={this.onTextChange} value={searchText}/>
                    </Dropdown.Item>
                    {/************************************/}

                    {/*********** Dropdown Items ***********/}
                    {(showMore ?
                        displayedCountries
                        : displayedCountries.slice(0, MAX_COUNTRIES))
                        .map(c => <Dropdown.Item>{c}</Dropdown.Item>)}
                    {/*********** Dropdown Items ***********/}
                    
                    {/*********** More or less ***********/}
                    {(displayedCountries.length>5) &&
                    <Dropdown.Item onClick={this.onMoreClick} className='dropdown--more'>
                        {showMore ? '...less': '...more'}
                    </Dropdown.Item>}
                    {/************************************/}

                    {/*********** Add country ***********/}
                    {(searchText!=='') 
                    && (displayedCountries.length === 0) 
                    && (user ==='admin')
                    && <Dropdown.Item onClick={this.onAddCountry} className='dropdown--add'>
                        <Button variant="primary">Add & Select</Button>
                    </Dropdown.Item>}
                    {/************************************/}
                </Dropdown.Menu>
            </Dropdown>

            {addCountryStatus !=='' &&
            <div>{(addCountryStatus==='Fail')? 
            'You are adding duplicates'
            : 'adding a country is success'}</div>}

            </>
        );
    }
}
const mapStateToProps = countries => countries;
const mapDispatchToProps = (dispatch) => ({
    addCountry: (country) => {
      return new Promise((resolve, reject) => {
        dispatch(addCountryAction( country, resolve, reject ));
      });
    },
    dispatch
  });

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdown);