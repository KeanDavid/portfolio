export type Certifications = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
};

export const certifications: Certifications[] = [
  {
    title: "Certificate of Participation — Data Mining Poster Presentation",
    issuer: "University of Southeastern Philippines, College of Information and Computing",
    date: "May 16, 2025",
    image: "/certifications/cert-data-mining-poster.jpeg",
    description:
      "Awarded for the poster \"Detecting and Categorizing Procrastination Behaviors in UVE Logs Using Behavioral Thresholds and Clustering Analysis,\" presented during the ICE322 Professional Elective 2 Poster Presentation.",
  },
  {
    title: "Certificate of Appreciation — OVPRDE Internship",
    issuer: "Office of the Vice President for Research, Development, and Extension, USeP",
    date: "July 25, 2025",
    image: "/certifications/cert-ovprde-internship.jpeg",
    description:
      "Presented in appreciation of dedication, hard work, and contribution during the internship at the Office of the Vice President for Research, Development, and Extension.",
  },
];
