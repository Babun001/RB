import png1 from '../../Assets/bike.png';
import png2 from '../../Assets/tubes.png';

import './HomeCollectionCss/HomeCollection.css';

export default function CollectionFirstSec(){
    return(
        <>
        <div className="collectionContainer">
            <div className="collectionUpperSection">
                <h2>Home Collection</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis unde nihil cupiditate, iste totam sapiente! Natus repudiandae atque error id?</p>
            </div>
                    <div className="dottetLine"></div>
            <div className="collectionLowerSec">
                <div className="pngSection">
                    <img src={png1} alt="png" />
                </div>
                <div className="secondPngSection">
                    <img src={png2} alt="png" />
                </div>
            </div>
        </div>
        </>
    )
}