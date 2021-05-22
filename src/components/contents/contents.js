import React from 'react';
import myName from '../../Pictures/Name.png';
import myLine from '../../Pictures/Line.png';
import miniIcon1 from '../../Pictures/MiniIcons1.png';
import miniIcon2 from '../../Pictures/MiniIcons2.png';
import miniIcon3 from '../../Pictures/MiniIcons3.png';
import miniIcon5 from '../../Pictures/MiniIcons5.png';
import miniIcon6 from '../../Pictures/MiniIcons6.png';

const contents = () => {
    return(
        <div id="contents" className="flex flex-column justify-center items-center vh-100" 
             style={{backgroundColor: "#34495e"}}>
          <div className="flex items-center justify-around w-100">
            <a href="#Portfolio"><img className="grow" src={miniIcon2} alt="miniIcon2"></img></a>
            <a href="#Portfolio"><img className="grow" src={miniIcon6} alt="miniIcon4"></img></a>
            <a href="#Portfolio"><img className="grow" src={miniIcon5} alt="miniIcon5"></img></a>
            <a href="#Portfolio"><img className="grow" src={miniIcon3} alt="miniIcon3"></img></a>
            <a href="#Portfolio"><img className="grow" src={miniIcon1} alt="miniIcon1"></img></a>
          </div>
  
          <div className="flex justify-around w-100">
            <img className="" src={myLine} alt="line"></img>
            <img className="" src={myLine} alt="line"></img>
          </div>
          
          <div className="flex items-start justify-center w-100-ns ma2">
            <a href="#about"><img className="dim" src={myName} alt="name"></img></a>
          </div>
        </div>
    );
}

export default contents;