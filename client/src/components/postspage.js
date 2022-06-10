import { React, useEffect, useState } from 'react'
import Search from './search'
//Renders posts - starting with most current
//Filters posts based on search
//Comments field - simple comment for now - maybe hardcode for now?
const Postpage = () => {

    const [postList, setPostList] = useState([])
    const [commentList, setComments] = useState([])
    // const [commentTwoList, setCommentTwoList] = useState([])

    const posts = [
        {
            "postid": 1,
            "title": "OB Help",
            "content": "I need help finding a good doctor in the bay area, specifically Oakland.",
            "date": "06-10-2022",
            "comment": "I know this really good doctor in Oakland, will email you the info right now!"
        },
        {
            "postid": 2,
            "title": "Baby Powder Recalls",
            "content": "Similac is currently on recall, make sure to call the company or return the pruduct to which ever store you bought it from.",
            "date": "05-20-2022",
            "comment": "Thanks for the heads up!"
        },
        {
            "postid": 3,
            "title": "Pregnancy Pillow",
            "content": "Looking for the best pregnancy pillow right now, nothing too expensive tho please.",
            "date": "03-16-2022",
            "comment": "Found this pillow on amazon, will send the link over ^_^."
        }]



    const comments = [
        { "commentid": 1,"Comment": "Heres comment 1" },
        { "commentid": 2,"Comment": "Heres comment 2" },
        { "commentid": 3,"Comment": "Heres comment 3" },
    ]

    // const commentsTwo = [
    //     { "Comment": "Heres comment for comment 1" },
    //     { "Comment": "Heres comment for comment 2" },
    //     { "Comment": "Heres comment for comment 3" },
    // ]

    const loadPost = () => {
        //fetch from server
        setPostList(posts)
        setComments(comments)
        // setCommentTwoList(commentTwoList)
    }

    useEffect(() => {
        loadPost()
    }, [postList])

    return (
        <div className='PostPage'>
            <Search />
            {postList.map((items) => (
                <ul className='ulcomments card'>
                    <li><span style={{fontWeight: "bold"}}>Title: </span>{items.title}</li>
                    <li><span style={{fontWeight: "bold"}}>Chatter: </span>{items.content}</li>
                    <li><span style={{fontWeight: "bold"}}>Date: </span>{items.date}</li>
                    <br/>
                    <span style={{fontWeight: "bold"}}>Comments: </span>
                    <li className='commentBox'>{items.comment}</li>
                </ul>

            ))}
        </div>
    )
}

export default Postpage;