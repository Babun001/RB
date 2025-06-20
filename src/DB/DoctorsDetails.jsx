import img from '../Assets/doctorCardImg.jpg';



const doctors = [
    {
        id: "1",
        name: "Dr. A K Jain",
        specialty: "Diabetologist",
        experience: 7,
        location: "Salt Lake",
        fees: 700,
        availability: true,
        imageUrl: img,
        contact: "033-4085-4085",
        rating: 5.0,
        reviews: 150,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vero aperiam, perferendis tempora saepe iure quas distinctio a recusandae eaque repudiandae sed doloribus tenetur. Consectetur nostrum placeat cum quibusdam. Ipsam eligendi",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2024")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2023")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2022")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2021")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2020")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
            { awdName: 'Awards Name (2024")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" },
        ],
        experienceDetails: [
            {
                hospital: "Cambridge University Hospital, NHS Foundation Trust",
                department: "ENT",
                location: "Cambridge",
                duration: "Dec 2020 - Jan 2022",
                total: "2 Years 2 months",
                description: "Expert in diagnostics, primary care, and emergency medicine.",
                logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeQkx61Sz20haGctI4_ZuESB7OugXJcbipNlRW6SFWo7ni4y5PFNxCqWthWmyG-c3S0k&usqp=CAU'
            },
            {
                hospital: "Hill Medical Hospital, Newcastle",
                department: "",
                location: "Newcastle",
                duration: "Dec 2022 - Jan 2024",
                total: "1 Year 2 months",
                description: "Expertise in diagnostics, primary care and emergency medicine.",
                logo:'https://penji.co/wp-content/uploads/2022/10/6-hill-medical-1024x1024.jpg.webp'
            }
        ]
    },
    {
        id: "2",
        name: "Dr. Priya Roy",
        specialty: "Cardiologist",
        experience: "10 Yrs Exp",
        location: "Park Street",
        fees: 900,
        availability: false,
        imageUrl: img,
        contact: "033-4022-1122",
        rating: 4.8,
        reviews: 98,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Heart care specialist with expertise in preventive cardiology and interventional treatments.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
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
        name: "Dr. Rakesh Mehra",
        specialty: "Dermatologist",
        experience: "5 Yrs Exp",
        location: "Ballygunge",
        fees: 600,
        availability: true,
        imageUrl: img,
        contact: "033-4090-0022",
        rating: 4.6,
        reviews: 80,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Skincare expert handling acne, pigmentation, and cosmetic dermatology.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "Kaya Clinic",
                department: "Skin",
                location: "Mumbai",
                duration: "Jan 2019 - Jan 2021",
                total: "2 Years",
                description: "Acne and scar treatment specialist."
            },
            {
                hospital: "VLCC Skin Center",
                department: "Dermatology",
                location: "Delhi",
                duration: "Jan 2021 - Present",
                total: "3 Years",
                description: "Pigmentation and cosmetic treatments."
            }
        ]
    },
    {
        id: "4",
        name: "Dr. Sneha Das",
        specialty: "Pediatrician",
        experience: "8 Yrs Exp",
        location: "New Town",
        fees: 650,
        availability: true,
        imageUrl: img,
        contact: "033-4055-1144",
        rating: 4.9,
        reviews: 120,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Child health specialist providing neonatal and adolescent care.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
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
        name: "Dr. Manish Gupta",
        specialty: "Orthopedic Surgeon",
        experience: "12 Yrs Exp",
        location: "Dumdum",
        fees: 850,
        availability: false,
        imageUrl: img,
        contact: "033-4099-1177",
        rating: 4.7,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        reviews: 110,
        bio: "Bone and joint specialist, expert in sports injuries and joint replacements.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "Fortis Hospital",
                department: "Orthopedics",
                location: "Delhi",
                duration: "2011 - 2016",
                total: "5 Years",
                description: "Knee and hip replacement surgeries."
            },
            {
                hospital: "Medica Superspeciality",
                department: "",
                location: "Kolkata",
                duration: "2016 - Present",
                total: "8 Years",
                description: "Fracture and trauma care."
            }
        ]
    },
    {
        id: "6",
        name: "Dr. Rituparna Sen",
        specialty: "Psychiatrist",
        experience: "6 Yrs Exp",
        location: "Behala",
        fees: 750,
        availability: true,
        imageUrl: img,
        contact: "033-4044-1188",
        rating: 4.5,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        reviews: 87,
        bio: "Mental health professional with experience in anxiety, depression and trauma therapy.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "NIMHANS",
                department: "Psychiatry",
                location: "Bangalore",
                duration: "2016 - 2020",
                total: "4 Years",
                description: "Handled chronic mental illness and emergency psychiatric care."
            },
            {
                hospital: "Apollo Clinic",
                department: "",
                location: "Kolkata",
                duration: "2020 - Present",
                total: "4 Years",
                description: "Private counseling and therapy sessions."
            }
        ]
    },
    {
        id: "7",
        name: "Dr. Vivek Sharma",
        specialty: "ENT Specialist",
        experience: "9 Yrs Exp",
        location: "Kestopur",
        fees: 500,
        availability: true,
        imageUrl: img,
        contact: "033-4095-1199",
        rating: 4.8,
        reviews: 70,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "ENT surgeon for sinus, tonsils, ear problems and surgeries.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "AIIMS Delhi",
                department: "ENT",
                location: "Delhi",
                duration: "2013 - 2017",
                total: "4 Years",
                description: "Operated on complex ENT cases."
            },
            {
                hospital: "Fortis ENT Center",
                department: "",
                location: "Gurgaon",
                duration: "2017 - Present",
                total: "6 Years",
                description: "Outpatient ENT and endoscopy."
            }
        ]
    },
    {
        id: "8",
        name: "Dr. Anjali Mukherjee",
        specialty: "Gynaecologist",
        experience: "11 Yrs Exp",
        location: "Howrah",
        fees: 800,
        availability: false,
        imageUrl: img,
        contact: "033-4033-7788",
        rating: 4.6,
        reviews: 65,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Women's health expert in fertility, pregnancy care and hormonal issues.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "Cloudnine Hospital",
                department: "Gynecology",
                location: "Bangalore",
                duration: "2011 - 2016",
                total: "5 Years",
                description: "Pregnancy management and gyne surgeries."
            },
            {
                hospital: "Apollo Women’s Hospital",
                department: "",
                location: "Kolkata",
                duration: "2016 - Present",
                total: "7 Years",
                description: "Menstrual and fertility care."
            }
        ]
    },
    {
        id: "9",
        name: "Dr. Arunava Das",
        specialty: "Urologist",
        experience: "13 Yrs Exp",
        location: "Rajarhat",
        fees: 950,
        availability: true,
        imageUrl: img,
        contact: "033-4088-2299",
        rating: 4.9,
        reviews: 140,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Kidney and urinary tract specialist, experienced in laparoscopy and prostate treatments.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "Max Healthcare",
                department: "Urology",
                location: "Delhi",
                duration: "2010 - 2016",
                total: "6 Years",
                description: "Performed laparoscopic kidney surgeries."
            },
            {
                hospital: "Medanta",
                department: "",
                location: "Gurgaon",
                duration: "2016 - Present",
                total: "8 Years",
                description: "Prostate cancer diagnosis and surgeries."
            }
        ]
    },
    {
        id: "10",
        name: "Dr. Tania Sinha",
        specialty: "Oncologist",
        experience: "9 Yrs Exp",
        location: "Barasat",
        fees: 1000,
        availability: false,
        imageUrl: img,
        contact: "033-4012-2299",
        rating: 4.7,
        reviews: 95,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Cancer care expert specializing in chemotherapy, radiation and palliative care.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "Tata Memorial Hospital",
                department: "Oncology",
                location: "Mumbai",
                duration: "2014 - 2018",
                total: "4 Years",
                description: "Handled complex cancer cases."
            },
            {
                hospital: "AMRI Hospital",
                department: "",
                location: "Kolkata",
                duration: "2018 - Present",
                total: "6 Years",
                description: "Radiotherapy and end-of-life care."
            }
        ]
    },
    {
        id: "11",
        name: "Dr. Swapan Bhattacharya",
        specialty: "Gastroenterologist",
        experience: "15 Yrs Exp",
        location: "Kasba",
        fees: 850,
        availability: true,
        imageUrl: img,
        contact: "033-4066-8877",
        rating: 4.8,
        reviews: 130,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        bio: "Digestive tract expert with expertise in liver diseases and endoscopy.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "KIMS Hospital",
                department: "Gastro",
                location: "Hyderabad",
                duration: "2008 - 2014",
                total: "6 Years",
                description: "Performed liver biopsies and upper GI procedures."
            },
            {
                hospital: "Belle Vue Clinic",
                department: "",
                location: "Kolkata",
                duration: "2014 - Present",
                total: "10 Years",
                description: "Handles liver cirrhosis and pancreas-related disorders."
            }
        ]
    },
    {
        id: "12",
        name: "Dr. Kavita Bose",
        specialty: "Neurologist",
        experience: "14 Yrs Exp",
        location: "Sealdah",
        fees: 950,
        availability: true,
        imageUrl: img,
        contact: "033-4000-9922",
        rating: 4.9,
        availableDays: ["Monday", "Wednessday", "Sunday"],
        languages:["Bengali","English", "Hindi"],
        reviews: 155,
        bio: "Brain and nervous system specialist, expert in stroke and epilepsy care.",
        Awards: [
            { awdName: 'Awards Name (2025")', awdDetails: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, soluta!" }
        ],
        experienceDetails: [
            {
                hospital: "AIIMS",
                department: "Neurology",
                location: "Delhi",
                duration: "2010 - 2016",
                total: "6 Years",
                description: "Managed neurocritical and degenerative disorders."
            },
            {
                hospital: "Peerless Hospital",
                department: "",
                location: "Kolkata",
                duration: "2016 - Present",
                total: "8 Years",
                description: "Outpatient and stroke care expert."
            }
        ]
    }
];

export default doctors;
