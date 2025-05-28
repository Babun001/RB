import React, { useState } from "react";
import "./HomePageCss/WhyChooseUsSection.css";

export default function WhyChooseUsSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const queries = [
        {
            q: "NABL-Accredited Quality Standards",
            ans: "We adhere to the highest standards of diagnostic accuracy, with NABL accreditation that ensures quality you can rely on."
        },
        {
            q: "State-of-the-Art Imaging & Lab Technology",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quaerat autem? Ad facilis odit delectus."
        },
        {
            q: "13+ Easily Accessible Centres Across Kolkata & Beyond",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quaerat autem? Ad facilis odit delectus."
        },
        {
            q: "Door-step Home Sample Collection & Home-Care Services",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quaerat autem? Ad facilis odit delectus."
        },
        {
            q: "Fast Digital Reports with Secure Online Access",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quaerat autem? Ad facilis odit delectus."
        },
        {
            q: "Experienced Doctors & Skilled Technologists",
            ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quaerat autem? Ad facilis odit delectus."
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="whychooseUsContainer">
            <div className="contentArea">
                <div className="headingTag">
                    <h4 className="rb-headingTag">Why choose us</h4>
                </div>
                <div className="headingText">
                    <h2 className="rb-title">The Smart Choice for Smarter Healthcare</h2>
                </div>
                <div className="queriesSection">
                    {queries.map((qs, index) => (
                        <div
                            key={index}
                            className="queryItem"
                            onClick={() => handleToggle(index)}
                        >
                            <div className="questionRow">
                                <span className="iconCircle">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                                <h4 className="questionText">{qs.q}</h4>
                            </div>
                            {openIndex === index && <p className="answerText">{qs.ans}</p>}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
