export const SampleData = {
  "Venessa Payne APRN": {
    experience: {
      yes: 700,
      uncertain: 200,
      no: 100,
    },
    visit: [
      [200, 150, 250, 250, 150], // Ratings for 1st question
      [300, 200, 250, 150, 100], // Ratings for 2nd question
      [400, 150, 200, 250, 0], // Ratings for 3rd question
      [500, 300, 150, 30, 20], // Ratings for 4th question
      [600, 250, 100, 30, 20], // Ratings for 5th question
      [450, 300, 150, 80, 20], // Ratings for 6th question
      [550, 300, 100, 30, 20], // Ratings for 7th question
      [500, 400, 80, 15, 5], // Ratings for 8th question
      [600, 250, 80, 30, 40], // Ratings for 9th question
      [700, 200, 50, 30, 20], // Ratings for 10th question
    ],
    feedback: {
      scheduling: {
        highlyLikely: 400,
        likely: 200,
        neutral: 100,
        unlikely: 50,
        highlyUnlikely: 50,
      },
      recommendation: {
        highlyLikely: 500,
        likely: 150,
        neutral: 50,
        unlikely: 30,
        highlyUnlikely: 20,
      },
    },
  },
  "Gabrielle Jiminez-Murphy DNP, APRN, FNP-C": {
    experience: {
      yes: 600,
      uncertain: 300,
      no: 100,
    },
    visit: [
      [250, 200, 300, 150, 100],
      [350, 250, 200, 150, 50],
      [450, 100, 200, 250, 0],
      [400, 200, 250, 100, 50],
      [550, 200, 100, 100, 50],
      [500, 200, 150, 50, 0],
      [600, 200, 150, 50, 0],
      [400, 250, 200, 30, 20],
      [650, 150, 50, 30, 20],
      [700, 150, 50, 30, 20],
    ],
    feedback: {
      scheduling: {
        highlyLikely: 350,
        likely: 250,
        neutral: 200,
        unlikely: 100,
        highlyUnlikely: 50,
      },
      recommendation: {
        highlyLikely: 450,
        likely: 200,
        neutral: 100,
        unlikely: 30,
        highlyUnlikely: 20,
      },
    },
  },
  "Dr. Muhammad Sanaullah": {
    experience: {
      yes: 800,
      uncertain: 150,
      no: 50,
    },
    visit: [
      [300, 200, 300, 150, 50],
      [400, 200, 250, 100, 50],
      [450, 250, 200, 100, 0],
      [500, 250, 100, 100, 50],
      [650, 200, 100, 30, 20],
      [500, 250, 150, 50, 0],
      [600, 200, 100, 50, 0],
      [700, 200, 50, 30, 20],
      [800, 150, 30, 20, 0],
      [850, 100, 30, 10, 0],
    ],
    feedback: {
      scheduling: {
        highlyLikely: 450,
        likely: 300,
        neutral: 100,
        unlikely: 50,
        highlyUnlikely: 25,
      },
      recommendation: {
        highlyLikely: 600,
        likely: 150,
        neutral: 50,
        unlikely: 25,
        highlyUnlikely: 15,
      },
    },
  },
};

export const ProvidersList = [
  { value: "Venessa Payne APRN", label: "Venessa Payne APRN" },
  {
    value: "Gabrielle Jiminez-Murphy DNP, APRN, FNP-C",
    label: "Gabrielle Jiminez-Murphy DNP, APRN, FNP-C",
  },
  { value: "Dr. Muhammad Sanaullah", label: "Dr. Muhammad Sanaullah" },
];

export const Title = "Patient and Caregiver Survey";
