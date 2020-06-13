import {combineReducers} from "redux";
import UserPost from "../reducers/post";

const reducers=combineReducers({posts:UserPost});
export default reducers;