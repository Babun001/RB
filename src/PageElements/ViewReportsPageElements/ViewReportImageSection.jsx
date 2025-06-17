import { MdHome } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import './ViewReportsPageCSS/ViewReportImageSection.css';

export default function ViewReportImageSection() {
    return (
        <>
            <div className="packageFirstContainer viewReportImageSection">
                <div className="packageFirstUpperSection viewReportImageUpperSection">
                    <div className="viewReportUpperText">
                        <p><MdHome size={40}/><FaGreaterThan size={36}/>View Report</p>
                    </div>
                    <h2 className='rb-title'>View Reports</h2>
                </div>
            </div>
        </>
    )
}