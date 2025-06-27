import { MdHome } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import './ServiceComponentsCSS/ServiceHeader.css'

export default function ServiceHeader({ childClass, breadcrumb, title }) {


    return (
        <div className={`packageFirstContainer viewReportImageSection ${childClass}`} >
            <div className="packageFirstUpperSection viewReportImageUpperSection">
                <h2 className='rb-title'>{title}</h2>
                <div className="viewReportUpperText">
                    <p>
                        <MdHome size={30} style={{ color: "#0A8E7F" }} />
                        <FaGreaterThan size={15} />
                        {breadcrumb}
                    </p>
                </div>

            </div>
        </div>
    );
}
