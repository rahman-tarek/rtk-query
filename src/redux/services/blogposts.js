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
        }),
        postNewBlog: builder.mutation({
            query: (data) => ({
                url: "/posts",
                method: "POST",
                body: data
            })
        }),
        deleteBlog: builder.mutation({
            query: (data, id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            })
        }),
        updateBlog: builder.mutation({
            query: (data, id) => ({
                url: `/posts/${id}`,
                method: "PATCH",
                body: data,
            })
        })
    })
})
export const { useGetAllPostsQuery, useGetBlogByIdQuery, usePostNewBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation } = blogpostsApi;
export default blogpostsApi;
