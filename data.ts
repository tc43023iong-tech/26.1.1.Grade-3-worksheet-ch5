import { Question } from './types';

export const questions: Question[] = [
  // --- Part A: Vocabulary ---
  {
    id: 1,
    type: 'choice',
    category: "A. Vocabulary (生字)",
    questionText: "1. My dad buys me a new ______ so I’m so happy.",
    chineseText: "爸爸給我買了一部新____，所以我很開心。",
    options: [
      { id: 'a', text: "plan", isCorrect: false },
      { id: 'b', text: "phone", isCorrect: true },
      { id: 'c', text: "feed", isCorrect: false },
      { id: 'd', text: "pick", isCorrect: false },
      { id: 'e', text: "photos", isCorrect: false },
      { id: 'f', text: "vegetables", isCorrect: false },
    ]
  },
  {
    id: 2,
    type: 'choice',
    category: "A. Vocabulary (生字)",
    questionText: "2. Don’t _______ the horse in the farm.",
    chineseText: "不要在農場____馬。",
    options: [
      { id: 'a', text: "plan", isCorrect: false },
      { id: 'b', text: "phone", isCorrect: false },
      { id: 'c', text: "feed", isCorrect: true },
      { id: 'd', text: "pick", isCorrect: false },
      { id: 'e', text: "photos", isCorrect: false },
      { id: 'f', text: "vegetables", isCorrect: false },
    ]
  },
  {
    id: 3,
    type: 'choice',
    category: "A. Vocabulary (生字)",
    questionText: "3. Buy more _______ so you can be healthy!",
    chineseText: "買多點____，你就會健康！",
    options: [
      { id: 'a', text: "plan", isCorrect: false },
      { id: 'b', text: "phone", isCorrect: false },
      { id: 'c', text: "feed", isCorrect: false },
      { id: 'd', text: "pick", isCorrect: false },
      { id: 'e', text: "photos", isCorrect: false },
      { id: 'f', text: "vegetables", isCorrect: true },
    ]
  },
  {
    id: 4,
    type: 'choice',
    category: "A. Vocabulary (生字)",
    questionText: "4. My _____ is going to the beach this Monday.",
    chineseText: "我這個星期一的____是去海灘。",
    options: [
      { id: 'a', text: "plan", isCorrect: true },
      { id: 'b', text: "phone", isCorrect: false },
      { id: 'c', text: "feed", isCorrect: false },
      { id: 'd', text: "pick", isCorrect: false },
      { id: 'e', text: "photos", isCorrect: false },
      { id: 'f', text: "vegetables", isCorrect: false },
    ]
  },
  {
    id: 5,
    type: 'choice',
    category: "A. Vocabulary (生字)",
    questionText: "5. We take some _____ in the garden.",
    chineseText: "我們在花園拍了一些____。",
    options: [
      { id: 'a', text: "plan", isCorrect: false },
      { id: 'b', text: "phone", isCorrect: false },
      { id: 'c', text: "feed", isCorrect: false },
      { id: 'd', text: "pick", isCorrect: false },
      { id: 'e', text: "photos", isCorrect: true },
      { id: 'f', text: "vegetables", isCorrect: false },
    ]
  },

  // --- Part B: Finish Sentences ---
  // Changed double blanks to single blank for better UI replacement
  {
    id: 6,
    type: 'choice',
    category: "B. Finish Sentences (完成句子)",
    questionText: "1. I ______ vegetables in the farm.",
    chineseText: "我想要在農場種植蔬菜。",
    options: [
      { id: 'a', text: "want to plant", isCorrect: true },
      { id: 'b', text: "wants to plant", isCorrect: false },
      { id: 'c', text: "want planting", isCorrect: false },
      { id: 'd', text: "wants plant", isCorrect: false },
    ]
  },
  {
    id: 7,
    type: 'choice',
    category: "B. Finish Sentences (完成句子)",
    questionText: "2. Sam ______ a big sandcastle at the beach.",
    chineseText: "Sam 想要在海灘堆一個大沙堡。",
    options: [
      { id: 'a', text: "want to build", isCorrect: false },
      { id: 'b', text: "wants to build", isCorrect: true },
      { id: 'c', text: "want build", isCorrect: false },
      { id: 'd', text: "wants building", isCorrect: false },
    ]
  },
  {
    id: 8,
    type: 'choice',
    category: "B. Finish Sentences (完成句子)",
    questionText: "3. Tom and Cindy ______ swimming in summer.",
    chineseText: "Tom 和 Cindy 想要在夏天去游泳。",
    options: [
      { id: 'a', text: "wants to go", isCorrect: false },
      { id: 'b', text: "want to going", isCorrect: false },
      { id: 'c', text: "want to go", isCorrect: true },
      { id: 'd', text: "wants go", isCorrect: false },
    ]
  },
  {
    id: 9,
    type: 'choice',
    category: "B. Finish Sentences (完成句子)",
    questionText: "4. We ______ a horse this Sunday.",
    chineseText: "我們想要在這個星期日騎馬。",
    options: [
      { id: 'a', text: "want to ride", isCorrect: true },
      { id: 'b', text: "wants to ride", isCorrect: false },
      { id: 'c', text: "want ride", isCorrect: false },
      { id: 'd', text: "riding", isCorrect: false },
    ]
  },
  {
    id: 10,
    type: 'choice',
    category: "B. Finish Sentences (完成句子)",
    questionText: "5. ( Do / Does ) you ______ animals?",
    chineseText: "你想要餵動物嗎？",
    options: [
      { id: 'a', text: "Do ... want to feed", isCorrect: true },
      { id: 'b', text: "Does ... want to feed", isCorrect: false },
      { id: 'c', text: "Do ... wants to feed", isCorrect: false },
      { id: 'd', text: "Does ... want feeding", isCorrect: false },
    ]
  },
  {
    id: 11,
    type: 'choice',
    category: "B. Finish Sentences (完成句子)",
    questionText: "6. ( Do / Does ) he ______ at shells?",
    chineseText: "他想要看貝殼嗎？",
    options: [
      { id: 'a', text: "Do ... want to look", isCorrect: false },
      { id: 'b', text: "Does ... want to look", isCorrect: true },
      { id: 'c', text: "Does ... wants to look", isCorrect: false },
      { id: 'd', text: "Is ... want to look", isCorrect: false },
    ]
  },

  // --- Part C: Rearrange ---
  {
    id: 12,
    type: 'reorder',
    category: "C. Rearrange (重組句子)",
    questionText: "1. the / beach / . / We / go / to / want / to",
    chineseText: "我們想去海灘。",
    correctAnswer: "We want to go to the beach.",
    words: ["the", "beach", ".", "We", "go", "to", "want", "to"]
  },
  {
    id: 13,
    type: 'reorder',
    category: "C. Rearrange (重組句子)",
    questionText: "2. pick / fruit / Next / , / wants / to / she / .",
    chineseText: "接著，她想摘水果。",
    correctAnswer: "Next, she wants to pick fruit.",
    words: ["pick", "fruit", "Next", ",", "wants", "to", "she", "."]
  },
  {
    id: 14,
    type: 'reorder',
    category: "C. Rearrange (重組句子)",
    questionText: "3. wants / to / Then / go / swimming / , / Ken / .",
    chineseText: "然後，Ken想去游泳。",
    correctAnswer: "Then, Ken wants to go swimming.",
    words: ["wants", "to", "Then", "go", "swimming", ",", "Ken", "."]
  },

  // --- Part D: Translation ---
  {
    id: 15,
    type: 'choice',
    category: "D. Translate (翻譯)",
    questionText: "1. First, I want to go to the beach.",
    chineseText: "選擇正確的中文翻譯",
    options: [
      { id: 'a', text: "首先，我想去公園。", isCorrect: false },
      { id: 'b', text: "接著，我想去海灘。", isCorrect: false },
      { id: 'c', text: "首先，我想去海灘。", isCorrect: true },
    ]
  },
  {
    id: 16,
    type: 'choice',
    category: "D. Translate (翻譯)",
    questionText: "2. Next, I want to play football.",
    chineseText: "選擇正確的中文翻譯",
    options: [
      { id: 'a', text: "接著，我想踢足球。", isCorrect: true },
      { id: 'b', text: "首先，我想踢足球。", isCorrect: false },
      { id: 'c', text: "接著，我想打籃球。", isCorrect: false },
    ]
  },
  {
    id: 17,
    type: 'choice',
    category: "D. Translate (翻譯)",
    questionText: "3. 首先，我想騎馬。然後，我想餵飼動物。",
    chineseText: "選擇正確的英文翻譯",
    options: [
      { id: 'a', text: "First, I want to ride a horse. Then, I want to feed animals.", isCorrect: true },
      { id: 'b', text: "First, I want to feed animals. Then, I want to ride a horse.", isCorrect: false },
      { id: 'c', text: "Next, I want to ride a horse. First, I want to feed animals.", isCorrect: false },
    ]
  },
  {
    id: 18,
    type: 'choice',
    category: "D. Translate (翻譯)",
    questionText: "4. 我想和媽媽摘水果。",
    chineseText: "選擇正確的英文翻譯",
    options: [
      { id: 'a', text: "I want to pick fruit with my dad.", isCorrect: false },
      { id: 'b', text: "I want to feed animals with my mum.", isCorrect: false },
      { id: 'c', text: "I want to pick fruit with my mum.", isCorrect: true },
    ]
  },

  // --- Part E: Do/Does/Don't/Doesn't ---
  {
    id: 19,
    type: 'choice',
    category: "E. Fill in (Do / Does / Don't / Doesn't)",
    questionText: "Lily: Hi Tom! ______ you often play basketball after school?",
    chineseText: "Lily: 嗨 Tom! 你經常放學後打籃球嗎？",
    options: [
      { id: 'a', text: "Does", isCorrect: false },
      { id: 'b', text: "Do", isCorrect: true },
      { id: 'c', text: "Don't", isCorrect: false },
      { id: 'd', text: "Doesn't", isCorrect: false },
    ]
  },
  {
    id: 20,
    type: 'choice',
    category: "E. Fill in (Do / Does / Don't / Doesn't)",
    questionText: "Tom: No, I ______. I like playing football better.",
    chineseText: "Tom: 不，我不打。我比較喜歡踢足球。",
    options: [
      { id: 'a', text: "don't", isCorrect: true },
      { id: 'b', text: "doesn't", isCorrect: false },
      { id: 'c', text: "do", isCorrect: false },
      { id: 'd', text: "does", isCorrect: false },
    ]
  },
  {
    id: 21,
    type: 'choice',
    category: "E. Fill in (Do / Does / Don't / Doesn't)",
    questionText: "Lily: Oh, really? ______ your brother like football too?",
    chineseText: "Lily: 噢，真的？你的弟弟也喜歡足球嗎？",
    options: [
      { id: 'a', text: "Do", isCorrect: false },
      { id: 'b', text: "Does", isCorrect: true },
      { id: 'c', text: "Don't", isCorrect: false },
      { id: 'd', text: "Doesn't", isCorrect: false },
    ]
  },
  {
    id: 22,
    type: 'choice',
    category: "E. Fill in (Do / Does / Don't / Doesn't)",
    questionText: "Tom: Yes, he ______. We often play together on Sundays.",
    chineseText: "Tom: 是的，他喜歡。我們經常星期天一起玩。",
    options: [
      { id: 'a', text: "do", isCorrect: false },
      { id: 'b', text: "does", isCorrect: true },
      { id: 'c', text: "don't", isCorrect: false },
      { id: 'd', text: "doesn't", isCorrect: false },
    ]
  },
  {
    id: 23,
    type: 'choice',
    category: "E. Fill in (Do / Does / Don't / Doesn't)",
    questionText: "Lily: ______ your sister play sports with you?",
    chineseText: "Lily: 你的妹妹和你一起做運動嗎？",
    options: [
      { id: 'a', text: "Do", isCorrect: false },
      { id: 'b', text: "Does", isCorrect: true },
      { id: 'c', text: "Don't", isCorrect: false },
      { id: 'd', text: "Doesn't", isCorrect: false },
    ]
  },
  {
    id: 24,
    type: 'choice',
    category: "E. Fill in (Do / Does / Don't / Doesn't)",
    questionText: "Tom: No, she ______. She ______ like sports.",
    chineseText: "Tom: 不，她沒有。她不喜歡運動。",
    options: [
      { id: 'a', text: "doesn't ... doesn't", isCorrect: true },
      { id: 'b', text: "don't ... don't", isCorrect: false },
      { id: 'c', text: "doesn't ... don't", isCorrect: false },
      { id: 'd', text: "don't ... doesn't", isCorrect: false },
    ]
  },
];
