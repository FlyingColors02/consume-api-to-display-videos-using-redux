const INITIAL_VALUE=[];
const UserPost=(state=INITIAL_VALUE,action)=>{
    switch(action.type){
        case "LOADING": return {loading:true}
        case "FETCH_POST": return {data:action.payload, loading:false};
        default : return state;
    }
}
export default UserPost;