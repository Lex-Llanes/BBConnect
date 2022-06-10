import {React, useState} from 'react'

const Search = () => {

    /**VARIABLES**/
    const [searchInput, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    

  return (
    <div className='searchinput'>
        <form>
            <input 
                name="searchinput"
                placeholder="Search..."
                value={searchInput}
                onChange={(event) => setSearch(event.target.value)}
            />
        </form>
    </div>
  )
}

export default Search;