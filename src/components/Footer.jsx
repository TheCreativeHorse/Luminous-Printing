export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <p className="footer-label">Products</p>
                    <ul>
                        <li>
                            <a href="/categories/business-cards">Business Cards</a>
                        </li>
                        <li>
                            <a href="/categories/print-products">Print Products</a>
                        </li>
                        <li>
                            <a href="/categories/banners-signs-flags">Large Format</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="footer-label">Company</p>
                    <ul>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/privacy">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="footer-label">Support</p>
                    <ul>
                        <li>
                            <a href="/resources/file-prep">File prep guide</a>
                        </li>
                        <li>
                            <a href="/resources/faq">FAQs</a>
                        </li>
                        <li>
                            <a href="/contact#inquiry">Request a quote</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer-copy">
                © {new Date().getFullYear()} Luminious Printing. All rights reserved.
            </p>
        </footer>
    );
}
