import React, { useState } from "react";
import "./HomePageCss/WhyChooseUsSection.css";

export default function WhyChooseUsSection() {
    return (
        <div className="whychooseUsContainer">
            <div className="contentArea">

                <div className="headingText">
                    <h2 className="rb-title">Bringing Complete Healthcare Services to Your Home</h2>
                </div>


                <p className="paragraphStyle">
                    Expert medical care is now at your doorstep. RB Diagnostic Home Care delivers a full spectrum of medical and rehabilitation services to your home—cutting travel and hospital stays—whether you're a child, senior, or in need of post-operative or chronic care. 
                </p>

                <ul className="listStyle">
                    <li className="listItemStyle" style={{borderBottom:"1px solid gray", padding:"0rem 0rem 1rem 0rem", width:"100%"}}>
                        <span className="bulletStyle" >✔</span>
                        In-home doctor consultations with various specialists, available physically, virtually, or on-call.
                    </li>
                    <li className="listItemStyle" style={{borderBottom:"1px solid gray", padding:"0rem 0rem 1rem 0rem", width:"100%"}}>
                        <span className="bulletStyle">✔</span>
                        24/7 skilled nursing care for everything from dressings and injections to continuous monitoring.
                    </li>
                    <li className="listItemStyle">
                        <span className="bulletStyle">✔</span>
                        At-home physiotherapy & rehabilitation for post-surgical, orthopedic, cardiac, and neuro-rehab needs.
                    </li>
                </ul>

            </div>

        </div>
    );
}
