import React from 'react';
import './aboutMe.css';
import myPic1 from '../../Pictures/MyPhotos/Me1.png';
import myPic2 from '../../Pictures/MyPhotos/Me2.png';
import myPic3 from '../../Pictures/MyPhotos/Me3.png';
import myPic4 from '../../Pictures/MyPhotos/Me4.png';

const aboutMe = () => {
    return (
        <section id="about" className="h-100">
          <div className="pv6">
            <div className="flex flex-wrap mh3">

              <div className=" w-60-l pa3">
                <div className="flex flex-column">
                  <p className="calisto ttc f1 tl-ns mv0 pa2">Hello!</p>
                  <hr className="w-40 ml2 mr0 mv0"></hr>
                  <p className="bodoni f3 tl mt0 ml0 mb2 mr0 pa2">I'm Benjamin</p>
                  <p className="f5 ma1 pa2">
                    I graduated with a Bachelor degree in Business Accoutancy (distinction) and had a diploma in Digital Media. <br />
                    I create digital contents as a hobby, mainly working with Excel and automation programs. <br /> 
                    I am a self-taught person and a generalist who constantly seeks to improve my craft.
                  </p>
                  <p className="f5 ma1 pa2">
                    I began my career in a tourism organization where I worked as an operations coordinator for 3 years and supported backend 
                    activities for a large operation team. In the last 5 years, I have been doing operations accounting and have experience 
                    in managing both accounts payables and receivables. 
                    In the course of work experience, I have consistently achieved targeted levels of processing 
                    transactions, maintained timely and accurate month-end reconciliations and journals postings, and 
                    collaborated with cross-functional stakeholders to develop informative financial dashboards. 
                    I have also contributed to various process efficiencies projects and achieved
                    positive outcomes and favourable responses from my stakeholders.
                  </p>
                  <p className="f5 ma1 pa2">
                    My goal is to continue to upskill my competencies over the next few years in areas of finance and digital technology.
                    I do this by habitual reading and strive to be a part of a learning environment.
                  </p>
                  <p className="f5 ma1 pa2">
                    Outside of my day job, I continue exploring new digital technologies. <br />
                    The following areas are my key <strong>skills and competencies</strong>:
                    <ol>
                      <li>Analytics and Dashboards with Tableau and Power BI</li>
                      <li>Finance and Accounting with SAP ECC6.0/SAP S/4 Hana and SharePoint</li>
                      <li>Automation with Python, MS-VBA and UIPath(RPA)</li>
                      <li>Web Development with HTML5, CSS3, ECMAScript, React, Node, Express, PostgreSQL</li>
                      <li>Videography/Video editing with Adobe Premiere Pro</li>
                    </ol> 
                  </p>
                  <p className="f5 ma1 pa2">
                    You may contact me via e-mail. I would be most delighted to have a chat.
                  </p>

                </div>
              </div>

              <div className=" w-40-l pa3">
                <div className="flex flex-wrap items-center h-100">
                  <img className="w5 grow-large shadow-5 br3 ma4" src={myPic2} alt="me"></img>
                  {/* <img className="w5 grow-large shadow-5 br3 ma4" src={myPic1} alt="me"></img> */}
                  <img className="w5 grow-large shadow-5 br3 ma4" src={myPic3} alt="me"></img>
                  {/* <img className="w5 grow-large shadow-5 br3 ma4" src={myPic4} alt="me"></img> */}
                </div>
              </div>
              
            </div>
          </div>
        </section>
    );
}

export default aboutMe;