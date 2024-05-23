import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import './Search.css';

export const Search = ({ setCurrentTicker }) => {
  // const [ticker, setTicker] = useState('');
  const [options, setOptions] = useState([]);

  const fetchSuggestions = async (keyword) => {
    if (keyword.length < 2) return;

    const url = `http://127.0.0.1:5507/api/search?keyword=${keyword}`;

    try {
      const response = await axios.get(url);
      // const data = response.data;
      const data = [
        {
          '1. symbol': 'TSCO.LON',
          '2. name': 'Tesco PLC',
          '3. type': 'Equity',
          '4. region': 'United Kingdom',
          '5. marketOpen': '08:00',
          '6. marketClose': '16:30',
          '7. timezone': 'UTC+01',
          '8. currency': 'GBX',
          '9. matchScore': '0.7273',
        },
        {
          '1. symbol': 'TSCDF',
          '2. name': 'Tesco plc',
          '3. type': 'Equity',
          '4. region': 'United States',
          '5. marketOpen': '09:30',
          '6. marketClose': '16:00',
          '7. timezone': 'UTC-04',
          '8. currency': 'USD',
          '9. matchScore': '0.7143',
        },
        {
          '1. symbol': 'TSCDY',
          '2. name': 'Tesco plc',
          '3. type': 'Equity',
          '4. region': 'United States',
          '5. marketOpen': '09:30',
          '6. marketClose': '16:00',
          '7. timezone': 'UTC-04',
          '8. currency': 'USD',
          '9. matchScore': '0.7143',
        },
      ];
      setOptions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <div className="search-container">
      <form>
        <button type="button" className="search-btn">
          <span className="material-symbols-outlined">search</span>
        </button>
        <Autocomplete
          freeSolo
          options={options.map(
            (option) => `${option['1. symbol']} - ${option['2. name']}`
          )}
          onInputChange={(_, newInputValue, reason) => {
            fetchSuggestions(newInputValue);
            if (reason === 'reset') {
              setCurrentTicker(newInputValue.split(' ')[0]);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                className: 'search-container__input',
                'aria-expanded': true,
              }}
              placeholder="Search stock ticker"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '25px',
                  padding: '0px',
                  '& fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiAutocomplete-inputRoot': {
                  padding: '10px',
                  fontSize: '16px',
                },
              }}
            />
          )}
        />
      </form>
    </div>
  );
};
