import { useParams } from "react-router";
import { useGetBlogByIdQuery } from "../../redux/services/blogposts";

const Blog = () => {
    const { id } = useParams();
    console.log(id)
    const { data, loading, error } = useGetBlogByIdQuery(id);
    return (
        <>
            <div>
                <h2>{data.title}</h2>
            </div>
        </>
    )
}

export default Blog;