const quizDataBase = [
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
  correct_answer: "Simien Jackel",
  incorrect_answers: [
  "Ethiopian Coyote",
  "Amharic Fox",
  "Canis Simiensis"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What does hippopotamus mean and in what language?",
  correct_answer: "River Horse (Greek)",
  incorrect_answers: [
  "River Horse (Latin)",
  "Fat Pig (Greek)",
  "Fat Pig (Latin)"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "A carnivorous animal eats flesh, what does a nucivorous animal eat?",
  correct_answer: "Nuts",
  incorrect_answers: [
  "Nothing",
  "Fruit",
  "Seaweed"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What type of animal is a natterjack?",
  correct_answer: "Toad",
  incorrect_answers: [
  "Bird",
  "Fish",
  "Insect"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the fastest land animal?",
  correct_answer: "Cheetah",
  incorrect_answers: [
  "Lion",
  "Thomson's Gazelle",
  "Pronghorn Antelope"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the scientific name for modern day humans?",
  correct_answer: "Homo Sapiens",
  incorrect_answers: [
  "Homo Ergaster",
  "Homo Erectus",
  "Homo Neanderthalensis"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
  correct_answer: "New Zealand",
  incorrect_answers: [
  "South Africa",
  "Australia",
  "Madagascar"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What color/colour is a polar bear's skin?",
  correct_answer: "Black",
  incorrect_answers: [
  "White",
  "Pink",
  "Green"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "Hippocampus is the Latin name for which marine creature?",
  correct_answer: "Seahorse",
  incorrect_answers: [
  "Dolphin",
  "Whale",
  "Octopus"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "Cashmere is the wool from which kind of animal?",
  correct_answer: "Goat",
  incorrect_answers: [
  "Sheep",
  "Camel",
  "Llama"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the scientific name for the Polar Bear?",
  correct_answer: "Ursus Maritimus",
  incorrect_answers: [
  "Polar Bear",
  "Ursus Spelaeus",
  "Ursus Arctos"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What are rhino's horn made of?",
  correct_answer: "Keratin",
  incorrect_answers: [
  "Bone",
  "Ivory",
  "Skin"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "How many legs do butterflies have?",
  correct_answer: "6",
  incorrect_answers: [
  "2",
  "4",
  "0"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What scientific suborder does the family Hyaenidae belong to?",
  correct_answer: "Feliformia",
  incorrect_answers: [
  "Haplorhini",
  "Caniformia",
  "Ciconiiformes"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "How many known living species of hyenas are there?",
  correct_answer: "4",
  incorrect_answers: [
  "8",
  "2",
  "6"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What scientific family does the Aardwolf belong to?",
  correct_answer: "Hyaenidae",
  incorrect_answers: [
  "Canidae",
  "Felidae",
  "Eupleridae"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "For what reason would a spotted hyena laugh?",
  correct_answer: "Nervousness",
  incorrect_answers: [
  "Excitement",
  "Aggression",
  "Exhaustion"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What do you call a baby bat?",
  correct_answer: "Pup",
  incorrect_answers: [
  "Cub",
  "Chick",
  "Kid"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What is the scientific name of the cheetah?",
  correct_answer: "Acinonyx jubatus",
  incorrect_answers: [
  "Panthera onca",
  "Lynx rufus",
  "Felis catus"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What is the scientific name of the Budgerigar?",
  correct_answer: "Melopsittacus undulatus",
  incorrect_answers: [
  "Nymphicus hollandicus",
  "Pyrrhura molinae",
  "Ara macao"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "Which animal was part of an Russian domestication experiment in 1959?",
  correct_answer: "Foxes",
  incorrect_answers: [
  "Pigeons",
  "Bears",
  "Alligators"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "The now extinct species Thylacine was native to where?",
  correct_answer: "Tasmania, Australia",
  incorrect_answers: [
  "Baluchistan, Pakistan",
  "Wallachia, Romania",
  "Oregon, United States"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What is the Gray Wolf's scientific name?",
  correct_answer: "Canis Lupus",
  incorrect_answers: [
  "Canis Aureus",
  "Canis Latrans",
  "Canis Lupus Lycaon"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "Which of these animals is NOT a lizard?",
  correct_answer: "Tuatara",
  incorrect_answers: [
  "Komodo Dragon",
  "Gila Monster",
  "Green Iguana"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is Grumpy Cat's real name?",
  correct_answer: "Tardar Sauce",
  incorrect_answers: [
  "Sauce",
  "Minnie",
  "Broccoli"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What type of creature is a Bonobo?",
  correct_answer: "Ape",
  incorrect_answers: [
  "Lion",
  "Parrot",
  "Wildcat"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "Which of these species is not extinct?",
  correct_answer: "Komodo dragon",
  incorrect_answers: [
  "Japanese sea lion",
  "Tasmanian tiger",
  "Saudi gazelle"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "Which class of animals are newts members of?",
  correct_answer: "Amphibian",
  incorrect_answers: [
  "Fish",
  "Reptiles",
  "Mammals"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "Unlike on most salamanders, this part of a newt is flat?",
  correct_answer: "Tail",
  incorrect_answers: [
  "Head",
  "Teeth",
  "Feet"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the name of the family that the domestic cat is a member of?",
  correct_answer: "Felidae",
  incorrect_answers: [
  "Felinae",
  "Felis",
  "Cat"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What dog bread is one of the oldest breeds of dog and has flourished since before 400 BCE.",
  correct_answer: "Pugs",
  incorrect_answers: [
  "Bulldogs",
  "Boxers",
  "Chihuahua"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?",
  correct_answer: "Hemocyanin",
  incorrect_answers: [
  "Cytochrome",
  "Iron",
  "Methionine"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "Which species is a mountain chicken?",
  correct_answer: "Frog",
  incorrect_answers: [
  "Chicken",
  "Horse",
  "Fly"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "The dish Fugu, is made from what family of fish?",
  correct_answer: "Pufferfish",
  incorrect_answers: [
  "Bass",
  "Salmon",
  "Mackerel"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the collective noun for a group of crows?",
  correct_answer: "Murder",
  incorrect_answers: [
  "Pack",
  "Gaggle",
  "Herd"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "Which of the following is another name for the Poecilotheria Metallica Tarantula?",
  correct_answer: "Gooty",
  incorrect_answers: [
  "Hopper",
  "Silver Stripe",
  "Woebegone"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the scientific name of the Common Chimpanzee?",
  correct_answer: "Pan troglodytes",
  incorrect_answers: [
  "Gorilla gorilla",
  "Pan paniscus",
  "Panthera leo"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "By definition, where does an abyssopelagic animal live?",
  correct_answer: "At the bottom of the ocean",
  incorrect_answers: [
  "In the desert",
  "On top of a mountain",
  "Inside a tree"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "Which of these is a colony of polyps and not a jellyfish?",
  correct_answer: "Portuguese Man-of-War",
  incorrect_answers: [
  "Sea Wasp",
  "Irukandji",
  "Sea Nettle"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What colour is the female blackbird?",
  correct_answer: "Brown",
  incorrect_answers: [
  "Black",
  "White",
  "Yellow"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the common term for bovine spongiform encephalopathy (BSE)?",
  correct_answer: "Mad Cow disease",
  incorrect_answers: [
  "Weil's disease",
  "Milk fever",
  "Foot-and-mouth disease"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the name for a male bee that comes from an unfertilized egg?",
  correct_answer: "Drone",
  incorrect_answers: [
  "Soldier",
  "Worker",
  "Male"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "easy",
  question: "What is the name of a rabbit's abode?",
  correct_answer: "Burrow",
  incorrect_answers: [
  "Nest",
  "Den",
  "Dray"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the collective noun for bears?",
  correct_answer: "Sloth",
  incorrect_answers: [
  "Drove",
  "Tribe",
  "Husk"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the collective noun for rats?",
  correct_answer: "Mischief",
  incorrect_answers: [
  "Pack",
  "Race",
  "Drift"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What is the collective noun for vultures?",
  correct_answer: "Wake",
  incorrect_answers: [
  "Ambush",
  "Building",
  "Gaze"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "What bird is born with claws on its wing digits?",
  correct_answer: "Hoatzin",
  incorrect_answers: [
  "Cormorant",
  "Cassowary",
  "Secretary bird"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "Decapods are an order of ten-footed crustaceans. Which of these are NOT decapods?",
  correct_answer: "Krill",
  incorrect_answers: [
  "Lobsters",
  "Shrimp",
  "Crabs"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "hard",
  question: "To which biological phylum do all mammals, birds and reptiles belong?",
  correct_answer: "Chordata",
  incorrect_answers: [
  "Echinodermata",
  "Annelida",
  "Placazoa"
  ]
  },
  {
  category: "Animals",
  type: "multiple",
  difficulty: "medium",
  question: "What is the world's longest venomous snake?",
  correct_answer: "King Cobra",
  incorrect_answers: [
  "Green Anaconda",
  "Inland Taipan",
  "Yellow Bellied Sea Snake"
  ]
  }
  ]

export const refactoredDataBase = quizDataBase.map((question, index) => {
  return {
    question: question.question,
    answers: [...question.incorrect_answers, question.correct_answer].sort(
      () => 0.5 - Math.random()
    ),
    correct: question.correct_answer,
    questionId: index,
  };
});
