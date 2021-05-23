import React from 'react';

const portfolio = () => {
    return (
        <section id="Portfolio" className="h-100">
          <div className="pv6">
            <div className="flex flex-wrap mh3">
              
              <div className="outline w-100">
                <p className="calisto f2 ttu tc-ns bg-dark-gray white mv0 pa2">Gallery</p>
              </div>

              <div className=" w-60-ns pa3 flex items-center">
                <div className="flex flex-column">
                  <p className="calisto f4 tl-ns v-mid mv0 pa2">
                    <strong>Robotics Process Automation</strong>, or RPA for short is getting more and more popular recently. <br />
                    Simply put, RPA are software tools that can be use to design and develop digital bots. These bots
                    can perform routinous, high volume and non-judgemental activities at amazing speeds, leveraging 
                    heavy lifting processes and at greater efficiencies.
                  </p>
                  <p className="calisto f4 tl-ns mv0 pa2">
                    In this demo, I wrote a sequence in UI Path for a bot to perform a simple activity of updating
                    an invoice web form by referring to a list of records from an Excel spreadsheet. 
                    I used an invoice as an example but we can apply RPA on any web form or desktop application.
                    Above all, we can use RPA to perform many other activities and to name a few: 
                    scraping information from the web, scraping data from pdf files and using OCR 
                    (Optical Character Recognition) to read scanned documents. 
                  </p>
                </div>
              </div>

              <div className=" w-40-ns pa3">
                <div className="flex flex-wrap items-center h-100">
                  {/* <p className="calisto ttc f3 tl-ns mv0 pa2">Video Link</p> */}
                  <iframe className="w-100" height="315" src="https://www.youtube.com/embed/2RY9nj3cCsI" 
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>
    );
}

export default portfolio;