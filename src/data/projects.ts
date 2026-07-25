export type Project = {
  slug: string;
  title: string;
  hook: string;
  tags: string[];
  /** Shown on the homepage card before clicking through. Use a logo/icon for apps, or a screenshot for dashboards/research. */
  cardImage: string;
  /** How the card image should be framed: "icon" = centered logo on a tile, "cover" = full-bleed screenshot */
  cardImageStyle: "icon" | "cover";
  /** Screenshots shown on the case study detail page */
  screenshots: string[];
  /** "mobile" renders screenshots as portrait phone frames in a multi-column grid; "default" renders wide landscape frames */
  screenshotLayout: "mobile" | "default";
  overview: string;
  myRole: string;
  problem: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  results: string[];
  keyLearnings: string;
  /** External links to verify the project — GitHub repo, live demo, prototype, etc. Omit if none are available yet. */
  links?: { label: string; href: string }[];
  /** Which animated header accent this project's case study page shows, grounded in the project's actual technique */
  accentTheme: "scan" | "cluster" | "wave" | "flow";
};

export const projects: Project[] = [
  {
    slug: "salcon",
    title: "SalCoN — AI-Powered Poultry Disease Detection",
    hook: "A lightweight CNN mobile app that detects poultry disease from a photo, built end-to-end from raw dataset to shipped Android app.",
    tags: ["Python", "TensorFlow", "Android Studio", "Google Colab", "Figma"],
    cardImage: "/projects/salcon-logo.png",
    cardImageStyle: "icon",
    screenshots: [
      "/projects/salcon-home.png",
      "/projects/salcon-analytics.png",
      "/projects/salcon-result.png",
      "/projects/salcon-disease-breakdown.png",
    ],
    screenshotLayout: "mobile",
    overview:
      "SalCoN is a lightweight mobile application that uses Convolutional Neural Networks to detect common poultry diseases by analyzing images of chicken fecal matter — giving small-scale farmers an instant, low-cost diagnostic tool without needing a veterinarian on-site.",
    myRole:
      "Data Preparation & Model Development Lead — responsible for the full data-to-deployment pipeline, plus UI design and QA testing.",
    problem:
      "Small and mid-scale poultry farmers often lack immediate access to veterinary diagnostics. Disease outbreaks that go undetected for even a few days can wipe out entire flocks, causing major financial losses in an industry with thin margins.",
    solution:
      "We designed a mobile-first tool that lets a farmer photograph a fecal sample and receive an instant, on-device disease prediction. I built and compared multiple lightweight CNN architectures (including ShuffleNetV2 and EfficientNetV2), optimized for on-device performance, and integrated the best-performing model into a simple, farmer-friendly interface.",
    technologies: ["Python", "TensorFlow", "Android Studio", "Google Colab", "Figma"],
    challenges: [
      "Data scarcity: public datasets of labeled poultry fecal images were extremely limited, so I helped build and clean a custom dataset, applying augmentation techniques (rotation, flipping, brightness adjustment) to reduce overfitting.",
      "Model size vs. accuracy tradeoff: the model needed to run on-device without internet access, so I compared multiple lightweight CNN architectures (ShuffleNetV2, EfficientNetV2) to balance prediction confidence against inference speed.",
      "Cross-functional integration: translating a Python-trained model into a working Android Studio app required converting the model format and rebuilding the input/output pipeline in a completely different tech stack.",
    ],
    results: [
      "Delivered a working end-to-end mobile application, from raw image dataset to on-device prediction",
      "Live predictions correctly identified Coccidiosis with 82.70% confidence using ShuffleNetV2 and 79.65% confidence using EfficientNetV2, allowing direct comparison between lightweight architectures",
      "Achieved on-device inference fast enough for practical use in real field conditions on a standard Android phone",
    ],
    keyLearnings:
      "This project taught me that machine learning in the real world is mostly data work and constraint management, not model architecture. Making something that actually works on a real device, for a real user, with real limitations, is a different skill than getting a high accuracy score in a notebook.",
    links: [
      { label: "View Code on GitHub", href: "https://github.com/KeanDavid/SALCON" },
    ],
    accentTheme: "scan",
  },
  {
    slug: "procrastination-clustering",
    title: "Detecting Student Procrastination Patterns Using K-Means Clustering",
    hook: "A data mining research project that identifies procrastination behavior directly from LMS interaction logs — no surveys, no self-reports, just behavioral data.",
    tags: ["Python", "Google Colab", "K-Means Clustering", "PCA"],
    cardImage: "/projects/clustering-poster.png",
    cardImageStyle: "cover",
    screenshots: ["/projects/clustering-poster.png"],
    screenshotLayout: "default",
    overview:
      "A data mining research project that analyzed Learning Management System (LMS) interaction logs to identify and categorize student procrastination behaviors — using unsupervised machine learning instead of traditional self-report surveys, which are slow and prone to bias.",
    myRole:
      "Data Analyst & ML Implementation — responsible for data preprocessing and feature engineering, implementing the K-Means clustering and PCA dimensionality reduction, and building the poster's data visualizations.",
    problem:
      "Most procrastination research relies on self-reported surveys, which are subjective and don't reflect real-time behavior. Meanwhile, LMS platforms passively collect huge amounts of behavioral data that go largely unused for this purpose. The question: could procrastination patterns be identified directly from raw log data, without deadlines or self-reports?",
    solution:
      "I engineered behavioral features directly from raw LMS logs — interaction frequency, time spent, daily activity rate, and burst activity — then applied K-Means clustering to group students into three behavioral segments. I used Principal Component Analysis (PCA) to reduce the feature space to two dimensions for visualization, revealing three distinct clusters: highly engaged students, anomalous/irregular users, and a moderately-engaged group showing clear procrastination tendencies.",
    technologies: ["Python", "Google Colab", "K-Means Clustering", "PCA", "Pandas", "Matplotlib/Seaborn"],
    challenges: [
      "No ground-truth labels: there was no 'correct answer' for who was procrastinating, which meant choosing and defending an unsupervised approach and interpreting clusters using domain reasoning rather than direct validation.",
      "Feature engineering from raw logs: turning timestamped log events into meaningful behavioral signals like 'burst activity' and 'daily activity rate' required deciding which time-windows and thresholds actually captured procrastination-like behavior.",
      "Making clusters interpretable: raw K-Means output is just numbered clusters — using PCA to visualize them in 2D and analyzing cluster centroids was necessary to translate 'Cluster 2' into an actual human-readable insight.",
    ],
    results: [
      "Identified 3 distinct behavioral clusters directly from LMS interaction data, with one cluster showing clear procrastination tendencies",
      "Found that 3rd-year students showed the highest procrastination signals, while 2nd years showed the most consistent engagement — an actionable insight for targeted intervention",
      "Presented findings via PCA visualization and cluster analysis tables that made a complex unsupervised model interpretable to a non-technical academic audience",
    ],
    keyLearnings:
      "This project taught me that the hardest part of unsupervised machine learning isn't running the algorithm — it's translating unlabeled clusters into something a human can act on. Good feature engineering and clear visualization mattered more to the final insight than the clustering algorithm itself.",
    accentTheme: "cluster",
  },
  {
    slug: "climatic-forecast-dashboard",
    title: "Climatic Forecast Comparison Dashboard",
    hook: "A Power BI dashboard comparing three forecasting models — Prophet, ARIMA, and TSLM — paired with live weather monitoring in one interface.",
    tags: ["Power BI", "Prophet", "ARIMA", "TSLM", "Time-Series Forecasting"],
    cardImage: "/projects/climatic-dashboard.png",
    cardImageStyle: "cover",
    screenshots: ["/projects/climatic-dashboard.png"],
    screenshotLayout: "default",
    overview:
      "A Power BI dashboard comparing three time-series forecasting models — Prophet, ARIMA, and TSLM — for predicting weather variables, combined with a live weather-monitoring interface for real-time conditions, multi-day forecasts, and satellite imagery.",
    myRole:
      "Solo project — sourced the dataset, built and evaluated all three forecasting models, and designed the full dashboard.",
    problem:
      "Choosing the right time-series model for weather forecasting isn't obvious — different models can perform better or worse depending on the variable being predicted (temperature vs. rainfall vs. wind), and decision-makers such as meteorologists, LGUs, and disaster risk offices need both model accuracy and live conditions in one place to make informed calls.",
    solution:
      "Using a weather dataset from Kaggle, I built and evaluated three forecasting models — Prophet, ARIMA, and TSLM — across four variables (relative humidity, rainfall, mean temperature, wind speed), scoring each with MAE, MAPE, MASE, SMAPE, and RMSE. I paired this model-evaluation panel with a live operational view (current conditions, 4-day forecast, satellite imagery) so the dashboard serves both technical evaluation and day-to-day monitoring.",
    technologies: ["Power BI", "Prophet", "ARIMA", "TSLM", "Time-Series Forecasting", "Kaggle Dataset"],
    challenges: [
      "No single model won across all metrics — Prophet, ARIMA, and TSLM each performed best on different variables and error metrics, which meant presenting multiple models side-by-side rather than declaring one universal winner.",
      "Balancing two very different dashboard needs (deep model-evaluation charts vs. a simple, glanceable weather widget) on one screen without either side feeling like an afterthought.",
      "Choosing which of five error metrics (MAE, MAPE, MASE, SMAPE, RMSE) were actually meaningful to show without overwhelming a non-technical viewer like an LGU planner.",
    ],
    results: [
      "Delivered a working comparison across 3 models × 4 weather variables × 5 error metrics",
      "Found that model performance varies meaningfully by variable — a realistic, defensible finding rather than an oversimplified 'best model' claim",
      "Built a fully separate live-monitoring panel (current conditions, 4-day forecast, satellite imagery) for practical day-to-day use alongside the technical evaluation",
    ],
    keyLearnings:
      "This project taught me that model comparison isn't just about picking a winner — sometimes the honest answer is 'it depends,' and a good dashboard needs to make that nuance clear instead of hiding it behind one bottom-line number.",
    accentTheme: "wave",
  },
  {
    slug: "research-proposal-management",
    title: "ReMoTrak — Web-Based Research Monitoring & Proposal Tracking System",
    hook: "A full research proposal management platform designed for a university research office — covering submission, multi-division review, and institutional reporting.",
    tags: ["Figma", "DFD", "ERD", "Context Diagrams"],
    cardImage: "/projects/research-login.png",
    cardImageStyle: "cover",
    screenshots: [
      "/projects/research-login.png",
      "/projects/research-dashboard.png",
      "/projects/research-dfd.png",
      "/projects/research-figma-flow.png",
    ],
    screenshotLayout: "default",
    overview:
      "A full research proposal management platform designed for the University of Southeastern Philippines' Office of the Vice President for Research, Development, and Extension — covering proposal submission, multi-division review workflows, statistical reporting, and account management for roles spanning the President's Office down to individual research divisions.",
    myRole:
      "UI/UX Designer & Systems Analyst — responsible for the complete Figma prototype, the data flow diagrams (context diagram + Level-0 DFD), and the underlying database/workflow structure.",
    problem:
      "OVPRDE's research proposal tracking was fragmented across Google Drive folders and spreadsheets, with no centralized way for the President's Office, RDE division, KTTD, Extension Division, and Research Division to request, validate, and consolidate reports. Status visibility was poor, and reporting on publications, patents, and SDG alignment required manual compilation.",
    solution:
      "I mapped the full data flow between all five stakeholder roles, then designed a role-based platform: a statistics dashboard summarizing '6 P's' reporting (Publications, Patents, Products, People & Services, Places & Partnerships, Policies), SDG-aligned reporting by division, and a full proposal review/submission workflow — all backed by a Google login option for easy institutional access.",
    technologies: ["Figma", "Data Flow Diagrams (DFD)", "Context Diagrams", "Entity-Relationship Diagrams (ERD)", "Google Workspace"],
    challenges: [
      "Reconciling 5 different stakeholder roles (President, RDE, KTTD, Extension, Research Division) each needing different views of the same underlying data, without duplicating screens for every role.",
      "Designing a '6 P's' statistics dashboard that had to compress a full year of institutional research output into scannable KPI cards and charts.",
      "Translating an existing Google Drive + spreadsheet workflow into a structured, role-based digital system without breaking staff's existing habits.",
    ],
    results: [
      "Delivered a complete, presentation-ready Figma prototype spanning 15+ interconnected screens",
      "Produced full DFD and context diagram documentation used as the reference blueprint by OVPRDE leadership",
      "Designed a unified statistics dashboard consolidating publications, patents, products, partnerships, and SDG alignment across three divisions",
    ],
    keyLearnings:
      "Designing for five different institutional roles taught me that good UX isn't about making every screen pretty — it's about making sure each role only sees what's relevant to their job. The DFD work also taught me to think about data flow before interface, which made the actual screen design much faster.",
    accentTheme: "flow",
  },
];
