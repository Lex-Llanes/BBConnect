import {React, useState} from 'react'

const Post = () => {

    /**VARIABLES**/
    const [postInput, setPost] = useState("")


  return (
    <div className='postinput'>
        <form>
            <textarea 
                name="postinput"
                type="textarea"
                placeholder="Post..."
                value={postInput}
                onChange={(event) => setPost(event.target.value)}
            />
        </form>
    </div>
  )
}

export default Post;