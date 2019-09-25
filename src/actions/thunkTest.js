import Axios from "axios";

// a test thunk
// What is a thunk? 
// A thunk is a function that wraps an expression 
// to delay its evaluation.
export default()=>{
    return waitASec
}

function waitASec(dispatch, getState){
    console.log("Wait a sec is running");
    setTimeout(()=>{
        console.log("2 seconds has passed.")
        dispatch({
            type: "aThunkAction"
        })
    },2000);
    // const x = await Axios.post(url, data);
    // dispatch({whatever})


}

//I'm Ian. I'm a ML guy. I have 2 backends.
// I submit data to 1. I get back json.
//Its not what I wanted. :( I'm screwed, 
// becuase redux is going to send it to this dispatch
// BUT!!! redux-thunk to the rescue. I can check
//the value of one, if it's not what I want, i can
//issue it again here



