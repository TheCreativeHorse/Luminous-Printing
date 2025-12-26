import { products } from '../data/products';

export function BannerSignsFlagsBatch1() {
    const batch1Keys = [
        'banners',
        'retractable-banners',
        'lawn-signs',
        'a-frame-signs',
        'acrylic-signs',
        'alupanel-signs'
    ];

    return (
        <main>
            <section className="product-list">
                <div className="container">
                    {batch1Keys.map((key, index) => {
                        const product = products[key];
                        const isEven = index % 2 === 0;

                        return (
                            <div key={key} id={key} className={`product-section ${isEven ? '' : 'reverse'}`}>
                                <div className="product-image">
                                    <img src={product.heroImage} alt={product.title} />
                                </div>
                                <div className="product-details">
                                    <h2>{product.title}</h2>
                                    <p className="product-subtitle">{product.subtitle}</p>
                                    <p className="product-description">{product.description}</p>

                                    <div className="product-specs">
                                        {product.sections.map((section, i) => (
                                            <div key={i} className="spec-group">
                                                <h3>{section.title}</h3>
                                                <ul>
                                                    {section.items.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="product-closing">
                                        <p>{product.closing}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-content">
                    <div>
                        <h2>Ready to elevate your brand visibility?</h2>
                        <p>
                            Contact us today to discuss your signage and banner needs and get a custom quote.
                        </p>
                    </div>
                    <a className="btn btn-primary" href="/contact#inquiry">
                        Get Started
                    </a>
                </div>
            </section>
        </main>
    );
}
