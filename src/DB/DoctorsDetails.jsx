import img from '../Assets/doctorCardImg.jpg';



const doctors = [
    {
        id: "1",
        degree:"BAMS",
        name: "Dr. A K Jain",
        specialty: "Diabetologist",
        experience: 7,
        location: "Salt Lake",
        fees: 700,
        availability: true,
        imageUrl: "https://content.jdmagicbox.com/comp/kolkata/n3/033pxx33.xx33.170124224943.n9n3/catalogue/dr-a-k-jain-rbi-diagnostic-salt-lake-kolkata-vojnq.jpg",
        contact: "033-4085-4085",
        rating: 5.0,
        reviews: 150,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "Dr. A K Jain is a very experienced General Physician and Diabetologist consultant in Kolkata. He currently provides consultations at RB Diagnostics Center in Salt Lake City Kolkata. Some of the specialties of consultation provided by her are: diabetes, insulin and other consultations",
        training: "In view of these lessons, he developed interest for this discipline and completed graduation from Lucknow University. He is a 1983 batch Ayurvedacharya from Delhi and got registered under the “Board of Indian Medicine, UP",
        Awards: [
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2024")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2023")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2022")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2021")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2020")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            // { awdName: 'Awards Name (2024")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
        ],
        experienceDetails: [
            // {
            //     hospital: "Cambridge University Hospital, NHS Foundation Trust",
            //     department: "ENT",
            //     location: "Cambridge",
            //     duration: "Dec 2020 - Jan 2022",
            //     total: "2 Years 2 months",
            //     description: "Expert in diagnostics, primary care, and emergency medicine.",
            //     logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeQkx61Sz20haGctI4_ZuESB7OugXJcbipNlRW6SFWo7ni4y5PFNxCqWthWmyG-c3S0k&usqp=CAU'
            // },
            // {
            //     hospital: "Hill Medical Hospital, Newcastle",
            //     department: "",
            //     location: "Newcastle",
            //     duration: "Dec 2022 - Jan 2024",
            //     total: "1 Year 2 months",
            //     description: "Expertise in diagnostics, primary care and emergency medicine.",
            //     logo: 'https://penji.co/wp-content/uploads/2022/10/6-hill-medical-1024x1024.jpg.webp'
            // }
        ]
    },
    {
        id: "2",
        degree:"MBBS MD",
        name: "Dr. A K Saha (hwh)",
        specialty: "Diabetologist",
        experience: "10",
        location: "Andul",
        fees: 550,
        availability: true,
        imageUrl: "",
        contact: "033-4022-1122",
        rating: 4.8,
        reviews: 98,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "Attached in Arst Bengal Medical Education services since last 15 years in Laboratory Medicine. He has completed his MBBS from Calcutta University & MD from Nagpur University",
        training: "Certificate course from 1. CCEBDM 2.CCMTD 3.ACMDC 4.CCCS 5.CCCA",
        Awards: [
        ],
        experienceDetails: [
            {
                hospital: "Apollo Gleneagles",
                department: "Cardiology",
                location: "Kolkata",
                duration: "Jan 2016 - Dec 2021",
                total: "6 Years",
                description: "Specialized in angioplasty and heart failure management."
            },
            {
                hospital: "Narayana Superspeciality",
                department: "ICU",
                location: "Howrah",
                duration: "Jan 2022 - Present",
                total: "2 Years 6 months",
                description: "Managing complex heart conditions in critical patients."
            }
        ]
    },
    {
        id: "3",
        degree:"M.SC(Psychology)",
        name: "Dr. Aanchal Murarka",
        specialty: "Psychologist",
        experience: "5",
        location: "Salt Lake",
        fees: 1000,
        availability: true,
        imageUrl: "https://d3c5rx7t9wpvpx.cloudfront.net/kiosk-pdf/AANCHAL_MURARKA.jpg",
        contact: "033-4090-0022",
        rating: 4.6,
        reviews: 80,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "",
        training: "",
        Awards: [
        ],
        experienceDetails: [
            // {
            //     hospital: "Kaya Clinic",
            //     department: "Skin",
            //     location: "Mumbai",
            //     duration: "Jan 2019 - Jan 2021",
            //     total: "2 Years",
            //     description: "Acne and scar treatment specialist."
            // },
            // {
            //     hospital: "VLCC Skin Center",
            //     department: "Dermatology",
            //     location: "Delhi",
            //     duration: "Jan 2021 - Present",
            //     total: "3 Years",
            //     description: "Pigmentation and cosmetic treatments."
            // }
        ]
    },
    {
        id: "4",
        degree:"MS(Ortho)",
        name: "Dr. Abdul Naim Ostagar",
        specialty: "Pediatrician",
        experience: "7",
        location: "Laketown",
        fees: 800,
        availability: true,
        imageUrl: "https://d3c5rx7t9wpvpx.cloudfront.net/kiosk-pdf/ABDUL_NAIM_OSTAGAR.jpg",
        contact: "033-4055-1144",
        rating: 5,
        reviews: 120,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "Dr. Abdul Naim Ostagar is a distinguished spine care surgeon in Kolkata, known for his unwavering dedication to improving the lives of individuals suffering from spinal disorders. With an impressive educational background, extensive clinical experience, and a commitment to innovation, Dr. Ostagar has risen to prominence in the field of orthopaedic surgery. His journey in the medical field began with the successful completion of his MBBS degree from North Bengal Medical College in 2008, under the West Bengal University of Health Sciences. His early academic excellence was recognised with a Certificate of Merit from the National Scholarship Scheme of the Government of India for his outstanding performance in the Higher Secondary Examination in 2003. This recognition laid the foundation for his future achievements. His relentless pursuit of knowledge led him to specialise in orthopaedics. He earned his MS in Orthopaedics from North Bengal Medical College in 2014, further enhancing his me",
        training: "Neurospine fellowship(Park Clinic), Spine training (NUH , Singapore)",
        Awards: [
            { awdName: 'BEST SCIENTIFIC PAPER AWARD', awdDetails: "Won 3rd place of The Annual Conference of Neuro Spinal Surgeons association of India. SPINE 2015,GOA. BEST POSTER AWARD: SPINE 2016, KOLKATA" }
        ],
        experienceDetails: [
            {
                hospital: "Rainbow Children's Hospital",
                department: "Pediatrics",
                location: "Hyderabad",
                duration: "2015 - 2019",
                total: "4 Years",
                description: "Newborn intensive care and growth monitoring."
            },
            {
                hospital: "Apollo Cradle",
                department: "",
                location: "Chennai",
                duration: "2020 - Present",
                total: "4 Years",
                description: "Adolescent counseling and immunization programs."
            }
        ]
    },
    {
        id: "5",
        degree:"MBBS, DGO",
        name: "Dr. Abha Saraf Gutgutia",
        specialty: "Gynecologist",
        experience: "37",
        location: "Laketown",
        fees: 800,
        availability: true,
        imageUrl: "https://d3c5rx7t9wpvpx.cloudfront.net/kiosk-pdf/ABHA_SARAF_GUTGUTIA.jpg",
        contact: "033-4099-1177",
        rating: 4.7,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        reviews: 110,
        bio: "",
        training: "",
        Awards: [
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            // {
            //     hospital: "Fortis Hospital",
            //     department: "Orthopedics",
            //     location: "Delhi",
            //     duration: "2011 - 2016",
            //     total: "5 Years",
            //     description: "Knee and hip replacement surgeries."
            // },
            // {
            //     hospital: "Medica Superspeciality",
            //     department: "",
            //     location: "Kolkata",
            //     duration: "2016 - Present",
            //     total: "8 Years",
            //     description: "Fracture and trauma care."
            // }
        ]
    },
    {
        id: "6",
        degree:"MBBS DTCD MD",
        name: "Dr. Abhay Dey",
        specialty: "Psychiatrist",
        experience: "33",
        location: "Deshpriya Park",
        fees: 800,
        availability: true,
        imageUrl: "https://d3c5rx7t9wpvpx.cloudfront.net/kiosk-pdf/ABHAY_DEY.jpg",
        contact: "033-4044-1188",
        rating: 4.5,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        reviews: 87,
        bio: "Mental health professional with experience in anxiety, depression and trauma therapy.",
        training: "",
        Awards: [
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            // {
            //     hospital: "NIMHANS",
            //     department: "Psychiatry",
            //     location: "Bangalore",
            //     duration: "2016 - 2020",
            //     total: "4 Years",
            //     description: "Handled chronic mental illness and emergency psychiatric care."
            // },
            // {
            //     hospital: "Apollo Clinic",
            //     department: "",
            //     location: "Kolkata",
            //     duration: "2020 - Present",
            //     total: "4 Years",
            //     description: "Private counseling and therapy sessions."
            // }
        ]
    },
    {
        id: "7",
        degree:"MS(Ortho)",
        name: "Dr. Abhik Ray",
        specialty: "Orthopaedic",
        experience: "14",
        location: "Laketown",
        fees: 600,
        availability: true,
        imageUrl: "https://d3c5rx7t9wpvpx.cloudfront.net/kiosk-pdf/ABHIK_RAY.jpg",
        contact: "033-4095-1199",
        rating: 4.8,
        reviews: 70,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "Consultant joint replacement & trauma surgeon",
        training: "Fellowship in Joint Replacement sugery, Mumbai Fellowship in Hip Replacement surgery, Milan, Italy Fellowship in Advance trauma surgery, Seoul, SK",
        Awards: [
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            // {
            //     hospital: "AIIMS Delhi",
            //     department: "ENT",
            //     location: "Delhi",
            //     duration: "2013 - 2017",
            //     total: "4 Years",
            //     description: "Operated on complex ENT cases."
            // },
            // {
            //     hospital: "Fortis ENT Center",
            //     department: "",
            //     location: "Gurgaon",
            //     duration: "2017 - Present",
            //     total: "6 Years",
            //     description: "Outpatient ENT and endoscopy."
            // }
        ]
    },
    {
        id: "8",
        degree:"MBBS, MD(Med)",
        name: "Dr. Abhisek Rath",
        specialty: "General Medicine",
        experience: "8",
        location: "Kankurgachi",
        fees: 600,
        availability: true,
        imageUrl: "",
        contact: "033-4033-7788",
        rating: 4.6,
        reviews: 65,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "Consultant Physician, Specialised in Diabetology",
        training: "",
        Awards: [
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            // {
            //     hospital: "Cloudnine Hospital",
            //     department: "Gynecology",
            //     location: "Bangalore",
            //     duration: "2011 - 2016",
            //     total: "5 Years",
            //     description: "Pregnancy management and gyne surgeries."
            // },
            // {
            //     hospital: "Apollo Women’s Hospital",
            //     department: "",
            //     location: "Kolkata",
            //     duration: "2016 - Present",
            //     total: "7 Years",
            //     description: "Menstrual and fertility care."
            // }
        ]
    },
    {
        id: "9",
        degree:"MBBS, MRCS (UK)",
        name: "Dr. Abhishek Bhartia",
        specialty: "General & Laparoscopic Surgeon",
        experience: "7",
        location: "Salt Lake",
        fees: 800,
        availability: true,
        imageUrl: "https://d3c5rx7t9wpvpx.cloudfront.net/kiosk-pdf/ABHISHEK_BHARTIA.jpg",
        contact: "033-4088-2299",
        rating: 4.9,
        reviews: 140,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages: ["Bengali", "English", "Hindi"],
        bio: "Dr. Abhishek Bhartia is a Well Known Laparoscopic Surgeon of Kolkata",
        training: "",
        Awards: [
            // { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            // {
            //     hospital: "Max Healthcare",
            //     department: "Urology",
            //     location: "Delhi",
            //     duration: "2010 - 2016",
            //     total: "6 Years",
            //     description: "Performed laparoscopic kidney surgeries."
            // },
            // {
            //     hospital: "Medanta",
            //     department: "",
            //     location: "Gurgaon",
            //     duration: "2016 - Present",
            //     total: "8 Years",
            //     description: "Prostate cancer diagnosis and surgeries."
            // }
        ]
    },
    // {
    //     id: "10",
    //     name: "Dr. Tania Sinha",
    //     specialty: "Oncologist",
    //     experience: "9 Yrs Exp",
    //     location: "Barasat",
    //     fees: 1000,
    //     availability: false,
    //     imageUrl: img,
    //     contact: "033-4012-2299",
    //     rating: 4.7,
    //     reviews: 95,
    //     availableDays: ["Monday", "Wednessday", "Sunday"],
    //     languages: ["Bengali", "English", "Hindi"],
    //     bio: "Cancer care expert specializing in chemotherapy, radiation and palliative care.",
    //     Awards: [
    //         { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
    //     ],
    //     experienceDetails: [
    //         {
    //             hospital: "Tata Memorial Hospital",
    //             department: "Oncology",
    //             location: "Mumbai",
    //             duration: "2014 - 2018",
    //             total: "4 Years",
    //             description: "Handled complex cancer cases."
    //         },
    //         {
    //             hospital: "AMRI Hospital",
    //             department: "",
    //             location: "Kolkata",
    //             duration: "2018 - Present",
    //             total: "6 Years",
    //             description: "Radiotherapy and end-of-life care."
    //         }
    //     ]
    // },
    // {
    //     id: "11",
    //     name: "Dr. Swapan Bhattacharya",
    //     specialty: "Gastroenterologist",
    //     experience: "15 Yrs Exp",
    //     location: "Kasba",
    //     fees: 850,
    //     availability: true,
    //     imageUrl: img,
    //     contact: "033-4066-8877",
    //     rating: 4.8,
    //     reviews: 130,
    //     availableDays: ["Monday", "Wednessday", "Sunday"],
    //     languages: ["Bengali", "English", "Hindi"],
    //     bio: "Digestive tract expert with expertise in liver diseases and endoscopy.",
    //     Awards: [
    //         { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
    //     ],
    //     experienceDetails: [
    //         {
    //             hospital: "KIMS Hospital",
    //             department: "Gastro",
    //             location: "Hyderabad",
    //             duration: "2008 - 2014",
    //             total: "6 Years",
    //             description: "Performed liver biopsies and upper GI procedures."
    //         },
    //         {
    //             hospital: "Belle Vue Clinic",
    //             department: "",
    //             location: "Kolkata",
    //             duration: "2014 - Present",
    //             total: "10 Years",
    //             description: "Handles liver cirrhosis and pancreas-related disorders."
    //         }
    //     ]
    // },
    // {
    //     id: "12",
    //     name: "Dr. Kavita Bose",
    //     specialty: "Neurologist",
    //     experience: "14 Yrs Exp",
    //     location: "Sealdah",
    //     fees: 950,
    //     availability: true,
    //     imageUrl: img,
    //     contact: "033-4000-9922",
    //     rating: 4.9,
    //     availableDays: ["Monday", "Wednessday", "Sunday"],
    //     languages: ["Bengali", "English", "Hindi"],
    //     reviews: 155,
    //     bio: "Brain and nervous system specialist, expert in stroke and epilepsy care.",
    //     Awards: [
    //         { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
    //     ],
    //     experienceDetails: [
    //         {
    //             hospital: "AIIMS",
    //             department: "Neurology",
    //             location: "Delhi",
    //             duration: "2010 - 2016",
    //             total: "6 Years",
    //             description: "Managed neurocritical and degenerative disorders."
    //         },
    //         {
    //             hospital: "Peerless Hospital",
    //             department: "",
    //             location: "Kolkata",
    //             duration: "2016 - Present",
    //             total: "8 Years",
    //             description: "Outpatient and stroke care expert."
    //         }
    //     ]
    // }
];

export default doctors;
