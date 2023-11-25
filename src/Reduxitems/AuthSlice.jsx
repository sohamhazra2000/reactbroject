


import apiInstance from "./Helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState={
  pprofile:[{}]
};

export const registerr=createAsyncThunk("user/signup",
async(data)=>{
    let ar=await apiInstance.post(`user/signup`,data);
    let ar2=ar?.data;
    return ar2
});
export const loginn=createAsyncThunk("user/signin",
async(data)=>{
    let ar=await apiInstance.post(`user/signin`,data);
    let ar2=ar?.data;
    return ar2
});
export const Profile=createAsyncThunk("user/profile-details",
async()=>{
    let ar=await apiInstance.get(`user/profile-details`);
    let ar2=ar?.data;
    return ar2
});

export const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerr.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(registerr.fulfilled, (state, { payload }) => {
          state.status = "idle";
          alert("register sucessfull")
        })
        .addCase(registerr.rejected, (state, action) => {
          state.status = "idle";
        }).addCase(loginn.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(loginn.fulfilled, (state, { payload }) => {
          state.status = "idlel";
          state.statusp= payload.status
          if(payload.token){
         localStorage.setItem("token", payload.token)
         alert("login sucessfull")
         toast(payload.messge)
          }
          else{
            toast(payload.message)
          }
          })
        .addCase(loginn.rejected, (state, action) => {
          state.status = "idle";
        })
        .addCase( Profile.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase( Profile.fulfilled, (state, { payload }) => {
          state.status = "idled";
          state.pprofile=payload.data;
          console.log("j")

        })
        .addCase( Profile.rejected, (state, action) => {
          state.status = "idle";
        })
        ;
    },
  });
  
  
  export default AuthSlice;
  
  