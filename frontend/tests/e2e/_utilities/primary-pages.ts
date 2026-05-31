import type { PageExpectation } from "./page-assertions";

export const primaryPages: readonly PageExpectation[] = [
  {
    path: "/",
    heading: "Live Life Well",
    visibleText: "Decreasing physical pain and transforming healthcare",
  },
  {
    path: "/members",
    heading: "Be Well",
    visibleText: "Find a Practitioner Near Me",
  },
  {
    path: "/health-plans",
    heading: "Health Plans",
    visibleText: "delivery of high-quality care",
  },
  {
    path: "/practitioners",
    heading: "Integrative Health Practitioners",
    visibleText: "Grow your Practice with WholeHealth Living",
  },
  {
    path: "/providers",
    heading: "Healthcare Providers",
    visibleText: "Four out of five members",
  },
  {
    path: "/about-us",
    heading: "WholeHealth Living for Better Health",
    visibleText: "WholeHealth Living's Accreditations",
  },
  {
    path: "/contact",
    heading: "Connect with Us",
    visibleText: "Fill out the form below",
  },
  {
    path: "/find-a-practitioner",
    heading: "Find a Practitioner",
    visibleText: "Please verify your benefits",
  },
];
