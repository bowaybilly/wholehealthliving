import type { PractitionerSubmenuPageData, PractitionerSubmenuPath } from "../../../../_types/menu/submenu/practitioners/practitioners";

const recruitmentSpecialties = [
  "Acupuncturists",
  "Chiropractors",
  "Massage Therapists",
  "Naturopathic Doctors",
  "Occupational Therapists",
  "Physical Therapists",
  "Speech Therapists",
] as const;

const recruitmentCopy =
  "We can recruit practitioners in the following specialties below. Contact us today at WHLrecruitment@tivityhealth.com or 800-274-7526 to learn more about our current recruitment initiatives.";

const footnote =
  "1. Perceptions Of Complementary & Alternative Medicine Among The SilverSneakers Population, Tivity Health Consumer Research, September 2019 which surveyed two separate populations: SilverSneakers members and the general population.";

export const practitionerSubmenuPages = {
  "practitioners/integrative-health-solutions-network": {
    path: "practitioners/integrative-health-solutions-network",
    title: "Grow your Practice by Joining our Integrative Health Network",
    description: "Gain access to more patients from the nation's leading health plans.",
    image: "/images/iStock-1199908661-1.jpeg",
    sections: [
      {
        heading: "Minimize the Cost Barrier to Secure New Patients",
        paragraphs: [
          "WholeHealth Living has developed an integrated platform and simple process that makes your services available to thousands of eligible health plan members that are seeking out integrative health services to improve their health and well-being.",
          "Research indicates 7 out of 10 consumers say the out-of-pocket cost is a barrier to this type of care. By joining WholeHealth Living's Integrative Health Network, you minimize the cost barrier by offering a covered healthcare benefit and gain access to a new segment of patients.",
        ],
      },
      {
        heading: "Integrate Your Services with the Broader Medical Community",
        paragraphs: [
          "Today patients state they are much more likely to seek care from an integrative health practitioner if their provider refers them.",
          "WholeHealth Living works closely with health plans and primary care providers to integrate your services with the broader medical community and promote awareness of integrative health services.",
        ],
      },
      {
        heading: "Let Us Simplify the Claims Process for You",
        paragraphs: [
          "By partnering with WholeHealth Living, you will work directly with us, so you do not have to hassle with health insurance, plus we have a simple claims process with prompt payment.",
          "You are also given a dedicated Practitioner Relations team member and industry expert to help support your practice so you can focus on growing your business and caring for your patients.",
        ],
      },
    ],
    recruitmentHeading: "Join the WholeHealth Living Integrative Health Network Today",
    recruitmentCopy,
    specialties: [...recruitmentSpecialties],
    footnote,
  },
  "practitioners/choices": {
    path: "practitioners/choices",
    title: "Grow your practice by joining our Choices by WholeHealth Living Network",
    description: "Connect your practice to a national network of integrative health practitioners.",
    image: "/images/iStock-1073909018-1.jpeg",
    sections: [
      {
        heading: "Connect to National Health Plan Leaders",
        paragraphs: [
          "WholeHealth Living partners with health plans to offer integrative health services, plus lifestyle products and services to their members through a discount program.",
          "As a network practitioner, you gain access to thousands of eligible health plan members to grow your practice and attract new patients by offering a cash discount of 20-40%.",
          "No referrals or pre-authorizations are needed and there are no claims to file. Members receive a discount certificate via email, which they present at the time of treatment.",
        ],
      },
      {
        heading: "Participate in an Elite Network of Practitioners",
        paragraphs: [
          "Join over 16,500 practitioners who leverage the Choices by WholeHealth Living network to grow their practice.",
          "Choices by WholeHealth Living also offers a wide variety of national and local lifestyle products and services.",
        ],
      },
      {
        heading: "Patients Want More Choices",
        items: [
          "Over 50% of patients are looking to benefit their overall health and well-being through integrative therapies.",
          "7 out of 10 patients who seek alternative therapies are limited by cost.",
          "A 20-40% discount will attract more patients to your practice.",
        ],
      },
    ],
    recruitmentHeading: "Join our Choices by WholeHealth Living Network Today",
    recruitmentCopy,
    specialties: [...recruitmentSpecialties],
    footnote,
  },
} satisfies Record<PractitionerSubmenuPath, PractitionerSubmenuPageData>;

export function getPractitionerSubmenuPage(path: string) {
  return practitionerSubmenuPages[path as PractitionerSubmenuPath];
}
