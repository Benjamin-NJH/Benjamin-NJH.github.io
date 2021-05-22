import React from 'react';

const header = ({ header }) => {
    return (
        <nav id="header" className="fixed top-0 w-100">
            <ul className="flex items-center justify-around list f4-m ma0 pa0 bg-navy white h3-ns" 
                style={{visibility: header}}>
                <li className="pa2 fw9 pointer bg-animate hover-bg-dark-blue hover-white">
                    <a className="white no-underline" href="#contents">Home</a>
                </li>
                <li className="pa2 fw9 pointer bg-animate hover-bg-dark-blue hover-white">
                    <a className="white no-underline" rel="noreferrer" target="_blank" href="https://ushiojunhui.blogspot.com/">Articles</a>
                </li>
                <li id="hobbies" className="pa2 fw9 pointer bg-animate hover-bg-dark-blue hover-white">
                    Project/Hobbies
                </li>
            </ul>
        </nav>
    );
}

export default header;