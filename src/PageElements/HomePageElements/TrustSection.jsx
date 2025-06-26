import { useState, useEffect, useRef } from 'react';
import './HomePageCss/TrustSection.css';
import logo1 from '../../Assets/affiliatLogo.png';
import logo2 from '../../Assets/affiliateLogo2.png';
import logo3 from '../../Assets/affiliateLogo3.png';

import AnimatedText from '../../AnimatedText';

export default function TrustSection() {
  const [testsCount, setTestsCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [labCount, setLabCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef();

  const testsTarget = 140;
  const customerTarget = 99;
  const labTarget = 80;

  // IntersectionObserver to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // run once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation logic
  useEffect(() => {
    if (!startCounting) return;

    const duration = 2000;
    const frameRate = 20;
    const steps = duration / frameRate;

    let count1 = 0, count2 = 0, count3 = 0;
    const step1 = testsTarget / steps;
    const step2 = customerTarget / steps;
    const step3 = labTarget / steps;

    const interval = setInterval(() => {
      count1 += step1;
      count2 += step2;
      count3 += step3;

      setTestsCount(Math.floor(Math.min(count1, testsTarget)));
      setCustomerCount(Math.floor(Math.min(count2, customerTarget)));
      setLabCount(Math.floor(Math.min(count3, labTarget)));

      if (count1 >= testsTarget && count2 >= customerTarget && count3 >= labTarget) {
        clearInterval(interval);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [startCounting]);

  const AffiliatedData = [
    { name: "zyx", logo: logo3 },
    { name: "zyx", logo: logo1 },
    { name: "zyx", logo: logo2 }
  ];

  return (
    <div className="trustContainer" ref={sectionRef}>
      <div className="trustUpperSection">
        <AnimatedText
          tag="h2"
          type="chars"
          y={30}
          className="rb-title trust-title"
          style={{ color: "white", lineHeight: "1", marginTop: "3rem", textAlign: "center" }}
        >
          Your Trusted Diagnostic Partner Since 2010
        </AnimatedText>

        <AnimatedText
          tag="p"
          type="words"
          y={-20}
          className="paraText trustPara"
          style={{ color: "white", lineHeight: "0" }}
        >
          Delivering accurate, affordable, and timely diagnostic services with NABL-accredited labs,
        </AnimatedText>

        <AnimatedText
          tag="p"
          type="words"
          y={-20}
          className="paraText trustPara"
          style={{ color: "white" }}
        >
          cutting-edge technology, and a commitment to excellence across Eastern India.
        </AnimatedText>


        <div className="innerLowerSection">
          <div className="innerLowerTextSection">
            <h3>{testsCount}+</h3>
            <p>Total No. of Diagnostic Tests Offered</p>
          </div>
          <div className="innerLowerTextSection">
            <h3>{customerCount}%</h3>
            <p>Customer Satisfaction Rate</p>
          </div>
          <div className="innerLowerTextSection">
            <h3>{labCount}+</h3>
            <p>NABL-Accredited Labs Across Eastern India</p>
          </div>
        </div>
      </div>

      <div className="trustLowerSection">
        <h3>Affiliated with:</h3>
        {AffiliatedData.map((a, inx) => (
          <div className="affiliatedWith" key={inx}>
            <img src={a.logo} alt={a.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
