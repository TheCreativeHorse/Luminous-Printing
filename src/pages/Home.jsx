import heroOne from '../../Public_Assets/Business Card-20251115T095449Z-1-001/Banner2.jpg';
import heroTwo from '../../Public_Assets/Flyers-20251115T095602Z-1-001/4.jpg';
import heroThree from '../../Public_Assets/Booklets/2.jpg';
import heroFour from '../../Public_Assets/Invitation-Announcement-20251115T095621Z-1-001/3.jpg';
import heroFive from '../../Public_Assets/Post Card-20251115T095653Z-1-001/6.jpg';
import catBusinessCards from '../../Public_Assets/Business Card-20251115T095449Z-1-001/1.jpg';
import catPrintProducts from '../../Public_Assets/Brochures-20251115T095627Z-1-001/5.jpg';
import catBanners from '../../Public_Assets/Business Card-20251115T095449Z-1-001/Banner.jpg';
import catDisplays from '../../Public_Assets/Magnets-20251115T095647Z-1-001/4.jpg';
import catRetail from '../../Public_Assets/Bookmark/5.jpg';
import catWindow from '../../Public_Assets/Invitation-Announcement-20251115T095621Z-1-001/5.jpg';
import catLabels from '../../Public_Assets/Post Card-20251115T095653Z-1-001/2.jpg';
import catApparel from '../../Public_Assets/Greeting Cards-20251115T095617Z-1-001/3.jpg';

const heroImages = [heroOne, heroTwo, heroThree, heroFour, heroFive];

const features = [
    {
        icon: '⧉',
        title: 'Wide range of print products',
        copy:
            'From business cards and flyers to banners, window graphics, labels, apparel and promotional items, you can handle most print needs through one contact.',
    },
    {
        icon: '✓',
        title: 'Consistent trade level quality',
        copy:
            'Your jobs are produced using professional equipment and proven trade print processes so colors, cuts and finishes stay consistent from one order to the next.',
    },
    {
        icon: '☎',
        title: 'Simple, guided process',
        copy:
            'Share what you need, we suggest the most suitable product and guide you on file setup, quantities and timelines.',
    },
];

const categories = [
    {
        image: catBusinessCards,
        title: 'Business Cards',
        copy: 'Clean, professional cards with a variety of stocks and finishes for daily use.',
    },
    {
        image: catPrintProducts,
        title: 'Print Products',
        copy: 'Postcards, flyers, brochures, booklets, posters and more for every campaign.',
    },
    {
        image: catBanners,
        title: 'Banners, Signs & Flags',
        copy: 'Large format signage for storefronts, events and outdoor visibility.',
    },
    {
        image: catDisplays,
        title: 'Displays & Trade Shows',
        copy: 'Portable tents, backdrops and displays that stand out in busy spaces.',
    },
    {
        image: catRetail,
        title: 'Retail Marketing',
        copy: 'In-store print like shelf talkers, aisle signs and display elements.',
    },
    {
        image: catWindow,
        title: 'Window & Vehicle Graphics',
        copy: 'Durable graphics that turn your locations and fleet into ongoing advertising.',
    },
    {
        image: catLabels,
        title: 'Labels & Stickers',
        copy: 'Custom labels for packaging, retail products and branding.',
    },
    {
        image: catApparel,
        title: 'Apparel & Promo',
        copy: 'Printed apparel and branded items for uniforms, events or giveaways.',
    },
];

const processSteps = [
    {
        step: '01',
        title: 'Tell us what you need',
        copy: 'Share your project details, quantities and any reference images or existing artwork.',
    },
    {
        step: '02',
        title: 'We recommend the right product',
        copy: 'We suggest suitable products, finishes and stocks based on your goals and budget and confirm pricing.',
    },
    {
        step: '03',
        title: 'Print, finish and deliver',
        copy: 'Your order is produced through our trade print partners and delivered as agreed, ready to use.',
    },
];

export function Home() {
    return (
        <main>
            <section className="hero" id="hero">
                <div className="hero-visual-grid" aria-hidden="true">
                    {heroImages.map((src, index) => (
                        <img key={src + index} src={src} alt="" />
                    ))}
                </div>
                <div className="container hero-content">
                    <p className="eyebrow">Trade quality printing for growing businesses</p>
                    <h1>High quality print products made simple</h1>
                    <p className="hero-subtitle">
                        Luminious Printing gives you access to a full range of professional print products, from business cards
                        and brochures to banners, labels, apparel and more. Clear options, reliable quality, and guided support on
                        every order.
                    </p>
                    <div className="hero-ctas">
                        <a className="btn btn-primary" href="/categories">
                            Browse products
                        </a>
                        <a className="btn btn-link" href="/contact#inquiry">
                            Request a quote
                        </a>
                    </div>
                </div>
            </section>

            <section className="intro">
                <div className="container narrow">
                    <p>
                        Luminious Printing partners with trusted wholesale trade printers to bring you professional print solutions
                        without the complexity. Whether you need a small run for a local event or regular print for your business,
                        we help you choose the right product, finish and quantity for your needs.
                    </p>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="feature-grid">
                        {features.map((feature) => (
                            <article className="feature-card" key={feature.title}>
                                <div className="icon-circle">
                                    <span className="icon">{feature.icon}</span>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.copy}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="categories" id="categories">
                <div className="container">
                    <div className="section-heading">
                        <h2>Print solutions for every touchpoint</h2>
                        <p>
                            Use Luminious Printing as your central hub for print. Here is a quick overview of what we can help you
                            with.
                        </p>
                    </div>
                    <div className="category-grid">
                        {categories.map((category) => (
                            <article className="category-card" key={category.title}>
                                <img src={category.image} alt={category.title} />
                                <div>
                                    <h3>{category.title}</h3>
                                    <p>{category.copy}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="process" id="process">
                <div className="container">
                    <div className="section-heading">
                        <h2>How working with Luminious Printing works</h2>
                        <p>
                            The process is kept straightforward so you can focus on your business while we handle the print details.
                        </p>
                    </div>
                    <div className="process-steps">
                        {processSteps.map((step) => (
                            <article className="step-card" key={step.step}>
                                <span className="step-number">{step.step}</span>
                                <h3>{step.title}</h3>
                                <p>{step.copy}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-content">
                    <div>
                        <h2>Ready to plan your next print project</h2>
                        <p>
                            Send us a brief of what you need and we will recommend the right products, finishes and quantities, then
                            guide you through file preparation and timelines.
                        </p>
                    </div>
                    <a className="btn btn-primary" href="/contact#inquiry">
                        Talk to us
                    </a>
                </div>
            </section>
        </main>
    );
}
