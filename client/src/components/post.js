import React from 'react'

const Post = () => {

    /**VARIABLES**/
    const 


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

export default Post;