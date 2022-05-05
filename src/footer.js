import './Layout.css';
import {useSelector} from "react-redux";
function Footer(){
    const footervalue = useSelector ((state) => state.user.userinput);
    return(
        <div className="footer" >
            <span className='ftext'>{footervalue}</span>
        </div>
    );
}
export default Footer;