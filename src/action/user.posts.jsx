import axios from "axios";

const FetchUserPost = ()=>{
    return async(dispatch)=>{
        dispatch({type:"LOADING"})
        let response= await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setTimeout(()=>{
            dispatch ({type: "FETCH_POST",payload: response.data})
        },2000)
        
    }
    
}
export default FetchUserPost;