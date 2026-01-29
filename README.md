# SimplyLegal - Nigerian Laws Made Simple

A website that helps everyday Nigerians understand the laws that affect their daily lives. Legal knowledge shouldn't be reserved for lawyers alone.

## Features

- **Bite-sized Content**: Complex laws broken down into digestible pieces
- **8 Categories**: Traffic, Consumer Rights, Tenancy, Employment, Family, Criminal, Digital/Cyber, and Business laws
- **26+ Law Articles**: Covering essential topics from driver's licenses to data protection
- **Search Functionality**: Find laws by keywords or phrases
- **Mobile Responsive**: Works on all devices
- **Key Takeaways**: Every article highlights the most important points

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel or any static host

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── categories/        # All categories page
│   ├── category/[id]/     # Category detail page
│   ├── law/[id]/          # Law article page
│   └── search/            # Search page
├── components/            # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LawCard.tsx
│   ├── CategoryCard.tsx
│   └── SearchBar.tsx
├── data/                  # Law content and categories
│   ├── laws.ts
│   └── categories.ts
└── types/                 # TypeScript interfaces
    └── index.ts
```

## Categories

1. **Traffic & Road Safety** - Driving laws, licenses, seat belts, DUI
2. **Consumer Rights** - Product information, refunds, fair pricing
3. **Tenancy & Housing** - Tenant agreements, eviction, security deposits
4. **Employment & Labour** - Minimum wage, contracts, leave, dismissal
5. **Family Law** - Marriage, custody, domestic violence
6. **Criminal Law Basics** - Arrest rights, bail, theft
7. **Digital & Cyber Law** - Data protection, cybercrime, social media
8. **Business & Commerce** - Registration, contracts, taxes

## Disclaimer

This website provides general legal information for educational purposes only. This is not legal advice. For specific legal matters, please consult a qualified legal practitioner in Nigeria.

## License

MIT
