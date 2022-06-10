import {React, useState} from 'react'

const Post = () => {

    /**VARIABLES**/
    const [postInput, setPost] = useState("")
    console.log(postInput)

    const handlePostSubmit = () => {
      
    }

  return (
    <div className='postinput'>
        <form onSubmit={handlePostSubmit}>
            <textarea 
                name="postinput"
                type="textarea"
                placeholder="Post..."
                value={postInput}
                onChange={(event) => setPost(event.target.value)}
            />
            <br/>

            <input
              value="Submit"
              type="submit"
            />
        </form>
    </div>
  )
}

export default Post;