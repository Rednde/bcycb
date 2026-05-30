const questions = [
  {
    topic: "Practice MST",
    category: "mst",
    marks: 9,
    question: "Compare and contrast the three different types of cell junctions.",
    answer:
      "Adhesive junctions mechanically attach the cytoskeleton of a cell to the cytoskeleton of other cells or to the extracellular matrix. They are found in tissues subject to mechanical stress, such as muscle and skin epithelium, and cadherin is a cell adhesion molecule involved in joining cells and extracellular matrix. Septate/tight junctions occlude substances from passing between cells and form a barrier that can seal off a sheet of cells. Communication junctions allow small molecules to diffuse between cells through small openings; in animal cells, connexons on the plasma membranes of two adjacent cells align to form an open channel.",
    points: [
      "Adhesive junction: mechanical attachment to other cells or extracellular matrix.",
      "Found in mechanically stressed tissues such as muscle and skin epithelium.",
      "Cadherin is involved in adhesion.",
      "Septate/tight junction: blocks substances passing between cells.",
      "Forms a sealing barrier across a sheet of cells.",
      "Communication junction: small molecules diffuse through openings.",
      "Connexons align between adjacent cells to form channels."
    ]
  },
  {
    topic: "Practice MST",
    category: "mst",
    marks: 5,
    question: "Describe the interactions that contribute to a protein's tertiary structure.",
    answer:
      "Protein tertiary structure is supported by five interactions: hydrogen bonds, covalent disulfide bridges, ionic bonds, Van der Waals forces, and hydrophobic exclusion. Hydrogen bonds can form between different amino acids in the polypeptide. Disulfide bridges form between two cysteine side chains. Ionic bonds form between oppositely charged R groups. Van der Waals forces are weak attractions between oppositely polarized electron clouds. Hydrophobic exclusion causes amino acids with non-polar R groups to gather together inside the protein.",
    points: [
      "Hydrogen bonds between amino acids.",
      "Covalent disulfide bridges between cysteine side chains.",
      "Ionic bonds between oppositely charged R groups.",
      "Van der Waals attractions.",
      "Hydrophobic exclusion of non-polar R groups."
    ]
  },
  {
    topic: "Practice MST",
    category: "mst",
    marks: 4,
    question: "Explain if alpha-glucose can link to beta-glucose using 1-4 or 1-6 interaction.",
    answer:
      "Alpha-glucose differs from beta-glucose in the position of the OH group on the first carbon. To form an alpha-1,4 bond, the OH group on carbon 1 of alpha-glucose can interact with the OH group on carbon 4 of beta-glucose. To form an alpha-1,6 bond, the OH group on carbon 1 of alpha-glucose can interact with the OH group on carbon 6 of beta-glucose. However, beta-glucose lacks the correct carbon 1 OH orientation to form the equivalent beta-to-alpha interaction with carbon 4 or carbon 6 of alpha-glucose.",
    points: [
      "Alpha and beta glucose differ at the OH group on carbon 1.",
      "Alpha carbon 1 OH can interact with carbon 4 OH on beta-glucose.",
      "Alpha carbon 1 OH can interact with carbon 6 OH on beta-glucose.",
      "Beta-glucose lacks the correct carbon 1 OH orientation for the equivalent interaction."
    ]
  },
  {
    topic: "Practice MST",
    category: "mst",
    marks: 4,
    question: "Explain the difference between homologous chromosomes and sister chromatids.",
    answer:
      "Homologous chromosomes are a pair of chromosomes from paternal and maternal sources. In humans, there are 23 pairs of homologous chromosomes. Sister chromatids are replicas of a single chromosome, either paternal or maternal, formed during DNA replication before mitosis or meiosis and held together at the centromere.",
    points: [
      "Homologous chromosomes are paternal/maternal chromosome pairs.",
      "Humans have 23 pairs.",
      "Sister chromatids are replicated copies of one chromosome.",
      "Sister chromatids form during DNA replication and are held at the centromere."
    ]
  },
  {
    topic: "Practice MST",
    category: "mst",
    marks: 6,
    question: "Describe how genetic variability is achieved.",
    answer:
      "Genetic variability is achieved in three main ways. First, crossing over occurs between non-sister chromatids during prophase I, allowing homologous chromosomes to exchange genetic material containing alleles. Second, independent assortment occurs at metaphase I when paternal and maternal chromosomes are randomly assigned into gametes, producing about 1 in 8.3 million possible chromosome combinations in humans. Third, random fertilization or syngamy combines paternal and maternal gametes randomly, creating further variability in the zygote.",
    points: [
      "Crossing over occurs between non-sister chromatids in prophase I.",
      "Homologues exchange genetic material and alleles.",
      "Independent assortment occurs at metaphase I.",
      "Paternal and maternal chromosomes are randomly assigned into gametes.",
      "Humans have about 1 in 8.3 million possible chromosome combinations from assortment.",
      "Random fertilization creates further variation."
    ]
  },
  {
    topic: "Practice MST",
    category: "mst",
    marks: 3,
    question: "In the absence of cohesin proteins, what would happen to cells during meiosis II?",
    answer:
      "During meiosis II, cohesin proteins hold sister chromatids together at their centromeres while kinetochores attach them to microtubules. This allows sister chromatids to be pulled equally to opposite poles during anaphase II. Without cohesin proteins, sister chromatids would not be held together properly, equal separation during anaphase II would fail, and gametes may receive an unequal distribution of chromosomes.",
    points: [
      "Cohesin holds sister chromatids together at centromeres.",
      "Kinetochores attach sister chromatids to microtubules.",
      "Without cohesin, sister chromatids may not separate equally.",
      "Gametes may receive unequal chromosome distribution."
    ]
  },
  {
    topic: "Chapter 3",
    category: "chapter-3",
    marks: 2,
    question: "What is the difference between dehydration reaction and hydrolysis reaction?",
    answer:
      "Dehydration reaction forms macromolecules by removing a molecule of water, with OH removed from one monomer and H removed from another to form a covalent bond. Hydrolysis breaks macromolecules by adding water, with H attaching to one subunit and OH attaching to the other.",
    points: ["Dehydration removes water and builds bonds.", "Hydrolysis adds water and breaks bonds."]
  },
  {
    topic: "Chapter 3",
    category: "chapter-3",
    marks: 3,
    question: "Explain why fructose is a structural isomer of glucose while galactose is a stereoisomer of glucose.",
    answer:
      "Isomers have the same molecular or empirical formula. Fructose is a structural isomer of glucose because it has the same empirical formula but differs in the position of the carbonyl carbon, changing the carbon skeleton structure. Galactose is a stereoisomer of glucose because it has the same carbon skeleton but differs in the spatial arrangement of OH and H groups relative to the ring.",
    points: [
      "Isomers have the same molecular or empirical formula.",
      "Structural isomers differ in carbon skeleton structure.",
      "Stereoisomers differ in spatial arrangement of attached groups."
    ]
  },
  {
    topic: "Chapter 3",
    category: "chapter-3",
    marks: 4,
    question: "Compare starch, glycogen, cellulose, and chitin.",
    answer:
      "Starch is an energy storage polysaccharide in plants made of alpha-glucose, with amylose and amylopectin forms. Glycogen is the storage form of sugar in mammals, also made of alpha-glucose, and is highly branched. Cellulose is a structural polysaccharide in plant cell walls made of beta-glucose with beta-1,4 linkages. Chitin is structural material in arthropods and many fungi, made from N-acetylglucosamine and toughened by cross-linking with proteins.",
    points: ["Starch: plant storage.", "Glycogen: animal storage.", "Cellulose: plant structural support.", "Chitin: arthropod/fungal structural support."]
  },
  {
    topic: "Chapter 4",
    category: "chapter-4",
    marks: 5,
    question: "Compare prokaryotic and eukaryotic cells.",
    answer:
      "Prokaryotic cells lack a membrane-bound nucleus and keep genetic material in a nucleoid, usually as a single circular DNA molecule. They are simple, usually unicellular, and most lack membrane-bound organelles, though they contain ribosomes. Eukaryotic cells have a membrane-bound nucleus containing DNA, contain membrane-bound organelles and an extensive endomembrane system, and possess a cytoskeleton for support and structure.",
    points: [
      "Prokaryotes have no membrane-bound nucleus.",
      "Prokaryotic DNA is in the nucleoid.",
      "Eukaryotes have a membrane-bound nucleus.",
      "Eukaryotes contain membrane-bound organelles.",
      "Both have ribosomes, cytoplasm, genetic material, and plasma membrane."
    ]
  },
  {
    topic: "Chapter 4",
    category: "chapter-4",
    marks: 4,
    question: "Explain the functions of lysosomes and peroxisomes.",
    answer:
      "Lysosomes are membrane-bound digestive vesicles formed from the Golgi apparatus. They contain hydrolytic enzymes that break down proteins, nucleic acids, lipids, carbohydrates, old organelles by autophagy, and phagocytized particles. Peroxisomes are small membrane-bound organelles with oxidative enzymes that oxidize fatty acids and detoxify harmful chemicals. They produce hydrogen peroxide as a by-product and contain catalase, which breaks hydrogen peroxide into water and oxygen.",
    points: ["Lysosomes digest macromolecules.", "Lysosomes carry out autophagy.", "Peroxisomes oxidize fatty acids and detoxify chemicals.", "Catalase breaks down hydrogen peroxide."]
  },
  {
    topic: "Chapter 10",
    category: "chapter-10",
    marks: 5,
    question: "Describe the stages of mitosis in order.",
    answer:
      "In prophase, chromosomes condense, the nuclear envelope breaks down, and the mitotic spindle assembles. In prometaphase, chromosomes attach to microtubules at the kinetochores and move toward the cell equator. In metaphase, chromosomes align at the metaphase plate. In anaphase, cohesins are degraded and sister chromatids are pulled to opposite poles. In telophase, the spindle disassembles, nuclear envelopes reform, chromosomes decondense, and Golgi and ER reform.",
    points: ["Prophase", "Prometaphase", "Metaphase", "Anaphase", "Telophase"]
  },
  {
    topic: "Chapter 11",
    category: "chapter-11",
    marks: 5,
    question: "Describe what happens in meiosis I.",
    answer:
      "In prophase I, chromosomes condense, homologous chromosomes pair by synapsis, and crossing over occurs to form chiasmata. In metaphase I, homologous chromosome pairs align at the equator. In anaphase I, homologous chromosomes are pulled apart to opposite poles while sister chromatids remain together. In telophase I, homologues cluster at each pole, nuclear envelopes may reform, and cytokinesis may occur. The resulting cells have half the original chromosome number.",
    points: ["Prophase I: synapsis and crossing over.", "Metaphase I: homologues align.", "Anaphase I: homologues separate.", "Telophase I: haploid nuclei form.", "Sister chromatids remain together."]
  }
];

let filteredQuestions = [...questions];
let currentQuestion = 0;

const topic = document.querySelector("#quiz-topic");
const marks = document.querySelector("#quiz-marks");
const question = document.querySelector("#quiz-question");
const answer = document.querySelector("#quiz-answer");
const studentAnswer = document.querySelector("#student-answer");
const markAnswer = document.querySelector("#mark-answer");
const resetAnswer = document.querySelector("#reset-answer");
const modelToggle = document.querySelector("#model-toggle");
const markingResult = document.querySelector("#marking-result");
const scoreLabel = document.querySelector("#score-label");
const scoreMessage = document.querySelector("#score-message");
const hitPoints = document.querySelector("#hit-points");
const missedPoints = document.querySelector("#missed-points");
const controls = document.querySelectorAll("[data-step]");
const count = document.querySelector("#quiz-count");
const filters = document.querySelectorAll("[data-filter]");

const stopWords = new Set([
  "about",
  "after",
  "also",
  "between",
  "chapter",
  "during",
  "either",
  "found",
  "forms",
  "from",
  "have",
  "into",
  "only",
  "other",
  "point",
  "points",
  "same",
  "such",
  "that",
  "their",
  "these",
  "they",
  "this",
  "with",
  "within"
]);

function renderQuestion() {
  const item = filteredQuestions[currentQuestion];
  topic.textContent = item.topic;
  marks.textContent = `${item.marks} mark${item.marks === 1 ? "" : "s"}`;
  question.textContent = item.question;
  answer.textContent = item.answer;
  studentAnswer.value = "";
  answer.hidden = true;
  markingResult.hidden = true;
  modelToggle.textContent = "Show Model Answer";
  hitPoints.innerHTML = "";
  missedPoints.innerHTML = "";
  scoreLabel.textContent = `0 / ${item.marks}`;
  scoreMessage.textContent = "Write your answer, then mark it.";
  count.textContent = `${currentQuestion + 1} / ${filteredQuestions.length}`;
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getKeywords(point) {
  return normalize(point)
    .split(" ")
    .filter((word) => word.length > 4 && !stopWords.has(word))
    .slice(0, 7);
}

function pointIsHit(point, response) {
  const keywords = getKeywords(point);
  if (!keywords.length) {
    return normalize(response).includes(normalize(point));
  }
  const hitCount = keywords.filter((keyword) => response.includes(keyword)).length;
  const needed = keywords.length <= 2 ? 1 : 2;
  return hitCount >= needed;
}

function renderList(list, points, emptyText) {
  list.innerHTML = points.length
    ? points.map((point) => `<li>${point}</li>`).join("")
    : `<li>${emptyText}</li>`;
}

function markCurrentAnswer() {
  const item = filteredQuestions[currentQuestion];
  const response = normalize(studentAnswer.value);
  const hit = [];
  const missed = [];

  item.points.forEach((point) => {
    if (pointIsHit(point, response)) {
      hit.push(point);
    } else {
      missed.push(point);
    }
  });

  const rawScore = item.points.length ? hit.length / item.points.length : 0;
  const score = Math.round(rawScore * item.marks);
  scoreLabel.textContent = `${score} / ${item.marks}`;

  if (!studentAnswer.value.trim()) {
    scoreMessage.textContent = "No answer yet. Type something before marking.";
  } else if (score === item.marks) {
    scoreMessage.textContent = "Full marks by key-point scan. Compare with the model answer for wording.";
  } else if (score >= Math.ceil(item.marks * 0.65)) {
    scoreMessage.textContent = "Solid answer. Patch the missing points for safer MST marks.";
  } else {
    scoreMessage.textContent = "Some core points are missing. Use the missing list to rebuild your answer.";
  }

  renderList(hitPoints, hit, "No key points detected yet.");
  renderList(missedPoints, missed, "No missing key points detected.");
  markingResult.hidden = false;
}

modelToggle.addEventListener("click", () => {
  answer.hidden = !answer.hidden;
  modelToggle.textContent = answer.hidden ? "Show Model Answer" : "Hide Model Answer";
});

markAnswer.addEventListener("click", markCurrentAnswer);

resetAnswer.addEventListener("click", () => {
  studentAnswer.value = "";
  markingResult.hidden = true;
  answer.hidden = true;
  modelToggle.textContent = "Show Model Answer";
  scoreLabel.textContent = `0 / ${filteredQuestions[currentQuestion].marks}`;
  scoreMessage.textContent = "Write your answer, then mark it.";
});

controls.forEach((button) => {
  button.addEventListener("click", () => {
    const step = Number(button.dataset.step);
    currentQuestion = (currentQuestion + step + filteredQuestions.length) % filteredQuestions.length;
    renderQuestion();
  });
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((filterButton) => filterButton.classList.remove("active"));
    button.classList.add("active");
    filteredQuestions = filter === "all" ? [...questions] : questions.filter((item) => item.category === filter);
    currentQuestion = 0;
    renderQuestion();
  });
});

const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-img");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const zoomableImages = document.querySelectorAll(".figure-img, .note-image-panel img");

function getFigureCaption(image) {
  const figure = image.closest("figure");
  if (!figure) {
    return image.alt;
  }
  const caption = figure.querySelector("figcaption");
  return caption ? caption.textContent.replace(/\s+/g, " ").trim() : image.alt;
}

function openLightbox(image) {
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = getFigureCaption(image);
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("lightbox-open");
}

zoomableImages.forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `Zoom figure: ${image.alt}`);
  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

renderQuestion();
