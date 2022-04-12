import './Topbar.scss'
import { ContactMail, ContactPhone } from '@material-ui/icons'

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">My Portfolio</a>
                    <div className="itemcontainer">
                        <ContactPhone className="icon" />
                        <span>+91 9052873305</span>
                    </div>
                    <div className="itemcontainer">
                        <ContactMail className="icon" />
                        <span>ankitdixit821@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
