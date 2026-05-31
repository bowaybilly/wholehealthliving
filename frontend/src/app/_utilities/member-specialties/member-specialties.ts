import type { MemberSpecialtyPageData, MemberSpecialtySlug } from "../../_types/member-specialties/member-specialties";

export const memberSpecialtyPages = {
  acupuncture: {
    slug: "acupuncture",
    title: "Acupuncture",
    description: "Acupuncture is commonly used to treat pain, but may effectively support many diseases, disorders, and pain conditions.",
    ctaLabel: "Find Acupuncture Near Me",
    heroClass: "heroAcupuncture",
    primaryImage: "/images/wholehealth_living_acupuncture.webp",
    secondaryImage: "/images/wholehealth_living_basketball.webp",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Acupuncture?",
      paragraphs: [
        "Acupuncture involves the stimulation of specific points on the body, typically utilizing very thin sterilized needles, inserted through the skin.",
        "Studies suggest that acupuncture stimulation triggers the release of the body's own supply of natural painkillers affecting specific regions of the brain involved in producing pain.",
      ],
      footnotes: [
        "1. Traditional Chinese Medicine: What You Need To Know. (n.d.). Retrieved from https://www.nccih.nih.gov/health/traditional-chinese-medicine-what-you-need-to-know",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Acupuncture May Help",
      items: [
        { label: "Chronic Pain Conditions", text: "Lessening pain from an injury, low back pain, or degenerative diseases such as rheumatoid arthritis", marker: "2" },
        { label: "Emotional Issues", text: "Supporting patients with anxiety, depression, and addictions", marker: "2" },
        { label: "Digestive Conditions", text: "Reducing nausea from chemotherapy, vomiting, and irritable bowel syndrome", marker: "2" },
        { label: "Neurological Problems", text: "Managing symptoms of migraines, Parkinson's disease, and stroke", marker: "2" },
        { label: "Other Chronic Conditions", text: "Reducing fatigue, fibromyalgia symptoms, respiratory conditions, and smoking cessation", marker: "2" },
        { label: "Non-Opioid Alternative", text: "Medicare now requires health plans to cover acupuncture for patients with chronic low-back pain - part of the national initiative to manage the opioid epidemic.", marker: "3" },
      ],
      footnotes: [
        "2. Hempel, S., Taylor, S. L., Solloway, M., Miake-Lye, I. M., Beroes, J. M., Shanman, R., Booth, M. J., Siroka, A. M., Shekelle, P. G. Evidence Map of Acupuncture. VA-ESP Project #05-226; 2013",
        "3. Acupuncture. (n.d.). Retrieved from https://www.medicare.gov/coverage/acupuncture",
      ],
    },
    quote: "Acupuncture services support alternative solutions to managing pain and may reduce the need for the prescription of opioids.",
  },
  chiropractic: {
    slug: "chiropractic",
    title: "Chiropractic Care",
    description: "Chiropractic care is a natural treatment that addresses joint pain, backaches, headaches, and other symptoms that affect your quality of life.",
    ctaLabel: "Find Chiropractic Care Near Me",
    heroClass: "heroChiropractic",
    primaryImage: "/images/wholehealth_living_chiropractic_care.webp",
    secondaryImage: "/images/wholehealth_living_tennis.webp",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Chiropractic Care?",
      paragraphs: [
        "Chiropractors focus on the diagnosis, treatment, and prevention of mechanical disorders of the spine and musculoskeletal system, as well as the musculoskeletal effects on the nervous system and general health.",
        "They primarily perform adjustments (manipulations) to the spine or other parts of the body with the goal of correcting alignment problems, alleviating pain, improving function, and supporting the body's natural ability to heal itself.",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Chiropractic Care May Help*",
      items: [
        { text: "Lower Back Pain or Sciatica" },
        { text: "Neck Pain" },
        { text: "Headaches" },
        { text: "Shoulder and Hip Pain" },
        { text: "Posture and Spinal Health" },
      ],
      footnotes: [
        "* National Center for Complementary and Integrative Health: Spinal Manipulation: What You Need To Know. National Institutes of Health, 2019 https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know",
      ],
    },
    quote: "A chiropractic benefit supports treatment of musculoskeletal conditions and non-opioid pain management strategies.",
  },
  massage: {
    slug: "massage",
    title: "Massage Therapy",
    description: "Massage therapy offers a natural approach that may enhance a person's health and well-being.",
    ctaLabel: "Find a Massage Therapist Near Me",
    heroClass: "heroMassage",
    primaryImage: "/images/wholehealth_living_massage_therapy.webp",
    secondaryImage: "/images/wholehealth_living_sunset.webp",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Massage Therapy?",
      paragraphs: [
        "Massage therapy offers benefits to members who seek to reduce stress, relieve anxiety, relax muscle tension, or as a non-pharmacologic alternative for managing musculoskeletal pain.",
        "The massage therapist applies different forms of manipulation - from light stroking to deep pressure - into muscles, connective tissue, tendons, and ligaments. There are dozens of types of massage therapy methods.",
        "Massage therapy may be covered by certain Medicare Advantage plans to address medically approved, non-opioid pain management as well as integrative health services.",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Massage Therapy May Help*",
      items: [
        { text: "Anxiety" },
        { text: "Digestive Disorders" },
        { text: "Fibromyalgia" },
        { text: "Headaches" },
        { text: "Insomnia Related to Stress" },
        { text: "Myofascial Pain Syndrome" },
        { text: "Soft Tissue Strains or Injuries" },
        { text: "Sports Injuries" },
        { text: "Temporomandibular Joint Pain" },
      ],
      footnotes: [
        "* Massage: Get in Touch with its Many Benefits. Mayo Clinic https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/massage/art-20045743",
      ],
    },
    quote: "Massage therapy may help reduce pain and can support several common health conditions.",
  },
  naturopathy: {
    slug: "naturopathy",
    title: "Naturopathy",
    description: "Naturopathic medicine re-focuses healthcare on prevention and wellness, and is highly patient focused.",
    ctaLabel: "Find a Naturopath Doctor Near Me",
    heroClass: "heroNaturopathy",
    primaryImage: "/images/wholehealth_living_naturopathy.webp",
    secondaryImage: "/images/naturopathy3.jpg",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Naturopathy?",
      paragraphs: [
        "Naturopathic medicine uses methods of treatment in conjunction with conventional clinical approaches to prevent disease, restore health, and promote wellness.",
        "Naturopaths typically manage acute and chronic conditions, perform wellness exams and screening tests, order labs and imaging as necessary, and refer to specialists as needed.",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Naturopathy May Help*",
      items: [
        { text: "Colds and flu" },
        { text: "Headaches" },
        { text: "Injuries" },
        { text: "Sleep disorders" },
        { text: "Arthritis" },
        { text: "Chronic pain" },
        { text: "Allergies and asthma" },
        { text: "Diabetes" },
        { text: "Cardiovascular disease" },
        { text: "Fatigue" },
        { text: "Depression" },
        { text: "Fibromyalgia" },
        { text: "Digestive disorders" },
        { text: "Hormonal imbalances" },
        { text: "Menopausal symptoms" },
        { text: "Cancer" },
        { text: "Mild anxiety or depression" },
        { text: "Weight Issues" },
        { text: "Skin conditions" },
      ],
      footnotes: [
        "* The Benefits of Naturopathic Medicine - for every patient. (n.d.). Retrieved from http://www.ndhealthcare.com/naturopathic-medicine-and-you/the-benefits-of-naturopathic-medicine./",
      ],
    },
  },
  "occupational-therapy": {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    description: "Occupational Therapy helps people of all ages participate in normal activities throughout their daily routines.",
    ctaLabel: "Find an Occupational Therapist Near Me",
    heroClass: "heroOccupationalTherapy",
    primaryImage: "/images/wholehealth_living_occupational_therapy.webp",
    secondaryImage: "/images/wholehealth_living_plantcare.webp",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Occupational Therapy?",
      paragraphs: [
        "Occupational Therapy seeks to help people of all ages to live life to its fullest by promoting health, and preventing injury, illness, or disability.",
        "Occupational therapists provide customized interventions to improve a person's ability to perform daily activities in their homes, their workplaces, and their communities.",
        "Occupational therapists employ a holistic approach by adapting the environment or task to fit the person. In this way, the patient is an integral part of the therapy team. Occupational therapy is an evidence-based practice deeply rooted in science.",
      ],
      footnotes: [
        "1. What is Occupational Therapy? American Occupational Therapy Association, https://www.aota.org/Conference-Events/OTMonth/what-is-OT.aspx",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Occupational Therapy May Help",
      items: [
        { label: "Pediatric Conditions", text: "Developmental delays, cerebral palsy, and autism" },
        { label: "Neurological Conditions", text: "Impairments resulting from stroke, spinal cord injuries, and traumatic brain injuries" },
        { label: "Hand Movement", text: "Arthritis, fractures of the hand, and tendon repairs" },
        { label: "Work Related Injuries", text: "Rotator cuff tendinitis and carpal tunnel syndrome" },
        { label: "Sports-related Injuries", text: "Concussion and shoulder injuries" },
        { label: "Age Related", text: "Physical, psychosocial, and cognitive changes that may come with age" },
        { label: "Orthotics", text: "Upper extremity orthotics (braces) or prosthetics" },
        { label: "Mental Health", text: "Coping skills, behavior modifications and daily strategies to manage activities" },
      ],
      footnotes: [
        "2. Rehabilitation, Disability, and Participation. American Occupational Therapy Association, https://www.aota.org/About-Occupational-Therapy/Professionals/RDP.aspx",
      ],
    },
  },
  "speech-therapy": {
    slug: "speech-therapy",
    title: "Speech Therapy",
    description: "Speech-language pathologists diagnose and treat a variety of speech, language, social communication, cognitive-communication, and swallowing disorders in children and adults.",
    ctaLabel: "Find a Speech Therapist Near Me",
    heroClass: "heroSpeechTherapy",
    primaryImage: "/images/wholehealth_living_speech_therapy.webp",
    secondaryImage: "/images/wholehealth_living_rafting.webp",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Speech Therapy?",
      paragraphs: [
        "Speech-language pathologists apply language therapy that includes listening skills, vocabulary, social language skills, and academic skills.",
        "Working with a speech-language pathologist may last for months or even a few years depending on patient's needs. The overall goal of speech-language pathology is to optimize functional improvements that ultimately improve quality of life.",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Speech Therapy May Help*",
      items: [
        { label: "Speech Disorders", text: "Difficulty producing speaking sounds correctly or fluently (i.e., stuttering) or problems with voice or resonance" },
        { label: "Language Disorders", text: "Trouble understanding others, or communicating thoughts, ideas, and feelings" },
        { label: "Social Communication Disorders", text: "Problems with the social use of verbal and nonverbal communication, such as autism and traumatic brain injury" },
        { label: "Cognitive-communication Disorders", text: "Problems structuring thoughts, paying attention, memory, planning, or problem-solving that are the result of a medical event" },
        { label: "Swallowing Disorders", text: "Feeding and swallowing difficulties following illness, surgery, stroke, or injury" },
      ],
      footnotes: [
        "* Scope of practice in speech-language pathology. American Speech-Language-Hearing Association, 2021. Web. Available from https://www.asha.org/policy/sp2016-00343/",
      ],
    },
  },
  "physical-therapy": {
    slug: "physical-therapy",
    title: "Physical Therapy",
    description: "Physical therapists focus on helping their patients improve mobility, decrease pain, and avoid surgery.",
    ctaLabel: "Find a Physical Therapist Near Me",
    heroClass: "heroPhysicalTherapy",
    primaryImage: "/images/wholehealth_living_physical_therapy.webp",
    secondaryImage: "/images/wholehealth_living_exercising.jpg",
    intro: {
      eyebrow: "How it Works",
      heading: "What is Physical Therapy?",
      paragraphs: [
        "Physical therapy is treatment provided by a physical therapist and/or a physical therapist assistant that helps people improve their movement and physical function, manage pain and other chronic conditions, and recover from or prevent injury and chronic disease.",
        "Physical therapists are movement experts who improve quality of life through hands-on care, patient education, and prescribed movement. Physical therapists can also develop fitness and wellness-oriented programs to support healthier and more active lifestyles.",
      ],
    },
    treatment: {
      eyebrow: "Treatment",
      heading: "Physical Therapy May Help*",
      items: [
        { label: "Musculoskeletal Dysfunction", text: "Back and neck pain, knee pain, muscle strains, rotator cuff tears, and temporomandibular joint disorders (TMD)" },
        { label: "Hand Movement", text: "Arthritis, De Quervain's tendinitis, and carpal tunnel syndrome" },
        { label: "Neurological Conditions", text: "Impairments resulting from stroke, Parkinson's disease, multiple sclerosis, and traumatic brain injuries" },
        { label: "Pediatric Conditions", text: "Developmental delays, cerebral palsy, and muscular dystrophy" },
        { label: "Sports-related Injuries", text: "Concussion, anterior cruciate ligament (ACL) injuries and tennis elbow" },
        { label: "Cardiopulmonary Conditions", text: "Chronic obstructive pulmonary disease (COPD)" },
        { label: "Women's Health and Pelvic Floor Dysfunction", text: "Urinary issues and lymphedema" },
      ],
      footnotes: [
        "* Symptoms & Conditions. (n.d.). Retrieved from https://www.choosept.com/symptoms-conditions",
      ],
    },
  },
} satisfies Record<MemberSpecialtySlug, MemberSpecialtyPageData>;

export const memberSpecialtySlugs = Object.keys(memberSpecialtyPages) as MemberSpecialtySlug[];

export function getMemberSpecialtyPage(slug: string) {
  return memberSpecialtyPages[slug as MemberSpecialtySlug];
}
