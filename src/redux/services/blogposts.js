import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogpostsApi = createApi({
    reducerPath: "blogpostsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => '/posts',
        }),
        getBlogById: builder.query({
            query: (id) => `/posts/${id}`
        })
    })
})
export const { useGetAllPostsQuery, useGetBlogByIdQuery } = blogpostsApi;
export default blogpostsApi;
