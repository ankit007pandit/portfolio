import './Intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'

export default function Intro() {
    const textRef= useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backdelay:1500,
            backspeed:60,
            strings:["UI Developer","FULLSTACK Developer",]
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                <img src="assets/ankit2.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ankit Dixit</h1>
                    <h3>Freelancer  And <span ref={textRef}></span></h3>
                </div>
                <a href="#works">
                    <img src="assets/double-down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
