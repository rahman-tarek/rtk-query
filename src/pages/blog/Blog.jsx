import { useParams } from "react-router";
import { useGetBlogByIdQuery } from "../../redux/services/blogposts";

const Blog = () => {
    const { id } = useParams();
    console.log(id)
    const { data, error, isLoading } = useGetBlogByIdQuery(id);
    console.log(data)
    return (
        <>
            <div>
                {
                    isLoading ? <div>Loading</div> :
                        <h2>{data.title}</h2>
                }

            </div>
        </>
    )
}

export default Blog;