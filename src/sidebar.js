import './Layout.css';
import {useSelector} from "react-redux";
function Side(){
    const sidevalue1 = useSelector ((state) => state.user.sidevalue1);
    const sidevalue2 = useSelector ((state) => state.user.sidevalue2);
    const sidevalue3 = useSelector ((state) => state.user.sidevalue3);
    return (
        <div className="sidebar">
        <span className='stext'>{sidevalue1}</span><br></br>
        <span className='stext'>{sidevalue2}</span><br></br>
        <span className='stext'>{sidevalue3}</span>
        </div>
    );
}
export default Side;