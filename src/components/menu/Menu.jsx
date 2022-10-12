import './menu.scss'

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    )
}
