import './ContactPageElementsCss/ContactInfoSection.css';

export default function ContactInfoSection() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Contact<br />information</h2>
                    <p>
                        Learn more about our clinic and doctors and<br />
                        why they are trusted by so many families in our community.
                    </p>
                    <div className="contact-details">
                        <div>
                            <strong>ADDRESS:</strong><br />
                            <span className="bold">LakeTown</span>
                        </div>
                        <div>
                            <strong>Open:</strong><br />
                            Monday - Sunday<br />
                            <span className="bold">9am - 7pm</span>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <iframe
                        title="Lake Town Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.953697355755!2d88.41069401504825!3d22.60557948516911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027727e0f53f9b%3A0x4c488b79c6dfc989!2sLake%20Town%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718999812345!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </>
    )
}