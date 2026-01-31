import { Law } from '@/types';

export const laws: Law[] = [
  // =====================================================
  // CONSTITUTIONAL LAW - FUNDAMENTAL RIGHTS (Chapter IV)
  // =====================================================

  {
    id: 'rights-001',
    title: 'Your Right to Life',
    summary: 'Every person has the right to live. Nobody can take your life except through a court sentence for a serious crime.',
    content: `This is one of the most basic rights you have as a Nigerian. The Constitution says that every single person has the right to live, and no one can just kill you or take your life away.

The only time someone can legally lose their life is if a court finds them guilty of a very serious crime (like murder) and sentences them to death. Even then, there's a whole legal process that must happen.

This also means the police or soldiers cannot just kill people anyhow. If you are killed by government agents without proper legal process, your family can take them to court.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 33',
    section: 'Section 33',
    keyPoints: [
      'Every person has the right to life',
      'Only a court can sentence someone to death',
      'Police cannot kill people without legal reason',
      'Your family can sue if you are killed unlawfully',
    ],
    originalText: `Every person has a right to life, and no one shall be deprived intentionally of his life, save in execution of the sentence of a court in respect of a criminal offence of which he has been found guilty in Nigeria.

A person shall not be regarded as having been deprived of his life in contravention of this section, if he dies as a result of the use, to such extent and in such circumstances as are permitted by law, of such force as is reasonably necessary - for the defence of any person from unlawful violence or for the defence of property; in order to effect a lawful arrest or to prevent the escape of a person lawfully detained; or for the purpose of suppressing a riot, insurrection or mutiny.`,
  },
  {
    id: 'rights-002',
    title: 'Your Right to Dignity',
    summary: 'Nobody can torture you, treat you like a slave, or make you do forced labor. You deserve to be treated with respect.',
    content: `As a Nigerian, you have the right to be treated with dignity and respect. This means:

1. **No Torture**: Nobody - not the police, not the army, not anybody - can torture you or treat you in a cruel or degrading way.

2. **No Slavery**: You cannot be made a slave or be held in any form of servitude. You are a free person.

3. **No Forced Labor**: Nobody can force you to work against your will - except in certain cases like prison sentences, military service, or national emergencies.

If anyone treats you this way, you can take them to court.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 34',
    section: 'Section 34',
    keyPoints: [
      'No torture or cruel treatment allowed',
      'Slavery and servitude are prohibited',
      'Forced labor is generally prohibited',
      'Police cannot beat or torture suspects',
    ],
    originalText: `Every individual is entitled to respect for the dignity of his person, and accordingly - no person shall be subject to torture or to inhuman or degrading treatment; no person shall be held in slavery or servitude; and no person shall be required to perform forced or compulsory labour.

For the purposes of this section, "forced or compulsory labour" does not include - any labour required in consequence of the sentence or order of a court; any labour required of members of the armed forces of the Federation or the Nigeria Police Force in pursuance of their duties as such; in the case of persons who have conscientious objections to service in the armed forces of the Federation, any labour required instead of such service; any labour required which is reasonably necessary in the event of any emergency or calamity threatening the life or well-being of the community.`,
  },
  {
    id: 'rights-003',
    title: 'Your Right to Personal Freedom',
    summary: 'You cannot be arrested or locked up without good reason. If arrested, you must be told why and brought to court quickly.',
    content: `You have the right to your personal freedom - meaning nobody can just grab you and lock you up anyhow. Here's what you need to know:

**When You CAN Be Detained:**
- If a court ordered it
- If you failed to obey a court order
- If you're reasonably suspected of committing a crime
- If you're a minor being taken for education or welfare
- For medical reasons (infectious disease, mental health treatment)

**Your Rights When Arrested:**
- You have the RIGHT TO REMAIN SILENT
- You must be told WHY you're being arrested within 24 hours (in a language you understand)
- You have the right to contact a LAWYER
- You must be brought to court within a reasonable time (usually 24-48 hours)

**Important**: If you're detained for more than 2-3 months without trial, you must be released!`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 35',
    section: 'Section 35',
    keyPoints: [
      'You cannot be arrested without good reason',
      'You have the right to remain silent',
      'You must be told why you are arrested within 24 hours',
      'You must be brought to court within 24-48 hours',
      'You have the right to a lawyer',
    ],
    originalText: `Every person shall be entitled to his personal liberty and no person shall be deprived of such liberty save in the following cases and in accordance with a procedure permitted by law - in execution of the sentence or order of a court in respect of a criminal offence of which he has been found guilty; by reason of his failure to comply with the order of a court or in order to secure the fulfilment of any obligation imposed upon him by law; for the purpose of bringing him before a court in execution of the order of a court or upon reasonable suspicion of his having committed a criminal offence, or to such extent as may be reasonably necessary to prevent his committing a criminal offence.

Any person who is arrested or detained shall have the right to remain silent or avoid answering any question until after consultation with a legal practitioner or any other person of his own choice. Any person who is arrested or detained shall be informed in writing within twenty-four hours (and in a language that he understands) of the facts and grounds for his arrest or detention.`,
  },
  {
    id: 'rights-004',
    title: 'Your Right to Fair Hearing',
    summary: 'If you are accused of a crime or have a dispute, you have the right to a fair trial in court.',
    content: `If you find yourself in any legal matter - whether you're accused of a crime or you have a dispute with someone - you have the right to a FAIR HEARING. This means:

**In Criminal Cases:**
- You are INNOCENT until PROVEN guilty
- You must be told exactly what you're accused of
- You must have enough time to prepare your defence
- You can defend yourself or hire a lawyer
- You can question witnesses against you
- You can bring your own witnesses
- You get a free interpreter if you don't understand the language
- You cannot be tried twice for the same crime
- No law can punish you for something that wasn't a crime when you did it

**Important**: Court proceedings must be PUBLIC (except in special cases). Justice must not only be done, it must be SEEN to be done.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 36',
    section: 'Section 36',
    keyPoints: [
      'You are innocent until proven guilty',
      'You have the right to know the charges against you',
      'You have the right to a lawyer',
      'Court proceedings should be public',
      'You cannot be punished for something that was legal when you did it',
    ],
    originalText: `In the determination of his civil rights and obligations, including any question or determination by or against any government or authority, a person shall be entitled to a fair hearing within a reasonable time by a court or other tribunal established by law and constituted in such manner as to secure its independence and impartiality.

Every person who is charged with a criminal offence shall be presumed to be innocent until he is proved guilty. Every person who is charged with a criminal offence shall be entitled to - be informed promptly in the language that he understands and in detail of the nature of the offence; be given adequate time and facilities for the preparation of his defence; defend himself in person or by legal practitioners of his own choice; examine, in person or by his legal practitioners, the witnesses called by the prosecution before any court or tribunal and obtain the attendance and carry out the examination of witnesses to testify on his behalf before the court or tribunal on the same conditions as those applying to the witnesses called by the prosecution; have, without payment, the assistance of an interpreter if he cannot understand the language used at the trial of the offence.`,
  },
  {
    id: 'rights-005',
    title: 'Your Right to Privacy',
    summary: 'Your home, your letters, your phone calls, and your private life are protected. Nobody can invade your privacy without legal reason.',
    content: `Your privacy is protected by the Constitution. This covers:

**What's Protected:**
- Your HOME - Nobody can just enter your house without permission or a warrant
- Your CORRESPONDENCE - Your letters and emails are private
- Your PHONE CALLS - Your conversations are protected
- Your FAMILY LIFE - What happens in your family is your business

**What This Means:**
- Police need a WARRANT to search your house (except in emergencies)
- People cannot tap your phone without court approval
- Your personal information should be kept private
- Employers cannot just search your personal belongings

This right can only be limited for reasons of defence, public safety, public order, public health, or to protect other people's rights.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 37',
    section: 'Section 37',
    keyPoints: [
      'Your home is protected from illegal searches',
      'Your letters and emails are private',
      'Your phone calls are protected',
      'Police need a warrant to search your property',
    ],
    originalText: `The privacy of citizens, their homes, correspondence, telephone conversations and telegraphic communications is hereby guaranteed and protected.`,
  },
  {
    id: 'rights-006',
    title: 'Your Right to Freedom of Thought and Religion',
    summary: 'You can think what you want, believe what you want, and practice any religion you choose.',
    content: `The Constitution guarantees your freedom of thought, conscience, and religion:

**What You Can Do:**
- Believe in any religion you want (Christianity, Islam, Traditional religion, etc.) or no religion at all
- Change your religion if you want to
- Practice your religion alone or with others
- Worship in public or private
- Teach and spread your religious beliefs

**What's Protected:**
- No one can force you to follow a particular religion
- Schools cannot force students to attend religious classes of a religion that's not theirs
- Religious communities can teach their members in their own schools

**Important**: You cannot use this right to join secret societies - that's still prohibited by law.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 38',
    section: 'Section 38',
    keyPoints: [
      'You can practice any religion or none',
      'You can change your religion freely',
      'No one can force you to attend religious activities',
      'Religious communities can run their own schools',
    ],
    originalText: `Every person shall be entitled to freedom of thought, conscience and religion, including freedom to change his religion or belief, and freedom (either alone or in community with others, and in public or in private) to manifest and propagate his religion or belief in worship, teaching, practice and observance.

No person attending any place of education shall be required to receive religious instruction or to take part in or attend any religious ceremony or observance if such instruction ceremony or observance relates to a religion other than his own, or religion not approved by his parent or guardian.

No religious community or denomination shall be prevented from providing religious instruction for pupils of that community or denomination in any place of education maintained wholly by that community or denomination.`,
  },
  {
    id: 'rights-007',
    title: 'Your Right to Freedom of Expression',
    summary: 'You can speak your mind, share your opinions, and receive information freely. The press is also free.',
    content: `You have the right to express yourself freely! This includes:

**What You Can Do:**
- Say what you think (speak your mind)
- Hold your own opinions
- Receive information from anywhere
- Pass on information to others
- Own newspapers, blogs, websites
- Start your own media company

**Press Freedom:**
The media (newspapers, TV, radio, online news) are free to report the news and hold the government accountable.

**BUT There Are Limits:**
- You cannot spread lies about people (defamation)
- You cannot incite violence
- You cannot share classified government information
- Some restrictions apply to people in certain government positions

**Note**: Only the government or approved persons can own TV or radio stations.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 39',
    section: 'Section 39',
    keyPoints: [
      'You can speak your mind freely',
      'The press is free to report news',
      'You can own media companies (with some restrictions)',
      'Defamation and inciting violence are not protected',
    ],
    originalText: `Every person shall be entitled to freedom of expression, including freedom to hold opinions and to receive and impart ideas and information without interference.

Without prejudice to the generality of subsection (1) of this section, every person shall be entitled to own, establish and operate any medium for the dissemination of information, ideas and opinions: Provided that no person, other than the Government of the Federation or of a State or any other person or body authorised by the President on the fulfilment of conditions laid down by an Act of the National Assembly, shall own, establish or operate a television or wireless broadcasting station for any purpose whatsoever.`,
  },
  {
    id: 'rights-008',
    title: 'Your Right to Peaceful Assembly and Association',
    summary: 'You can gather peacefully with others and join any group, political party, or organization you want.',
    content: `You have the right to come together with other Nigerians:

**What You Can Do:**
- Gather peacefully for meetings, rallies, or protests
- Form or join political parties
- Join trade unions to fight for workers' rights
- Join clubs, associations, or organizations
- Form groups to protect your interests

**This Means:**
- You can organize peaceful protests (just inform the police)
- You can join any political party you like
- Workers can form unions at their workplace
- You can create community groups and associations

**The Limit:**
The Independent National Electoral Commission (INEC) has some power over political parties. Parties must meet certain requirements to be recognized.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 40',
    section: 'Section 40',
    keyPoints: [
      'You can hold peaceful protests and rallies',
      'You can join any political party',
      'Workers can form and join trade unions',
      'You can form associations to protect your interests',
    ],
    originalText: `Every person shall be entitled to assemble freely and associate with other persons, and in particular he may form or belong to any political party, trade union or any other association for the protection of his interests:

Provided that the provisions of this section shall not derogate from the powers conferred by this Constitution on the Independent National Electoral Commission with respect to political parties to which that Commission does not accord recognition.`,
  },
  {
    id: 'rights-009',
    title: 'Your Right to Move Freely',
    summary: 'You can travel anywhere in Nigeria and live wherever you want. You can also leave the country and return.',
    content: `As a Nigerian citizen, you have the freedom to move around:

**What You Can Do:**
- Travel to any state in Nigeria
- Live in any part of the country you choose
- Leave Nigeria whenever you want
- Come back into Nigeria - nobody can stop you at the border

**This Means:**
- No state can say "outsiders" cannot live there
- You can move from Lagos to Kano, from Rivers to Borno
- You can get a passport and travel abroad
- You cannot be deported from your own country

**Exceptions:**
This right can be limited if:
- You're suspected of a crime and need to stay for investigation
- You're being extradited to face trial in another country (with agreement between Nigeria and that country)`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 41',
    section: 'Section 41',
    keyPoints: [
      'You can live in any part of Nigeria',
      'You can travel freely within Nigeria',
      'You can leave and return to Nigeria',
      'You cannot be expelled from Nigeria',
    ],
    originalText: `Every citizen of Nigeria is entitled to move freely throughout Nigeria and to reside in any part thereof, and no citizen of Nigeria shall be expelled from Nigeria or refused entry thereby or exit therefrom.

Nothing in this section shall invalidate any law that is reasonably justifiable in a democratic society - imposing restrictions on the residence or movement of any person who has committed or is reasonably suspected to have committed a criminal offence in order to prevent him from leaving Nigeria; or providing for the removal of any person from Nigeria to any other country to be tried outside Nigeria for any criminal offence, or undergo imprisonment outside Nigeria in execution of the sentence of a court of law in respect of a criminal offence of which he has been found guilty: Provided that there is reciprocal agreement between Nigeria and such other country in relation to such matter.`,
  },
  {
    id: 'rights-010',
    title: 'Your Right to Be Free from Discrimination',
    summary: 'You cannot be treated differently because of where you come from, your ethnicity, religion, gender, or political opinion.',
    content: `The Constitution protects you from being discriminated against. Nobody can treat you badly because of:

**Protected Characteristics:**
- Your ethnic group (Yoruba, Igbo, Hausa, or any other)
- Where you come from (your state or local government)
- Your gender (male or female)
- Your religion (Christian, Muslim, Traditional, etc.)
- Your political opinions

**What This Means:**
- A company cannot refuse to hire you because of your tribe
- A landlord cannot refuse to rent to you because of your religion
- Schools cannot reject your child because of where you're from
- The government must treat all Nigerians equally

**Also Important:**
You cannot be disadvantaged just because of how you were born - even if your parents weren't married.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 42',
    section: 'Section 42',
    keyPoints: [
      'No discrimination based on ethnicity or tribe',
      'No discrimination based on religion',
      'No discrimination based on gender',
      'No discrimination based on where you come from',
    ],
    originalText: `A citizen of Nigeria of a particular community, ethnic group, place of origin, sex, religion or political opinion shall not, by reason only that he is such a person -

be subjected either expressly by, or in the practical application of, any law in force in Nigeria or any executive or administrative action of the government, to disabilities or restrictions to which citizens of Nigeria of other communities, ethnic groups, places of origin, sex, religions or political opinions are not made subject; or

be accorded either expressly by, or in the practical application of, any law in force in Nigeria or any such executive or administrative action, any privilege or advantage that is not accorded to citizens of Nigeria of other communities, ethnic groups, places of origin, sex, religions or political opinions.

No citizen of Nigeria shall be subjected to any disability or deprivation merely by reason of the circumstances of his birth.`,
  },
  {
    id: 'rights-011',
    title: 'Your Right to Own Property',
    summary: 'You can buy and own property anywhere in Nigeria. The government cannot take your property without paying you fair compensation.',
    content: `You have the right to own property in Nigeria:

**What You Can Do:**
- Buy land anywhere in Nigeria
- Own houses and buildings
- Own any movable property (cars, furniture, etc.)
- Nobody can take your property without proper process

**Government Taking Your Property:**
If the government wants to take your land (for roads, hospitals, etc.):
- They MUST pay you fair compensation
- They must pay PROMPTLY (not years later)
- You have the right to go to court if you disagree with the amount

**Exceptions:**
The government can take action in certain cases:
- For tax collection
- As penalty for breaking the law
- For mortgages and legal debts
- If your property is dangerous to public health
- During emergencies

**Note**: All natural resources (oil, minerals, gas) under the ground belong to the Federal Government.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Sections 43-44',
    section: 'Sections 43-44',
    keyPoints: [
      'You can own property anywhere in Nigeria',
      'Government must pay compensation for acquired property',
      'You can go to court if compensation is unfair',
      'Natural resources belong to the Federal Government',
    ],
    originalText: `Subject to the provisions of this Constitution, every citizen of Nigeria shall have the right to acquire and own immovable property anywhere in Nigeria.

No moveable property or any interest in an immovable property shall be taken possession of compulsorily and no right over or interest in any such property shall be acquired compulsorily in any part of Nigeria except in the manner and for the purposes prescribed by a law that, among other things - requires the prompt payment of compensation therefore and gives to any person claiming such compensation a right of access for the determination of his interest in the property and the amount of compensation to a court of law or tribunal or body having jurisdiction in that part of Nigeria.`,
  },
  {
    id: 'rights-012',
    title: 'How to Enforce Your Rights',
    summary: 'If any of your fundamental rights are violated, you can go to the High Court to get justice.',
    content: `If anyone - government, police, private person, or company - violates your fundamental rights, here's what you can do:

**Going to Court:**
- Go to the HIGH COURT in your state
- The High Court has the power to protect your rights
- You can ask the court to stop the violation
- You can ask for COMPENSATION for what you suffered

**What the Court Can Do:**
- Order the person/government to stop violating your rights
- Declare that your rights were violated
- Award you money as compensation
- Issue writs and orders to protect you

**Legal Aid:**
If you cannot afford a lawyer:
- You may be entitled to free legal help
- Ask about legal aid programs
- Many lawyers do "pro bono" (free) work for rights cases

**Important**: Don't wait too long to take action. Go to court as soon as your rights are violated.`,
    category: 'fundamental-rights',
    source: 'Constitution of Nigeria 1999, Chapter IV, Section 46',
    section: 'Section 46',
    keyPoints: [
      'Go to the High Court to enforce your rights',
      'You can get compensation for violations',
      'Free legal aid may be available',
      'Act quickly when your rights are violated',
    ],
    originalText: `Any person who alleges that any of the provisions of this Chapter has been, is being or likely to be contravened in any State in relation to him may apply to a High Court in that State for redress.

Subject to the provisions of this Constitution, a High Court shall have original jurisdiction to hear and determine any application made to it in pursuance of this section and may make such orders, issue such writs and give such directions as it may consider appropriate for the purpose of enforcement or securing the enforcing within that State of any right to which the person who makes the application may be entitled under this Chapter.

The National Assembly shall make provisions - for the rendering of financial assistance to any indigent citizen of Nigeria where his right under this Chapter has been infringed or with a view to enabling him to engage the services of a legal practitioner to prosecute his claim.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - CITIZENSHIP (Chapter III)
  // =====================================================

  {
    id: 'citizenship-001',
    title: 'Who Is a Nigerian by Birth',
    summary: 'If you were born in Nigeria and your parents or grandparents are indigenous to Nigeria, you are a Nigerian citizen by birth.',
    content: `You are automatically a Nigerian citizen BY BIRTH if:

**Option 1 - Born Before Independence (October 1, 1960):**
- You were born in Nigeria before October 1, 1960
- AND at least one of your parents or grandparents belongs to an indigenous Nigerian community
- AND at least one parent or grandparent was born in Nigeria

**Option 2 - Born After Independence:**
- You were born in Nigeria after October 1, 1960
- AND at least one of your parents or grandparents is a Nigerian citizen

**Option 3 - Born Outside Nigeria:**
- You were born OUTSIDE Nigeria
- BUT at least one of your parents is a Nigerian citizen

**Why This Matters:**
Being a citizen "by birth" gives you the strongest citizenship status. You can never be stripped of this citizenship, and you can hold certain high offices (like President) that require citizenship by birth.`,
    category: 'citizenship',
    source: 'Constitution of Nigeria 1999, Chapter III, Section 25',
    section: 'Section 25',
    keyPoints: [
      'Birth in Nigeria + indigenous parent/grandparent = citizen',
      'Born outside Nigeria to Nigerian parent = citizen',
      'Citizenship by birth cannot be taken away',
      'Some offices require citizenship by birth',
    ],
    originalText: `The following persons are citizens of Nigeria by birth, namely - every person born in Nigeria before the date of independence, either of whose parents or any of whose grandparents belongs or belonged to a community indigenous to Nigeria; Provided that a person shall not become a citizen of Nigeria by virtue of this section if neither of his parents nor any of his grandparents was born in Nigeria; every person born in Nigeria after the date of independence either of whose parents or any of whose grandparents is a citizen of Nigeria; and every person born outside Nigeria either of whose parents is a citizen of Nigeria.

In this section, "the date of independence" means the 1st day of October 1960.`,
  },
  {
    id: 'citizenship-002',
    title: 'Becoming Nigerian by Registration',
    summary: 'If you are married to a Nigerian or have Nigerian grandparents, you can apply to become a citizen by registration.',
    content: `You can become a Nigerian citizen through REGISTRATION if:

**For Spouses of Nigerians:**
- You are married to a Nigerian citizen (or were previously married to one)
- You are of good character
- You intend to live in Nigeria
- You take the Oath of Allegiance

**For People with Nigerian Grandparents:**
- You were born outside Nigeria
- At least one of your grandparents is a Nigerian citizen
- You are an adult (18 years or older)
- You meet the character and oath requirements

**The Process:**
1. Apply to the President through the proper channels
2. Show you have good character
3. Prove you want to live in Nigeria
4. Take the Oath of Allegiance to Nigeria

**Important**: The President must be satisfied with your application before granting citizenship.`,
    category: 'citizenship',
    source: 'Constitution of Nigeria 1999, Chapter III, Section 26',
    section: 'Section 26',
    keyPoints: [
      'Spouses of Nigerians can apply for citizenship',
      'People with Nigerian grandparents can apply',
      'Must show good character',
      'Must take Oath of Allegiance',
    ],
    originalText: `Subject to the provisions of section 28 of this Constitution, a person to whom the provisions of this section apply may be registered as a citizen of Nigeria if the President is satisfied that - he is a person of good character; he has shown a clear intention of his desire to be domiciled in Nigeria; and he has taken the Oath of Allegiance prescribed in the Seventh Schedule to this Constitution.

The provisions of this section shall apply to - any woman who is or has been married to a citizen of Nigeria; or every person of full age and capacity born outside Nigeria any of whose grandparents is a citizen of Nigeria.`,
  },
  {
    id: 'citizenship-003',
    title: 'Becoming Nigerian by Naturalization',
    summary: 'Foreigners who have lived in Nigeria for at least 15 years can apply to become citizens through naturalization.',
    content: `If you are a foreigner who loves Nigeria and wants to become a citizen, you can apply for NATURALIZATION. Here are the requirements:

**You Must:**
- Be an adult with full mental capacity
- Be of good character
- Show you genuinely want to live in Nigeria permanently
- Be accepted by the local community where you want to live
- Be able to contribute positively to Nigeria
- Take the Oath of Allegiance

**Residency Requirements:**
- Have lived in Nigeria continuously for 15 years, OR
- Have lived in Nigeria for at least 12 months continuously, AND
- In the 20 years before that, have lived in Nigeria for at least 15 years total

**The Process:**
You need approval from the Governor of the state where you live (or plan to live), showing that the local community accepts you.

**Important**: Naturalized citizens can lose their citizenship if convicted of serious crimes within 7 years of becoming citizens.`,
    category: 'citizenship',
    source: 'Constitution of Nigeria 1999, Chapter III, Section 27',
    section: 'Section 27',
    keyPoints: [
      'Must live in Nigeria for at least 15 years',
      'Must be accepted by local community',
      'Must show good character',
      'Can be lost if you commit serious crimes',
    ],
    originalText: `Subject to the provisions of section 28 of this Constitution, any person who is qualified in accordance with the provisions of this section may apply to the President for the grant of a certificate of naturalisation.

No person shall be qualified to apply for the grant of a certificate of naturalisation, unless he satisfies the President that - he is a person of full age and capacity; he is a person of good character; he has shown a clear intention of his desire to be domiciled in Nigeria; he is, in the opinion of the Governor of the State where he is or he proposes to be resident, acceptable to the local community in which he is to live permanently, and has been assimilated into the way of life of Nigerians in that part of the Federation; he is a person who has made or is capable of making useful contribution to the advancement, progress and well-being of Nigeria; he has taken the Oath of Allegiance prescribed in the Seventh Schedule to this Constitution; and he has, immediately preceding the date of his application, either resided in Nigeria for a continuous period of fifteen years; or resided in Nigeria continuously for a period of twelve months, and during the period of twenty years immediately preceding that period of twelve months has resided in Nigeria for periods amounting in the aggregate to not less than fifteen years.`,
  },
  {
    id: 'citizenship-004',
    title: 'Dual Citizenship Rules',
    summary: 'If you become a citizen of another country, you may lose your Nigerian citizenship unless you are Nigerian by birth.',
    content: `Here are the rules about having citizenship of Nigeria and another country:

**If You Are Nigerian BY BIRTH:**
- You can have dual citizenship
- Getting citizenship of another country does NOT automatically remove your Nigerian citizenship

**If You Became Nigerian by Registration or Naturalization:**
- If you acquire citizenship of another country, you AUTOMATICALLY lose your Nigerian citizenship
- When you registered/naturalized, if you were already a citizen of another country, you must renounce it within 5 months

**Renouncing Nigerian Citizenship:**
If you want to give up your Nigerian citizenship:
- You must be an adult
- Make a declaration to give it up
- The President registers your declaration
- Once registered, you stop being a Nigerian

**Exception**: The President can refuse to register your renunciation during wartime or if it's against public interest.`,
    category: 'citizenship',
    source: 'Constitution of Nigeria 1999, Chapter III, Sections 28-29',
    section: 'Sections 28-29',
    keyPoints: [
      'Nigerians by birth can hold dual citizenship',
      'Naturalized citizens lose citizenship if they get another',
      'You can renounce your citizenship voluntarily',
      'President can refuse renunciation during war',
    ],
    originalText: `Subject to the other provisions of this section, a person shall forfeit forthwith his Nigerian citizenship if, not being a citizen of Nigeria by birth, he acquires or retains the citizenship or nationality of a country, other than Nigeria, of which he is not a citizen by birth.

Any citizen of Nigeria of full age who wishes to renounce his Nigerian citizenship shall make a declaration in the prescribed manner for the renunciation. The President shall cause the declaration made under subsection (1) of this section to be registered and upon such registration, the person who made the declaration shall cease to be a citizen of Nigeria.`,
  },
  {
    id: 'citizenship-005',
    title: 'Losing Your Citizenship',
    summary: 'The government can take away citizenship from naturalized citizens in certain serious cases.',
    content: `If you are NOT a Nigerian by birth, the government can take away your citizenship in these cases:

**Automatic Loss:**
- If you acquire citizenship of another country (unless you were also a citizen of that country by birth)

**The President Can Remove Your Citizenship If:**
- You are naturalized and get sentenced to 3+ years in prison within 7 years of becoming Nigerian
- You have shown by your actions or words that you are disloyal to Nigeria
- You traded with enemies during a war
- You helped enemies of Nigeria during wartime

**Important Protections:**
- Citizens BY BIRTH cannot have their citizenship taken away
- There must be proper investigation or court proceedings before citizenship is removed
- You have the right to defend yourself

This is why citizenship by birth is so important - it gives you the strongest protection.`,
    category: 'citizenship',
    source: 'Constitution of Nigeria 1999, Chapter III, Section 30',
    section: 'Section 30',
    keyPoints: [
      'Only non-birth citizens can lose citizenship',
      'Crime conviction can lead to loss of citizenship',
      'Disloyalty to Nigeria can cause loss',
      'Helping enemies during war causes loss',
    ],
    originalText: `The President may deprive a person, other than a person who is a citizen of Nigeria by birth or by registration, of his citizenship, if he is satisfied that such person has, within a period of seven years after becoming naturalised, been sentenced to imprisonment for a term of not less than three years.

The President shall deprive a person, other than a person who is citizen of Nigeria by birth, of his citizenship, if he is satisfied from the records of proceedings of a court of law or other tribunal or after due inquiry in accordance with regulations made by him, that - the person has shown himself by act or speech to be disloyal towards the Federal Republic of Nigeria; or the person has, during any war in which Nigeria was engaged, unlawfully traded with the enemy or been engaged in or associated with any business that was in the opinion of the President carried on in such a manner as to assist the enemy of Nigeria in that war, or unlawfully communicated with such enemy to the detriment of or with intent to cause damage to the interest of Nigeria.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - GOVERNMENT DUTIES (Chapter II)
  // =====================================================

  {
    id: 'govt-001',
    title: 'The Government Works for You',
    summary: 'The Nigerian government exists to serve the people. Power belongs to Nigerians, and government gets its authority from us.',
    content: `Here's something important to understand about Nigeria:

**Power Belongs to the People:**
- Sovereignty (supreme power) belongs to the PEOPLE of Nigeria
- The government only has power because the Constitution (which represents the people) gives it
- Government exists to serve YOU, not the other way around

**The Government Must:**
- Base its actions on democracy and social justice
- Make sure security and welfare of the people are its PRIMARY PURPOSE
- Ensure people participate in how they are governed

**Federal Character:**
- Government must be balanced - no one region, state, or ethnic group should dominate
- This applies to federal, state, and local governments
- All agencies and appointments must reflect Nigeria's diversity

**The Motto**: Unity and Faith, Peace and Progress - this is what Nigeria stands for.`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Sections 13-14',
    section: 'Sections 13-14',
    keyPoints: [
      'Power belongs to the people of Nigeria',
      'Government exists to serve the people',
      'Security and welfare are the main purpose of government',
      'Government must reflect Nigeria\'s diversity',
    ],
    originalText: `It shall be the duty and responsibility of all organs of government, and of all authorities and persons, exercising legislative, executive or judicial powers, to conform to, observe and apply the provisions of this Chapter of this Constitution.

The Federal Republic of Nigeria shall be a State based on the principles of democracy and social justice. It is hereby, accordingly, declared that - sovereignty belongs to the people of Nigeria from whom government through this Constitution derives all its powers and authority; the security and welfare of the people shall be the primary purpose of government; and the participation by the people in their government shall be ensured in accordance with the provisions of this Constitution.`,
  },
  {
    id: 'govt-002',
    title: 'No Discrimination in Nigeria',
    summary: 'The government must promote national unity and ensure no discrimination based on tribe, religion, sex, or where you come from.',
    content: `Nigeria's Constitution strongly supports national unity:

**What's Prohibited:**
- Discrimination based on:
  - Place of origin (state or village)
  - Sex (male or female)
  - Religion
  - Ethnicity/Tribe
  - Language
  - Political opinion

**What the Government Must Do:**
- Actively encourage national integration
- Allow free movement of people and goods across states
- Ensure every Nigerian can live anywhere in Nigeria
- Encourage inter-marriage across ethnic and religious lines
- Promote associations that bring different groups together

**The Goal:**
- Create a feeling of belonging among ALL Nigerians
- Make loyalty to Nigeria stronger than loyalty to tribe or religion
- Abolish ALL corrupt practices and abuse of power`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Section 15',
    section: 'Section 15',
    keyPoints: [
      'No discrimination allowed on any grounds',
      'National unity must be promoted',
      'Free movement throughout Nigeria',
      'Corruption must be abolished',
    ],
    originalText: `The motto of the Federal Republic of Nigeria shall be Unity and Faith, Peace and Progress.

Accordingly, national integration shall be actively encouraged, whilst discrimination on the grounds of place of origin, sex, religion, status, ethnic or linguistic association or ties shall be prohibited.

For the purpose of promoting national integration, it shall be the duty of the State to - provide adequate facilities for and encourage free mobility of people, goods and services throughout the Federation; secure full residence rights for every citizen in all parts of the Federation; encourage inter-marriage among persons from different places of origin, or of different religious, ethnic or linguistic association or ties; and promote or encourage the formation of associations that cut across ethnic, linguistic, religious and or other sectional barriers.

The State shall abolish all corrupt practices and abuse of power.`,
  },
  {
    id: 'govt-003',
    title: 'Economic Promises to Nigerians',
    summary: 'The government promises to manage the economy for everyone\'s benefit - providing jobs, housing, food, minimum wage, and caring for the elderly and disabled.',
    content: `The Constitution says the government should manage the economy to benefit ALL Nigerians:

**The Government Should Ensure:**
- National prosperity and a strong, self-reliant economy
- Maximum welfare, freedom, and happiness for every citizen
- Wealth is not concentrated in the hands of few people
- Economic activities benefit the common good

**Specific Promises:**
- Suitable and adequate SHELTER (housing)
- Suitable and adequate FOOD
- Reasonable national MINIMUM WAGE
- OLD AGE care and PENSIONS
- UNEMPLOYMENT benefits
- SICK BENEFITS
- Welfare for the DISABLED

**Economic Planning:**
- Planned and balanced economic development
- Resources distributed to serve the common good
- Protection of citizens' right to participate in the economy

**Note**: These are directive principles - guiding what government SHOULD do, though they're harder to enforce in court than fundamental rights.`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Section 16',
    section: 'Section 16',
    keyPoints: [
      'Economy should benefit everyone, not just the rich',
      'Government should provide housing and food',
      'Minimum wage is a constitutional goal',
      'Care for elderly and disabled is required',
    ],
    originalText: `The State shall, within the context of the ideals and objectives for which provisions are made in this Constitution - harness the resources of the nation and promote national prosperity and an efficient, a dynamic and self-reliant economy; control the national economy in such manner as to secure the maximum welfare, freedom and happiness of every citizen on the basis of social justice and equality of status and opportunity; without prejudice to its right to operate or participate in areas of the economy, other than the major sectors of the economy, manage and operate the major sectors of the economy.

The State shall direct its policy towards ensuring - the promotion of a planned and balanced economic development; that the material resources of the nation are harnessed and distributed as best as possible to serve the common good; that the economic system is not operated in such a manner as to permit the concentration of wealth or the means of production and exchange in the hands of few individuals or of a group; and that suitable and adequate shelter, suitable and adequate food, reasonable national minimum living wage, old age care and pensions, and unemployment, sick benefits and welfare of the disabled are provided for all citizens.`,
  },
  {
    id: 'govt-004',
    title: 'Social Justice and Human Dignity',
    summary: 'Nigerian society is founded on freedom, equality, and justice. Everyone deserves equal rights and humane treatment.',
    content: `The Constitution envisions a society built on:

**Core Values:**
- FREEDOM
- EQUALITY
- JUSTICE

**What This Means:**
- Every citizen has EQUAL rights, obligations, and opportunities before the law
- Human dignity must be maintained and enhanced
- Government actions must be HUMANE
- Exploitation of people or resources (except for community good) must be prevented
- Courts must be independent, impartial, and accessible to everyone

**Government Must Work Toward:**
- Equal opportunity for employment and livelihood
- Just and humane working conditions
- Adequate facilities for leisure and social/cultural life
- Health and safety at work
- Adequate medical and health facilities for ALL
- EQUAL PAY FOR EQUAL WORK (regardless of gender)
- Protection of children, youth, and elderly from exploitation
- Public assistance for those in need`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Section 17',
    section: 'Section 17',
    keyPoints: [
      'Society based on freedom, equality, and justice',
      'Equal pay for equal work',
      'Protection for children and elderly',
      'Adequate healthcare for all',
    ],
    originalText: `The State social order is founded on ideals of Freedom, Equality and Justice.

In furtherance of the social order - every citizen shall have equality of rights, obligations and opportunities before the law; the sanctity of the human person shall be recognised and human dignity shall be maintained and enhanced; governmental actions shall be humane; exploitation of human or natural resources in any form whatsoever for reasons, other than the good of the community, shall be prevented; and the independence, impartiality and integrity of courts of law, and easy accessibility thereto shall be secured and maintained.

The State shall direct its policy towards ensuring that - all citizens, without discrimination on any group whatsoever, have the opportunity for securing adequate means of livelihood as well as adequate opportunity to secure suitable employment; conditions of work are just and humane, and that there are adequate facilities for leisure and for social, religious and cultural life; the health, safety and welfare of all persons in employment are safeguarded and not endangered or abused; there are adequate medical and health facilities for all persons; there is equal pay for equal work without discrimination on account of sex, or on any other ground whatsoever; children, young persons and the aged are protected against any exploitation whatsoever, and against moral and material neglect.`,
  },
  {
    id: 'govt-005',
    title: 'Education for All Nigerians',
    summary: 'The government promises to provide free education at all levels - primary, secondary, and university - and eliminate illiteracy.',
    content: `The Constitution makes big promises about education:

**Government Should Provide:**
- Equal and adequate educational opportunities at ALL levels
- Free, compulsory, and universal PRIMARY education
- Free SECONDARY education
- Free UNIVERSITY education
- Free adult literacy programs

**Goals:**
- Eradicate (eliminate) illiteracy
- Promote science and technology
- Give everyone a chance to be educated

**Reality Check:**
While these are constitutional goals, implementation has been challenging. However, knowing these are constitutional promises gives Nigerians the basis to demand better education.

**Important**: Education is a key priority because an educated population can better demand their rights and participate in governance.`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Section 18',
    section: 'Section 18',
    keyPoints: [
      'Free primary education is a constitutional goal',
      'Free secondary education is a constitutional goal',
      'Free university education is a constitutional goal',
      'Government should eliminate illiteracy',
    ],
    originalText: `Government shall direct its policy towards ensuring that there are equal and adequate educational opportunities at all levels.

Government shall promote science and technology.

Government shall strive to eradicate illiteracy; and to this end Government shall as and when practicable provide - free, compulsory and universal primary education; free secondary education; free university education; and free adult literacy programme.`,
  },
  {
    id: 'govt-006',
    title: 'Protecting Our Environment',
    summary: 'The government must protect and improve the Nigerian environment - water, air, land, forests, and wildlife.',
    content: `The Constitution says the government must protect the environment:

**What Must Be Protected:**
- Our WATER sources (rivers, streams, groundwater)
- Our AIR (keeping it clean and breathable)
- Our LAND (preventing degradation)
- Our FORESTS (preserving trees and plant life)
- Our WILDLIFE (protecting animals and biodiversity)

**Why This Matters:**
- A healthy environment means healthy people
- Future generations deserve to inherit a good environment
- Oil spills, pollution, and deforestation harm communities
- Climate change affects everyone

**Your Role:**
While this is primarily a government duty, you can:
- Report environmental damage to authorities
- Participate in community clean-up efforts
- Advocate for environmental protection
- Hold government and companies accountable for pollution`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Section 20',
    section: 'Section 20',
    keyPoints: [
      'Government must protect water, air, and land',
      'Forests and wildlife must be safeguarded',
      'Environmental protection is a constitutional duty',
      'Citizens can demand environmental accountability',
    ],
    originalText: `The State shall protect and improve the environment and safeguard the water, air and land, forest and wild life of Nigeria.`,
  },
  {
    id: 'govt-007',
    title: 'Your Duties as a Nigerian Citizen',
    summary: 'As a citizen, you also have duties - respect the Constitution, help Nigeria, pay taxes, and live in unity with other Nigerians.',
    content: `Rights come with responsibilities. As a Nigerian citizen, your duties include:

**Your Duties:**

1. **Respect the Constitution**
   - Abide by the Constitution
   - Respect the National Flag, Anthem, and Pledge
   - Respect legitimate authorities

2. **Serve Nigeria**
   - Help enhance the power and good name of Nigeria
   - Be ready to defend Nigeria
   - Render national service when required

3. **Respect Others**
   - Respect the dignity of other citizens
   - Respect the rights and interests of others
   - Live in unity and harmony with other Nigerians
   - Embrace the spirit of common brotherhood

4. **Contribute Positively**
   - Make useful contributions to your community
   - Help maintain law and order
   - Assist appropriate agencies when needed

5. **Pay Your Taxes**
   - Declare your income honestly
   - Pay your taxes promptly

Being a good citizen means enjoying your rights while also fulfilling your responsibilities.`,
    category: 'government-duties',
    source: 'Constitution of Nigeria 1999, Chapter II, Section 24',
    section: 'Section 24',
    keyPoints: [
      'Respect the Constitution and national symbols',
      'Live in unity with other Nigerians',
      'Contribute to your community',
      'Pay your taxes honestly',
    ],
    originalText: `It shall be the duty of every citizen to - abide by this Constitution, respect its ideals and its institutions, the National Flag, the National Anthem, the National Pledge, and legitimate authorities; help to enhance the power, prestige and good name of Nigeria, defend Nigeria and render such national service as may be required; respect the dignity of other citizens and the rights and legitimate interests of others and live in unity and harmony and in the spirit of common brotherhood; make positive and useful contribution to the advancement, progress and well-being of the community where he resides; render assistance to appropriate and lawful agencies in the maintenance of law and order; and declare his income honestly to appropriate and lawful agencies and pay his tax promptly.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - HOW NIGERIA WORKS (Chapter I)
  // =====================================================

  {
    id: 'basics-001',
    title: 'The Constitution is the Supreme Law',
    summary: 'The Nigerian Constitution is the highest law in the land. Any law that contradicts it is automatically invalid.',
    content: `Understanding the power of the Constitution:

**The Constitution is Supreme:**
- The Constitution is the HIGHEST law in Nigeria
- No other law can override it
- If any law contradicts the Constitution, that law is VOID (invalid)
- This applies to all laws - federal, state, and local

**What This Means for You:**
- Your constitutional rights cannot be taken away by any ordinary law
- If a government policy violates the Constitution, you can challenge it
- Courts can strike down unconstitutional laws
- Even the President cannot act against the Constitution

**Important Principle:**
This is why knowing your constitutional rights is so important - they are protected at the highest level of law!`,
    category: 'constitutional-basics',
    source: 'Constitution of Nigeria 1999, Chapter I, Section 1',
    section: 'Section 1',
    keyPoints: [
      'Constitution is the highest law',
      'No law can contradict the Constitution',
      'Unconstitutional laws are automatically void',
      'Your constitutional rights are supreme',
    ],
    originalText: `This Constitution is supreme and its provisions shall have binding force on the authorities and persons throughout the Federal Republic of Nigeria.

The Federal Republic of Nigeria shall not be governed, nor shall any persons or group of persons take control of, or participate in the Government of Nigeria or any part thereof, except in accordance with the provisions of this Constitution.

If any other law is inconsistent with the provisions of this Constitution, this Constitution shall prevail, and that other law shall, to the extent of the inconsistency, be void.`,
  },
  {
    id: 'basics-002',
    title: 'Nigeria is One Country - Indivisible',
    summary: 'Nigeria is one country that cannot be divided. It consists of 36 states and the Federal Capital Territory, Abuja.',
    content: `The basic structure of Nigeria:

**Nigeria is:**
- One INDIVISIBLE and INDISSOLUBLE sovereign state
- This means Nigeria cannot legally be broken up
- It's called the Federal Republic of Nigeria

**The Structure:**
- 36 STATES
- 1 FEDERAL CAPITAL TERRITORY (Abuja)
- 768 Local Government Areas

**The 36 States:**
Abia, Adamawa, Akwa Ibom, Anambra, Bauchi, Bayelsa, Benue, Borno, Cross River, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe, and Zamfara.

**Why This Matters:**
No state can legally secede (break away) from Nigeria. While people can advocate for their views, the Constitution establishes Nigeria as one united country.`,
    category: 'constitutional-basics',
    source: 'Constitution of Nigeria 1999, Chapter I, Sections 2-3',
    section: 'Sections 2-3',
    keyPoints: [
      'Nigeria is one indivisible country',
      'There are 36 states plus FCT Abuja',
      '768 Local Government Areas exist',
      'No state can legally secede',
    ],
    originalText: `Nigeria is one indivisible and indissoluble sovereign state to be known by the name of the Federal Republic of Nigeria.

Nigeria shall be a Federation consisting of States and a Federal Capital Territory.

There shall be 36 states in Nigeria, that is to say, Abia, Adamawa, Akwa Ibom, Anambra, Bauchi, Bayelsa, Benue, Borno, Cross River, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe and Zamfara.

There shall be 768 Local Government Areas in Nigeria as shown in the second column of Part I of the First Schedule to this Constitution.`,
  },
  {
    id: 'basics-003',
    title: 'The Three Arms of Government',
    summary: 'Nigeria\'s government has three branches: the Legislature makes laws, the Executive enforces them, and the Judiciary interprets them.',
    content: `Nigeria's government is divided into THREE ARMS:

**1. THE LEGISLATURE (Makes Laws)**
- At Federal Level: National Assembly (Senate + House of Representatives)
- At State Level: State House of Assembly
- They debate and pass laws
- They also check the other arms of government

**2. THE EXECUTIVE (Enforces Laws)**
- At Federal Level: President and Ministers
- At State Level: Governor and Commissioners
- At Local Level: Local Government Chairman
- They run the day-to-day government and implement laws

**3. THE JUDICIARY (Interprets Laws)**
- Supreme Court (highest court)
- Court of Appeal
- Federal High Court
- State High Courts
- Other courts (Sharia, Customary, etc.)
- They settle disputes and interpret what laws mean

**Why Three Arms?**
This system of "separation of powers" ensures no single person or group has all the power. Each arm checks and balances the others.`,
    category: 'constitutional-basics',
    source: 'Constitution of Nigeria 1999, Chapter I, Sections 4-6',
    section: 'Sections 4-6',
    keyPoints: [
      'Legislature makes the laws',
      'Executive enforces the laws',
      'Judiciary interprets the laws',
      'Each arm checks the others',
    ],
    originalText: `The legislative powers of the Federal Republic of Nigeria shall be vested in a National Assembly for the Federation, which shall consist of a Senate and a House of Representatives.

Subject to the provisions of this Constitution, the executive powers of the Federation shall be vested in the President and may be exercised by him either directly or through the Vice-President and Ministers of the Government of the Federation.

The judicial powers of the Federation shall be vested in the courts to which this section relates, being courts established for the Federation.`,
  },
  {
    id: 'basics-004',
    title: 'No State Religion in Nigeria',
    summary: 'Nigeria has no official religion. The government cannot adopt any religion as the state religion.',
    content: `Nigeria is a SECULAR STATE:

**What This Means:**
- Nigeria has NO official religion
- The Federal Government cannot adopt any religion as state religion
- State governments also cannot adopt a state religion
- All religions are equal before the law

**Why This Matters:**
- Christians, Muslims, and practitioners of traditional religions are all equal citizens
- The government cannot favor one religion over another
- Religious freedom is protected for everyone
- You cannot be discriminated against based on your religion

**Important Note:**
While some states in Northern Nigeria practice Sharia law for Muslims, this operates within the constitutional framework. The Constitution's guarantee of religious freedom still applies.

This provision helps maintain peace in a country with diverse religious beliefs.`,
    category: 'constitutional-basics',
    source: 'Constitution of Nigeria 1999, Chapter I, Section 10',
    section: 'Section 10',
    keyPoints: [
      'Nigeria has no official religion',
      'Government cannot favor any religion',
      'All religions are equal',
      'Religious freedom is protected',
    ],
    originalText: `The Government of the Federation or of a State shall not adopt any religion as State Religion.`,
  },
  {
    id: 'basics-005',
    title: 'Local Government is Guaranteed',
    summary: 'Every state must have democratically elected local government councils. They help bring government closer to the people.',
    content: `Local Government is important in Nigeria:

**What the Constitution Guarantees:**
- Every state MUST have local government councils
- These councils must be DEMOCRATICALLY ELECTED
- This is guaranteed by the Constitution

**What Local Governments Do:**
- Economic planning and development at local level
- Participate in state economic planning
- Functions assigned by state laws
- Services closer to the people

**Democratic Participation:**
- If you can vote for the House of Assembly, you can vote for local government elections
- This ensures grassroots democracy
- Local government brings governance to the local level

**The Structure:**
Nigeria has 768 Local Government Areas. Each state has multiple LGAs that handle local matters.

**Why It Matters:**
Local government is the level of government closest to the people. It should address local needs and ensure community participation in governance.`,
    category: 'constitutional-basics',
    source: 'Constitution of Nigeria 1999, Chapter I, Section 7',
    section: 'Section 7',
    keyPoints: [
      'Local government councils must be elected democratically',
      'Every state must have local governments',
      'They handle local development',
      'You can vote in local government elections',
    ],
    originalText: `The system of local government by democratically elected local government councils is under this Constitution guaranteed; and accordingly, the Government of every State shall, subject to section 8 of this Constitution, ensure their existence under a Law which provides for the establishment, structure, composition, finance and functions of such councils.

The Government of a State shall ensure that every person who is entitled to vote or be voted for at an election to House of Assembly shall have the right to vote or be voted for at an election to a local government council.

The functions to be conferred by Law upon local government council shall include those set out in the Fourth Schedule to this Constitution.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - ELECTIONS & VOTING (Part I of Third Schedule)
  // =====================================================

  {
    id: 'electoral-001',
    title: 'Your Right to Vote',
    summary: 'Every Nigerian citizen aged 18 and above has the right to vote in elections.',
    content: `Voting is one of your most important rights as a Nigerian. Here's what you need to know:

**Who Can Vote:**
- You must be a Nigerian citizen
- You must be 18 years or older
- You must be registered with INEC (Independent National Electoral Commission)
- You must not be declared mentally incapacitated by a court

**How to Register:**
- Go to INEC's Continuous Voter Registration (CVR)
- Provide your details and biometric data
- Collect your Permanent Voter's Card (PVC)
- Without your PVC, you CANNOT vote

**Your Vote Matters:**
- You choose the President, Governors, Senators, House of Representatives members, and State House of Assembly members
- Your vote is SECRET - no one can know who you voted for
- Voting is your way of holding government accountable`,
    category: 'electoral',
    source: 'Constitution of Nigeria 1999, Section 77; Electoral Act 2022',
    section: 'Section 77',
    keyPoints: [
      'Must be 18 years or older to vote',
      'Must be a Nigerian citizen',
      'Must register with INEC and get PVC',
      'Your vote is secret',
    ],
    originalText: `Every citizen of Nigeria, who has attained the age of eighteen years residing in Nigeria at the time of the registration of voters for purposes of election to a legislative house, shall be entitled to be registered as a voter for that election.`,
  },
  {
    id: 'electoral-002',
    title: 'INEC - The Election Body',
    summary: 'The Independent National Electoral Commission (INEC) conducts all elections in Nigeria.',
    content: `INEC is the body responsible for conducting elections in Nigeria. Here's what they do:

**INEC's Powers:**
- Organize and supervise all elections (Presidential, Governorship, National Assembly, State Assembly)
- Register voters and maintain the voters' register
- Register political parties and monitor them
- Divide the country into constituencies
- Educate Nigerians about elections

**INEC Must Be Independent:**
- The Chairman and Commissioners are appointed by the President (with Senate approval)
- Once appointed, they cannot be easily removed
- They should not favor any political party
- Their funding comes directly from the Consolidated Revenue Fund

**Political Parties:**
- All political parties must register with INEC
- INEC monitors their activities and finances
- INEC can deregister parties that don't meet requirements
- Parties must follow the constitution and electoral laws`,
    category: 'electoral',
    source: 'Constitution of Nigeria 1999, Third Schedule, Part I, Section F',
    section: 'Third Schedule, Part I',
    keyPoints: [
      'INEC conducts all elections in Nigeria',
      'INEC registers voters and political parties',
      'INEC must be independent',
      'INEC divides the country into constituencies',
    ],
    originalText: `The Commission shall have power to: organise, undertake and supervise all elections to the offices of the President and Vice-President, the Governor and Deputy Governor of a State, and to the membership of the Senate, the House of Representatives and the House of Assembly of each State of the Federation; register political parties in accordance with the provisions of this Constitution and an Act of the National Assembly; monitor the organisation and operation of the political parties, including their finances.`,
  },
  {
    id: 'electoral-003',
    title: 'Election Offences and Penalties',
    summary: 'Electoral malpractice carries heavy penalties including imprisonment.',
    content: `Elections must be free and fair. Here are things you must NOT do:

**Vote Buying and Selling:**
- Don't accept money or gifts for your vote
- Don't offer money or gifts to influence voters
- Penalty: Up to 12 months imprisonment or fine

**Multiple Voting:**
- You can only vote ONCE in any election
- Using fake voter cards is a crime
- Penalty: Up to 2 years imprisonment

**Violence and Intimidation:**
- Don't threaten or harm voters
- Don't disrupt voting with violence
- Penalty: Up to 3 years imprisonment

**Ballot Snatching:**
- Don't steal or destroy ballot boxes
- Don't interfere with election materials
- Penalty: Up to 2 years imprisonment

**False Results:**
- Election officials who falsify results face prison
- Penalty: Up to 3 years imprisonment

**Report Electoral Offences:** If you witness any of these, report to INEC, police, or election observers.`,
    category: 'electoral',
    source: 'Electoral Act 2022, Sections 114-129',
    penalty: 'Various penalties from fines to imprisonment depending on offence',
    keyPoints: [
      'Vote buying carries up to 12 months imprisonment',
      'Multiple voting is a criminal offence',
      'Ballot snatching carries up to 2 years',
      'Election violence carries severe penalties',
    ],
  },
  {
    id: 'electoral-004',
    title: 'Who Can Run for Office',
    summary: 'Different positions have different requirements for age, education, and citizenship.',
    content: `Want to run for public office? Here are the requirements:

**President of Nigeria:**
- Nigerian citizen by birth
- At least 40 years old
- Member of a political party
- Educated at least to School Certificate level (or equivalent)
- Not convicted of any offence involving dishonesty

**Governor of a State:**
- Nigerian citizen by birth
- At least 35 years old
- Member of a political party
- Educated at least to School Certificate level

**Senator:**
- Nigerian citizen (by birth or naturalization)
- At least 35 years old
- Member of a political party
- Educated at least to School Certificate level

**House of Representatives Member:**
- Nigerian citizen
- At least 30 years old
- Member of a political party
- Educated at least to School Certificate level

**State House of Assembly Member:**
- Nigerian citizen
- At least 30 years old
- Member of a political party
- Educated at least to School Certificate level`,
    category: 'electoral',
    source: 'Constitution of Nigeria 1999, Sections 65, 106, 131, 177',
    keyPoints: [
      'President must be 40+, citizen by birth',
      'Governor must be 35+, citizen by birth',
      'Senators must be 35+',
      'House of Reps members must be 30+',
    ],
    originalText: `A person shall be qualified for election to the Senate if - he is a citizen of Nigeria by birth; he has attained the age of thirty-five years; he has been educated up to at least School Certificate level or its equivalent; and he is a member of a political party and is sponsored by that party.`,
  },
  {
    id: 'electoral-005',
    title: 'Election Petition and Disputes',
    summary: 'If you believe an election was not fair, you can challenge it at the Election Tribunal.',
    content: `If you believe an election was rigged or conducted wrongly, here's what you can do:

**Who Can Challenge an Election:**
- A candidate who contested the election
- A political party that fielded a candidate

**Where to Challenge:**
- National Assembly elections: Election Petition Tribunal
- Governorship elections: Election Petition Tribunal
- Presidential election: Court of Appeal (as Tribunal of first instance)

**Time Limit:**
- You must file your petition within 21 days of the election results being declared
- Don't delay - if you miss this deadline, you lose your chance

**What You Must Prove:**
- The winner was not qualified to contest
- The election was not conducted according to law
- The winner was not validly elected (through rigging, etc.)
- The winner's votes should be voided due to corruption

**Appeals:**
- From Election Tribunal, you can appeal to the Court of Appeal
- From Court of Appeal, you can appeal to the Supreme Court (for Presidential and Governorship)
- The Supreme Court's decision is FINAL`,
    category: 'electoral',
    source: 'Constitution of Nigeria 1999, Section 285; Electoral Act 2022',
    section: 'Section 285',
    keyPoints: [
      'Must file petition within 21 days',
      'Only candidates and parties can challenge',
      'Supreme Court is the final arbiter',
      'Must prove election was flawed',
    ],
    originalText: `An election petition shall be filed within twenty-one days after the date of declaration of result of the election. An election tribunal shall deliver its judgment in writing within one hundred and eighty days from the date of the filing of the petition.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - THE LEGISLATURE (Part II)
  // =====================================================

  {
    id: 'legislature-001',
    title: 'The National Assembly',
    summary: 'Nigeria has two legislative houses: the Senate (109 members) and the House of Representatives (360 members).',
    content: `The National Assembly is where Nigeria's laws are made. It consists of two chambers:

**The Senate:**
- 109 Senators total
- 3 Senators from each of the 36 states
- 1 Senator from the Federal Capital Territory (Abuja)
- The Senate President leads the Senate
- Senators serve 4-year terms

**The House of Representatives:**
- 360 members
- Number from each state depends on population
- The Speaker leads the House
- Members serve 4-year terms

**What They Do:**
- Make laws for Nigeria
- Approve the national budget
- Approve appointments (Ministers, Ambassadors, etc.)
- Investigate government agencies
- Can impeach the President or Vice President

**How Laws Are Made:**
- A bill can start in either the Senate or House
- It must pass both chambers
- Then it goes to the President for signature
- If the President refuses (vetoes), it can still become law if 2/3 of both chambers vote for it`,
    category: 'legislature',
    source: 'Constitution of Nigeria 1999, Part II, Sections 47-64',
    section: 'Sections 47-64',
    keyPoints: [
      'Senate has 109 members (3 per state + 1 FCT)',
      'House of Reps has 360 members',
      'They make laws and approve budgets',
      'Legislators serve 4-year terms',
    ],
    originalText: `There shall be a National Assembly for the Federation which shall consist of a Senate and a House of Representatives. The Senate shall consist of three Senators from each State and one from the Federal Capital Territory, Abuja. The House of Representatives shall consist of three hundred and sixty members representing constituencies of nearly equal population as far as possible.`,
  },
  {
    id: 'legislature-002',
    title: 'Powers of the National Assembly',
    summary: 'The National Assembly has the power to make laws on matters in the Exclusive and Concurrent Legislative Lists.',
    content: `The National Assembly has power to make laws on many important matters:

**Exclusive List (Only National Assembly can legislate):**
- Defence and national security
- Currency, banking, and finance
- Immigration and citizenship
- Foreign affairs
- Aviation and railways
- Mines and minerals (including oil and gas)
- Police and other security agencies
- Customs and excise
- Patents and trademarks

**Concurrent List (Both National Assembly and State Assemblies):**
- Education
- Health
- Agriculture
- Housing
- Electricity

**Special Powers:**
- Approve national budget
- Approve borrowing by government
- Confirm ministerial appointments
- Investigate any matter
- Summon anyone to testify
- Declare state of emergency (with President)

**Limitations:**
- Cannot make laws that violate fundamental rights
- Cannot make retroactive criminal laws
- Some laws require 2/3 majority`,
    category: 'legislature',
    source: 'Constitution of Nigeria 1999, Part II, Second Schedule',
    section: 'Second Schedule',
    keyPoints: [
      'Exclusive List: Only National Assembly can legislate',
      'Concurrent List: Shared with State Assemblies',
      'Can approve budgets and confirm appointments',
      'Can investigate any matter',
    ],
    originalText: `The National Assembly shall have power to make laws for the peace, order and good government of the Federation or any part thereof with respect to any matter included in the Exclusive Legislative List set out in Part I of the Second Schedule to this Constitution.`,
  },
  {
    id: 'legislature-003',
    title: 'State House of Assembly',
    summary: 'Each state has a House of Assembly that makes laws for that state.',
    content: `Each of Nigeria's 36 states has its own legislature called the House of Assembly:

**Composition:**
- Each state has between 24 and 40 members
- Number depends on the state's population
- Led by a Speaker
- Members serve 4-year terms

**What They Do:**
- Make laws for the state
- Approve the state budget
- Confirm appointments (Commissioners, etc.)
- Can investigate state matters
- Can impeach the Governor or Deputy Governor

**Their Powers:**
- Make laws on matters in the Concurrent List
- Make laws on any matter not in the Exclusive List
- Approve creation of new local governments
- Regulate local government finances

**How State Laws Work:**
- If a state law conflicts with a federal law on the Concurrent List, the federal law prevails
- States cannot make laws on Exclusive List matters
- State laws only apply within that state`,
    category: 'legislature',
    source: 'Constitution of Nigeria 1999, Part II, Sections 90-105',
    section: 'Sections 90-105',
    keyPoints: [
      'Each state has 24-40 members',
      'Makes laws for the state only',
      'Federal law overrides conflicting state law',
      'Can impeach the Governor',
    ],
    originalText: `There shall be a House of Assembly for each of the States of the Federation. A House of Assembly shall have power to make laws for the peace, order and good government of the State or any part thereof with respect to the matters not included in the Exclusive Legislative List set out in Part I of the Second Schedule to this Constitution.`,
  },
  {
    id: 'legislature-004',
    title: 'How Bills Become Law',
    summary: 'A bill must pass through several stages in both chambers before it becomes law.',
    content: `Here's how laws are made in Nigeria:

**Step 1: Introduction**
- Any member of the National Assembly can introduce a bill
- Money bills (about taxes, spending) can only start in the House of Reps
- The bill is read for the first time (First Reading)

**Step 2: Second Reading**
- The bill is debated generally
- Members discuss the principles of the bill
- They vote on whether to proceed

**Step 3: Committee Stage**
- The bill goes to a committee for detailed examination
- The committee may hold public hearings
- They can amend the bill
- They report back to the chamber

**Step 4: Third Reading**
- Final debate and vote
- If passed, it goes to the other chamber

**Step 5: Other Chamber**
- The whole process repeats
- If changes are made, both chambers must agree

**Step 6: Presidential Assent**
- The President must sign within 30 days
- If the President refuses, the bill returns to National Assembly
- 2/3 majority in both chambers can override the President's veto`,
    category: 'legislature',
    source: 'Constitution of Nigeria 1999, Sections 58-59',
    section: 'Sections 58-59',
    keyPoints: [
      'Bills pass through three readings',
      'Must pass both Senate and House',
      'President must sign within 30 days',
      '2/3 majority can override presidential veto',
    ],
    originalText: `The power of the National Assembly to make laws shall be exercised by bills passed by both the Senate and the House of Representatives and, except as otherwise provided by subsection (5) of this section, assented to by the President.`,
  },
  {
    id: 'legislature-005',
    title: 'Legislative Immunity',
    summary: 'Members of the National Assembly have certain protections while performing their duties.',
    content: `Legislators have special protections to allow them to do their work without fear:

**What They're Protected From:**
- They cannot be sued for anything said in the National Assembly
- They cannot be arrested for civil matters while in session
- They can speak freely in debates without legal consequences

**Why This Matters:**
- Allows free debate on important issues
- Protects them from government intimidation
- Ensures they can represent their constituents fearlessly

**What They're NOT Protected From:**
- Criminal actions outside their legislative duties
- Actions outside the chambers
- Treason or other serious crimes
- They can be investigated for corruption

**Important:**
This immunity is for their LEGISLATIVE work, not personal actions. A legislator who commits a crime can still be prosecuted.`,
    category: 'legislature',
    source: 'Constitution of Nigeria 1999, Sections 30-31',
    section: 'Sections 30-31',
    keyPoints: [
      'Cannot be sued for speeches in the Assembly',
      'Cannot be arrested for civil matters during session',
      'Does not protect them from criminal prosecution',
      'Only covers legislative activities',
    ],
    originalText: `A member of a legislative house shall be entitled to freedom of speech and debates or proceedings in the legislative house. No civil or criminal proceedings shall be instituted against any member of a legislative house for words spoken before, or written in a report to, the legislative house or a committee thereof or by reason of any matter or thing brought by him therein by petition, bill, motion or otherwise.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - THE EXECUTIVE (Part II)
  // =====================================================

  {
    id: 'executive-001',
    title: 'The President of Nigeria',
    summary: 'The President is the Head of State, Head of Government, and Commander-in-Chief of the Armed Forces.',
    content: `The President is the most powerful position in Nigeria. Here's what you need to know:

**Who Is the President:**
- Head of State - represents Nigeria
- Head of Government - leads the executive branch
- Commander-in-Chief of the Armed Forces

**Requirements to Be President:**
- Nigerian citizen by birth
- At least 40 years old
- Member of a political party
- At least School Certificate education
- Not convicted of dishonesty

**How the President Is Elected:**
- Direct election by Nigerian voters
- Must win majority of votes nationwide
- Must get at least 25% of votes in 2/3 of all states (24 states)
- Serves 4-year term, maximum of 2 terms (8 years total)

**The President's Powers:**
- Appoint Ministers, Ambassadors, Judges
- Grant pardons
- Declare state of emergency
- Sign bills into law
- Make treaties with other countries
- Command the armed forces`,
    category: 'executive',
    source: 'Constitution of Nigeria 1999, Part II, Sections 130-140',
    section: 'Sections 130-140',
    keyPoints: [
      'Head of State, Government, and Armed Forces',
      'Must be Nigerian citizen by birth, 40+ years',
      'Serves maximum 2 terms of 4 years each',
      'Must win in at least 24 states',
    ],
    originalText: `There shall be for the Federation a President. The President shall be the Head of State, the Chief Executive of the Federation and Commander-in-Chief of the Armed Forces of the Federation. The President shall hold office for a term of four years and shall not hold office for more than two terms.`,
  },
  {
    id: 'executive-002',
    title: 'The Vice President',
    summary: 'The Vice President supports the President and takes over if the President cannot serve.',
    content: `The Vice President is second-in-command to the President:

**Who Is the Vice President:**
- Runs on the same ticket as the President
- Elected together with the President
- Must be from a different region/religion (by convention, not law)

**What the Vice President Does:**
- Assists the President
- Presides over the National Economic Council
- Acts as President when the President is away
- Becomes President if the President dies, resigns, or is removed

**Acting President:**
If the President is temporarily incapacitated or away:
- The Vice President acts as President
- The Vice President exercises all presidential powers
- This requires a written declaration from the President
- If President cannot make declaration, the Cabinet and National Assembly must certify

**Requirements:**
Same requirements as President:
- Nigerian citizen by birth
- At least 40 years old
- Member of same political party as President`,
    category: 'executive',
    source: 'Constitution of Nigeria 1999, Sections 141-146',
    section: 'Sections 141-146',
    keyPoints: [
      'Runs on same ticket as President',
      'Acts as President when President is away',
      'Becomes President if President cannot serve',
      'Same qualifications as President',
    ],
    originalText: `There shall be for the Federation a Vice-President who shall be elected in accordance with the provisions of section 134 of this Constitution. Whenever the President is away, or is temporarily incapable of discharging the functions of his office, or is otherwise unable to discharge the functions of his office, the Vice-President shall discharge those functions.`,
  },
  {
    id: 'executive-003',
    title: 'Governors and State Executive',
    summary: 'Each state has a Governor who is the Chief Executive of that state.',
    content: `Each of Nigeria's 36 states has its own executive led by a Governor:

**The Governor:**
- Chief Executive of the state
- Elected directly by voters in the state
- Must get majority plus 25% in 2/3 of local governments
- Serves 4-year term, maximum 2 terms
- Must be Nigerian citizen by birth, at least 35 years old

**Governor's Powers:**
- Appoint Commissioners (like Ministers at state level)
- Appoint judges of state courts
- Grant pardons for state offences
- Assent to bills from State House of Assembly
- Coordinate state government activities

**The Deputy Governor:**
- Elected with the Governor
- Acts when Governor is away
- Becomes Governor if Governor cannot serve
- Assists in governing the state

**State Executive Council:**
- Governor + Deputy Governor + Commissioners
- They run the state government together
- Each Commissioner heads a ministry`,
    category: 'executive',
    source: 'Constitution of Nigeria 1999, Sections 176-196',
    section: 'Sections 176-196',
    keyPoints: [
      'Governor is Chief Executive of the state',
      'Must be 35+ years, citizen by birth',
      'Maximum 2 terms of 4 years each',
      'Appoints Commissioners and state officials',
    ],
    originalText: `There shall be for each State of the Federation a Governor who shall be the Chief Executive of that State. The Governor of a State shall hold office for a term of four years and shall not hold office for more than two terms.`,
  },
  {
    id: 'executive-004',
    title: 'Ministers and the Federal Cabinet',
    summary: 'The President appoints Ministers who head ministries and form the Federal Executive Council.',
    content: `The President does not run the government alone. Here's how the cabinet works:

**Federal Executive Council (Cabinet):**
- The President chairs it
- Vice President is a member
- All Ministers are members
- They advise the President
- They coordinate government policy

**Ministers:**
- Appointed by the President
- Must be confirmed by the Senate
- At least one Minister from each state
- Each Minister heads a ministry

**How Ministers Are Appointed:**
1. President nominates a person
2. Senate screens the nominee
3. If approved, the person becomes Minister
4. President assigns them a ministry

**What Ministers Do:**
- Run their ministries
- Advise the President on their area
- Implement government policy
- Account to the National Assembly
- Can be summoned by National Assembly

**Removal of Ministers:**
- The President can remove any Minister at any time
- No reason needs to be given
- Ministers serve at the President's pleasure`,
    category: 'executive',
    source: 'Constitution of Nigeria 1999, Sections 147-151',
    section: 'Sections 147-151',
    keyPoints: [
      'At least one Minister from each state',
      'Must be confirmed by Senate',
      'President can remove Ministers anytime',
      'Ministers run government ministries',
    ],
    originalText: `There shall be such offices of Ministers of the Government of the Federation as may be established by the President. Any appointment to the office of Minister of the Government of the Federation shall, if the nomination of any person to such office is confirmed by the Senate, be made by the President. Any Minister appointed shall not begin to perform the functions of the office until he has declared his assets and liabilities.`,
  },
  {
    id: 'executive-005',
    title: 'Impeachment of President or Governor',
    summary: 'The President or Governor can be removed from office through an impeachment process.',
    content: `If the President or Governor commits serious misconduct, they can be removed:

**Grounds for Impeachment:**
- Gross misconduct (serious misbehavior)
- This includes: violation of the Constitution, corruption, abuse of office, or any serious wrongdoing

**The Process for President:**
1. Notice signed by at least 1/3 of Senators or House members
2. Notice given to Senate President or Speaker
3. Investigation by a panel of 7 persons
4. If panel confirms the allegations
5. 2/3 of Senate AND 2/3 of House must vote for removal
6. President is then removed from office

**The Process for Governor:**
1. Notice signed by at least 1/3 of State House of Assembly members
2. Investigation by a panel of 7 persons
3. If panel confirms the allegations
4. 2/3 of State House of Assembly must vote for removal
5. Governor is then removed from office

**Protections:**
- The President/Governor has the right to defend themselves
- The panel must be fair and impartial
- Political witch-hunts are not allowed`,
    category: 'executive',
    source: 'Constitution of Nigeria 1999, Sections 143, 188',
    section: 'Sections 143, 188',
    keyPoints: [
      'Requires 2/3 majority to remove',
      'Must be for gross misconduct',
      'Panel of 7 investigates the charges',
      'The accused has right to defend themselves',
    ],
    originalText: `The President or Vice-President may be removed from office in accordance with the provisions of this section. Whenever a notice of any allegation in writing signed by not less than one-third of the members of the National Assembly is presented to the President of the Senate stating that the holder of the office of President or Vice-President is guilty of gross misconduct in the performance of the functions of his office, detailed particulars of which shall be specified, the President of the Senate shall, within seven days of the receipt of the notice, cause a copy of the notice to be served on the holder of the office and on each member of the National Assembly.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - THE JUDICIARY (Part III)
  // =====================================================

  {
    id: 'judiciary-001',
    title: 'The Supreme Court of Nigeria',
    summary: 'The Supreme Court is the highest court in Nigeria. Its decisions are final and binding on all other courts.',
    content: `The Supreme Court is the final court of appeal in Nigeria:

**What It Is:**
- The highest court in the land
- Its decisions are FINAL - no appeal beyond it
- All other courts must follow its decisions

**Composition:**
- Chief Justice of Nigeria (CJN) - heads the court
- Up to 21 Justices of the Supreme Court
- Appointed by the President on recommendation of National Judicial Council
- Must be confirmed by the Senate
- Justices retire at age 70

**What It Does:**
- Final appeal court for all cases
- Decides disputes between Federal and State governments
- Decides disputes between states
- Has original jurisdiction in some matters
- Interprets the Constitution

**Presidential and Governorship Elections:**
The Supreme Court is the final arbiter for:
- Presidential election petitions (appeals from Court of Appeal)
- Governorship election petitions (appeals from Court of Appeal)

**Important:** When the Supreme Court speaks, that's the end. There is no higher court.`,
    category: 'judiciary',
    source: 'Constitution of Nigeria 1999, Sections 230-236',
    section: 'Sections 230-236',
    keyPoints: [
      'Highest court in Nigeria',
      'Decisions are final and binding',
      'Led by Chief Justice of Nigeria',
      'Final arbiter of election petitions',
    ],
    originalText: `There shall be a Supreme Court of Nigeria. The Supreme Court of Nigeria shall be duly constituted if it consists of not less than five Justices of the Supreme Court. The Supreme Court shall have original jurisdiction to the exclusion of any other court in any dispute between the Federation and a State or between States. The decision of the Supreme Court shall be final and binding on all courts and authorities and persons in Nigeria.`,
  },
  {
    id: 'judiciary-002',
    title: 'The Court of Appeal',
    summary: 'The Court of Appeal hears appeals from lower courts and is the first court for election petitions.',
    content: `The Court of Appeal is the second highest court in Nigeria:

**What It Is:**
- Hears appeals from Federal High Court, State High Courts, and other courts
- First court for Presidential election petitions
- Appeals from it go to the Supreme Court

**Composition:**
- President of the Court of Appeal (leads the court)
- At least 49 Justices of the Court of Appeal
- Has divisions across Nigeria
- Justices retire at age 70

**What It Does:**
- Hears appeals from lower courts
- Serves as the tribunal of first instance for Presidential elections
- Hears appeals from State Election Tribunals
- Can affirm, reverse, or modify lower court decisions

**For Election Petitions:**
- Presidential election: Court of Appeal sits as the first tribunal
- Governorship election: Hears appeals from Election Tribunals
- Must deliver judgment within 60 days of appeal

**How Appeals Work:**
You can appeal to the Court of Appeal if you disagree with a lower court's decision. You must show the lower court made an error in law or procedure.`,
    category: 'judiciary',
    source: 'Constitution of Nigeria 1999, Sections 237-248',
    section: 'Sections 237-248',
    keyPoints: [
      'Second highest court in Nigeria',
      'Hears appeals from lower courts',
      'First tribunal for Presidential election petitions',
      'Has divisions across Nigeria',
    ],
    originalText: `There shall be a Court of Appeal. The Court of Appeal shall consist of a President of the Court of Appeal and such number of Justices of the Court of Appeal, not less than forty-nine, of which number not less than three shall be learned in Islamic personal law, and not less than three shall be learned in Customary law, as may be prescribed by an Act of the National Assembly.`,
  },
  {
    id: 'judiciary-003',
    title: 'The Federal High Court',
    summary: 'The Federal High Court handles cases involving the federal government, revenue, and certain specialized matters.',
    content: `The Federal High Court is a very important court with special jurisdiction:

**What It Handles:**
- Cases involving the Federal Government
- Revenue matters (taxes, customs, excise)
- Banking and financial matters
- Companies and intellectual property
- Aviation and admiralty (shipping) matters
- Drug offences (NDLEA cases)
- Terrorism cases
- Connected matters under federal law

**Composition:**
- Chief Judge of the Federal High Court (leads it)
- Judges appointed by President on NJC recommendation
- Has divisions in each state and FCT
- Judges retire at age 65

**Why It Matters:**
If you have a case against a federal agency or about a federal matter, this is usually your court. Examples:
- Disputes with FIRS about taxes
- Disputes with Customs
- Trademark and patent disputes
- Cases against federal agencies

**Appeals:**
Decisions of the Federal High Court can be appealed to the Court of Appeal.`,
    category: 'judiciary',
    source: 'Constitution of Nigeria 1999, Sections 249-254',
    section: 'Sections 249-254',
    keyPoints: [
      'Handles federal government cases',
      'Deals with revenue and tax matters',
      'Has divisions in every state',
      'Appeals go to Court of Appeal',
    ],
    originalText: `There shall be a Federal High Court. The Federal High Court shall have and exercise jurisdiction to the exclusion of any other court in civil causes and matters - relating to the revenue of the Government of the Federation; connected with or pertaining to the taxation of companies and other bodies established or carrying on business in Nigeria and all other persons subject to Federal taxation.`,
  },
  {
    id: 'judiciary-004',
    title: 'State High Courts',
    summary: 'Each state has a High Court that handles most civil and criminal cases within that state.',
    content: `Every state has its own High Court:

**What It Is:**
- The main court of general jurisdiction in each state
- Handles most civil and criminal cases
- Has unlimited jurisdiction in the state

**Composition:**
- Chief Judge of the State (heads the court)
- High Court Judges
- Appointed by Governor on NJC recommendation
- Judges retire at age 65

**What It Handles:**
- Land disputes
- Contract disputes
- Criminal cases (murder, robbery, etc.)
- Family matters (divorce, custody)
- Enforcement of fundamental rights
- Appeals from Magistrate Courts
- Any matter not specifically assigned to other courts

**Fundamental Rights:**
This is the court you go to if your fundamental rights are violated. You can ask the High Court to:
- Stop the violation
- Award compensation
- Issue orders to protect you

**Appeals:**
High Court decisions can be appealed to the Court of Appeal.`,
    category: 'judiciary',
    source: 'Constitution of Nigeria 1999, Sections 270-274',
    section: 'Sections 270-274',
    keyPoints: [
      'Main court in each state',
      'Handles civil and criminal cases',
      'Enforces fundamental rights',
      'Appeals go to Court of Appeal',
    ],
    originalText: `There shall be a High Court for each State of the Federation. The High Court of a State shall have jurisdiction to hear and determine any civil proceedings in which the existence or extent of a legal right, power, duty, liability, privilege, interest, obligation or claim is in issue.`,
  },
  {
    id: 'judiciary-005',
    title: 'Sharia and Customary Courts',
    summary: 'Some states have Sharia Courts of Appeal and Customary Courts of Appeal for religious and traditional law matters.',
    content: `Nigeria recognizes religious and customary law in certain matters:

**Sharia Courts of Appeal (in states that have them):**
- Handle appeals in Islamic personal law matters
- Marriage, divorce, family matters for Muslims
- Inheritance under Islamic law
- Wills and trusts under Islamic law
- Found mainly in Northern states

**Customary Courts of Appeal (in states that have them):**
- Handle appeals in customary law matters
- Traditional marriage and divorce
- Chieftaincy disputes
- Customary land matters
- Inheritance under customary law

**Important Points:**
- These courts only handle CIVIL matters (not criminal for death penalty)
- Parties must consent to their jurisdiction
- You cannot be forced to go to these courts if you don't want to
- Their decisions can be appealed to the Court of Appeal

**Your Rights:**
You have the right to choose whether to have your case heard under:
- Common law (regular courts)
- Sharia law (if Muslim and case qualifies)
- Customary law (if case qualifies)`,
    category: 'judiciary',
    source: 'Constitution of Nigeria 1999, Sections 260-269, 275-284',
    section: 'Sections 260-284',
    keyPoints: [
      'Sharia courts handle Islamic personal law',
      'Customary courts handle traditional law matters',
      'Only civil matters, not criminal penalties',
      'Consent required for jurisdiction',
    ],
    originalText: `There shall be for any State that requires it a Sharia Court of Appeal for that State. A Sharia Court of Appeal of a State shall have such appellate and supervisory jurisdiction in civil proceedings involving questions of Islamic personal law. There shall be for any State that requires it a Customary Court of Appeal for that State.`,
  },

  // =====================================================
  // CONSTITUTIONAL LAW - POLICE & ARMED FORCES
  // =====================================================

  {
    id: 'police-001',
    title: 'The Nigeria Police Force',
    summary: 'There is one police force for Nigeria whose job is to maintain law and order, protect life and property.',
    content: `The Nigeria Police Force is the main law enforcement agency in Nigeria:

**What They Do:**
- Maintain law and order
- Prevent and detect crime
- Protect life and property
- Arrest and prosecute offenders
- Preserve public peace

**Structure:**
- Headed by the Inspector-General of Police (IGP)
- Each state has a Commissioner of Police
- Police Service Commission handles appointments and discipline
- Police Council advises on policy

**Your Rights When Dealing with Police:**
- They must identify themselves
- They need a warrant to search your home (with exceptions)
- You have the right to silence
- You can have a lawyer present
- You must be told why you're being arrested
- You cannot be detained beyond 24-48 hours without court order

**Limitations:**
- Police cannot torture you
- Police cannot extort money from you
- Police cannot detain you without reason
- You can report police misconduct to their superiors or the Police Service Commission`,
    category: 'police-military',
    source: 'Constitution of Nigeria 1999, Section 214; Police Act 2020',
    section: 'Section 214',
    keyPoints: [
      'One police force for all of Nigeria',
      'Headed by Inspector-General of Police',
      'Must protect life and property',
      'You have rights when dealing with police',
    ],
    originalText: `There shall be a Police Force for Nigeria, which shall be known as the Nigeria Police Force, and subject to the provisions of this section no other police force shall be established for the Federation or any part thereof. The Nigeria Police Force shall be organised and administered in accordance with such provisions as may be prescribed by an Act of the National Assembly. The members of the Nigeria Police Force shall have such powers and duties as may be conferred upon them by law.`,
  },
  {
    id: 'police-002',
    title: 'Your Rights During Arrest',
    summary: 'You have specific rights when the police arrest you, including the right to know why you are being arrested.',
    content: `If the police arrest you, you have important rights:

**Immediately Upon Arrest:**
- You must be told WHY you are being arrested
- This must be in a language you understand
- The police must identify themselves

**After Arrest:**
- You have the right to remain silent
- You have the right to a lawyer
- You can call a family member
- You cannot be tortured or treated inhumanely

**Detention Time Limits:**
- For offences where bail is possible: Maximum 24 hours before you must be charged to court
- For capital offences (e.g., murder): Maximum 48 hours
- After this time, if not charged, you MUST be released

**What You Should Do:**
- Stay calm and cooperate
- Ask for the officer's name and rank
- Don't resist arrest (even if wrongful)
- Take note of witnesses
- Report any abuse later

**If Your Rights Are Violated:**
- Report to the Officer in Charge of the station
- Report to Police Service Commission
- Report to National Human Rights Commission
- You can sue in court for compensation`,
    category: 'police-military',
    source: 'Constitution of Nigeria 1999, Section 35; Administration of Criminal Justice Act 2015',
    section: 'Section 35',
    keyPoints: [
      'Must be told reason for arrest',
      'Right to remain silent',
      'Right to a lawyer',
      'Must be charged within 24-48 hours or released',
    ],
    originalText: `Any person who is arrested or detained shall be informed in writing within twenty-four hours (and in a language that he understands) of the facts and grounds for his arrest or detention. Any person who is arrested or detained shall be brought before a court of law within a reasonable time.`,
  },
  {
    id: 'police-003',
    title: 'The Armed Forces of Nigeria',
    summary: 'The Armed Forces consist of the Army, Navy, and Air Force, commanded by the President.',
    content: `Nigeria has three branches of armed forces:

**The Three Branches:**
1. Nigerian Army - land forces
2. Nigerian Navy - sea forces
3. Nigerian Air Force - air forces

**Command Structure:**
- The President is Commander-in-Chief
- Chief of Defence Staff coordinates all three services
- Each branch has its own Chief
- Armed Forces Council advises on policy

**What They Do:**
- Defend Nigeria from external aggression
- Maintain Nigeria's territorial integrity
- Help maintain internal security when called upon
- Participate in peacekeeping operations abroad

**When Military Can Be Used Internally:**
- Only when civilian authorities cannot maintain order
- The President must approve
- National Assembly should be informed
- Must be temporary, not permanent
- Human rights must still be respected

**Military vs Police:**
The military should not be used for normal law enforcement. That's the police's job. Military involvement in internal matters should be exceptional.`,
    category: 'police-military',
    source: 'Constitution of Nigeria 1999, Sections 217-220',
    section: 'Sections 217-220',
    keyPoints: [
      'Army, Navy, and Air Force',
      'President is Commander-in-Chief',
      'Defends against external aggression',
      'Internal use should be exceptional',
    ],
    originalText: `There shall be an armed forces for the Federation which shall consist of an army, a navy, and an air force. The Federation shall, subject to an Act of the National Assembly made in that behalf, equip and maintain the armed forces as may be considered adequate and effective for the purpose of - defending Nigeria from external aggression; maintaining its territorial integrity and securing its borders from violation on land, sea, or air; suppressing insurrection and acting in aid of civil authorities to restore order when called upon to do so by the President.`,
  },
  {
    id: 'police-004',
    title: 'State of Emergency',
    summary: 'The President can declare a state of emergency in serious situations, but fundamental rights cannot be suspended arbitrarily.',
    content: `In very serious situations, the President can declare a state of emergency:

**When It Can Be Declared:**
- Nigeria is at war
- Nigeria is in danger of being invaded
- There is breakdown of public order requiring extraordinary measures
- There is a natural disaster affecting the community
- Any other public danger threatening the whole country

**The Process:**
1. President issues proclamation of emergency
2. Must be published in the Official Gazette
3. Must be presented to National Assembly within 2 days
4. National Assembly must approve by 2/3 majority
5. Initially valid for 6 months
6. Can be extended with National Assembly approval

**What Can Happen:**
- Government gains extra powers
- Some rights may be restricted
- Military may be deployed
- Curfews may be imposed

**What CANNOT Happen:**
Even during emergency, these rights CANNOT be taken away:
- Right to life (except in proper judicial proceedings)
- Right not to be tortured
- Right not to be enslaved
- Right to fair hearing before punishment
- Right not to be punished for acts that weren't crimes when committed`,
    category: 'police-military',
    source: 'Constitution of Nigeria 1999, Sections 305-306',
    section: 'Sections 305-306',
    keyPoints: [
      'President can declare in serious situations',
      'National Assembly must approve within days',
      'Valid for 6 months initially',
      'Some rights cannot be suspended even in emergency',
    ],
    originalText: `Subject to the provisions of this Constitution, the President may by instrument published in the Official Gazette of the Government of the Federation issue a Proclamation of a state of emergency in the Federation or any part thereof. The President shall immediately after the publication, transmit copies of the Official Gazette of the Government of the Federation containing the proclamation including the details of the emergency to the President of the Senate and the Speaker of the House of Representatives.`,
  },
  {
    id: 'police-005',
    title: 'Security Agencies Must Respect Human Rights',
    summary: 'All security agencies must operate within the law and respect human rights.',
    content: `Security agencies have power, but that power has limits:

**All Security Personnel Must:**
- Respect human rights
- Follow the law
- Not use excessive force
- Not torture or degrade anyone
- Not make arbitrary arrests
- Be accountable for their actions

**You Are Protected From:**
- Torture and inhuman treatment
- Arbitrary arrest and detention
- Extrajudicial killings
- Forced disappearances
- Sexual abuse by security personnel

**Accountability Mechanisms:**
- Police Service Commission (for police misconduct)
- Armed Forces Council (for military personnel)
- National Human Rights Commission
- Courts (you can sue for rights violations)
- Public Complaints Commission

**What To Do If Your Rights Are Violated:**
1. Document everything (dates, names, witnesses)
2. Seek medical attention if injured
3. Report to the appropriate authority
4. Consider filing a fundamental rights case in court
5. Contact human rights organizations for help

**Remember:** No order from a superior can justify human rights violations. "I was just following orders" is not a defense.`,
    category: 'police-military',
    source: 'Constitution of Nigeria 1999, Chapter IV; Anti-Torture Act 2017',
    keyPoints: [
      'Security agencies must respect human rights',
      'Torture is illegal under all circumstances',
      'You can sue for rights violations',
      '"Following orders" is not a defense',
    ],
  },

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
  {
    id: 'digital-004',
    title: 'Libel and Defamation Online',
    summary: 'Publishing false statements that damage someone\'s reputation is illegal - whether spoken (slander) or written (libel).',
    content: `Defamation is making false statements about someone that damage their reputation. In Nigerian law:

**Types of Defamation:**
- **Libel**: Written or published defamation (includes social media posts, blog posts, newspaper articles)
- **Slander**: Spoken defamation

**What Counts as Defamation:**
- The statement must be FALSE
- It must be about an identifiable person
- It must be published/communicated to others
- It must damage the person's reputation

**Online Defamation:**
- Social media posts (Twitter/X, Facebook, Instagram, TikTok)
- WhatsApp broadcasts and group messages
- Blog posts and online articles
- Comments on websites
- YouTube videos

**Your Defenses:**
- The statement is TRUE (truth is an absolute defense)
- It was fair comment on a matter of public interest
- It was privileged communication (like court proceedings)

**What Can Happen:**
- Civil lawsuit: You pay damages (compensation) to the victim
- Criminal prosecution: Under Criminal Code, defamation can lead to imprisonment
- Court order to delete the content and apologize

**Important:** Even sharing someone else's defamatory post can make you liable. Think before you post, share, or retweet!`,
    category: 'digital',
    source: 'Criminal Code Act, Cybercrimes Act 2015, Common Law',
    penalty: 'Civil damages (millions of Naira possible) and/or up to 2 years imprisonment for criminal defamation',
    keyPoints: [
      'Libel is written defamation (includes social media)',
      'Slander is spoken defamation',
      'Truth is a complete defense',
      'Sharing defamatory content also makes you liable',
    ],
  },
  {
    id: 'digital-005',
    title: 'Cyberbullying and Online Harassment',
    summary: 'Using the internet to bully, harass, stalk, or intimidate someone is a criminal offence in Nigeria.',
    content: `Cyberbullying and online harassment are serious offences under Nigerian law:

**What Is Cyberbullying:**
- Repeatedly sending threatening or abusive messages
- Posting embarrassing photos or videos without consent
- Creating fake profiles to mock or impersonate someone
- Spreading rumors or lies online to hurt someone
- Excluding someone from online groups to cause distress
- Sharing private information to humiliate someone (doxxing)

**What Is Cyber Harassment:**
- Sending unwanted sexual messages
- Stalking someone online
- Making threats of violence
- Intimidating someone through repeated contact
- Sharing intimate images without consent ("revenge porn")

**The Law:**
Under the Cybercrimes Act 2015, Section 24:
- Sending messages that are grossly offensive, indecent, obscene, or menacing is a crime
- Using electronic means to harass, bully, or threaten is punishable

**If You Are a Victim:**
1. Screenshot and save all evidence
2. Block the person
3. Report to the platform (Facebook, Twitter, etc.)
4. Report to the Police (Cybercrime Unit)
5. Consider filing a complaint with the EFCC

**Protecting Children:**
Cyberbullying children carries even heavier penalties. Schools and parents should monitor children's online activities.

**Remember:** What happens online has real-world consequences. Treat others online as you would in person.`,
    category: 'digital',
    source: 'Cybercrimes Act 2015, Section 24; Violence Against Persons (Prohibition) Act 2015',
    penalty: 'Fine of up to ₦7 million and/or imprisonment of up to 3 years',
    keyPoints: [
      'Cyberbullying is a criminal offence',
      'Online harassment is punishable by law',
      'Sharing intimate images without consent is illegal',
      'Report to Police Cybercrime Unit or EFCC',
    ],
  },
  {
    id: 'digital-006',
    title: 'Revenge Porn and Non-Consensual Intimate Images',
    summary: 'Sharing someone\'s intimate photos or videos without their consent is a serious crime in Nigeria.',
    content: `Sharing intimate images without consent (commonly called "revenge porn") is a serious criminal offence:

**What It Covers:**
- Sharing nude or sexual photos/videos of someone without their permission
- Threatening to share such images to blackmail or intimidate
- Posting intimate images on social media or websites
- Sending intimate images via WhatsApp, email, or any platform
- Creating or distributing "deep fake" intimate content

**Who Can Be a Victim:**
- Anyone whose intimate images are shared without consent
- This includes images taken consensually in a relationship
- Former partners often become victims after breakups
- Images obtained by hacking or stealing devices

**The Law Says:**
Under the Cybercrimes Act 2015 and Violence Against Persons (Prohibition) Act 2015:
- Distributing intimate images without consent is a crime
- Threatening to distribute such images is also criminal
- Both the person who shares AND platforms that fail to remove can be liable

**What Victims Can Do:**
1. Do NOT delete the evidence - screenshot everything
2. Report to Police Cybercrime Unit immediately
3. Report to the platform for content removal
4. Seek a court order for removal
5. Sue for damages in civil court
6. Contact organizations like Stand to End Rape (STER) for support

**If You Receive Such Images:**
- Do NOT share them further
- Delete them from your device
- Report the sender to authorities
- Sharing makes YOU criminally liable too`,
    category: 'digital',
    source: 'Cybercrimes Act 2015; Violence Against Persons (Prohibition) Act 2015',
    penalty: 'Imprisonment of up to 3 years and/or fine; civil damages',
    keyPoints: [
      'Sharing intimate images without consent is criminal',
      'Threatening to share is also a crime',
      'Victims can seek court orders for removal',
      'Forwarding such images makes you liable too',
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
