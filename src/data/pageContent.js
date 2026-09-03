// Content for every "generic template" page (rendered by <GenericPage>).
// Real content is transcribed verbatim from the live WordPress site
// (fetched read-only via the WordPress REST API — the live site itself
// was never modified). Pages with no real content yet are marked
// `isStub: true` and show a clearly-labelled "coming soon" banner instead
// of invented copy — this is a health charity site, so nothing here is
// guessed or fabricated.

const WP = 'https://spinalcsfleakaustralia.org';
const UPLOADS = `${WP}/wp-content/uploads/2026/01`;

function stub(overrides) {
  return {
    isStub: true,
    intro: [
      'This page hasn’t been written yet. It’s included here so every link in the site map works, and so the real navigation structure is easy to review.',
    ],
    sections: [],
    ...overrides,
  };
}

export const pageContent = {
  // ---------------------------------------------------------------- INFORMATION
  '/information/what-is-a-spinal-csf-leak': stub({
    eyebrow: 'Information',
    title: 'What Is a Spinal CSF Leak?',
  }),
  '/information/symptoms': stub({ eyebrow: 'Information', title: 'Symptoms' }),
  '/information/causes': stub({ eyebrow: 'Information', title: 'Causes' }),
  '/information/diagnosis': stub({ eyebrow: 'Information', title: 'Diagnosis' }),
  '/information/treatments': stub({ eyebrow: 'Information', title: 'Treatments' }),
  '/information/aftercare': stub({
    eyebrow: 'Information',
    title: 'Aftercare',
    isStub: true,
    intro: [
      'This page hasn’t been written yet. In the meantime, see the blood-patch aftercare tip on our Hospital Tips page.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Blood patch aftercare',
        paragraphs: [
          'Visit our UK charity friends for more information on caring for yourself after a blood patch.',
        ],
      },
      {
        type: 'cta',
        linkHref: 'https://csfleak.uk/resource/aftercare',
        linkLabel: 'CSF Leak Association UK — aftercare guidance',
        external: true,
      },
    ],
  }),
  '/information/faq': stub({ eyebrow: 'Information', title: 'FAQ' }),
  '/information/terminology': stub({ eyebrow: 'Information', title: 'Terminology' }),
  '/information/living-with-a-leak': stub({
    eyebrow: 'Information',
    title: 'Living With a Leak',
  }),
  '/information/related-conditions': {
    eyebrow: 'Information',
    title: 'Related Conditions',
    intro: [
      'A spinal cerebrospinal fluid (CSF) leak can overlap with, or be mistaken for, a number of other conditions. These organisations provide more information about conditions commonly associated with spinal CSF leaks.',
    ],
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'POTS Foundation Australia',
            body: 'One of the hallmark symptoms of a spinal cerebrospinal fluid (CSF) leak is orthostatic head pain — headaches that intensify when standing and ease when lying down. However, not all patients with a spinal CSF leak experience orthostatic symptoms or head pain, and not all cases of orthostatic intolerance or head pain are caused by a spinal CSF leak. In some instances, a patient with a spinal CSF leak may also have orthostatic intolerance from an unrelated dysautonomic condition such as POTS, meaning both issues can coexist.',
            linkHref: 'https://potsfoundation.org.au/',
            linkLabel: 'Website',
          },
          {
            title: 'The Ehlers-Danlos Society',
            body: 'Spinal CSF leak can be linked to certain risk factors, such as connective tissue disorders like Ehlers-Danlos syndrome. However, it can also happen in people without these conditions, and in many cases, the exact cause is unknown.',
            linkHref: 'https://www.ehlers-danlos.com/',
            linkLabel: 'Website',
          },
          {
            title: 'Connective Tissue Disorders Network Australia (CTDNA)',
            body: 'CTDNA is the national voice and peak body for people affected by heritable connective tissue disorders (HCTDs), driving advocacy, education, and collaboration.',
            linkHref: 'https://ctdna.org.au/',
            linkLabel: 'Website',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- RESOURCES
  '/resources/for-patients': {
    eyebrow: 'Resources',
    title: 'For Patients',
    intro: [
      'Practical guides and tips to support you on your spinal CSF leak journey — much of it informed directly by the shared experiences of Australian and New Zealand patients in the CSF Leakers DownUnder Patient Support Group on Facebook.',
    ],
    sections: [
      {
        type: 'cards',
        heading: 'Hospital packing list',
        columns: 3,
        items: [
          {
            title: 'Pillows and warmth',
            image: `${UPLOADS}/PILLOWS-AND-WARMTH-1.webp`,
            imageAlt: 'Illustration representing hospital pillows and warm bedding',
            body: 'Bring your own soft pillow to the hospital, and don’t hesitate to ask for extra pillows to help you get as comfortable as possible. Many people find that lying on a couple of pillows or using a memory-foam neck pillow adds extra softness, especially after surgery. If you feel cold, ask for a warm blanket. You’ll be wearing compression socks after surgery, and bed socks over the top can help keep your feet warm. For the first few days after surgery, you will likely have intermittent pneumatic compression (IPC) "boots" to help prevent blood clots.',
          },
          {
            title: 'Entertainment',
            image: `${UPLOADS}/ENTERTAINMENT.webp`,
            imageAlt: 'Illustration representing books, music and entertainment',
            list: [
              'Take a book to read, but you might not feel like reading.',
              'Compile a list of light shows to watch.',
              'Put together a playlist that you can focus on if you need calming, such as gentle piano music.',
              'Take a multiport USB plug and extra-long charging cables for your devices.',
              'Try to keep everything within easy reach.',
            ],
          },
          {
            title: 'Friends and family',
            image: `${UPLOADS}/FRIENDS-AND-FAMILY.webp`,
            imageAlt: 'Illustration representing friends and family visiting',
            body: 'You may find that you don’t feel up to having visitors or taking calls while you’re in the hospital. It can help to gently set expectations beforehand by letting friends and family know you might be resting and may not be available. Share updates only when you feel up to it — people will understand.',
          },
          {
            title: 'Noise and light',
            image: `${UPLOADS}/NOISE-AND-LIGHT.webp`,
            imageAlt: 'Illustration representing noise-cancelling headphones and an eye mask',
            body: 'Hospitals can be noisy places. Take noise-cancelling headphones or noise masking earplugs. Both earplugs and an eye mask can be helpful.',
            linkHref: 'https://ozlosleep.au/products/sleepbuds',
            linkLabel: 'Ozlo Sleepbuds (an example product some patients use)',
          },
          {
            title: 'Ice packs',
            image: `${UPLOADS}/ICE-PACKS.webp`,
            imageAlt: 'Illustration representing an ice pack',
            body: 'Often, the hospitals don’t have icepacks, but they do have an ice machine. Look at taking an old-fashioned ice pack that can be filled with crushed ice. Some rooms have their own fridge and a small freezer. Ask in advance if this is available to you.',
          },
          {
            title: 'What to wear',
            image: `${UPLOADS}/WHAT-TO-WEAR.webp`,
            imageAlt: 'Illustration representing comfortable hospital clothing',
            list: [
              'Easy to put on button-up pyjamas.',
              'A cardigan or a dressing gown provides warmth.',
              'Slippers or Ugg-style boots.',
              'Comfortable clothes to leave the hospital.',
            ],
          },
          {
            title: 'Ideas for your hospital bag',
            image: `${UPLOADS}/IDEAS-FOR-YOUR-HOSPITAL-BAG.webp`,
            imageAlt: 'Illustration of a packed hospital bag',
            list: [
              'Dry shampoo',
              'Face wipes',
              'Lip balm, moisturiser, throat lozenges, snacks, calming essential oils, panty-liners',
              'Water bottle (easier to drink from when lying down)',
            ],
          },
        ],
      },
      {
        type: 'cards',
        heading: 'Travelling with a leak',
        columns: 1,
        items: [
          {
            title: 'Travelling to hospital',
            image: `${UPLOADS}/TRAVELLING-TO-HOSPITAL.webp`,
            imageAlt: 'Illustration of a car travelling toward a hospital',
            body: 'Many people travel long distances for CSF leak treatment in Australia, so planning ahead can make the trip easier. When travelling, lie down whenever possible and bring a supportive pillow. If flying, contact the airline in advance to request mobility assistance and ask if you can remain reclined during the flight. Consider arranging a comfortable transfer service at the airport and fully recline the passenger seat during car travel. After surgery, requesting a Silver Service taxi can provide a smoother ride. Preparing these arrangements ahead of time can make your journey far more comfortable and stress-free. Search for Accessibility, Medical and Inclusion with Qantas or Hidden disability assistance with Virgin.',
          },
        ],
      },
      {
        type: 'cards',
        heading: 'Post EBP guidelines & aftercare',
        columns: 1,
        items: [
          {
            title: 'Blood patch aftercare',
            image: `${UPLOADS}/BLOOD-PATCH-AFTERCARE.webp`,
            imageAlt: 'Illustration representing recovery after an epidural blood patch',
            body: 'Visit our UK charity friends for more information.',
            linkHref: 'https://csfleak.uk/resource/aftercare',
            linkLabel: 'CSF Leak Association UK — aftercare guidance',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Still to come',
        paragraphs: [
          'A full "Post EBP Guidelines for Patients" document, a "Caring for Your Baby After PDPH" guide, a printable Medical Accommodations Card, and a physiotherapy exercise series are all planned for this section but not yet published — check back soon.',
        ],
      },
    ],
  },
  '/resources/for-carers-and-families': stub({
    eyebrow: 'Resources',
    title: 'For Carers / Families',
  }),
  '/resources/for-clinicians': stub({
    eyebrow: 'Resources',
    title: 'For Clinicians',
    intro: [
      'This page hasn’t been written yet. If you’re a clinician with experience or interest in spinal CSF leaks, you can join our Clinician Directory in the meantime.',
    ],
    sections: [
      { type: 'cta', linkHref: '/resources/clinician-directory', linkLabel: 'Go to the Clinician Directory' },
    ],
  }),
  '/resources/mental-health-resources': stub({
    eyebrow: 'Resources',
    title: 'Mental Health Resources',
  }),
  '/resources/financial-support': stub({
    eyebrow: 'Resources',
    title: 'Financial Support',
  }),
  '/resources/useful-links': {
    eyebrow: 'Resources',
    title: 'Useful Links',
    intro: [
      'Articles, journal papers, videos, a podcast episode and a book that our community has found helpful for understanding spinal CSF leaks.',
    ],
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'AusDoc Magazine: When to suspect a cerebrospinal fluid leak',
            body: 'Dr. Ruth Myers & Dr. Scott Davies, 2019. Spontaneous cerebrospinal fluid leak is a rare cause of headache, resulting in debilitating neurological effects.',
            linkHref: 'https://www.ausdoc.com.au/therapy-update/when-suspect-cerebrospinal-fluid-leak/',
            linkLabel: 'Read now',
          },
          {
            title: 'Spontaneous Intracranial Hypotension: 10 Myths and Misperceptions',
            body: "Kranz, PG, Gray, L & Amrhein, TJ 2018, 'Spontaneous Intracranial Hypotension: 10 Myths and Misperceptions', Headache: The Journal of Head and Face Pain, vol. 58, no. 7, pp. 948–959.",
            linkHref: 'https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.13328',
            linkLabel: 'Read abstract',
          },
          {
            title: 'The Conversation: Fluid keeps your brain from crushing itself and shields your spine from shock',
            body: 'D. Wilhour M.D., Assistant Professor of Neurology, University of Colorado Anschutz Medical Campus.',
            linkHref: 'https://theconversation.com/fluid-keeps-your-brain-from-crushing-itself-and-shields-your-spine-from-shock-a-neurologist-explains-what-happens-when-it-stops-working-233863',
            linkLabel: 'Read now',
          },
          {
            title: 'ABC News: Brain Foundation urging awareness of often under-diagnosed cerebrospinal fluid leaks',
            body: 'Jasmine Hines, 2022. Danya Hodgetts spent four years trying to get a diagnosis for her spinal fluid leak. The condition causes headaches and other neurological symptoms. The Brain Foundation says while the condition is rare, more community awareness is needed.',
            linkHref: 'https://www.abc.net.au/news/2022-12-15/spinal-fluid-leak-difficult-diagnosis-central-queensland/101769182',
            linkLabel: 'Read now',
          },
          {
            title: 'Video: Dr. Ian Carroll on Epidural Blood Patching',
            body: 'A talk by Dr. Ian Carroll on "Epidural Blood Patch Basics" at the Bridging the Gap Conference, 11 November 2023, presented by the Spinal CSF Leak Foundation in partnership with the University of Colorado Anschutz Medical Campus.',
            linkHref: 'https://spinalcsfleak.org/dr-ian-carroll-ebp-basics/',
            linkLabel: 'Watch now',
          },
          {
            title: 'Brain Foundation: Spinal Cerebrospinal Fluid (CSF) Leak',
            body: 'Unfortunately, this condition and the symptoms that accompany it can often be misdiagnosed as migraine, sinusitis, tension headache, post traumatic headache and the new entity of chronic daily persistent headache, especially in the case of spontaneous CSF leaks. Over time the positional nature of the symptoms can diminish and further contribute to misdiagnosis.',
            linkHref: 'https://brainfoundation.org.au/disorders/spinal-cerebrospinal-fluid-csf-leak/',
            linkLabel: 'Read now',
          },
          {
            title: "ABC Health Report with Dr Norman Swan: The 'headache from hell' that was a sign of something more serious",
            body: 'With Dr Scott Davis (Neuroradiologist, Neurological Intervention and Imaging Service of Western Australia) and patient Sophie Mickel.',
            linkHref: 'https://www.abc.net.au/listen/programs/healthreport/cerebrospinal-fluid-leak-diagnosis-and-treatment/11779584',
            linkLabel: 'Listen now',
          },
          {
            title: 'Book: The Beginning of Everything — Andrea J Buchanan',
            body: 'Andrea Buchanan lost her mind while crossing the street one day. Suffering from a horrible cough, she inhaled the cold March air, and choked. She was choking on a lot that day — a sick child, a pending divorce, the guilt of failing as a partner and a mother.',
            linkHref: 'https://www.amazon.com.au/Beginning-Everything-Year-Found-Myself/dp/1643132350/',
            linkLabel: 'Buy from Amazon',
          },
          {
            title: 'Video: The Mystery Headache — CSF Leak, a Fixable Cause of Daily Headache (2023 Update)',
            body: 'Ian Carroll, MD, discusses an often-overlooked, effectively treatable diagnosis: spontaneous intracranial hypotension (CSF leak).',
            linkHref: 'https://www.youtube.com/watch?si=AgRWIYKENNE7ohPQ&v=VznpUeM7KS4&feature=youtu.be',
            linkLabel: 'Watch now',
          },
        ],
      },
    ],
  },
  '/resources/patient-stories': {
    eyebrow: 'Resources',
    title: 'Patient Stories',
    intro: ['Stories of hope and recovery from a spinal CSF leak.'],
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: "Abby's Story",
            image: `${UPLOADS}/Abbys-Story.webp`,
            imageAlt: "Portrait accompanying Abby's story",
            body: "Trust Yourself: My Spinal CSF Leak Journey. On January 1st, 2025, I woke up full of New Year's good intentions—restart the job search after a recent redundancy, continue my fitness journey, and maybe even tackle a full spring clean. But instead of renewed energy, I had a pounding headache and nausea that didn't make sense…",
            linkHref: `${WP}/abbys-story/`,
            linkLabel: 'Read the full story',
          },
          {
            title: "Monica's Story (7 min read)",
            image: `${UPLOADS}/Monicas-Story-7-min-read.webp`,
            imageAlt: "Portrait accompanying Monica's story",
            body: 'This is my personal journey of dealing with a spinal CSF leak, from the initial incident to recovery. The leak likely resulted from a minor car accident, exacerbated by bone spurs on the spine…',
            linkHref: `${WP}/monicas-story-7-min-read/`,
            linkLabel: 'Read the full story',
          },
          {
            title: "Nicole's Story",
            image: `${UPLOADS}/Nicoles-Story.webp`,
            imageAlt: "Portrait accompanying Nicole's story",
            body: "My symptoms started in 2022 when I was in my late 40's. There was no accident or injury, but suddenly my balance was 'off'. I'd stand up and feel wobbly, or sit down and nearly miss the chair…",
            linkHref: `${WP}/nicoles-story/`,
            linkLabel: 'Read the full story',
          },
          {
            title: "Michelle's Story",
            image: `${UPLOADS}/Michelles-Story.webp`,
            imageAlt: "Portrait accompanying Michelle's story",
            body: 'From headache onset to blood patch in 4 weeks — my roller-coaster ride through a spontaneous CSF leak. Christmas holidays should have been all mince pies and Michael Bublé…',
            linkHref: `${WP}/michelles-story/`,
            linkLabel: 'Read the full story',
          },
          {
            title: 'ABC News: Cerebrospinal fluid leaks cause painful headaches',
            image: `${UPLOADS}/ABC-News-Cerebrospinal-fluid-leaks-cause-painful-headaches.webp`,
            imageAlt: 'ABC News segment thumbnail about spinal CSF leaks',
            body: 'When retired nurse Rose Kruze started suffering from debilitating headaches she had no idea they were a symptom of something more sinister. Intracranial hypotension affects an estimated five in 100,000 people…',
            linkHref: `${WP}/abc-news-cerebrospinal-fluid-leaks-cause-painful-headaches/`,
            linkLabel: 'Read the full story',
          },
        ],
      },
      {
        type: 'cta',
        heading: 'Share your story',
        body: 'Your story has the power to inspire, connect and give hope to others on their journey.',
        linkHref: '/contact-us',
        linkLabel: 'Get in touch to share your story',
      },
    ],
  },

  // ---------------------------------------------------------------- ABOUT US
  '/about-us/our-story': stub({ eyebrow: 'About Us', title: 'Our Story / Timeline' }),
  '/about-us/our-volunteers': stub({ eyebrow: 'About Us', title: 'Our Volunteers' }),
  '/about-us/current-projects': stub({ eyebrow: 'About Us', title: 'Current Projects' }),
  '/about-us/past-projects': stub({ eyebrow: 'About Us', title: 'Past Projects' }),
  '/about-us/plan': stub({ eyebrow: 'About Us', title: '1–5 Year Plan' }),
  '/about-us/vision-goals': {
    eyebrow: 'About Us',
    title: 'Vision, Purpose, Goals',
    intro: [],
    sections: [
      {
        type: 'text',
        heading: 'Our Vision',
        image: `${UPLOADS}/Our-vision.webp`,
        imageAlt: '', // decorative — the same information is in the text beside it
        paragraphs: [
          'To improve the quality of life of people with Spinal CSF Leaks and Intracranial Hypotension in Australia through improved access to timely, effective, and supportive care.',
        ],
      },
      {
        type: 'list',
        heading: 'Goals and Objectives',
        image: `${UPLOADS}/Goals-and-Objectives-.webp`,
        imageAlt: '', // decorative — the same information is in the list beside it
        items: [
          'Understand, capture and communicate the lived experience of those with a Spinal CSF Leak',
          "Increase healthcare professionals' knowledge of Spinal CSF Leaks including the importance of early diagnosis and treatment and clinical care pathways",
          'Provide comprehensive, evidence-based information and education to empower people with Spinal CSF Leaks and their support network to be active participants in their treatment and recovery',
          'Create a strong support network for Spinal CSF Leak patients and their families, offering emotional support and practical assistance',
          'Advocate for improved access to healthcare resources, treatment options, and patient rights',
          'Collaborate with medical specialists and researchers to advance knowledge and treatment options for CSF leaks',
          'Organise fundraising efforts to secure the necessary funds for all these activities and initiatives',
          'Foster partnerships with healthcare professionals, patient advocacy groups, and government agencies to achieve common goals in CSF leak prevention and treatment.',
        ],
      },
    ],
  },
  '/about-us/board-of-directors': {
    eyebrow: 'About Us',
    title: 'Board of Directors',
    intro: [],
    sections: [
      {
        type: 'people',
        heading: 'Directors',
        image: `${UPLOADS}/Directors.webp`,
        imageAlt: 'Spinal CSF Leak Australia board of directors',
        columns: 4,
        items: [
          { name: 'Rachel Smith' },
          { name: 'Monica Muggeridge' },
          { name: 'Kelly Johnston' },
          { name: 'Nicole Frost' },
        ],
      },
      {
        type: 'people',
        heading: 'Medical Advisory Board',
        intro: 'We are proud to announce our Medical Advisory Board.',
        columns: 4,
        items: [
          { name: 'Nicole Frost', role: 'Physiotherapist / Chair', image: `${UPLOADS}/nicole-frost-v3.webp` },
          { name: 'Kelly Johnston', role: 'Registered Nurse/Midwife / Deputy Chair', image: `${UPLOADS}/kelly-johnston-v3.webp` },
          { name: 'Dr Vini Carraro do Nascimento', role: 'Interventional Neuroradiologist', image: `${UPLOADS}/vini-carraro-v3.webp` },
          { name: 'Professor Marcus Stoodley', role: 'Neurosurgeon', image: `${UPLOADS}/marcus-stoodley-v3.webp` },
          { name: 'Dr Alice Stoneman', role: 'Specialist General Practitioner', image: `${UPLOADS}/alice-stoneman-v3.webp` },
          { name: 'Dr Prashanth Rao', role: 'Neurosurgeon', image: `${UPLOADS}/prashanth-rao-v3.webp` },
          { name: 'Dr James Fitzgerald', role: 'Interventional Neuroradiologist', image: `${UPLOADS}/james-fitzgerald-v3.webp` },
          { name: 'Dr Lee-Anne Slater', role: 'Interventional Neuroradiologist', image: `${UPLOADS}/lee-anne-slater-v3.webp` },
          { name: 'Dr Lyndal Van Leer', role: 'Specialist Neurologist', image: `${UPLOADS}/lyndal-van-leer-v3.webp` },
          { name: 'Dr Jeremy Kam', role: 'Neurosurgeon', image: `${UPLOADS}/jeremy-kam-v3.webp` },
          { name: 'Dr Kartik Bhatia', role: 'Interventional Neuroradiologist', image: `${UPLOADS}/kartik-bhatia-v3.webp` },
        ],
      },
    ],
  },
  '/about-us/policies': {
    eyebrow: 'About Us',
    title: 'Policies & Important Information',
    intro: [
      'Our full Privacy Policy is available as a PDF download below.',
    ],
    sections: [
      {
        type: 'download',
        heading: 'Privacy Policy',
        linkHref:
          'https://img1.wsimg.com/blobby/go/58b612f9-25e8-46bc-b07e-81dc51a6f7bf/20251219-Privacy%20Policy-SCLA-VOL-POL-003-v1.0.pdf',
        linkLabel: 'Download the Privacy Policy (PDF)',
      },
      {
        type: 'text',
        heading: 'Terms & Conditions',
        paragraphs: ['Not yet published — coming soon.'],
      },
      {
        type: 'text',
        heading: 'Disclaimers',
        paragraphs: ['Not yet published — coming soon.'],
      },
    ],
  },

  // ---------------------------------------------------------------- NEWS + EVENTS
  '/news-events/newsletters': stub({ eyebrow: 'News + Events', title: 'Newsletters' }),
  '/news-events/journal-articles': stub({
    eyebrow: 'News + Events',
    title: 'Latest Journal Articles',
    isStub: true,
    intro: [
      'This page hasn’t been written yet. In the meantime, see the journal articles and papers on our Useful Links page.',
    ],
    sections: [{ type: 'cta', linkHref: '/resources/useful-links', linkLabel: 'Go to Useful Links' }],
  }),
  '/news-events/events': stub({ eyebrow: 'News + Events', title: 'Events' }),
  '/news-events/support-group': {
    eyebrow: 'News + Events',
    title: 'Support Group',
    intro: [
      'International charities and support group links for people affected by spinal CSF leaks.',
    ],
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'Spinal CSF Leak Foundation (US)',
            body: 'Established in 2014, the Spinal CSF Leak Foundation, based in the US, offers comprehensive information to both read and watch regarding spinal CSF leaks and other related conditions.',
            linkHref: 'https://spinalcsfleak.org/',
            linkLabel: 'Website',
          },
          {
            title: 'The CSF Leak Association — UK',
            body: 'Started by a group of leakers, they created a website to share information about CSF leaks. It has grown into a registered charity and a valuable voice in raising awareness of CSF leaks both in the UK and across the world.',
            linkHref: 'https://csfleak.uk/',
            linkLabel: 'Website',
          },
          {
            title: 'CSF Leakers DownUnder Patient Support Group (Facebook)',
            body: 'Australian and New Zealand patients can connect with current and previous people with CSF leaks for support and information.',
            linkHref: 'https://www.facebook.com/groups/1694939884169162/',
            linkLabel: 'Facebook Group',
          },
          {
            title: 'Inspire — Spinal CSF Leak',
            body: 'Spinal CSF Leak Support Community in partnership with the Spinal CSF Leak Foundation.',
            linkHref: 'https://www.inspire.com/groups/spinal-csf-leak/',
            linkLabel: 'International Support Group',
          },
          {
            title: 'Spinal Cerebrospinal Fluid (CSF) Leak of Canada',
            body: 'The Canadian charity promoting awareness of spinal CSF leak.',
            linkHref: 'https://www.spinalcsfleakcanada.ca/',
            linkLabel: 'Website',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- GET INVOLVED
  '/get-involved/fundraise': stub({ eyebrow: 'Get Involved', title: 'Fundraise' }),
  '/get-involved/shop': stub({ eyebrow: 'Get Involved', title: 'Shop' }),
  '/get-involved/advocate': stub({
    eyebrow: 'Get Involved',
    title: 'Advocate / Spread the Word',
  }),
  '/get-involved/volunteer': {
    eyebrow: 'Get Involved',
    title: 'Volunteer',
    intro: [
      'Spinal CSF Leak Australia is an entirely volunteer-run charity operating on minimal funding. If you would like to donate your time and use your experience to help us achieve our purpose, complete our Skills Survey or check current roles below.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Benefits of volunteering',
        paragraphs: [
          'Our purpose is to raise awareness of spinal CSF leaks among healthcare professionals and the wider community — but we can’t do it alone. Full details of the benefits of volunteering are coming soon.',
        ],
      },
      {
        type: 'cta',
        heading: 'Skills Survey',
        body: "We are looking for people affected by, or interested in, spinal CSF leaks to volunteer their time and skills to help our charity grow now and into the future. Please complete our Skills Survey and let us know how you can contribute.",
        linkHref:
          'https://forms.office.com/pages/responsepage.aspx?id=-GDd8RJJ30G_BsppkZqHB_LJi6K2MutJrB6ZU0DcJYNUN0xZQjRUQlJBVDdMU0pBWk4zNUw5UEhSQSQlQCN0PWcu&route=shorturl',
        linkLabel: 'Complete the Skills Survey',
        external: true,
      },
      {
        type: 'cards',
        heading: 'Current roles',
        columns: 1,
        items: [
          {
            title: 'Lived Experience Writer',
            body: 'Hours: Weekdays, 3–10 hours a week (negotiable). Duration: 6 months (negotiable). Location: 100% remote. Draws on personal experience of living with a spinal CSF leak to write content that helps patients, families, healthcare professionals and the wider community understand the condition. Also assists with copy editing and brainstorming ideas for new resources. To apply, send an expression of interest to the Volunteer Coordinator, Rachel Smith, at rachel@spinalcsfleakaustralia.org. Please also complete our Skills Survey or send Rachel your resume.',
            linkHref:
              'https://spinalcsfleakaustralia.org/wp-content/uploads/2026/08/Lived_Experience_Writer_role_description-1.pdf',
            linkLabel: 'Full role description (PDF)',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Volunteer stories',
        paragraphs: ['Coming soon.'],
      },
    ],
  },
};

export const donateContent = {
  eyebrow: 'Donate',
  title: 'Support us through a donation',
  intro: [
    'Your donation to Spinal CSF Leak Australia helps support people affected by spinal CSF leaks by raising awareness of this overlooked condition. We are a volunteer-run registered charity with DGR status, so all donations over $2 are tax-deductible. Every contribution — large or small — directly supports the essential costs of running the charity, such as insurance, website hosting, and compliance, while also funding future awareness and education initiatives.',
  ],
  sections: [
    {
      type: 'cta',
      linkHref: 'https://www.givenow.com.au/spinalcsfleakaustralia',
      linkLabel: 'Donate now',
      external: true,
    },
    {
      type: 'cards',
      heading: 'Why your support matters',
      columns: 3,
      items: [
        { title: 'Current Projects', body: 'Coming soon.' },
        { title: 'Past Projects', body: 'Coming soon.' },
        { title: 'Impact Stories', body: 'Coming soon.' },
        { title: 'Where Funds Go', body: 'Coming soon.' },
      ],
    },
    {
      type: 'cards',
      heading: 'Ways to donate',
      columns: 3,
      items: [
        { title: 'One-Off Donation', body: 'Coming soon — use the Donate now button above in the meantime.' },
        { title: 'Regular Giving', body: 'Coming soon.' },
        { title: 'Bequest / In Memoriam', body: 'Coming soon.' },
        { title: 'Corporate Giving', body: 'Coming soon.' },
        { title: 'Philanthropy', body: 'Coming soon.' },
        { title: 'Fundraising', body: 'Coming soon.' },
      ],
    },
  ],
};
