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
                    I began my career in the tourism industry where I worked as an operations coordinator for 3 years.
                    During my time there, I learned to write VBA scripts and automate multiple macro programs.
                    I moved on to do operations accounting for the next 5 years and gained further exposure in processing transactions, automating operational journals 
                    and forms, and managing a SharePoint repository.
                    I began applying problem-solving skills at work and have achieved success in resolving various complex issues.
                    In the last year, I have embarked a digital role in finance and I am heavily involved in cost allocation, automation and data analytics.
                    My greatest job satisfaction is that I am able to create positive outcomes and favourable responses from my stakeholders through my skills and efforts.
                  </p>
                  <p className="f5 ma1 pa2">
                    Education: Bachelor degree in Business Accoutancy; Diploma in Digital Media. <br />
                    Favourites: Automating with Excel VBA, RPA (UiPath), Python, Shell and Power Automate. <br /> 
                    Hobbies: Creating video contents and developing mini-games with C++.
                  </p>
                  <p className="f5 ma1 pa2">
                    The following tools are my known <strong>competencies</strong>:
                    <ol>
                      <li>Analytics: Power BI, Tableau, Visio, PowerPoint, Excel</li>
                      <li>ERP and web-tools: SAP ECC6.0/SAP S/4 Hana, Workday, SharePoint, COUPA</li>
                      <li>Automation: UiPath, VBA, Python, Power Automate</li>
                      <li>Web Development: HTML5, CSS3, ECMAScript, React, Node, Express, PostgreSQL</li>
                      <li>Video editing: Adobe Premiere Pro</li>
                    </ol> 
                  </p>
                  <p className="f5 ma1 pa2">
                    I can be contacted via the e-mail icon below.
                  </p>

                </div>
              </div>

              <div className=" w-40-l pa3">
                <div className="flex flex-wrap items-center justify-center h-100">
                  <img className="w5 grow-large shadow-5 br3 ma4" src={myPic2} alt="me"></img>
                  {/* <img className="w5 grow-large shadow-5 br3 ma4" src={myPic1} alt="me"></img> */}
                  {/* <img className="w5 grow-large shadow-5 br3 ma4" src={myPic3} alt="me"></img> */}
                  {/* <img className="w5 grow-large shadow-5 br3 ma4" src={myPic4} alt="me"></img> */}
                </div>
              </div>
              
            </div>
          </div>
        </section>
    );
}

export default aboutMe;