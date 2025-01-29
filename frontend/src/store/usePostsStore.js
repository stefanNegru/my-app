import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";


import { persist } from "zustand/middleware";
//import { toast } from "react-toastify";

/*export const usePostsStore = create((set, get) => ({
    posts: [],
    comments: [],
    selectedPost: null,
    isPostsLoading: false,

    getPosts: async () => {
        set({ isPostsLoading: true })
        try {
            const res = await axiosInstance.get("/posts")
            set({ posts: res.data })
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isPostsLoading: false })
        }
    },

    setSelectedPost: async (post) => {
        set({ selectedPost: post })
    },

    getComments: async (id) => {
        try {
            const res = await axiosInstance.get("/posts/comm", { params: { id } })
            //const res = await axiosInstance.get("/posts/comm", { postId: id })
            console.log(res)
            console.log(id)
            set({ comments: res.data })
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    createComment: async (data) => {
        const { selectedPost } = get()
        try {
            const res = await axiosInstance.post(`/posts/comm/${selectedPost._id}`, data)
            set({ comments: [...comments, res.data] })
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}))*/


export const usePostsStore = create(
    persist(
        (set, get) => ({
            posts: [],
            comments: [],
            selectedPost: null,
            isPostsLoading: false,

            getPosts: async () => {
                set({ isPostsLoading: true });
                try {
                    const res = await axiosInstance.get("/posts");
                    set({ posts: res.data });
                } catch (error) {
                    toast.error(error.response?.data?.message || "Error fetching posts");
                } finally {
                    set({ isPostsLoading: false });
                }
            },

            createPost: async (userId, data) => {
                try {
                    const res = await axiosInstance.post(`/posts/create/${userId}`, data)
                } catch (error) {
                    toast.error(error.response?.data?.message || "Error creating posts");
                }
            },

            setSelectedPost: (post) => {
                set({ selectedPost: post });
            },

            getComments: async (id) => {
                try {
                    const res = await axiosInstance.get("/posts/comm", { params: { id } });
                    set({ comments: res.data });
                } catch (error) {
                    toast.error(error.response?.data?.message || "Error fetching comments");
                }
            },

            createComment: async (data) => {
                const { selectedPost, comments } = get();
                if (!selectedPost) {
                    toast.error("No post selected");
                    return;
                }
                try {
                    const res = await axiosInstance.post(`/posts/comm/${selectedPost._id}`, data);
                    set({ comments: [...comments, res.data] });
                } catch (error) {
                    toast.error(error.response?.data?.message || "Error creating comment");
                }
            },
        }),
        {
            name: "posts-storage", // Unique key for localStorage
            getStorage: () => localStorage, // Use localStorage for persistence
        }
    )
);


