import { useState } from 'react';
import './DoctorsGridPageCss/DoctorGridFirstSection.css';
import { FaSearch, FaStethoscope } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";

import DoctorImageSection from './DoctorImageSection';


export default function DoctorsGridFirstSection({ onSearch }) {
    const [doctorName, setDoctorName] = useState('');
    const [department, setDepartment] = useState('');

    const handleSearch = () => {
        onSearch({ doctorName, department });
    };

    return (
        <div className="gridContainer">
            <div className="gridUpperTextSection">
                
                <DoctorImageSection/>

                <div className="customSearchBar">
                    <div className="inputWithIcon">
                        <FaUser className="inputIcon" />
                        <input
                            type="text"
                            placeholder="Search Doctor by name"
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                        />
                    </div>

                    <div className="divider" />

                    <div className="inputWithIcon">
                        <FaStethoscope className="inputIcon" />
                        <input
                            type="text"
                            placeholder="By Departments"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                    </div>

                    <button className="styledSearchBtn" onClick={handleSearch}>
                        <FaSearch /> <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
