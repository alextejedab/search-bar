import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults'

function App() {

  const url = "https://api.bing.microsoft.com/v7.0/search?q="
  const [results, setResults] = useState([]);
  useEffect(() => {

  }, [results]);
  const handleOnClick = async (searchText) => {

      try {
          const resp = await axios(url + searchText, {
              headers: {
                  "Ocp-Apim-Subscription-Key": "bae31376894e48e780be5c3519645c2b"
              },
          })
          setResults(resp.data.webPages.value)
      } catch(error) {

      }

  }


  return (
      <div className="layout">
        <div className='box b1'><SearchBar handleOnClick={handleOnClick}/></div>
        <div className='box b2'><SearchResults results = {results}></SearchResults></div>
      </div>
  );
}

export default App;
