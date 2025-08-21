import { createContext, useState, useContext } from "react";

const BlogDataContext = createContext()

export function ProviderWrapper({ children }) {
    const [blogData, setBlogData] = useState(null)

    return (
        <BlogDataContext.Provider value={{ setBlogData, blogData }}>
            {children}
        </BlogDataContext.Provider>
    )
}

// custom hook

export const useReadOnlyBlogData = () => {
    const contextValues = useContext(BlogDataContext)
    return contextValues.blogData
}

// export const useBlogDataTitle = () => {
//     const contextValue = useContext(BlogDataContext)
//     return contextValue.blogData.title
// }

export const useWriteBlogData = () => {
    const contextValue = useContext(BlogDataContext)
    return contextValue.setBlogData
}

export default BlogDataContext