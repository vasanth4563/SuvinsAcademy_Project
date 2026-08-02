// Classes 6–9: Science & Social Studies instead of Physics/Chemistry/Biology
export const SUBJECTS_LOWER = [
  { id: 'tamil',    name: 'Tamil',            emoji: '📖', color: '#c0392b', bg: '#fdecea' },
  { id: 'hindi',    name: 'Hindi',            emoji: '🗣️', color: '#7b1fa2', bg: '#f3e5f5' },
  { id: 'english',  name: 'English',          emoji: '✍️', color: '#1565c0', bg: '#e3f2fd' },
  { id: 'math',     name: 'Mathematics',      emoji: '📐', color: '#00695c', bg: '#e0f2f1' },
  { id: 'science',  name: 'Science',          emoji: '🔬', color: '#d84315', bg: '#fbe9e7' },
  { id: 'social',   name: 'Social Studies',   emoji: '🌍', color: '#1565c0', bg: '#e8eaf6' },
  { id: 'cs',       name: 'Computer Science', emoji: '💻', color: '#4e342e', bg: '#efebe9' },
];

// Classes 10–12: Full science subjects
export const SUBJECTS_UPPER = [
  { id: 'tamil',     name: 'Tamil',            emoji: '📖', color: '#c0392b', bg: '#fdecea' },
  { id: 'hindi',     name: 'Hindi',            emoji: '🗣️', color: '#7b1fa2', bg: '#f3e5f5' },
  { id: 'english',   name: 'English',          emoji: '✍️', color: '#1565c0', bg: '#e3f2fd' },
  { id: 'math',      name: 'Mathematics',      emoji: '📐', color: '#00695c', bg: '#e0f2f1' },
  { id: 'physics',   name: 'Physics',          emoji: '⚛️', color: '#d84315', bg: '#fbe9e7' },
  { id: 'chemistry', name: 'Chemistry',        emoji: '⚗️', color: '#2e7d32', bg: '#e8f5e9' },
  { id: 'biology',   name: 'Biology',          emoji: '🧬', color: '#0277bd', bg: '#e1f5fe' },
  { id: 'cs',        name: 'Computer Science', emoji: '💻', color: '#4e342e', bg: '#efebe9' },
];

// Keep SUBJECTS as alias for backward compat (used by other components)
export const SUBJECTS = SUBJECTS_UPPER;

export const Syllabus = [
  { id: 'cbse',        name: 'CBSE',          fullName: 'Central Board of Secondary Education',               color: '#0d1b3e', desc: 'NCERT-based national curriculum preparing students for AISSE & AISSCE board exams with a strong focus on conceptual understanding.' },
  { id: 'icse',        name: 'ICSE',          fullName: 'Indian Certificate of Secondary Education',          color: '#880e4f', desc: 'CISCE board curriculum known for its analytical depth and English-medium approach, ideal for students targeting global universities.' },
  { id: 'igcse',       name: 'IGCSE',         fullName: 'International General Certificate of Secondary Education', color: '#006064', desc: 'Cambridge internationally recognized curriculum offering flexible subject choices, accepted worldwide by top universities.' },
  { id: 'tnbse',       name: 'TNBSE',         fullName: 'Tamil Nadu Board of Secondary Education',            color: '#1b5e20', desc: 'State board curriculum with balanced emphasis on Tamil, sciences, and social subjects aligned with TN government standards.' },
];

export const GRADES = [6, 7, 8, 9, 10, 11, 12];

export const STATS = [
  { label: 'Students Enrolled',   value: 100,  suffix: '+', emoji: '🎓' },
  { label: 'Expert Faculty',      value: 10,   suffix: '+', emoji: '👨‍🏫' },
  { label: 'Board Pass Rate',     value: 100,  suffix: '%', emoji: '📊' },
  { label: 'Years of Excellence', value: 2,    suffix: '+', emoji: '🏆' },
];

export const ACHIEVEMENTS = [
  { icon: '🏆', title: '100% Board Pass Rate',            year: '2024', category: 'Academic',  desc: 'Achieved 100% pass rate in CBSE Class 10 & 12 board exams for 5 consecutive years.' },
  { icon: '🥇', title: 'State Rank #1 — Mathematics',    year: '2024', category: 'Rank',      desc: 'Our student secured State Rank 1 in CBSE Class 12 Mathematics with a perfect 100/100 score.' },
  { icon: '🔬', title: 'National Science Olympiad Gold',  year: '2023', category: 'Olympiad',  desc: '12 students won Gold medals in National Science Olympiad across Physics, Chemistry & Biology.' },
  { icon: '🌏', title: 'Best IGCSE Centre — South India', year: '2023', category: 'Academic',  desc: 'Recognized as Best Cambridge IGCSE Teaching Centre in South India by Cambridge Assessment Group.' },
  { icon: '🏅', title: 'District Sports Champions',       year: '2023', category: 'Sports',    desc: 'Won championships in Athletics, Chess, and Badminton with 18 individual medals.' },
  { icon: '🎭', title: 'Cultural Fest — First Place',     year: '2024', category: 'Cultural',  desc: 'Students secured overall First Place at the Inter-School State-Level Cultural Festival.' },
  { icon: '💻', title: 'CS Innovation Award',             year: '2024', category: 'Academic',  desc: 'Student team won the Tamil Nadu State-Level Innovation Award for an AI-based project.' },
  { icon: '⭐', title: 'TNBSE District Topper',           year: '2024', category: 'Rank',      desc: 'Ravi Kumar topped the district in TNBSE Class 12 with 594/600 marks — a record score.' },
];

export const MILESTONES = [
  { year: '2024', title: 'Founded',                  desc: 'Suvin\'s Academy established with a vision to deliver quality education across multiple Syllabus.' },
  { year: '2005', title: 'CBSE Affiliation',         desc: 'Received official CBSE affiliation, expanding our academic offerings significantly.' },
  { year: '2010', title: 'ICSE Wing Launched',       desc: 'Opened dedicated ICSE wing with expert faculty and modern facilities.' },
  { year: '2015', title: 'Cambridge IGCSE Centre',   desc: 'Became a recognized Cambridge Assessment International Education centre.' },
  { year: '2018', title: 'Digital Classrooms',       desc: 'Upgraded to fully equipped smart classrooms with interactive learning tools.' },
  { year: '2022', title: '3000+ Students Milestone', desc: 'Crossed 3000 enrolled students with a consistent 100% average board pass rate.' },
  { year: '2024', title: 'National Recognition',     desc: 'Awarded "Best Multi-Syllabus Institution" at the National Education Summit.' },
];

export const FACULTY = [
  { name: 'Charanya',         role: 'Mathematics Faculty',           qual: 'Msc Mathematics, B.Ed.',  exp: '8 yrs',  subjects: ['Tamil', 'English'],               initials: 'CH', color: '#c0392b' },
  { name: 'Thiyagarajan',     role: 'Chemistry Faculty',             qual: 'M.Sc. Chemistry, B.Ed.',     exp: '10 yrs', subjects: ['Mathematics'],                    initials: 'TH', color: '#00695c' },
  { name: 'Govindan',         role: 'Physics Faculty',                 qual: 'M.Sc. Physics, Scientist.',         exp: '9 yrs',  subjects: ['Physics', 'Science'],             initials: 'GO', color: '#192b5c' },
  { name: 'Mohammed Ajaas',   role: 'Social Studies Faculty',          qual: 'M.A. Social Studies, B.Ed.', exp: '7 yrs', subjects: ['Social Studies'],              initials: 'MA', color: '#2e7d32' },
  { name: 'Mohammed Refai',   role: 'Mathematics Faculty',             qual: 'M.Sc. Mathematics, B.Ed.',        exp: '6 yrs', subjects: ['Mathematics'],                 initials: 'MR', color: '#d84315' },
  { name: 'Arundeep',         role: 'Junior Faculty',                  qual: 'MCA Computer Science, B.Ed.', exp: '5 yrs', subjects: ['Computer Science'],            initials: 'AD', color: '#7b1fa2' },
  { name: 'Amritha',          role: 'English Faculty',                 qual: 'M.A. English Literature, B.Ed.',  exp: '3 yrs', subjects: ['English'],                     initials: 'AM', color: '#0277bd' },
];

export const TESTIMONIALS = [
  { name: 'Ananya Krishnamurthy', role: 'Parent — CBSE Class 12',       text: 'My daughter scored 100% in her boards! The faculty at Suvin\'s Academy go beyond textbooks — they make every concept click. Best decision we ever made!',                                                            rating: 5, initials: 'AK', color: '#0d1b3e' },
  { name: 'Rohan Subramaniam',    role: 'Former IGCSE student, IIT \'24',text: 'The IGCSE programme here was world-class. The analytical approach to Physics and Math gave me a strong foundation that helped me crack JEE Advanced effortlessly.',                                               rating: 5, initials: 'RS', color: '#006064' },
  { name: 'Kavitha Murugan',      role: 'Parent — ICSE Class 10',        text: 'The ICSE curriculum looked daunting but the teachers made it manageable. My son went from average marks to topping his class in just one year!',                                                                   rating: 5, initials: 'KM', color: '#880e4f' },
  { name: 'Deepak Rajaram',       role: 'TNBSE Class 11 Student',        text: 'The way they teach Biology and Chemistry here is amazing. The lab sessions are hands-on and well-organized. I feel very confident about my NEET preparation.',                                                     rating: 5, initials: 'DR', color: '#1b5e20' },
];
