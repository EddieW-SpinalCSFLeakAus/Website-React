// Real clinician directory data, transcribed verbatim from the live
// WordPress page (read-only fetch — the live site was not modified).
// One entry that is present but HTML-commented-out (hidden) on the live
// site has been left out here too, to match what visitors actually see.

export const clinicians = [
  {
    id: 'kartik-bhatia',
    state: 'NSW',
    name: 'Dr Kartik Bhatia',
    specialty: 'Interventional Neuroradiologist',
    locations: [
      {
        hospital: "Macquarie University Hospital & Sydney Children's Hospital Network",
        address: 'CURA Medical Specialists, Suite 3.2, 235 Victoria Rd, Drummoyne NSW 2047',
        phone: '02 7906 8356',
        phoneHref: 'tel:0279068356',
        website: 'curaspecialists.com.au',
        websiteHref: 'https://curaspecialists.com.au',
      },
    ],
    experience:
      "Interventional neuroradiologist at MUH and Sydney Children's Hospital Network. Part of the CSF Disorders MDT at MUH, undertaking digital subtraction myelography (DSM) for diagnosis of CSF leaks.",
    referral:
      'For clinical assessment of suspected CSF leaks, consult Prof Marcus Stoodley (Macquarie Neurosurgery) who can organise appropriate imaging including DSMs. If you have a neurologist/neurosurgeon referral for a DSM, contact CURA Medical Specialists directly to arrange at MUH.',
  },
  {
    id: 'john-magnussen',
    state: 'NSW',
    name: 'Prof John Magnussen',
    specialty: 'Radiologist',
    locations: [
      {
        hospital: 'Macquarie Medical Imaging (MMI)',
        address: '3 Technology Place, Macquarie Park NSW 2109',
        phone: '02 9430 1100',
        phoneHref: 'tel:0294301100',
        website: 'mqhealth.org.au — MMI',
        websiteHref:
          'https://www.mqhealth.org.au/services/find-a-service/macquarie-medical-imaging',
      },
    ],
    experience:
      'CSF flow studies, brain/cord motion studies (MRI), leak detection MRI, and interventional procedures: technetium MDP shunt & leak scans, CT & MR myelography, dynamic and tilt myelograms. Treatments: untargeted and targeted blood patches throughout the spine, fibrin glue, lumbar drains.',
    referral:
      'Diagnostic procedures bookable directly through MMI. Interventions require specialist referral. Most spinal interventions require pre-procedure coags; some require pre-procedural CT angiography for vessel mapping.',
  },
  {
    id: 'prashanth-rao',
    state: 'NSW',
    name: 'Dr Prashanth Rao',
    specialty: 'Neurosurgeon & Spine Surgeon',
    locations: [
      {
        hospital: 'Brain and Spine Surgery — Norwest Private Hospital & Macquarie University Hospital',
        address:
          'Suite 3.03, 8 Elizabeth Macarthur Drive, Bella Vista & Suite 201, 69 Christie St, St Leonards',
        phone: '02 9052 7567',
        phoneHref: 'tel:0290527567',
        website: 'brainandspinesurgery.com.au',
        websiteHref: 'https://brainandspinesurgery.com.au',
      },
    ],
    experience:
      'Routinely involved in CSF diagnosis and evaluation, commonly seeing CSF leaks in EDS patients. Treatments include blood patch and endoscopic CSF leak repair.',
    referral: 'Email: info@brainandspinesurgery.com.au or call 02 9052 7567',
    referralEmail: 'info@brainandspinesurgery.com.au',
  },
  {
    id: 'marcus-stoodley',
    state: 'NSW',
    name: 'Prof Marcus Stoodley',
    specialty: 'Neurosurgeon',
    locations: [
      {
        hospital: 'Macquarie University Hospital',
        address: 'Suite 201, 2 Technology Place, Macquarie University NSW 2109',
        phone: '02 9812 3900',
        phoneHref: 'tel:0298123900',
        website: 'mqneurosurgery.com.au',
        websiteHref: 'https://mqneurosurgery.com.au',
      },
    ],
    experience:
      "30 years' interest in CSF disorders from PhD through to clinical practice. Founding member of the International Society for Spinal CSF Leak. Established Australia's first CSF MDT at Macquarie with regular multidisciplinary clinics across neurosurgery, neurology, and radiology. Investigations: prone/lateral dynamic CT myelography, digital subtraction myelography, MR myelography. Treatments: targeted/non-targeted blood patches, fibrin glue patches, venous embolisation, surgical dural repair, nerve root clipping for CSF-venous fistulae.",
    referral:
      'Via Macquarie Neurosurgery: mqneurosurgery.com.au or 02 9812 3900. Telehealth available. Please ensure imaging access is confirmed at time of booking.',
  },
  {
    id: 'zane-sherif',
    state: 'QLD',
    name: 'Dr Zane Sherif',
    specialty: 'Radiologist',
    locations: [
      {
        hospital: 'Mermaid Beach Radiology',
        address: '2469 Gold Coast Highway, Mermaid Beach QLD 4218',
        phone: '07 5619 9499',
        phoneHref: 'tel:0756199499',
        website: 'mermaidbeachradiology.com.au',
        websiteHref: 'https://mermaidbeachradiology.com.au',
      },
    ],
    experience:
      'CT-guided epidural and intrathecal PRP/blood patch. Whole-spine MRI with optimised CSF leak protocol.',
    referral: 'GP or specialist referral accepted.',
  },
  {
    id: 'scott-davies',
    state: 'WA',
    name: 'Dr Scott Davies',
    specialty: 'Neuroradiologist',
    locations: [
      {
        hospital: 'Neurological Intervention and Imaging Service of WA (NIISwa)',
        address: 'Royal Perth Hospital & Sir Charles Gairdner Hospital',
        phone: '08 6457 4455',
        phoneHref: 'tel:0864574455',
        website: 'niiswa.com',
        websiteHref: 'http://niiswa.com',
      },
    ],
    experience:
      'Part of a multidisciplinary team in WA for CSF pressure disorders. Special interest in spinal CSF leaks — diagnosis and, where appropriate, percutaneous treatment.',
    referral:
      'GP referral accepted with positive MRI brain/spine demonstrating a CSF leak. Direct specialist neurologist or neurosurgeon referral also accepted, even without indicative MRI findings.',
  },
  {
    id: 'usman-ashraf',
    state: 'NSW',
    name: 'Dr Usman Ashraf',
    specialty: 'Neurologist',
    locations: [
      {
        hospital: 'CURA Medical Specialists',
        address: 'Suite 3.2, 135 Victoria Road, Drummoyne NSW 2047',
        website: 'curaspecialists.com.au',
        websiteHref: 'https://curaspecialists.com.au/',
      },
      {
        hospital: 'The Northern Headache and Neurology Centre',
        address: 'Suite 64, Level 3, 14 Narabang Way, Belrose NSW 2085',
        website: 'drbronwynjenkins.com.au',
        websiteHref: 'https://www.drbronwynjenkins.com.au/',
      },
    ],
    experience:
      'Headache subspecialist with clinical experience treating patients with SIH as well as teaching medical students and junior doctors about the condition.',
    referral: 'Doctor referral, no investigations required beforehand.',
  },
  {
    id: 'sukhjit-singh',
    state: 'NSW',
    name: 'Sukhjit Singh',
    specialty: 'Physiotherapist',
    locations: [
      {
        hospital: 'Healthroos',
        address: 'Unit 630, 17 Chatham Rd, West Ryde NSW',
        phone: '0468 333 813',
        phoneHref: 'tel:0468333813',
        website: 'Healthroos.com.au',
        websiteHref: 'https://healthroos.com.au',
      },
    ],
    experience:
      'Provides mobile physiotherapy home visit services across the Greater Sydney area for individuals living with CSF leaks and neurological conditions. Currently undertaking a Master of Neurological Physiotherapy at Flinders University.',
    referral: 'No referral needed. Bookings can be made via Healthroos.com.au or 0468 333 813.',
  },
  {
    id: 'lyndal-van-leer',
    state: 'QLD',
    name: 'Dr Lyndal Van Leer',
    specialty: 'Neurologist',
    locations: [
      {
        hospital: 'Private workplace: Neurocare - John Flynn Private Hospital',
        address: '42 Inland Drive, Tugun QLD 4224',
        phone: '(07) 5598 0908',
        phoneHref: 'tel:0755980908',
        website: 'neurocarecentre.com.au',
        websiteHref: 'https://www.neurocarecentre.com.au/',
      },
      {
        hospital: 'Public workplace: Gold Coast University Hospital',
        address: '1 Hospital Blvd, Southport QLD 4215',
        phone: '1300 744 284 or (07) 5687 0000',
        phoneHref: 'tel:1300744284',
        website: 'Gold Coast University Hospital | Gold Coast Health',
        websiteHref:
          'https://www.goldcoast.health.qld.gov.au/hospitals-and-health-centres/gold-coast-university-hospital',
      },
    ],
    experience:
      'I am a headache neurologist with clinical interests in venous disorders and CSF disorders, as well as connective tissue disorders and POTS. I am a member of the Spinal CSF Leak Australia Medical Advisory Board.',
    referral:
      "Referral to my private and public clinics is via GP referral. Ideally, an MRI Brain and whole spine 'CSF Leak sequence' MRI has been performed prior to review. For my private clinic, I prefer the initial consultation to be in person so that I can perform a clinical examination. Subsequent consultations can be conducted via telehealth where appropriate.",
  },
];

export const australianStates = ['NSW', 'QLD', 'WA', 'VIC', 'SA', 'TAS', 'ACT', 'NT'];
