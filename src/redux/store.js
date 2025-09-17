import { configureStore } from "@reduxjs/toolkit";
import blogpostsApi from "./services/blogposts";

const store = configureStore({
    reducer: {
        [blogpostsApi.reducerPath]: blogpostsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogpostsApi.middleware)
})

export default store;