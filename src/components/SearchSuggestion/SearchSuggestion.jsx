import './SearchSuggestion.scss'


const SearchSuggestion = ({suggestions}) => {

    return (
        <div>
            {suggestions ? (<div>{suggestions.map((r,index) => <p key={index}>{r.text}</p>)}</div>) : (<></>)}
        </div>
    )
}

export default SearchSuggestion