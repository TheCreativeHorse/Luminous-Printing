import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g. API call)
        alert('Thank you for your message! We will get back to you shortly.');
    };

    return (
        <main>
            <section className="contact-page">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-content">
                            <h1 className="contact-heading">Contact Us</h1>
                            <p className="contact-description">
                                Have a question about our products or need a custom quote?
                                We're here to help! Reach out to us via phone or email,
                                or simply fill out the form and our team will get back to you
                                as soon as possible.
                            </p>

                            <div className="contact-info-block">
                                <div className="contact-item">
                                    <h3>Phone</h3>
                                    <p>+1 (647) 281-1177</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Email</h3>
                                    <p>info@luminousprinting.ca</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Location</h3>
                                    <p>689 Four Winds Way, Mississauga</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Follow Us</h3>
                                    <div className="social-links">
                                        <a href="https://www.instagram.com/luminousprinting.ca" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <FaInstagram />
                                        </a>
                                        <a href="https://www.facebook.com/luminousprinting.ca" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                            <FaFacebook />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required placeholder="name@example.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
