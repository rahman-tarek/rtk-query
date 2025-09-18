import { useState } from "react"
import { usePostNewBlogMutation, useUpdateBlogMutation } from "../../redux/services/blogposts";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [userId, setUserId] = useState("");

    const [postNewBlog] = usePostNewBlogMutation();
    const [updateBlog] = useUpdateBlogMutation()
    // Post new blog
    const handleNewBlogSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            userId,
            id,
            title,
            body: description
        }
        postNewBlog(newBlog);
    }
    // Post new blog
    const handleUpdate = (e) => {
        e.preventDefault();
        const newBlog = {
            userId,
            id,
            title,
            body: description
        }
        updateBlog(newBlog);
    }


    return (
        <>
            <div className="h-screen mx-auto">
                <div className="p-4 rounded-md shadow-md">
                    <form action=""
                        className="flex flex-col space-y-2"
                        onSubmit={handleNewBlogSubmit}>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" placeholder="Id" value={id} onChange={(e) => setId(e.target.value)} />
                        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                        <button type="submit">Submit</button>
                        <button type="submit" onClick={handleUpdate}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddBlog;