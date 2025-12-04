import bannerImage from '../../Public_Assets/Business Card-20251115T095449Z-1-001/Banner.jpg';
import cardImage1 from '../../Public_Assets/Business Card-20251115T095449Z-1-001/1.jpg';
import cardImage2 from '../../Public_Assets/Business Card-20251115T095449Z-1-001/2.jpg';
import cardImage3 from '../../Public_Assets/Business Card-20251115T095449Z-1-001/3.jpg';

export function BusinessCards() {
    return (
        <main>
            <section className="product-hero">
                <div className="container">
                    <div className="product-hero-content">
                        <h1>Business Cards</h1>
                        <p className="subtitle">Small in size, big on impression.</p>
                        <p className="description">
                            Your business card is often the first piece of your brand that someone holds in their hand. Whether you're
                            meeting new clients, attending events, or adding a personal touch to packages, a well-designed card leaves
                            a lasting impression. Choose from a range of stocks, finishes, and specialty options to create a card that
                            represents your brand the right way.
                        </p>
                        <a className="btn btn-primary" href="/contact#inquiry">
                            Request a Quote
                        </a>
                    </div>
                    <div className="product-hero-image">
                        <img src={bannerImage} alt="Business Cards" />
                    </div>
                </div>
            </section>

            <section className="product-options">
                <div className="container">
                    <div className="options-grid">
                        <div className="option-category">
                            <h2>Standard Stocks</h2>
                            <p>
                                A reliable and professional choice for everyday use. These stocks offer excellent print clarity and a
                                polished look suitable for almost any industry.
                            </p>
                            <ul>
                                <li><strong>14pt:</strong> Matte Finish, UV (High Gloss), Writable</li>
                                <li><strong>16pt:</strong> Matte Finish, UV (High Gloss)</li>
                                <li><strong>18pt:</strong> Gloss, Matte, or Silk Lamination, Writable</li>
                                <li><strong>13pt Enviro Uncoated:</strong> Eco-friendly with a natural, uncoated texture</li>
                            </ul>
                        </div>
                        <div className="option-image">
                            <img src={cardImage1} alt="Standard Business Cards" />
                        </div>
                    </div>

                    <div className="options-grid reverse">
                        <div className="option-category">
                            <h2>Premium Stocks</h2>
                            <p>
                                Upgrade to materials that offer a unique look and feel. These premium options enhance the tactile
                                experience and elevate your brand presentation.
                            </p>
                            <ul>
                                <li><strong>Soft Touch:</strong> Smooth, velvety matte finish</li>
                                <li><strong>Pearl Paper:</strong> Subtle shimmer for an elegant touch</li>
                                <li><strong>Linen:</strong> Textured surface for a classic, refined appearance</li>
                                <li><strong>Kraft Paper:</strong> Natural, rustic, and eco-forward</li>
                                <li><strong>Ultra Smooth:</strong> Clean and modern with crisp print quality</li>
                                <li><strong>Durable (Waterproof & Tear Resistant):</strong> Ideal for heavy use or outdoor settings</li>
                            </ul>
                        </div>
                        <div className="option-image">
                            <img src={cardImage2} alt="Premium Business Cards" />
                        </div>
                    </div>

                    <div className="options-grid">
                        <div className="option-category">
                            <h2>Special Finishes</h2>
                            <p>
                                Highlight important details, create contrast, or add texture with specialty finishes that bring your
                                business card design to life.
                            </p>
                            <ul>
                                <li><strong>Spot UV (Raised):</strong> Glossy accents that stand out against matte areas</li>
                                <li><strong>Metallic Foil (Raised):</strong> Premium gold, silver, or colored foil options</li>
                                <li><strong>AQ (Aqueous Coating):</strong> Smooth, protective surface</li>
                                <li><strong>Die Cut Shapes:</strong> Custom shapes beyond the standard rectangle</li>
                                <li><strong>Painted Edge Cards:</strong> Bold colors added to the card edges</li>
                                <li><strong>Folded Business Cards:</strong> Extra space for more information or creative layouts</li>
                            </ul>
                        </div>
                        <div className="option-image">
                            <img src={cardImage3} alt="Special Finishes" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-content">
                    <div>
                        <h2>Ready to order your business cards?</h2>
                        <p>
                            Every business card we print is crafted with precision to match your brand and purpose. Whether you prefer
                            a clean and minimal card or something bold with texture and shine, we help you choose the right
                            combination of stock and finishes to bring your design to life.
                        </p>
                    </div>
                    <a className="btn btn-primary" href="/contact#inquiry">
                        Request a Quote
                    </a>
                </div>
            </section>
        </main>
    );
}
