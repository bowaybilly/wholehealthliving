import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

export type ContentPage = {
  title: string;
  heading: string;
  summary: string;
  sections: string[];
};

export const audiences = [
  {
    title: "Members",
    href: "/members",
    summary: "Connect to practitioners to help you live a happier and healthier life.",
    icon: FavoriteBorderRoundedIcon,
  },
  {
    title: "Health Plans",
    href: "/health-plans",
    summary: "Offer cost-effective integrative health solutions across physical medicine specialties.",
    icon: BusinessCenterRoundedIcon,
  },
  {
    title: "Practitioners",
    href: "/practitioners",
    summary: "Grow your practice through a national network of credentialed care.",
    icon: VerifiedRoundedIcon,
  },
  {
    title: "Providers",
    href: "/providers",
    summary: "Refer patients to non-pharmacologic care options with confidence.",
    icon: LocalHospitalRoundedIcon,
  },
];

export const pages = {
  members: {
    title: "Members",
    heading: "Be Well",
    summary:
      "Find in-network practitioners and understand physical medicine and integrative health benefits.",
    sections: [
      "Choose your practitioner from a credentialed network.",
      "Search by specialty, health plan, location, and mileage radius.",
      "Verify benefits with your health plan before receiving care.",
    ],
  },
  "health-plans": {
    title: "Health Plans",
    heading: "Benefits for Health Plan Members",
    summary:
      "Build physical medicine and integrative health benefits that improve access and member satisfaction.",
    sections: [
      "Network management for acupuncture, chiropractic, massage, naturopathy, and therapy specialties.",
      "Programs designed around cost-effective non-pharmacologic care.",
      "Utilization and credentialing support for scaled benefit programs.",
    ],
  },
  practitioners: {
    title: "Practitioners",
    heading: "Integrative Health Practitioners",
    summary:
      "Join networks that connect qualified practitioners with members seeking care.",
    sections: [
      "Participate in national integrative health networks.",
      "Support members seeking covered care through their health plans.",
      "Keep practice information accurate for search and referral workflows.",
    ],
  },
  providers: {
    title: "Providers",
    heading: "Healthcare Providers",
    summary:
      "Refer patients to credentialed physical medicine and integrative health practitioners.",
    sections: [
      "Help patients access non-pharmacologic options for pain and mobility needs.",
      "Coordinate care with practitioners across multiple specialties.",
      "Direct patients to the practitioner search experience for local options.",
    ],
  },
  "about-us": {
    title: "About WholeHealth Living",
    heading: "WholeHealth Living for Better Health",
    summary:
      "For over 30 years, WholeHealth Living has helped connect people with physical medicine and integrative health solutions.",
    sections: [
      "Our mission is to make access to credentialed care simpler.",
      "Our vision is a healthcare experience where whole-person care is easier to navigate.",
      "Our programs support members, health plans, practitioners, and providers.",
    ],
  },
  contact: {
    title: "Connect with Us",
    heading: "Connect with Us",
    summary: "Tell us how we can help and the right team can follow up.",
    sections: [
      "Member support and benefit questions.",
      "Practitioner network participation.",
      "Health plan and provider partnership inquiries.",
    ],
  },
  acupuncture: {
    title: "Acupuncture",
    heading: "Acupuncture Care",
    summary:
      "Learn about acupuncture services offered through WholeHealth Living's integrative health network.",
    sections: [
      "Explore non-pharmacologic care options for pain management and overall well-being.",
      "Connect with credentialed practitioners through participating networks.",
      "Verify eligibility and covered benefits with your health plan before treatment.",
    ],
  },
  chiropractic: {
    title: "Chiropractic Care",
    heading: "Chiropractic Care",
    summary:
      "Discover chiropractic care options available through WholeHealth Living's network practitioners.",
    sections: [
      "Access care focused on musculoskeletal health and mobility support.",
      "Search participating practitioners by location and specialty.",
      "Confirm benefit coverage with your health plan before your visit.",
    ],
  },
  massage: {
    title: "Massage Therapy",
    heading: "Massage Therapy",
    summary:
      "Review massage therapy offerings available through WholeHealth Living's integrative care network.",
    sections: [
      "Support recovery and wellness with covered integrative health services.",
      "Locate practitioners aligned with your plan and area.",
      "Check network participation and member benefits ahead of treatment.",
    ],
  },
  naturopathy: {
    title: "Naturopathy",
    heading: "Naturopathy",
    summary:
      "See how naturopathy services fit into WholeHealth Living's broader whole-person care approach.",
    sections: [
      "Find credentialed practitioners offering naturopathic services.",
      "Review plan participation and referral expectations as needed.",
      "Coordinate benefits and access through your health plan network.",
    ],
  },
  "occupational-therapy": {
    title: "Occupational Therapy",
    heading: "Occupational Therapy",
    summary:
      "Understand occupational therapy services available through WholeHealth Living support programs.",
    sections: [
      "Connect members with practitioners focused on daily function and independence.",
      "Search covered providers based on geography and plan access.",
      "Confirm eligibility and benefits before scheduling care.",
    ],
  },
  "speech-therapy": {
    title: "Speech Therapy",
    heading: "Speech Therapy",
    summary:
      "Explore speech therapy resources and network participation through WholeHealth Living.",
    sections: [
      "Locate practitioners offering speech therapy services where available.",
      "Understand how these services align with member benefits.",
      "Coordinate access through participating health plan networks.",
    ],
  },
  "physical-therapy": {
    title: "Physical Therapy",
    heading: "Physical Therapy",
    summary:
      "Review physical therapy care pathways supported by WholeHealth Living network programs.",
    sections: [
      "Find practitioners focused on movement, recovery, and rehabilitation.",
      "Search in-network care options by area and specialty.",
      "Verify covered services with your health plan before treatment begins.",
    ],
  },
  blog: {
    title: "Blog",
    heading: "WholeHealth Living Blog",
    summary:
      "Browse insights and updates related to physical medicine and integrative health solutions.",
    sections: [
      "Learn more about non-pharmacologic care trends and benefit design.",
      "Explore member, practitioner, and health plan perspectives.",
      "Stay informed about WholeHealth Living programs and resources.",
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    heading: "Privacy Policy",
    summary:
      "This migrated application keeps privacy content in a dedicated route so legal copy can be maintained separately.",
    sections: [
      "Replace this placeholder with approved legal policy text.",
      "Keep revision dates visible.",
      "Store policy content outside deploy code when legal teams need self-service editing.",
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    heading: "Terms of Use",
    summary:
      "This migrated application keeps terms content in a dedicated route so legal copy can be maintained separately.",
    sections: [
      "Replace this placeholder with approved terms.",
      "Keep revision dates visible.",
      "Link terms anywhere personal information is collected.",
    ],
  },
} satisfies Record<string, ContentPage>;

export const nestedPages = {
  "practitioners/integrative-health-solutions-network": {
    title: "Integrative Health Solutions",
    heading: "Integrative Health Solutions Network",
    summary:
      "See how WholeHealth Living connects practitioners to integrative health opportunities across participating networks.",
    sections: [
      "Participate in programs designed around credentialed, non-pharmacologic care.",
      "Connect with health plans seeking qualified integrative health practitioners.",
      "Maintain accurate profile and participation details across the network.",
    ],
  },
  "practitioners/choices": {
    title: "Choices by WholeHealth Living",
    heading: "Choices by WholeHealth Living",
    summary:
      "Learn about the Choices by WholeHealth Living program for practitioners and participating members.",
    sections: [
      "Support members accessing discounted integrative health services.",
      "Understand how Choices complements broader network participation.",
      "Review program expectations and opportunities for practitioner engagement.",
    ],
  },
  "health-plans/integrative-health-solutions": {
    title: "Products",
    heading: "Integrative Health Solutions Products",
    summary:
      "Explore product offerings that help health plans deliver cost-effective physical medicine and integrative health benefits.",
    sections: [
      "Build benefit programs aligned to non-pharmacologic care strategies.",
      "Support member access through credentialed practitioner networks.",
      "Pair products with utilization, network, and credentialing support.",
    ],
  },
  "health-plans/acupuncture": {
    title: "Acupuncture",
    heading: "Health Plan Acupuncture Benefits",
    summary:
      "Review how acupuncture can be incorporated into WholeHealth Living health plan offerings.",
    sections: [
      "Support non-pharmacologic pain management benefit strategies.",
      "Connect members to credentialed acupuncture practitioners.",
      "Align access with plan design and network management goals.",
    ],
  },
  "health-plans/chiropractic": {
    title: "Chiropractic Care",
    heading: "Health Plan Chiropractic Benefits",
    summary:
      "See how chiropractic care fits into WholeHealth Living health plan benefit programs.",
    sections: [
      "Expand access to credentialed chiropractic practitioners.",
      "Support conservative care pathways for pain and mobility concerns.",
      "Coordinate benefit design with network participation and utilization needs.",
    ],
  },
  "health-plans/massage-therapy": {
    title: "Massage Therapy",
    heading: "Health Plan Massage Therapy Benefits",
    summary:
      "Understand massage therapy options within WholeHealth Living health plan solutions.",
    sections: [
      "Offer members broader access to integrative wellness support.",
      "Coordinate massage therapy availability with participating networks.",
      "Design benefits with member experience and cost effectiveness in mind.",
    ],
  },
  "health-plans/naturopathy": {
    title: "Naturopathy",
    heading: "Health Plan Naturopathy Benefits",
    summary:
      "Review naturopathy services as part of WholeHealth Living health plan programs.",
    sections: [
      "Support whole-person care with integrative service offerings.",
      "Connect plans to credentialed naturopathy practitioners where available.",
      "Align coverage strategies with network and member access goals.",
    ],
  },
  "health-plans/occupational-therapy": {
    title: "Occupational Therapy",
    heading: "Health Plan Occupational Therapy Benefits",
    summary:
      "See how occupational therapy services can support member outcomes through WholeHealth Living programs.",
    sections: [
      "Improve access to functional and rehabilitative support services.",
      "Coordinate occupational therapy participation within plan networks.",
      "Connect benefit strategy with credentialed practitioner access.",
    ],
  },
  "health-plans/speech-therapy": {
    title: "Speech Therapy",
    heading: "Health Plan Speech Therapy Benefits",
    summary:
      "Explore speech therapy support within WholeHealth Living health plan offerings.",
    sections: [
      "Provide members with access to qualified speech therapy practitioners.",
      "Support comprehensive rehabilitative care strategies.",
      "Coordinate benefit and network participation requirements.",
    ],
  },
  "health-plans/physical-therapy": {
    title: "Physical Therapy",
    heading: "Health Plan Physical Therapy Benefits",
    summary:
      "Review physical therapy solutions available through WholeHealth Living health plan programs.",
    sections: [
      "Expand member access to rehabilitation and movement-focused care.",
      "Connect benefit design with credentialed physical therapy networks.",
      "Support recovery pathways using cost-effective non-pharmacologic services.",
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageSlug = keyof typeof pages;
export type NestedPagePath = keyof typeof nestedPages;
