import './Layout.css';
import {useSelector} from "react-redux";
function Header(){
    const headervalue = useSelector ((state) => state.user.userinput);
    return(
        <div className="header">
            <span className="htext">{headervalue}</span>
        </div>
    );
}
export default Header;