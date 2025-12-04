import postcardHero from '../../Public_Assets/Post Card-20251115T095653Z-1-001/1.jpg';
import postcardImage from '../../Public_Assets/Post Card-20251115T095653Z-1-001/2.jpg';
import flyerHero from '../../Public_Assets/Flyers-20251115T095602Z-1-001/1.jpg';
import flyerImage from '../../Public_Assets/Flyers-20251115T095602Z-1-001/2.jpg';
import greetingCardHero from '../../Public_Assets/Greeting Cards-20251115T095617Z-1-001/1.jpg';
import greetingCardImage from '../../Public_Assets/Greeting Cards-20251115T095617Z-1-001/2.jpg';
import bookmarkHero from '../../Public_Assets/Bookmark/1.jpg';
import bookmarkImage from '../../Public_Assets/Bookmark/2.jpg';
import bookletHero from '../../Public_Assets/Booklets/1.jpg';
import bookletImage from '../../Public_Assets/Booklets/2.jpg';
import brochureHero from '../../Public_Assets/Brochures-20251115T095627Z-1-001/1.jpg';
import brochureImage from '../../Public_Assets/Brochures-20251115T095627Z-1-001/2.jpg';
import magnetHero from '../../Public_Assets/Magnets-20251115T095647Z-1-001/1.jpg';
import magnetImage from '../../Public_Assets/Magnets-20251115T095647Z-1-001/2.jpg';
import posterHero from '../../Public_Assets/Generated/posters_hero.png';
import presentationFolderHero from '../../Public_Assets/Generated/presentation_folders_hero.png';
import numberedTicketHero from '../../Public_Assets/Generated/numbered_tickets_hero.png';
import tearCardHero from '../../Public_Assets/Generated/tear_cards_hero.png';
import calendarHero from '../../Public_Assets/Generated/calendars_hero.png';
import variablePrintingHero from '../../Public_Assets/Generated/variable_printing_hero.png';
import tentCardHero from '../../Public_Assets/Generated/tent_cards_hero.png';
import doorHangerHero from '../../Public_Assets/Generated/door_hangers_hero.png';
import plasticsHero from '../../Public_Assets/Generated/plastics_hero.png';
import clingsHero from '../../Public_Assets/Generated/clings_hero.png';
import canvasHero from '../../Public_Assets/Generated/canvas_hero.png';

export const products = {
    'postcards': {
        title: 'Postcards',
        subtitle: 'Big on impact, easy on budget.',
        description: 'Perfect for mailers, inserts, thank-you cards, promotions, or point-of-sale displays, postcards deliver your message simply and effectively. With standout sizes and premium paper options, every postcard is printed to make a lasting impression.',
        heroImage: postcardHero,
        closing: 'High-quality printing that ensures your message gets noticed — and remembered.',
        sections: [
            {
                title: 'Paper Options',
                items: [
                    'Standard 14pt Stock',
                    'Premium Upgraded Stock (Up to 28pt)',
                    'Matte, Glossy, or Silk Lamination'
                ],
                image: postcardImage
            },
            {
                title: 'Special Finishes (Optional)',
                items: [
                    'Metallic Foil',
                    'Spot UV',
                    'Pearl Paper',
                    'Kraft Paper'
                ]
            }
        ]
    },
    'flyers': {
        title: 'Flyers',
        subtitle: 'Big message, simple delivery.',
        description: 'Ideal for promotions, product launches, handouts, events, or mailers, flyers offer a clear and cost-effective way to spread your message. Designed for maximum visibility and impact.',
        heroImage: flyerHero,
        closing: 'Printed with clarity, color consistency, and professional detail so your message stands out every time.',
        sections: [
            {
                title: 'Paper Options',
                items: [
                    'Multiple standard sizes',
                    'Matte or Glossy finishes'
                ],
                image: flyerImage
            }
        ]
    },
    'greeting-cards': {
        title: 'Greeting Cards',
        subtitle: 'Thoughtful and personal — for any occasion.',
        description: 'Perfect for thank-yous, invitations, holiday messages, or client appreciation, greeting cards help you share meaningful sentiments with style and intention.',
        heroImage: greetingCardHero,
        closing: 'Printed beautifully to reflect your brand or message with warmth and professionalism.',
        sections: [
            {
                title: 'Paper Options',
                items: [
                    '13–14pt Stocks',
                    'Matte, Glossy (UV), or Writable Surfaces',
                    'AQ Coating',
                    'Uncoated Eco-Friendly Paper'
                ],
                image: greetingCardImage
            },
            {
                title: 'Premium Upgrades',
                items: [
                    'Metallic Foil',
                    'Spot UV',
                    'Pearl Paper',
                    'Kraft Paper'
                ]
            }
        ]
    },
    'bookmarks': {
        title: 'Bookmarks',
        subtitle: 'Functional, memorable, and perfectly sized for your message.',
        description: 'Ideal for book promotions, reading programs, schools, events, or personalized gifts, bookmarks keep your message in hand and in mind. A simple product with long-term visibility.',
        heroImage: bookmarkHero,
        closing: 'High-quality printing ensures your bookmarks stand out and stay useful.',
        sections: [
            {
                title: 'Paper Options',
                items: [
                    '13–14pt Stocks',
                    'Enviro Uncoated',
                    'Linen Uncoated',
                    'Writable',
                    'Matte Lamination + Spot UV'
                ],
                image: bookmarkImage
            }
        ]
    },
    'booklets': {
        title: 'Booklets',
        subtitle: 'Compact, organized, and informative.',
        description: 'Perfect for product catalogs, programs, manuals, or educational material, booklets deliver detailed information in a clean and portable format.',
        heroImage: bookletHero,
        closing: 'Professionally printed to present your content clearly and effectively.',
        sections: [
            {
                title: 'Sizes & Binding',
                items: [
                    'Multiple size options',
                    'Saddle Stitch',
                    'Spiral Binding'
                ],
                image: bookletImage
            },
            {
                title: 'Paper Options',
                items: [
                    '80lb Silk Text',
                    '100lb Gloss Text',
                    '60lb Offset Text'
                ]
            }
        ]
    },
    'brochures': {
        title: 'Brochures',
        subtitle: 'Versatile, engaging, and easy to distribute.',
        description: 'Whether for business promotions, real estate listings, menus, events, or product overviews, brochures offer a powerful way to communicate your message with clarity and structure.',
        heroImage: brochureHero,
        closing: 'Printed with high-quality color and detail to deliver a polished and lasting impression.',
        sections: [
            {
                title: 'Folding Options',
                items: [
                    'Bi-Fold',
                    'Tri-Fold',
                    'Z-Fold'
                ],
                image: brochureImage
            },
            {
                title: 'Paper Options',
                items: [
                    '100lb Gloss Text',
                    '100lb Matte Text',
                    '80lb Enviro Uncoated (100% recycled, eco-friendly)'
                ]
            }
        ]
    },
    'magnets': {
        title: 'Magnets',
        subtitle: 'Functional and promotional — designed to stay visible.',
        description: 'Ideal for business promotions, save-the-dates, reminders, or personalized gifts, magnets keep your message in front of customers every single day. Durable, practical, and perfect for long-lasting brand visibility.',
        heroImage: magnetHero,
        closing: 'Professionally printed for long-lasting durability and vibrant, eye-catching colour.',
        sections: [
            {
                title: 'Material Options',
                items: [
                    '14pt Magnetic Stock',
                    '20mil Magnetic Material',
                    '30mil Heavy-Duty Magnetic Material'
                ],
                image: magnetImage
            },
            {
                title: 'Special Options',
                items: [
                    'Full-colour printing',
                    'Custom shapes',
                    'Car Magnets for vehicle doors and corporate branding'
                ]
            }
        ]
    },
    'posters': {
        title: 'Posters',
        subtitle: 'Bold and impactful for every message.',
        description: 'Perfect for events, retail displays, announcements, or artwork reproductions, posters are designed to capture attention and deliver your message clearly and effectively.',
        heroImage: posterHero,
        closing: 'High-quality printing ensures your posters stand out in any environment.',
        sections: [
            {
                title: 'Paper Options',
                items: [
                    '100lb Gloss Text',
                    '100lb Matte Finish',
                    'UV Coating available'
                ],
                image: posterHero
            },
            {
                title: 'Premium Upgrades',
                items: [
                    'Spot UV highlights',
                    'Metallic Foil accents'
                ]
            }
        ]
    },
    'presentation-folders': {
        title: 'Presentation Folders',
        subtitle: 'Organized, polished, and professional.',
        description: 'Perfect for corporate meetings, proposals, pitch decks, or trade show materials, presentation folders help you keep documents organized while presenting your brand with confidence.',
        heroImage: presentationFolderHero,
        closing: 'Professionally printed to reflect your brand in the best possible light.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Professional appearance',
                    'Multiple pocket configurations',
                    'Custom branding options'
                ],
                image: presentationFolderHero
            }
        ]
    },
    'numbered-tickets': {
        title: 'Numbered Tickets',
        subtitle: 'Reliable, trackable, and easy to manage.',
        description: 'Ideal for raffles, events, admissions, or contests, numbered tickets make organization simple and efficient. Clear numbering ensures accuracy and smooth event flow.',
        heroImage: numberedTicketHero,
        closing: 'Printed for durability and professional presentation, keeping your event running smoothly.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Sequential numbering',
                    'Perforated for easy tear-off',
                    'Multiple color options'
                ],
                image: numberedTicketHero
            }
        ]
    },
    'tear-cards': {
        title: 'Tear Cards',
        subtitle: 'Interactive and engaging for any promotion.',
        description: 'Perfect for giveaways, coupons, promotions, and contests, tear cards provide an easy way for customers to participate and interact with your brand.',
        heroImage: tearCardHero,
        closing: 'Professionally printed with clean perforations and a polished finish.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Clean perforations',
                    'Easy tear-off sections',
                    'Custom designs available'
                ],
                image: tearCardHero
            }
        ]
    },
    'calendars': {
        title: 'Calendars',
        subtitle: 'Timeless, practical, and always visible.',
        description: 'Ideal for year-round promotions, corporate gifts, or personal keepsakes, calendars keep your brand in front of customers every single day.',
        heroImage: calendarHero,
        closing: 'Professionally printed to ensure lasting quality, clarity, and durability.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Wall or desk calendar options',
                    'Custom photography',
                    'High-quality paper stock'
                ],
                image: calendarHero
            }
        ]
    },
    'variable-printing': {
        title: 'Variable Printing',
        subtitle: 'Custom, personalized, and designed to connect.',
        description: 'Ideal for direct mail, client communication, invitations, or personalized promotions, variable printing allows each piece to be unique — from names and messages to images and codes. A powerful way to increase engagement and deliver targeted content.',
        heroImage: variablePrintingHero,
        closing: 'Professionally printed for accuracy, consistency, and high-quality results.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Personalized names and messages',
                    'Custom images and QR codes',
                    'Targeted content delivery'
                ],
                image: variablePrintingHero
            }
        ]
    },
    'tent-cards': {
        title: 'Tent Cards',
        subtitle: 'Attention-grabbing and functional.',
        description: 'Perfect for restaurant tables, product displays, events, or in-store promotions, tent cards are easy to place and designed to catch attention from both sides. A simple, effective way to highlight offers or important information.',
        heroImage: tentCardHero,
        closing: 'Professionally printed to ensure clear messaging and strong visual impact.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Double-sided printing',
                    'Self-standing design',
                    'Multiple size options'
                ],
                image: tentCardHero
            }
        ]
    },
    'door-hangers': {
        title: 'Door Hangers',
        subtitle: 'Visible, effective, and impossible to ignore.',
        description: 'Ideal for local marketing, direct mail drops, promotions, or event notifications, door hangers deliver your message right to the doorstep. Their placement makes them naturally eye-catching and highly engaging.',
        heroImage: doorHangerHero,
        closing: 'Professionally printed to grab attention and leave a lasting impression.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Custom die-cut hole',
                    'High-visibility placement',
                    'Durable materials'
                ],
                image: doorHangerHero
            }
        ]
    },
    'plastics': {
        title: 'Plastics',
        subtitle: 'Durable, versatile, and made to last.',
        description: 'Perfect for membership cards, loyalty cards, ID tags, or durable promotional pieces, plastic printing offers strength, longevity, and a premium finish. Ideal for items handled frequently.',
        heroImage: plasticsHero,
        closing: 'Professionally printed to withstand everyday use and maintain a clean, professional look.',
        sections: [
            {
                title: 'Features',
                items: [
                    'PVC card printing',
                    'Waterproof and tear-resistant',
                    'Glossy or matte finish'
                ],
                image: plasticsHero
            }
        ]
    },
    'clings': {
        title: 'Clings',
        subtitle: 'Removable, reusable, and eye-catching.',
        description: 'Ideal for window promotions, retail displays, temporary signage, and events, clings adhere securely without adhesive and leave no residue. Easy to reposition or reuse when needed.',
        heroImage: clingsHero,
        closing: 'Professionally printed for vibrant colour, crisp detail, and long-lasting visibility.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Static cling material',
                    'No adhesive required',
                    'Removable and reusable'
                ],
                image: clingsHero
            }
        ]
    },
    'canvas': {
        title: 'Canvas',
        subtitle: 'Artistic quality with a premium, professional finish.',
        description: 'Perfect for art reproductions, corporate gifts, photo displays, or personalized décor, canvas prints offer rich texture and a timeless presentation. Designed to enhance any space with impactful visuals.',
        heroImage: canvasHero,
        closing: 'Professionally printed to ensure vivid colours, sharp details, and lasting durability.',
        sections: [
            {
                title: 'Features',
                items: [
                    'Gallery-wrapped edges',
                    'Museum-quality canvas',
                    'Fade-resistant inks'
                ],
                image: canvasHero
            }
        ]
    }
};
