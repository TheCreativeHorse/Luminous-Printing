import { useState, useEffect, useRef } from 'react';
import { navigationLinks } from '../data/navigation';

export function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Flatten navigation links to get all searchable items
    const allItems = navigationLinks.reduce((acc, item) => {
        // Add the main category
        acc.push({
            label: item.lines.join(' '),
            href: item.href,
        });

        // Add sub-items if they exist
        if (item.subItems) {
            acc.push(...item.subItems);
        }
        return acc;
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            setIsOpen(false);
            return;
        }

        const filtered = allItems.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsOpen(true);
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div className="search-bar-wrapper" ref={wrapperRef}>
            <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                    if (query.trim() !== '') setIsOpen(true);
                }}
            />
            {isOpen && results.length > 0 && (
                <ul className="search-results">
                    {results.map((result) => (
                        <li key={result.href}>
                            <a href={result.href} onClick={() => setIsOpen(false)}>
                                {result.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
