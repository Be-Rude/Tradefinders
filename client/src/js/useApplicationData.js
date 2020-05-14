import React from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, setState] = React.useState({
    trade: "",
    location: "",
    companies: [],
    goToSearchResults: false,
  });



  // handleTradeChange, handleLocationChange, and Search are all functions required by SearchBar.js - Brad
  const handleTradeChange = (event) => {
    const trade = event.target.name;
    if (event.target.value !== "") {
      setState({
        ...state,
        [trade]: event.target.value,
      });
    }
  };

  const handleLocationChange = (event) => {
    const location = event.target.name;
    if (event.target.value !== "") {
      setState({
        ...state,
        [location]: event.target.value,
      });
    }
  };

  const Search = () => {
    const companySearch = axios
      .get(`/api/company?trade_type=${state.trade}&location=${state.location}`);

    Promise.all([companySearch])
      .then((response) => {
        const companies = "companies";
        setState({
          ...state,
          [companies]: response[0].data.companies,
          goToSearchResults: true,
        });
      });
    
  };

  
  return { state, Search, handleLocationChange, handleTradeChange };
}