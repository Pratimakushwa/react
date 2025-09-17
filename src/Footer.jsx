import React from "react";

function Footer(){
    return(
        <>

        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section" >
                    <h2>Brand</h2>
                </div>
                    <div className="footer-section">
                         <h3>CONTACT</h3>
                         <p>insert email here</p>
                         <hr />
                         <p>address line one</p>
                         <p>address line two</p>
                    </div>
                        <div className="footer-section">
                            <ul>
                              <li><a href="#about">about us</a></li>
                              <li><a href="#series">current series</a></li>
                              <li><a href="#house">the house</a></li>
                              <li><a href="#looking">looking here</a></li>
                            </ul>

                        </div>
                    
               
            </div>
        </footer>
        </>
    )
}
export default Footer