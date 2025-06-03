import DoctorCard from './DoctorCards';

import ing from '../../Assets/Rounded Rectangle 9.png'

export default function GridMainSection() {
    return (

        <>
            <div className="gridMainContainer">
                <h1>This is main section</h1>
                <DoctorCard
                    name="Dr. A K Jain"
                    specialty="Diabetologist"
                    location="SaltLake"
                    availability="Available"
                    rating={5.0}
                    fees={700}
                    imageUrl={ing  }
                />
            </div>
        </>
    )
}