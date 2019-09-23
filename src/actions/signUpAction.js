import axios from 'axios';

export default (data) =>{
    console.log(data);

    const signupUrl = `${window.apiHost}/users/signup`
    const axiosResponse = axios.post(signupUrl,data);

    return {
        type: "signUp",
        payload: axiosResponse
    }
}