import './Intro.scss'

export default function Intro() {
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                <img src="assets/ankit.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ankit Dixit</h1>
                    <h3>UI Developer And <span>Freelancer</span></h3>
                </div>
                <a href="#works">
                    <img src="assets/double-down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
