export function WhatsAppButton() {
    // TODO: Replace with actual client WhatsApp number (format: country code + number, e.g., 15551234567)
    const phoneNumber = '16472811177'; // Updated business number
    const message = encodeURIComponent('Hi! I have an inquiry about your printing services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="whatsapp-icon"
            >
                <path
                    fill="currentColor"
                    d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.488 2.031 7.794L0 32l8.394-2.031A15.924 15.924 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.444 0-4.794-.656-6.794-1.9l-.488-.294-5.056 1.225 1.244-5.031-.319-.506A13.233 13.233 0 012.667 16c0-7.363 5.969-13.333 13.333-13.333S29.333 8.637 29.333 16 23.363 29.333 16 29.333z"
                />
                <path
                    fill="currentColor"
                    d="M23.094 19.575c-.394-.2-2.331-1.15-2.694-1.281-.362-.131-.625-.2-.888.2-.262.4-1.019 1.281-1.25 1.544-.231.262-.462.294-.856.094-.394-.2-1.662-.612-3.169-1.956-1.169-1.044-1.956-2.331-2.188-2.725-.231-.394-.025-.606.175-.806.181-.181.394-.469.594-.706.2-.231.262-.394.394-.656.131-.262.069-.494-.031-.694-.1-.2-.888-2.137-1.219-2.925-.319-.769-.644-.669-.888-.681-.231-.013-.494-.013-.756-.013s-.694.1-1.056.494c-.362.394-1.381 1.35-1.381 3.294s1.413 3.819 1.606 4.081c.2.262 2.825 4.313 6.844 6.05.956.413 1.7.656 2.281.844.962.306 1.838.262 2.531.156.769-.112 2.331-.95 2.656-1.869.325-.919.325-1.706.231-1.869-.094-.162-.356-.262-.75-.462z"
                />
            </svg>
        </a>
    );
}
