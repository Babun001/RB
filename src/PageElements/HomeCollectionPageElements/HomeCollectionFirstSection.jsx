import png1 from '../../Assets/bike.png';
import png2 from '../../Assets/tubes.png';

import './HomeCollectionCss/HomeCollection.css';

export default function CollectionFirstSec() {
    return (
        <>
            <div className="collectionContainer">
                <div className="collectionUpperSection">
                    <div className="upperTextSection">
                        <h2 className='rb-title collectionTitle'>Home Collection</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis unde nihil cupiditate, iste totam </p>

                    </div>
                    <div className="dottetLine">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</div>
                    <div className="collectionLowerSec">
                        <div className="pngSection">

                            <img src={png1} alt="png" />
                        </div>
                        <div className="secondPngSection">
                            <img src={png2} alt="png" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}