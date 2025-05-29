import './HomePageCss/TestsSections.css'

export default function TestsSections() {

    const testData = [
        { name: "Heart", link: "#", img: "" },
        { name: "Kidney", link: "#", img: "" },
        { name: "Lungs", link: "#", img: "" },
        { name: "Thyroid", link: "#", img: "" },
        { name: "Liver", link: "#", img: "" },
        { name: "Spinal Disc", link: "#", img: "" },
    ]
    return (
        <>
            <div className="TestsContainer">
                <div className="ourPackageUpperSection">
                    <h4 className="rb-headingTag pk-tag">TESTS</h4>
                    <h2 className="rb-title temp-title">Explore Tests by Organ for Smarter Health Screening</h2>
                    <p className="paraText">
                        At RB Diagnostic, we offer an extensive range of tests convering all major health parameters. From routine screenings to advanced diagnostics,
                    </p>
                    <p className="paraText">
                        our tests are designed to deliver accurate results with the highest precision -empowering you and your doctor to make informed health decisions at every step..
                    </p>
                </div>
                <div className="diseaseSectionExplore">
                    {
                        testData.map((d, indx) => (
                            <div className="cardDiseaseSection" key={indx}>
                                <img src="https://t4.ftcdn.net/jpg/03/88/42/87/360_F_388428739_3zMY6G1T67yE9Y3PjT9AMhhsI6lMOFWI.jpg" alt="" />
                                <h2>{d.name}</h2>
                                <div className="linksDieases">
                                    <a href={d.link}>Explore Now</a>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}