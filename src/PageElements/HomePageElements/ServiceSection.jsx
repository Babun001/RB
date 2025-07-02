import './HomePageCss/ServiceSection.css'
import AnimatedText from '../../AnimatedText';
import { Link } from 'react-router-dom';
import ServiceList from '../../DB/AllServicesList';
export default function ServiceSection() {
    const healthPackages = [
        'Serology',
        'RBD Healthy Life, Blood (Female)',
        'RBD Healthy Life, Blood (Male)',
        'Iron',
        'RBD Healthy Life ( Male )',
        'FSH, LH',
        'Coagulation Profile',
        'RBD Healthy Life ( Female )',
        'LH',
        'Master Health Check up',
    ];


    const locations = [
        'Lake Town',
        'Salt lake',
        'Andul',
        'Tobin Road',
        'kankurgachi',
        'Topsia',
        'Barasat',
        'Deshpriya park',
        'Behala',
        'contai',
        'Nepal(Kathmandu)',
    ];

    return (
        <div className="health-section">
            <div className="formalTexts">
                <AnimatedText tag="h2" type="chars" y={30} className="section-title">
                    Popular Health Packages
                </AnimatedText>
                <p className="section-content">
                    {healthPackages.map((pkg, i) => (
                        <Link key={i} to={`/OurPackagesPage`} className="text-link">
                            {pkg}
                            {i < healthPackages.length - 1 && ' | '}
                        </Link>
                    ))}
                </p>
            </div>

            <div className="formalTexts">
                <AnimatedText tag="h2" type="chars" y={30} className="section-title">
                    Popular Service
                </AnimatedText>
                <p className="section-content">
                    {ServiceList.map((svs, i) => (
                        <Link key={i} to={`/service/${svs.path}`} className="text-link">
                            {svs.name}
                            {i < ServiceList.length - 1 && ' | '}
                        </Link>
                    ))}
                </p>

            </div>

            <div className="formalTexts">
                <AnimatedText tag="h2" type="chars" y={30} className="section-title">
                    Our Presence
                </AnimatedText>
                <p className="section-content">
                    {locations.map((loc, i) => (
                        <Link key={i} to={`/location/${loc.replace(/\s+/g, '-').toLowerCase()}`} className="text-link">
                            {loc}
                            {i < locations.length - 1 && ' | '}
                        </Link>
                    ))}
                </p>
            </div>
        </div>
    );
}
