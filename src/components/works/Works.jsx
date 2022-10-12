import './Works.scss'
import { projectData } from '../../constant data/projectData';
import { useState } from 'react';


  

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = projectData;

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {data.map((d) => (
                <div className="container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/web-development-ico.png" alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/website-development.png" alt=""/>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <img src="assets/arrow.png" alt="left arrow" className='arrow left' onClick={()=>{handleClick('left')}}/>
            <img src="assets/arrow.png" alt="right arrow" className='arrow right' onClick={()=>{handleClick()}}/>
        </div>
    )
}
