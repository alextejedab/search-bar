import { useEffect, useState } from "react"
import axios from "axios";
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import './SearchBar.scss'
import { useDebounce } from "../../hooks/useDebounce";



const SearchBar = ({ handleOnClick }) => {


    const url = "https://api.bing.microsoft.com/v7.0/search?q="
    const [suggestions, setSuggestions] = useState([]);
    const [searchText, setSearchText] = useState('');
    const debounceValue = useDebounce(searchText , 500) 
    
    
    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await axios(url + debounceValue, {
                    headers: {
                        "Ocp-Apim-Subscription-Key": "bae31376894e48e780be5c3519645c2b"
                    },
                })
                setSuggestions(resp.data.relatedSearches.value)
            } catch (error) {
            }
        }
        searchText ? getData() : setSuggestions([]);
    }, [debounceValue]);



return (
    <div className="searchbar">
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={() => handleOnClick(searchText)}>Search</button>
        <SearchSuggestion suggestions={suggestions}></SearchSuggestion>
    </div>
)

}
export default SearchBar