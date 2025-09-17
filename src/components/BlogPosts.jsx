import { useNavigate } from "react-router";
import { useGetAllPostsQuery } from "../redux/services/blogposts"
import { Link } from "react-router";

const BlogPosts = () => {
    const { data, loading, error } = useGetAllPostsQuery();
    const navigate = useNavigate();

    return (
        <>
            {
                loading && <p>Loading</p>
            }
            {
                data && data.map((item, index) => (
                    <div key={index} className="p-4">
                        <Link className="p-4" to={`/${item.id}`}>{item.title}</Link>
                    </div>
                ))
            }
        </>
    )
}

export default BlogPosts;