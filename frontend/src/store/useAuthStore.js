import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:5001"

export const useAuthStore = create((set, get) => ({
    authUser: null,
    users: [],
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],
    socket: null,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({ authUser: res.data });
            const { authUser } = get()
            console.log("authUser: ", authUser)
            console.log("res: ", res)
            //get().connectSocket();
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
            //get().connectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        console.log(data)
        try {
            const res = await axiosInstance.post("/auth/login", data);
            console.log("res: ", res)
            set({ authUser: res.data });
            toast.success("Logged in successfully");

            //get().connectSocket();
            console.log("Logged in succesfully")
        } catch (error) {
            toast.error(error);
            console.log("Logged in unsuccesfully")
            console.log(error)
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
            //get().disconnectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    /*getUserById: async () => {
        try {
            const res = await axiosInstance.get("")
        }
    }*/
    getUsers: async () => {
        try {
            const res = await axiosInstance.get("/auth/getUsers")
            console.log(res.data)
            set({ users: res.data })
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
}))