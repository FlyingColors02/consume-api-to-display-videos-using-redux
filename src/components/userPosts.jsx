import React,{Component} from "react";
import {connect} from "react-redux";
import FetchUserPost from "../action/user.posts"
class PostUser extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
            this.props.FetchUserPost();
    } 
    render(){  
        if(this.props.loading){
            return <h1 style={{alignSelf:"center"}}>Loading...</h1>
        }
        if(!this.props.posts){return null;}
        return(
            <div className="row">
                {
                    this.props.posts.splice(0,5).map(data=>(
                        <div className="col-md-4" key={data.id}>
                            <div className="card text-left">
                                <div className="card-body">
                                <h4 className="card-title">{data.title}</h4>
                                <p className="card-text">{data.body}</p>
                                </div> 
                            </div>
                            </div>

                    ))
                }
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        loading:state.posts.loading,
        posts:state.posts.data
    };
}
export default connect(mapStateToProps,{FetchUserPost})(PostUser);