import React,{Component} from "react";
import PostUser from "./components/userPosts";

class App extends Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div className="container">
            <PostUser/>
        </div>
    )
}
}
export default App;
