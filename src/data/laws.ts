import { Law } from '@/types';

export const laws: Law[] = [
  // Traffic & Road Safety
  {
    id: 'traffic-001',
    title: "Driver's License Requirements",
    summary: 'You must have a valid driver\'s license to operate any motor vehicle on Nigerian roads.',
    content: `Under the National Road Traffic Regulations 2012 and the Federal Road Safety Commission Act, every person driving a motor vehicle on Nigerian roads must possess a valid driver's license issued by the appropriate authority.

The license must be carried at all times while driving and must be presented upon request by law enforcement officers. Driving without a valid license is a punishable offence.

There are different classes of licenses depending on the type of vehicle you intend to drive, ranging from motorcycles to heavy goods vehicles.`,
    category: 'traffic',
    source: 'Federal Road Safety Commission Act, National Road Traffic Regulations 2012',
    penalty: 'Fine of up to ₦10,000 and/or up to 1 year imprisonment for first offence',
    keyPoints: [
      'Must possess valid driver\'s license to drive',
      'License must be carried while driving',
      'Different license classes for different vehicles',
      'Must be renewed before expiration',
    ],
  },
  {
    id: 'traffic-002',
    title: 'Seat Belt Laws',
    summary: 'All vehicle occupants must wear seat belts while the vehicle is in motion.',
    content: `The Federal Road Safety Commission regulations mandate that all occupants of a motor vehicle must wear seat belts at all times when the vehicle is in motion.

This applies to both front and rear passengers. The driver has the responsibility to ensure all passengers are properly restrained before moving the vehicle.

Children under 12 years should be seated in the rear of the vehicle and properly restrained with appropriate child safety seats or boosters depending on their age and size.`,
    category: 'traffic',
    source: 'Federal Road Safety Commission Act, National Road Traffic Regulations',
    penalty: 'Fine of ₦2,000 for driver and ₦2,000 for each unbelted passenger',
    keyPoints: [
      'All occupants must wear seat belts',
      'Driver responsible for ensuring compliance',
      'Children under 12 should sit in rear seats',
      'Applies to front and rear passengers',
    ],
  },
  {
    id: 'traffic-003',
    title: 'Drunk Driving Laws',
    summary: 'Driving under the influence of alcohol is illegal and carries severe penalties.',
    content: `Under Nigerian law, it is an offence to drive or attempt to drive a motor vehicle while under the influence of alcohol or any intoxicating substance.

The legal blood alcohol limit in Nigeria is 0.05% (50mg of alcohol per 100ml of blood). However, it is advisable to avoid alcohol completely when driving.

Law enforcement officers can conduct breathalyzer tests and arrest drivers suspected of being intoxicated. Refusing to take a breath test is also an offence.`,
    category: 'traffic',
    source: 'Federal Road Safety Commission Act, Criminal Code Act',
    penalty: 'Fine of up to ₦50,000 and/or 2-5 years imprisonment, license suspension',
    keyPoints: [
      'Legal blood alcohol limit is 0.05%',
      'Refusing breath test is an offence',
      'Can result in license suspension',
      'Applies to drugs and other intoxicating substances',
    ],
  },
  {
    id: 'traffic-004',
    title: 'Phone Use While Driving',
    summary: 'Using a mobile phone while driving without hands-free equipment is prohibited.',
    content: `The Federal Road Safety Commission prohibits the use of mobile phones while driving unless using hands-free equipment.

This includes making or receiving calls, texting, browsing the internet, or any other phone activity that requires holding the device.

Hands-free devices such as Bluetooth earpieces, speakerphone, or car-integrated systems are permitted as they allow drivers to keep both hands on the steering wheel.`,
    category: 'traffic',
    source: 'Federal Road Safety Commission Regulations',
    penalty: 'Fine of ₦4,000 for first offence, ₦10,000 for subsequent offences',
    keyPoints: [
      'No holding phone while driving',
      'Hands-free devices are permitted',
      'Includes texting and browsing',
      'Both hands should remain on steering',
    ],
  },

  // Consumer Rights
  {
    id: 'consumer-001',
    title: 'Right to Product Information',
    summary: 'Consumers have the right to accurate information about products before purchase.',
    content: `Under the Federal Competition and Consumer Protection Act (FCCPA) 2018, consumers have the fundamental right to receive accurate, clear, and complete information about products and services before making a purchase.

Sellers and manufacturers must provide truthful information about the nature, quality, quantity, and price of goods. This includes proper labeling, expiry dates, country of origin, and any potential risks associated with the product.

False or misleading advertising is prohibited and consumers can seek remedies for purchases made based on false information.`,
    category: 'consumer',
    source: 'Federal Competition and Consumer Protection Act 2018',
    penalty: 'Businesses face fines up to ₦100 million for violations',
    keyPoints: [
      'Right to accurate product information',
      'Products must be properly labeled',
      'Expiry dates must be clearly displayed',
      'False advertising is prohibited',
    ],
  },
  {
    id: 'consumer-002',
    title: 'Right to Return Defective Goods',
    summary: 'You can return defective products and get a refund, repair, or replacement.',
    content: `When you purchase goods that turn out to be defective, not fit for purpose, or not as described, you have the right to seek remedies from the seller.

Under the FCCPA 2018, your options include:
- A full refund of the purchase price
- Repair of the defective item
- Replacement with a non-defective item

The seller cannot refuse these remedies by claiming "no refund policy" or pointing to signs that disclaim responsibility. Such disclaimers do not override your statutory rights.`,
    category: 'consumer',
    source: 'Federal Competition and Consumer Protection Act 2018, Sale of Goods Act',
    keyPoints: [
      'Right to refund for defective goods',
      'Can request repair or replacement',
      '"No refund" signs don\'t override your rights',
      'Goods must be fit for purpose',
    ],
  },
  {
    id: 'consumer-003',
    title: 'Protection Against Unfair Pricing',
    summary: 'Businesses cannot engage in price gouging or hidden charges.',
    content: `Nigerian law protects consumers from unfair pricing practices. Businesses must display prices clearly and cannot add hidden charges after you've agreed to purchase.

Price gouging, especially during emergencies or shortages, is prohibited. The Federal Competition and Consumer Protection Commission monitors pricing practices and can take action against businesses that engage in exploitative pricing.

All additional charges such as VAT, service charges, and delivery fees must be disclosed upfront before the transaction is completed.`,
    category: 'consumer',
    source: 'Federal Competition and Consumer Protection Act 2018',
    keyPoints: [
      'Prices must be clearly displayed',
      'No hidden charges allowed',
      'Price gouging is prohibited',
      'All fees must be disclosed upfront',
    ],
  },

  // Tenancy & Housing
  {
    id: 'tenancy-001',
    title: 'Tenant\'s Right to Written Agreement',
    summary: 'Tenants have the right to a written tenancy agreement clearly stating terms.',
    content: `While oral tenancy agreements are valid in Nigeria, tenants have the right to request a written agreement that clearly outlines the terms of the tenancy.

A good tenancy agreement should include:
- Names of landlord and tenant
- Property address and description
- Rent amount and payment schedule
- Duration of tenancy
- Responsibilities for repairs and maintenance
- Conditions for termination
- Rules regarding modifications to the property

Having a written agreement protects both parties and provides clear evidence in case of disputes.`,
    category: 'tenancy',
    source: 'Tenancy Laws of various States, Recovery of Premises Act',
    keyPoints: [
      'Right to written agreement',
      'Agreement should state all terms clearly',
      'Both parties should keep copies',
      'Protects against future disputes',
    ],
  },
  {
    id: 'tenancy-002',
    title: 'Notice Before Eviction',
    summary: 'Landlords must give proper notice before evicting tenants, and must follow legal procedures.',
    content: `A landlord cannot simply force a tenant out of a property. There are legal procedures that must be followed for eviction.

The notice period depends on how rent is paid:
- Weekly tenancy: 1 week notice
- Monthly tenancy: 1 month notice
- Quarterly tenancy: 3 months notice
- Yearly tenancy: 6 months notice (in some states)

After the notice period expires, if the tenant hasn't vacated, the landlord must obtain a court order for eviction. Self-help eviction (changing locks, removing tenant's property, cutting utilities) is illegal.`,
    category: 'tenancy',
    source: 'Recovery of Premises Laws, Tenancy Laws of various States',
    penalty: 'Unlawful eviction can result in court action and damages against landlord',
    keyPoints: [
      'Proper notice must be given',
      'Notice period depends on tenancy type',
      'Court order required for eviction',
      'Self-help eviction is illegal',
    ],
  },
  {
    id: 'tenancy-003',
    title: 'Security Deposit Limits and Return',
    summary: 'Laws regulate how much can be charged as security deposit and conditions for return.',
    content: `Security deposits (often called caution fees) are regulated to protect tenants from excessive demands.

In Lagos State, for example, landlords of residential properties cannot demand more than one year's rent in advance for new tenancies. The security deposit should be clearly agreed upon and documented.

At the end of the tenancy, landlords must return the security deposit minus any legitimate deductions for unpaid rent or damages beyond normal wear and tear. Landlords cannot withhold deposits unreasonably.`,
    category: 'tenancy',
    source: 'Lagos State Tenancy Law 2011, various State Tenancy Laws',
    keyPoints: [
      'Limits on advance rent demands',
      'Security deposit should be documented',
      'Must be returned at end of tenancy',
      'Only legitimate deductions allowed',
    ],
  },

  // Employment & Labour
  {
    id: 'employment-001',
    title: 'Minimum Wage Rights',
    summary: 'Every worker is entitled to at least the national minimum wage.',
    content: `The National Minimum Wage Act establishes the minimum amount that employers must pay workers in Nigeria.

As of the latest revision, the national minimum wage is ₦70,000 per month. This applies to all workers in both public and private sectors, with some exceptions for establishments with fewer than 25 employees.

Employers cannot pay below this amount and any agreement to accept less is void. Workers who are paid below minimum wage can report to the Ministry of Labour or take legal action.`,
    category: 'employment',
    source: 'National Minimum Wage Act 2019 (as amended)',
    penalty: 'Employers face fines and can be ordered to pay arrears',
    keyPoints: [
      'Current minimum wage is ₦70,000/month',
      'Applies to public and private sectors',
      'Cannot agree to accept less',
      'Can report violations to Ministry of Labour',
    ],
  },
  {
    id: 'employment-002',
    title: 'Right to Written Employment Contract',
    summary: 'Employers must provide written terms of employment within 3 months of hiring.',
    content: `Under the Labour Act, employers are required to provide employees with written particulars of employment within three months of the commencement of employment.

This written document should include:
- Job title and description
- Salary and payment frequency
- Working hours
- Leave entitlements
- Notice period for termination
- Any other terms and conditions

Even without a written contract, workers still have statutory rights under Nigerian labour laws.`,
    category: 'employment',
    source: 'Labour Act, Cap L1 LFN 2004',
    keyPoints: [
      'Written terms required within 3 months',
      'Must include job details and salary',
      'Should state leave entitlements',
      'Statutory rights exist even without contract',
    ],
  },
  {
    id: 'employment-003',
    title: 'Annual Leave Entitlement',
    summary: 'Workers are entitled to paid annual leave after 12 months of service.',
    content: `The Labour Act provides that after 12 months of continuous service, a worker is entitled to annual leave with full pay.

The minimum entitlement is:
- 6 working days for workers under 16 years
- 12 working days for workers 16 years and above

Many employers offer more generous leave policies. Annual leave should be taken within the year it's earned, and employers cannot force workers to forfeit their leave. If employment ends before leave is taken, the worker must be paid for outstanding leave days.`,
    category: 'employment',
    source: 'Labour Act, Cap L1 LFN 2004',
    keyPoints: [
      'Minimum 6-12 days annual leave',
      'Entitled after 12 months service',
      'Leave is with full pay',
      'Unused leave must be paid on exit',
    ],
  },
  {
    id: 'employment-004',
    title: 'Protection from Unfair Dismissal',
    summary: 'Employees cannot be dismissed without fair reason and due process.',
    content: `While employers have the right to terminate employment, this right is not absolute. Dismissals must be done properly and for valid reasons.

Workers have protection against:
- Dismissal without notice or pay in lieu
- Dismissal for discriminatory reasons (gender, religion, ethnicity, disability)
- Dismissal for joining a trade union
- Dismissal for reporting illegal activities (whistleblowing)

If unfairly dismissed, workers can seek remedies through the National Industrial Court, including reinstatement and compensation.`,
    category: 'employment',
    source: 'Labour Act, Constitution of Nigeria 1999',
    keyPoints: [
      'Right to notice before termination',
      'Protection against discrimination',
      'Cannot be fired for union activities',
      'Can seek remedies in Industrial Court',
    ],
  },

  // Family Law
  {
    id: 'family-001',
    title: 'Legal Requirements for Marriage',
    summary: 'Understand the different forms of legal marriage in Nigeria and their requirements.',
    content: `Nigeria recognizes three forms of marriage:

1. Statutory Marriage (Marriage Act): Requires both parties to be single, of legal age (21, or 16 with parental consent), and mentally capable. Must be conducted by a licensed marriage registrar.

2. Customary Marriage: Governed by the customs of the parties involved. Requirements vary by ethnic group but generally include family consent, bride price, and traditional ceremonies.

3. Islamic Marriage: Governed by Islamic law for Muslims. Requires consent, witnesses, mahr (bride gift), and conducted by an Islamic authority.

Each type has different legal implications for property rights, inheritance, and divorce.`,
    category: 'family',
    source: 'Marriage Act, Customary Law, Islamic Personal Law',
    keyPoints: [
      'Three types of marriage recognized',
      'Age requirements apply',
      'Different implications for property/inheritance',
      'Registration recommended for all types',
    ],
  },
  {
    id: 'family-002',
    title: 'Child Custody Rights',
    summary: 'Understanding how courts decide child custody in Nigeria.',
    content: `In custody disputes, Nigerian courts prioritize the best interests of the child above all other considerations.

Factors considered include:
- The child's age (younger children, especially girls, often placed with mothers)
- The child's wishes (if old enough to express preference)
- Each parent's ability to provide care
- Stability and continuity of care
- The child's educational and health needs
- Any history of abuse or neglect

Both parents generally have a right to maintain a relationship with their child. Even the non-custodial parent is usually granted access/visitation rights unless this would harm the child.`,
    category: 'family',
    source: 'Child\'s Rights Act 2003, Matrimonial Causes Act',
    keyPoints: [
      'Child\'s best interest is paramount',
      'Both parents have rights',
      'Court considers multiple factors',
      'Visitation rights usually granted',
    ],
  },
  {
    id: 'family-003',
    title: 'Domestic Violence Protection',
    summary: 'Laws protect victims of domestic violence and provide legal remedies.',
    content: `The Violence Against Persons Prohibition Act (VAPP) 2015 provides comprehensive protection against domestic violence in Nigeria.

The law covers physical, emotional, verbal, psychological, and economic abuse. Victims can obtain protection orders that:
- Prohibit the abuser from contacting or approaching the victim
- Grant temporary custody of children
- Order the abuser to leave the shared home
- Require the abuser to pay for medical treatment and other expenses

Many states have also enacted their own domestic violence laws with additional protections.`,
    category: 'family',
    source: 'Violence Against Persons Prohibition Act 2015',
    penalty: 'Domestic violence carries penalties including imprisonment up to 3 years',
    keyPoints: [
      'Covers physical and emotional abuse',
      'Protection orders available',
      'Abuser can be removed from home',
      'Criminal penalties for offenders',
    ],
  },

  // Criminal Law Basics
  {
    id: 'criminal-001',
    title: 'Your Rights Upon Arrest',
    summary: 'Know your fundamental rights when arrested by law enforcement.',
    content: `The Constitution of Nigeria guarantees certain rights to every person upon arrest:

1. Right to be informed of the reason for arrest immediately
2. Right to remain silent (you cannot be forced to make statements)
3. Right to a lawyer of your choice
4. Right to free legal representation if you cannot afford a lawyer
5. Right to be brought before a court within 24-48 hours
6. Right not to be tortured or subjected to inhuman treatment

If these rights are violated, you can report to the National Human Rights Commission or seek legal remedies including compensation.`,
    category: 'criminal',
    source: 'Constitution of Nigeria 1999, Administration of Criminal Justice Act 2015',
    keyPoints: [
      'Must be told reason for arrest',
      'Right to remain silent',
      'Right to a lawyer',
      'Must appear in court within 48 hours',
    ],
  },
  {
    id: 'criminal-002',
    title: 'Bail Rights',
    summary: 'Most offences are bailable and you have a right to apply for bail.',
    content: `Under Nigerian law, all offences are bailable except for capital offences (those carrying the death penalty) such as armed robbery, murder, and treason.

For bailable offences:
- Police can grant administrative bail at the station
- If police refuse, you can apply to a court
- Bail cannot be denied simply because you can't afford it
- Courts should consider affordable bail terms

Conditions for bail may include a surety (someone who guarantees you'll appear for trial), travel restrictions, and regular reporting to police.`,
    category: 'criminal',
    source: 'Administration of Criminal Justice Act 2015, Constitution of Nigeria',
    keyPoints: [
      'Most offences are bailable',
      'Police can grant bail at station',
      'Courts must consider affordability',
      'Capital offences not bailable',
    ],
  },
  {
    id: 'criminal-003',
    title: 'Theft and Stealing',
    summary: 'Understanding what constitutes theft and its penalties under Nigerian law.',
    content: `Theft (or stealing) under Nigerian law is the taking of property belonging to another person without consent and with the intention to permanently deprive them of it.

The Criminal Code and Penal Code distinguish between:
- Simple stealing: Taking property without violence
- Stealing by servant: When an employee steals from employer
- Stealing from person: Pickpocketing
- House breaking: Breaking into a building to steal

Penalties vary based on the value of property stolen and circumstances, ranging from months of imprisonment for petty theft to up to 14 years for more serious cases.`,
    category: 'criminal',
    source: 'Criminal Code Act, Penal Code',
    penalty: '3-14 years imprisonment depending on circumstances',
    keyPoints: [
      'Requires intent to permanently deprive',
      'Different categories of theft',
      'Penalties based on value and circumstances',
      'House breaking carries heavier penalties',
    ],
  },

  // Digital & Cyber Law
  {
    id: 'digital-001',
    title: 'Data Protection Rights',
    summary: 'Your personal data is protected and you have rights over how it\'s used.',
    content: `The Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act 2023 protect your personal information.

Your rights include:
- Right to know what data is collected about you
- Right to access your personal data
- Right to correct inaccurate data
- Right to request deletion of your data
- Right to withdraw consent for data processing
- Right to data portability

Organizations that collect your data must obtain your consent, keep it secure, and only use it for stated purposes. Data breaches must be reported to authorities.`,
    category: 'digital',
    source: 'Nigeria Data Protection Act 2023, NDPR 2019',
    penalty: 'Organizations face fines up to 2% of annual revenue for violations',
    keyPoints: [
      'Right to know what data is collected',
      'Right to access and correct your data',
      'Organizations need consent',
      'Can request deletion of data',
    ],
  },
  {
    id: 'digital-002',
    title: 'Cybercrime and Online Fraud',
    summary: 'Online fraud, hacking, and other cybercrimes carry serious penalties.',
    content: `The Cybercrimes (Prohibition, Prevention, etc.) Act 2015 criminalizes various online offences including:

- Computer-related fraud (419/scam emails, phishing)
- Identity theft
- Unauthorized access to computer systems (hacking)
- Cyber stalking and harassment
- Spreading false information online
- Child pornography

Victims of cybercrime can report to the Nigeria Police Force Cybercrime Unit or the Economic and Financial Crimes Commission (EFCC).`,
    category: 'digital',
    source: 'Cybercrimes (Prohibition, Prevention, etc.) Act 2015',
    penalty: 'Fines up to ₦7 million and/or imprisonment up to 7 years depending on offence',
    keyPoints: [
      'Online fraud is criminal',
      'Hacking is punishable',
      'Cyber harassment is illegal',
      'Report to Police or EFCC',
    ],
  },
  {
    id: 'digital-003',
    title: 'Social Media and Online Speech',
    summary: 'Understanding the limits of free speech on social media in Nigeria.',
    content: `While the Constitution guarantees freedom of expression, this right has limits, especially online:

Prohibited online conduct includes:
- Defamation (false statements that damage someone's reputation)
- Incitement to violence
- Hate speech targeting ethnic or religious groups
- Spreading false information that causes panic
- Harassment and cyberstalking

You can be held liable for content you post, share, or even "like" in some cases. Screenshots can be used as evidence. Anonymous posting doesn't guarantee protection as accounts can be traced.`,
    category: 'digital',
    source: 'Cybercrimes Act 2015, Criminal Code, Constitution of Nigeria',
    penalty: 'Fines and imprisonment depending on the offence',
    keyPoints: [
      'Free speech has limits online',
      'Defamation laws apply online',
      'Can be traced even if anonymous',
      'Be careful what you share',
    ],
  },

  // Business & Commerce
  {
    id: 'business-001',
    title: 'Business Registration Requirements',
    summary: 'Most businesses must be registered with the Corporate Affairs Commission.',
    content: `To operate legally in Nigeria, most businesses must be registered with the Corporate Affairs Commission (CAC).

Types of business registration:
- Business Name: For sole proprietors and partnerships
- Limited Liability Company: For incorporated businesses with separate legal identity
- Incorporated Trustees: For NGOs and religious organizations

Registration provides legal recognition, enables opening of corporate bank accounts, and is often required for contracts with government and large organizations.

Small businesses can use the CAC's simplified registration process and online portal.`,
    category: 'business',
    source: 'Companies and Allied Matters Act 2020',
    keyPoints: [
      'Most businesses need CAC registration',
      'Different registration types available',
      'Online registration available',
      'Required for corporate bank accounts',
    ],
  },
  {
    id: 'business-002',
    title: 'Contract Basics',
    summary: 'Understanding what makes a contract valid and enforceable in Nigeria.',
    content: `For a contract to be valid and enforceable under Nigerian law, it must have:

1. Offer and Acceptance: One party makes an offer, the other accepts
2. Consideration: Each party must give something of value
3. Intention to create legal relations: Parties must intend the agreement to be binding
4. Capacity: Parties must be of legal age and sound mind
5. Legality: The contract's purpose must be legal

Contracts can be written or oral (though some must be in writing). It's always advisable to have written contracts for significant agreements.

If a party breaches a contract, the other can seek remedies in court including damages or specific performance.`,
    category: 'business',
    source: 'Common Law, Contract Law principles',
    keyPoints: [
      'Requires offer, acceptance, consideration',
      'Both parties must have capacity',
      'Written contracts are advisable',
      'Breach allows for legal remedies',
    ],
  },
  {
    id: 'business-003',
    title: 'Tax Obligations for Businesses',
    summary: 'Businesses have various tax obligations to federal and state governments.',
    content: `Businesses operating in Nigeria have several tax obligations:

Federal Taxes:
- Companies Income Tax (CIT): 30% of profits (0% for small companies under ₦25 million revenue)
- Value Added Tax (VAT): 7.5% on goods and services
- Withholding Tax: Deducted at source on certain payments

State Taxes:
- Personal Income Tax (for business owners/employees)
- Business Premises Registration

Businesses must register with the Federal Inland Revenue Service (FIRS) and relevant state tax authorities, file returns, and pay taxes when due. Tax evasion carries penalties including fines and imprisonment.`,
    category: 'business',
    source: 'Companies Income Tax Act, VAT Act, Personal Income Tax Act',
    penalty: 'Tax evasion can result in fines up to 100% of tax owed plus imprisonment',
    keyPoints: [
      'Must register with FIRS',
      'CIT, VAT, and WHT apply',
      'Small companies may have exemptions',
      'Tax evasion carries heavy penalties',
    ],
  },
];

export function getLawsByCategory(categoryId: string): Law[] {
  return laws.filter(law => law.category === categoryId);
}

export function getLawById(id: string): Law | undefined {
  return laws.find(law => law.id === id);
}

export function searchLaws(query: string): Law[] {
  const lowerQuery = query.toLowerCase();
  return laws.filter(
    law =>
      law.title.toLowerCase().includes(lowerQuery) ||
      law.summary.toLowerCase().includes(lowerQuery) ||
      law.content.toLowerCase().includes(lowerQuery) ||
      law.keyPoints.some(point => point.toLowerCase().includes(lowerQuery))
  );
}
