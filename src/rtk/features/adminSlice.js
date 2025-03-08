import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_URL } from "../../utility/constant";

const initialState = {
    username : "",
    password:"",
    token:"",
    message: ""
}

export const adminAuthorization = createAsyncThunk("admin/login", async (values) => {
    const {username, password} = values;
    const authLoginUrl = `${LOGIN_URL}?login.UserName=${username}&login.Password=${password}`;
    try {
        const  { data } = await axios({
            method:"POST",
            headers :{
                Accept:"application/json",
                "Content-Type":"application/json;charset=UTF-8",
            },
            url:authLoginUrl,
            data: {
                ...values
            }
        });
        return {
            data, 
            message : "success",
        }
        
    } catch (error) {
        return {
            data : null,
            message : "fail",
        }        
    }
});

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers :{},
    extraReducers : (builder)=> {
        builder.addCase(adminAuthorization.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(adminAuthorization.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action.payload.data);
            let { data } = action.payload.data;
            if(data) {
                let { token } = data;
                state.token = action.payload.token;
                localStorage.setItem("access-token", token);
                localStorage.setItem("isLogged", true);
            } 
        });
        builder.addCase(adminAuthorization.rejected, (state, action ) => {
            console.log("Found error");
            return;
        });
    }
});

export const {authenicate} = adminSlice.actions;
export default adminSlice.reducer;
