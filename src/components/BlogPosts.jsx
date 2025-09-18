import { useNavigate } from "react-router";
import { useDeleteBlogMutation, useGetAllPostsQuery } from "../redux/services/blogposts"
import { Link } from "react-router";

const BlogPosts = () => {
    const { data, error, isLoading } = useGetAllPostsQuery();
    const [deleteBlog] = useDeleteBlogMutation()
    const navigate = useNavigate();

    // Delete post
    const handleDelete = (id) => {
        deleteBlog(id)
    }
    return (
        <>
            {
                isLoading ? <p>Loading</p> :
                    data && data.slice(0, 10).map((item, index) => (
                        <div key={index} className="p-4">
                            <Link className="p-4" to={`/blogs/${item.id}`}>{item.title}</Link>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    ))
            }
        </>
    )
}

export default BlogPosts;