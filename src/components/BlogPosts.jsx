import { useNavigate } from "react-router";
import { useGetAllPostsQuery } from "../redux/services/blogposts"
import { Link } from "react-router";

const BlogPosts = () => {
    const { data, error, isLoading } = useGetAllPostsQuery();
    const navigate = useNavigate();

    return (
        <>
            {
                isLoading ? <p>Loading</p> :
                    data && data.map((item, index) => (
                        <div key={index} className="p-4">
                            <Link className="p-4" to={`/blogs/${item.id}`}>{item.title}</Link>
                        </div>
                    ))
            }
        </>
    )
}

export default BlogPosts;