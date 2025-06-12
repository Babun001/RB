import { useState } from "react";
import './FAQsPageElementsCss/FAQsMainSection.css';

export default function FAQsMainSection() {
    const [activeTab, setActiveTab] = useState("Career");
    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        "Career",
        "General Queries",
        "Home Collection",
        "Reports and Payments",
        "Test Related Queries",
        "Ultrasound",
        "Vaccination",
    ];

    const faqData = {
        Career: [
            {
                question: "Where will I upload my resume?",
                answer: "Send your resume at hr@rbdiagnostics.com",
            },
        ],
        "General Queries": [
            {
                question: "What are your working hours?",
                answer:
                    "We serve our patrons from Monday to Saturday between 6:30 am to 8:30 pm. On Sunday, our branches are open until 2:00 pm. We are open on all national and regional holidays but with reduced hours.",
            },
            {
                question: "When can I come for reports?",
                answer:
                    "The report delivery timing is 7:00 AM – 8:30 PM. If you share your email ID at the time of billing, reports are emailed much earlier. Make sure the dues are cleared.",
            },
            {
                question:
                    "I have given the incorrect details while booking. What can I do?",
                answer:
                    "You can update those details either by calling our helpline number 4085-4085 or by dropping us a mail on info@rbdiagnostics.com.",
            },
            {
                question: "How do I book my test?",
                answer:
                    "1. Call our helpline number 033-4085-4085 and one of our representatives will be happy to help you.\n2. Visit our website: www.rbdiagnostic.com/homecollection\n3. Download our mobile app: www.rb-it.in",
            },
            {
                question: "Does RB Diagnostic provide in-home services and how do I avail the service?",
                answer:
                    "Yes, RB Diagnostics provides Sample Home Pick-up service. Call our Central Helpline number 4085-4085 to know more.",
            },
            {
                question: "Where are your centers?",
                answer:
                    "RB Diagnostic serves in various parts of West Bengal. We have a total of 13 branches:\n\nNorth Kolkata:\n- Lake Town (MRI Facility available only at this branch)\n- Kakurgachi\n- Salt Lake\n- Barasat\n- Care & Cure (OPD & Pharmacy)\n\nSouth Kolkata:\n- Topsia\n- Deshapriya Park\n- Behala\n\nOther parts of Bengal:\n- Andul\n- Contai",
            },
            {
                question: "How can I locate my nearest center?",
                answer:
                    "Please click on this link: https://www.google.com/maps/search/rb+diagnostic+near+me/",
            },
            {
                question: "Do I need a prior appointment for availing your services?",
                answer:
                    "To minimize wait times, we recommend booking appointments in advance. Walk-ins are allowed in emergencies. For MRI and USG services, a prior appointment is mandatory.",
            },
            {
                question: "Can I modify my booking?",
                answer:
                    "Yes, you can change your booking up to 24 hours before sample collection by calling our helpline number 4085-4085.",
            },
            {
                question: "Can I book for someone else?",
                answer:
                    "Yes, you can make bookings for friends and family. Call our helpline number, visit our website, or use the mobile app to make a booking.",
            },
            {
                question: "Are you NABL accredited?",
                answer: "Yes",
            },
            {
                question: "Are you ICMR Certified?",
                answer: "Yes",
            },
            {
                question:
                    "I need an appointment for the pre-joining formality at my company. How will I be guided?",
                answer:
                    "Your company must sponsor the medical tests and coordinate with RB Diagnostic directly, or you can drop us a mail at info@rbdiagnostics.com.",
            },
        ],
        "Home Collection": [
            {
                question: "I want a sample home collection. How do I book it?",
                answer: `You can use one of the following ways:\n\nA) The best way to request Home collection is by using RB mobile app (www.rb-it.in). You can download it from Google Play Store.\n\nB) You can also go to RB website: https://rbdiagnostic.com/pages/home-collection\n\nC) You can connect to our helpline number 4085-4085 and one of our customer service representatives will assist you.`,
            },
            {
                question: "Are there any extra charges for availing home collection facilities?",
                answer: `We have waived the home collection charges for billing of Rs 500 or more. Else, there is a nominal collection fee of Rs 100 for every home visit.`,
            },
            {
                question: "I booked a home collection but did not receive any confirmation, what do I do?",
                answer: `Please call us on 4085-4085. Our customer service representative will assist you in making a booking. You can also walk in at any of our branches to make a home collection reservation.`,
            },
            {
                question: "Can I get the contact number of the collector coming for collection?",
                answer: `Once you have made the booking, the contact details of the collector are shared with you via WhatsApp and SMS. You will also receive a notification of the reserved time slot.`,
            },
            {
                question: "How will I make the payment?",
                answer: `You can make the payment in multiple ways:\n\n• You can pay cash directly to the collector\n• You can make online payment through the link which is shared over WhatsApp\n• You can visit www.rbdiagnostic.com and make payment under the 'View Report' option\n• You can download our application and make online payment via the application\n\nFor any further assistance, please call on 4085-4085.`,
            },
            {
                question: "Will I get a hard copy of the bill?",
                answer: `Yes, if you need a hard copy of the bill then you have to visit the nearest branch and collect it.`,
            },
            {
                question: "Will the collector take appropriate precaution for COVID during collection?",
                answer: `Yes, basic COVID protocol while taking COVID samples is always followed by the collector. Our collectors wear a mask, gloves, and maintain sanitization. If you want the collector to wear a PPE kit, then you have to inform them while making your booking and bear nominal charges for the same.`,
            },
            {
                question: "At what time can I avail the home collection facility?",
                answer: `Our home collection facility is available between 7:00 AM to 3:00 PM.`,
            },
            {
                question: "Will I be billed if the collector can’t draw the blood?",
                answer: `No charges shall be levied if the collector can’t draw the blood.`,
            },
        ],
        "Reports and Payments": [
            {
                question: "Can I get the reports online?",
                answer: `Please download the RB Diagnostic application from www.rb-it.in (available on Google Play Store or iOS Store) and check by providing your Bill ID followed by your last name.\n\nYou can also go to our website www.rbdiagnostic.com and check using the same details.`,
            },
            {
                question: "How can I get the soft copy of my reports?",
                answer: `To receive the soft copy, please ensure the following:\n\n• Always use your WhatsApp number as your registered mobile number – the soft copy is automatically sent to your WhatsApp.\n• Update your Email ID properly while billing – the soft copy is also shared over email.\n• You can download the RB Diagnostic application from Google Play Store or iOS Store and get your reports.\n• You can also visit https://rbdiagnostic.com/pages/report and download your reports from there.`,
            },
            {
                question: "By when will my reports be ready?",
                answer: `We believe in timely delivery of reports. We provide same-day report delivery for all applicable tests by 07:00 PM in the evening.`,
            },
            {
                question: "Within how many days can I collect my report?",
                answer: `After you receive the soft copy of your report, you can visit and collect the hard copy.\n\nReport delivery timings:\n• Monday to Saturday: 07:00 PM to 08:30 PM\n• Sunday: 11:00 AM to 02:00 PM\n\nAll hard copies of reports such as X-Ray, USG, CT Scan plates are kept at the branch for 3 months from the date of reporting. After that, they are destroyed. Reprints after 3 months are chargeable.`,
            },
            {
                question: "I have not received reports on my email or WhatsApp. Who can I talk to?",
                answer: `Please try the following steps:\n\n1. Download the RB Diagnostic application and check using your Bill ID and last name.\n2. Visit www.rbdiagnostics.com and use the same credentials.\n\nIf you're still unable to access your report, please call our central helpline at 4085-4085.`,
            },
            {
                question: "How can I get my past reports online?",
                answer: `RB Diagnostic keeps records of reports from the last 5 years. If your report is less than 5 years old, you can download the RB Diagnostic application (available on Google Play Store or iOS Store) to access all your past reports.`,
            },
            {
                question: "What modes of payments are accepted?",
                answer: `We accept multiple modes of payment at our branches:\n• Cash\n• Debit/Credit Card\n• UPI (PhonePe, GPay, Paytm, etc.)\n• Online Payment\n• Cheque\n\nFor home collection:\n• Cash\n• UPI (PhonePe, GPay, Paytm, etc.)\n• Online Payment`,
            },
            {
                question: "How to make payment online?",
                answer: `You can make online payments by any of the following methods:\n\n• Via the link shared on WhatsApp\n• From our website: www.rbdiagnostics.com or https://rbdiagnostic.com/pages/report under the 'View Report' option\n• By downloading and using the RB Diagnostic app from Google Play Store or iOS Store`,
            },
            {
                question: "Are there any hidden charges?",
                answer: `No, there are absolutely no hidden charges. The amount shown at the time of booking confirmation is final – either paid online or collected at the time of sample collection.`,
            },
        ],
        "Test Related Queries": [
            {
                question: "Do I need a prescription for booking a test?",
                answer: "It’s always preferable to have a doctor’s prescription but it’s not mandatory. However, for few tests like USG for pregnancy, a prescription from the doctor is necessary. For further clarification, you can call on 4085-4085 and our customer service representative will confirm whether you can do the test with or without the prescription.",
            },
            {
                question: "Can I drink water if I am fasting?",
                answer: "Yes, drinking plain water is allowed for maximum fasting required tests until and unless your doctor has recommended any special preparation for your test.",
            },
            {
                question: "Do I need a prior appointment for an MRI? Can I go to any location for an MRI?",
                answer: "Yes, you will need to schedule a prior appointment for MRI, and MRI is only available at our Lake Town branch. ",
            },
            {
                question: "Is MRI painful?",
                answer: "MRI is not painful. Moreover, we have an excellent team of doctors and technicians who will assist you through the process.",
            },
            {
                question: "For MRI how much Tesla is used?",
                answer: "We use 1.5 Tesla machine",
            },
            {
                question: "What type of MRI service can I avail ??",
                answer: "RB Diagnostic provides conventional MRI service.",
            },
            {
                question: "Can I avail the Dexa scan facility at RB Diagnostic?",
                answer: "Yes, we do Dexa scan only at our Lake Town branch, and for that you do not need any prior appointment.",
            },
            {
                question: "Do I need to fast before being tested at RB Diagnostic?",
                answer: "Some blood tests do require fasting prior to having your blood drawn. Please contact your healthcare provider to determine his/her requirements for your specific testing.",
            },
            {
                question: "I am pregnant. Can I do an x-ray?",
                answer: "It is not advisable to undergo it if you are pregnant, kindly discuss with your doctor before doing the x-ray.",
            },
            {
                question: "Do you have female radiologists?",
                answer: "Yes, there are female radiologists, please confirm the time by calling our central helpline number 033 4085 4085, our operation team will assist you as per your requirement.",
            },
            {
                question: "What are the KFT test parameters?",
                answer: "Parameters are creatinine, urea, potassium, sodium.",
            },
            {
                question: "What is the meaning of FBS and PPBS?",
                answer: "FBS stands for Fasting Blood Sugar, you need to come with an empty stomach overnight for this test. PPBS stands for Post Prandial Blood Sugar, this sample is taken 2 hours after a meal.",
            },
            {
                question: "Can I avail the endoscopy test from your center?",
                answer: "No, we do not do endoscopy tests at any of our centers.",
            },
            {
                question: "Can I avail the PET scan facility?",
                answer: "No, we don’t do PET scans.",
            },
            {
                question: "Where do I find the test rate?",
                answer: "You can visit to our website www.rbdiagnostic.com go to the Rate list option by which you’ll be able to check your desired test rate or you can download RB app www.rb-it.in from Google play store for android / ios. Another way you can upload a prescription in our website and request for a call back.",
            },
            {
                question: "Will I receive assistance for my tests?",
                answer: "All tests are conducted under the supervision of qualified doctors and experienced technicians.",
            },
        ],

        "Ultrasound": [
            {
                question: "Do I need to take any appointments for an USG?",
                answer: `Yes, you must book a prior appointment for USG to check the availability of doctors and slots. For USG, we follow a first-come, first-served policy.`,
            },
            {
                question: "Is there any female radiologist?",
                answer: `Yes, we have female radiologists. Please confirm their availability by calling our central helpline number at 033 4085 4085. Our Customer Service Representative will assist you as per your requirement.`,
            },
            {
                question: "How is an ultrasound performed?",
                answer: `A water-based gel is applied to the skin to help transmit sound waves. A sonographer uses a small, hand-held device (transducer) that is pressed against the area being examined and moved as needed to capture images.\n\nThe transducer sends sound waves into the body, collects the echoes, and sends them to a computer to create images. After the procedure, the gel is cleaned off your skin.\n\nYou may be asked to:\n• Lie on an examination table\n• Remove any jewelry from the area being examined\n• Reposition or remove some clothing\n• Change into a gown if required`,
            },
            {
                question: "Are there any risks to the test?",
                answer: `No, there are no risks associated with having an ultrasound.`,
            },
            {
                question: "Why do I have to fast for my ultrasound?",
                answer: `For an abdominal ultrasound, fasting for at least 8–10 hours before your scheduled appointment is required. This helps reduce gas in the abdomen, which can obstruct the view of abdominal organs.\n\nEating also causes the gallbladder to contract, making it harder to detect abnormalities such as gallstones.`,
            },
            {
                question: "Will the sonographer discuss the results?",
                answer: `No, sonographers are not permitted to discuss the results with patients.\n\nThe results will be shared with you via email or WhatsApp. Your doctor will interpret and discuss the findings with you.`,
            },
        ],
        Vaccination: [
            {
                question: "Does RB Diagnostic provide vaccination?",
                answer: "Yes, RB Diagnostic provides COVID related vaccination. ",
            },
            {
                question: "Which branches of RB Diagnostic offer vaccination?",
                answer: `You can avail the vaccination facility to our below centers : 
                Barasat
                Kankurgachi
                Howrah AC
                Topsia
                Deshapriya Park`,
            },
            {
                question: "Which vaccines are available?",
                answer: "RB Diagnostic provides  Covaxin , Covidshield and Covovax Please confirm the availability of the same before making your booking.",
            },
            {
                question: "What are the charges for vaccination?",
                answer: "Charges for COVAXIN and COVIDSHIELD is INR 380/- per dose.",
            },
            {
                question: "Who can take the vaccination?",
                answer: "Anybody above 15 years of age is eligible to take vaccination.",
            },
            {
                question: "How can I book an appointment for vaccination?",
                answer: "You can book an appointment for vaccination through the RB Diagnostic website or you can download the RB Diagnostic application www.rb-it.in on your mobile and simply book a slot.",
            },
            {
                question: "What do I need to do to get myself vaccinated?",
                answer: "As per the government guidelines, you are required to register yourself on the CoWIN portal to receive vaccination. ",
            },
            {
                question: "How do I register myself on CoWin?",
                answer: `You can complete the registration on the CoWIN application with the following steps: 
Please log on to the CoWIN portal. Link is www.cowin.gov.in.
Click on registration and add your functional mobile number .
Enter your name and upload a valid government ID to finish the registration.`,
            },
            {
                question: "Is the registration on CoWin compulsory for vaccination?",
                answer: "As per the guidelines received by Government of India, registration on CoWIN is mandatory for vaccination.",
            },
            {
                question: "Can I get vaccinated before my due date?",
                answer: "No, as per government guidelines, you cannot get vaccinated before the due date.",
            },
            {
                question: "I have not received my vaccination certificate. What should I do?",
                answer: "Your vaccination certificate is automatically uploaded on the CoWIN portal after vaccination, please refer to the portal. If you still do not find it, call on 4085-4085 and our customer service representative will be happy to help you.",
            },
            {
                question: "What should I do if I feel sick after vaccination?",
                answer: "You may feel pain in the arm where you have taken vaccination or catch a slight fever. These are normal side effects. In case, there is anything else, you may consult a doctor at RB Diagnostic.",
            },
            {
                question: "Do you have any doctor at the site of the vaccination?",
                answer: "At the site of vaccination, trained medical staff is available. They can handle any emergency that may occur.",
            },
            {
                question: "What are the common side effects of vaccination?",
                answer: `Some common side effects of vaccination are: 
 

Mild headaches
Pain or swelling at the injection site
Mild fever
Irritability`,
            },
            {
                question: "How do I know if I am eligible for a precaution dose?",
                answer: "As soon as you are eligible for the precaution dose, you will receive a message from the West Bengal Government. Additionally, you can check the same on the CoWIN portal also.",
            },
            {
                question: "When should the precaution dose be taken?",
                answer: "You can get the precaution dose 9 months after receiving the 2nd dose.",
            },
            {
                question: "Which vaccine should I get if I am eligible for precaution dose?",
                answer: "Presently, COVAXIN and COVIDSHIELD are the two types of precaution dose available in India. You will get one of these two precaution doses but can not choose the dose that you would like to take.",
            },
            {
                question: "Which documents should I carry with me for vaccination?",
                answer: "You need a valid Photo ID proof to receive vaccination. Please carry any of the following : Aadhar Card/ Passport/PAN Card",
            },
            {
                question: "Is it necessary for a COVID recovered person to take the vaccine?",
                answer: "It is advisable to receive the complete schedule of the COVID vaccine irrespective of past history of infection. This will help develop better immune responses against the disease.",
            },
            {
                question: "After taking the vaccine, do I still need to practice COVID appropriate behavior?",
                answer: "Yes, even after taking the vaccine, one should continue to practice COVID appropriate behaviors like wearing masks, washing or sanitizing hands frequently and maintaining physical distance.",
            },
            {
                question: "I have already taken a vaccine outside India. Can I take the next vaccination in India?",
                answer: "Yes you can. Please carry the details of your previous vaccination along with you on the date of appointment at RB Diagnostic.",
            },
            {
                question: "I am pregnant, can I take a vaccine?",
                answer: "Yes, you can take a vaccine. A prior consultation with your doctor is advised before you do so.",
            },
            {
                question: "Can a lactating mother get vaccinated?",
                answer: "As per the Government guidelines, breastfeeding mothers are eligible to get the COVID-19 vaccine.",
            },
            {
                question: "Can I get contracted with COVID-19 even after the vaccination?",
                answer: "Vaccine is 100% protective. You can contract COVID-19 even after the vaccination. However, the vaccination will help you protect yourself from the severity of the virus.",
            },
        ]



    };

    // console.log(faqData["General Queries"].length);


    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <div className="faqMainContainer">
            <div className="ourPackageUpperSection">
                <h2 className="rb-title ourpackageTitle">FAQs</h2>
                <div className="textParaSection">
                    <p className="paraText">
                        RB Diagnostic offers a comprehensive range of health check-up packages tailored for every stage of life.
                    </p>
                    <p className="paraText">
                        Each package is designed by experts to provide accurate insights and support preventive healthcare, ensuring timely diagnosis and better health outcomes.
                    </p>
                </div>

            </div>

            <div className="midNavButtons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`navBtn ${activeTab === category ? "active" : ""}`}
                        onClick={() => {
                            setActiveTab(category);
                            setOpenIndex(null); // reset accordion when switching
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <h3 className="faqHeading">Frequently Asked question</h3>

            <div className={`faqGrid ${faqData[activeTab]?.length === 1 ? "singleItemCenter" : ""}`}>
                <div className="faqColumn">
                    {faqData[activeTab]
                        ?.filter((_, i) => i % 2 === 0)
                        .map((faq, index) => {
                            const actualIndex = index * 2;
                            return (
                                <div
                                    className={`faqItem ${openIndex === actualIndex ? "open" : ""}`}
                                    key={actualIndex}
                                >
                                    <div
                                        className="faqQuestion"
                                        onClick={() => toggleFAQ(actualIndex)}
                                    >
                                        <span>{faq.question}</span>
                                        <button className="toggleIcon">
                                            {openIndex === actualIndex ? "−" : "+"}
                                        </button>
                                    </div>
                                    {openIndex === actualIndex && (
                                        <div className="faqAnswer">{faq.answer}</div>
                                    )}
                                </div>
                            );
                        })}
                </div>

                <div className="faqColumn">
                    {faqData[activeTab]
                        ?.filter((_, i) => i % 2 !== 0)
                        .map((faq, index) => {
                            const actualIndex = index * 2 + 1;
                            return (
                                <div
                                    className={`faqItem ${openIndex === actualIndex ? "open" : ""}`}
                                    key={actualIndex}
                                >
                                    <div
                                        className="faqQuestion"
                                        onClick={() => toggleFAQ(actualIndex)}
                                    >
                                        <span>{faq.question}</span>
                                        <button className="toggleIcon">
                                            {openIndex === actualIndex ? "−" : "+"}
                                        </button>
                                    </div>
                                    {openIndex === actualIndex && (
                                        <div className="faqAnswer">{faq.answer}</div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>

        </div>
    );
}
