import { userConstants } from "./constants"
import axios from "../helpers/axios"

export const signup = (user) => {
    console.log(user)

    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/admin/signup`, {
            ...user
        })

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });

            //ADD
            //////////////////////////////
            // dispatch({ type: authConstants.LOGIN_REQUEST });
            // const login_user = {email: user.email, 
            //                     password: user.password}
            // const login_res = await axios.post(`/admin/signin`, {
            //     login_user
            // })

            // if(login_res.status === 200){
            //     const { token, user } = login_res.data;
            //     localStorage.setItem('token', token);
            //     localStorage.setItem('user', JSON.stringify(user));
            //     dispatch({
            //         type: authConstants.LOGIN_SUCCESS,
            //         payload: {
            //             token, user
            //         }
            //     });
            // }else{
            //     if(login_res.status === 400){
            //         dispatch({
            //             type: authConstants.LOGIN_FAILURE,
            //             payload: { error: res.data.error }
            //         });
            //     }
            // }
            //////////////////////////////

        }else{
            if(res.status === 400){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}
