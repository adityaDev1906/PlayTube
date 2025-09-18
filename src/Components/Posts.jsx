import React, { useEffect, useState } from 'react'
import "./posts.css";
import { getPosts, deletePost } from "./../API/api";
import Form from './Form';


const Posts = () => {
    const [value, setValue] = useState([]);

    //Get the data from API using axios and useEffect
    const getPostData = async () => {
        const posts = await getPosts();
        // console.log(posts?.data);
        setValue(posts?.data);
    };
    useEffect(() => {
        getPostData();
    }, []);

    //Delete the post
    const handleDelete = async (id) => {
        try {
            console.log("Deleted id is: ", id);
            const response = await deletePost(id);

            if (response.status === 200) {
                console.log("Response from delete API:", response);

                // Correctly filter the main array of posts based on the id inside the 'items' object
                const updatedValue = value.data.filter((post) => post.items.id !== id);

                // Now, set the state with the new, updated array
                setValue({ data: updatedValue });
            } 
            alert(`Delete Post ID: ${id}`);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <>
            <section>
                <Form value={value} setValue={setValue} />
            </section>
            <section className="section-posts">
                <ol>
                    {
                        Array.isArray(value?.data) && value.data.map((curElem) => {
                            // Access the items object from the current element.
                            const { items } = curElem;
                            // Destructure properties from the nested objects.
                            const { id, snippet, statistics } = items;
                            const { title, description, publishedAt } = snippet;
                            const { viewCount, likeCount, commentCount } = statistics;


                            return (
                                <div key={id}>
                                    <h1>Title: {title}</h1>
                                    <p>Description: {description}</p>
                                    <p>Published At: {publishedAt}</p>
                                    <p>Views: {viewCount}, Likes: {likeCount}, Comments: {commentCount}</p>
                                    <button>EDIT</button>
                                    <button className='btn-delete' onClick={() => handleDelete(id)}>DELETE</button>  
                                </div>
                            );
                        })
                    }
                </ol>

            </section>
        </>
    )
}

export default Posts