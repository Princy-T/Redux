import './Layout.css';
import {useState} from "react";
import {useDispatch} from "react-redux"; 
import { update } from './redux/user';
function Content(){
    const [currentvalue,updatevalue] = useState("");
    const dispatch = useDispatch();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(update({currentvalue}));
    };
    return(
        <div className="content">
            <h1>Content</h1>
            <lable className="lable">Input: </lable>
            <input type="text" onChange={(event) => updatevalue(event.target.value)}/><br></br>
            <button className="button" onClick={handleUpdate}>Submit</button>
        </div>
    );
}
export default Content;