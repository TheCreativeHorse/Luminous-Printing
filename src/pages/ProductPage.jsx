import { products } from '../data/products';

export function ProductPage({ productId }) {
    const product = products[productId];

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <main>
            <section className="product-hero">
                <div className="container">
                    <div className="product-hero-content">
                        <h1>{product.title}</h1>
                        <p className="subtitle">{product.subtitle}</p>
                        <p className="description">{product.description}</p>
                        <a className="btn btn-primary" href="/contact#inquiry">
                            Request a Quote
                        </a>
                    </div>
                    <div className="product-hero-image">
                        <img src={product.heroImage} alt={product.title} />
                    </div>
                </div>
            </section>

            <section className="product-options">
                <div className="container">
                    {product.sections.map((section, index) => (
                        <div key={index} className={`options-grid ${index % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="option-category">
                                <h2>{section.title}</h2>
                                <ul>
                                    {section.items.map((item, i) => (
                                        <li key={i}>
                                            <strong>{item}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {section.image && (
                                <div className="option-image">
                                    <img src={section.image} alt={section.title} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-content">
                    <div>
                        <h2>Ready to order your {product.title.toLowerCase()}?</h2>
                        <p>{product.closing}</p>
                    </div>
                    <a className="btn btn-primary" href="/contact#inquiry">
                        Request a Quote
                    </a>
                </div>
            </section>
        </main>
    );
}
