import './SearchResults.scss'


const SearchResults = ({results}) => {

    return (
        <div>
            {results.length > 0 ? (<div>{results.map((r,index) => <p key={index}>{r.url}</p>)}</div>) : (<p></p>)}
        </div>
    )
}

export default SearchResults