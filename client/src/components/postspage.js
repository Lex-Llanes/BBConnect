import { React, useEffect, useState } from 'react'

//Renders posts - starting with most current
//Filters posts based on search
//Comments field - simple comment for now - maybe hardcode for now?
const Postpage = () => {

    const [postList, setPostList] = useState([])
    const [commentList, setComments] = useState([])

    const posts = [
    {
        "title": "1",
        "content": "Content 1",
        "date": "1",
    },
    {
        "title": "2",
        "content": "Content 2",
        "date": "2",
    },
    {
        "title": "3",
        "content": "Content 3",
        "date": "3",
    }]



    const comments = [
        {},
        {},
        {},
    ]

    const loadPost = () => {
        //fetch from server
        setPostList(posts)
    }

    useEffect(()=>{
        loadPost()
    },[postList])

    return (
        <div className='PostPage'>
            {postList.map((items) => (
                <ul>
                    <li>{items.title}</li>
                    <li>{items.content}</li>
                    <li>{items.date}</li>
                    {commentList.map((comment) => (
                        <ul>
                        </ul>
                    ))}
                </ul>

            ))}
        </div>
    )
}

export default Postpage;