import img from '../Assets/doctorCardImg.jpg';

const BestDoctorsList = [
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
        languages: ["Bengali", "English", "Hindi"],
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
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeQkx61Sz20haGctI4_ZuESB7OugXJcbipNlRW6SFWo7ni4y5PFNxCqWthWmyG-c3S0k&usqp=CAU'
            },
            {
                hospital: "Hill Medical Hospital, Newcastle",
                department: "",
                location: "Newcastle",
                duration: "Dec 2022 - Jan 2024",
                total: "1 Year 2 months",
                description: "Expertise in diagnostics, primary care and emergency medicine.",
                logo: 'https://penji.co/wp-content/uploads/2022/10/6-hill-medical-1024x1024.jpg.webp'
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
        languages: ["Bengali", "English", "Hindi"],
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
        languages: ["Bengali", "English", "Hindi"],
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
        languages: ["Bengali", "English", "Hindi"],
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
    
    
]

export default BestDoctorsList;