export const reviews = [
  {
    image: "/pre.png",
    content: "The tastiest and most energetic pre-workout I've come across",
    author: "Jayme S.",
  },
  {
    image: "/whey.png",
    content:
      "This whey protein is amazing! It mixes easily and tastes delicious",
    author: "Erika A.",
  },
  {
    image: "/sleep-support.png",
    content:
      "Helps me fall asleep faster and stay asleep all night without feeling groggy in the morning. Highly recommend",
    author: "Brad S.",
  },
  {
    image: "/fish-oil.png",
    content:
      "I love the standards of the product, especially with knowing how dodgy the vitamin market can be",
    author: "Luke N.",
  },
];

export const products = [
  {
    name: "ISO-M7",
    description: "Pure whey isolate protein powder",
    longDescription:
      "Iso-M7 is a premium grade grass-fed whey isolate that is 100% naturally sweetened and flavored and antibiotic/hormone free. It contains just 5 ingredients (no added sugar) and delivers 24 grams of complete protein per scoop with 11.4g EAA's and 5.3g BCAA's to support muscle recovery and growth. When it comes to a clean, and effective and convenient protein powder for your diet, it simply doesn't get better than this.",
    price: 47.99,
    starCount: 5,
    image: "/whey.png",
  },
  {
    name: "PUREFORM",
    description: "Science-based pre-workout",
    longDescription:
      "PureForm provides a clean, simple, high quality blend of 5 research proven ingredients in their proper clinical dosages to maximize muscular strength, energy and mental focus during workouts. No proprietary blends, hidden fillers, heavy stimulants or artificial sweeteners/flavors. Just the core pre-workout ingredients that truly work, and in the right amounts. Period.",
    price: 34.99,
    starCount: 5,
    image: "/pre.png",
  },
  {
    name: "TRU-REM",
    description: "All natural sleep support",
    longDescription:
      "Tru REM is a research supported blend of natural, non-habit forming ingredients that will help you fall asleep faster, sleep more deeply and wake up feeling rested and restored. High quality sleep is a hugely underrated component of an effective fitness plan and plays a critical role in optimizing muscle growth, fat loss, strength gain and allowing you to perform at your maximum potential both in and out of the gym.",
    price: 39.99,
    starCount: 5,
    image: "/sleep-support.png",
  },
  {
    name: "CRE-ELITE",
    description: "Muscle growth & recovery formula",
    longDescription:
      "Cre-Elite is a creatine-based formula providing a full clinical dose of three research supported ingredients that increase lean body mass and strength, improve recovery in between workouts and reduce muscle soreness. No useless fillers, proprietary blends or artificial sweeteners/flavors. Just a concentrated dose of effective natural compounds that will help you train harder, recuperate faster and make more efficient gains, period.",
    price: 39.99,
    starCount: 5,
    image: "/cre-elite.png",
  },
  {
    name: "MICROCORE",
    description: "High perfomance multivitamin",
    longDescription:
      "Microcore is a science-based vitamin/mineral complex providing the key micronutrients hard-training lifters need for optimal health and performance. Rather than delivering an endless list of cheap, under-dosed and often unnecessary ingredients like most traditional multis do, Microcore focuses on the highest quality forms and proper doses of only the select vitamins and minerals you truly require.",
    price: 27.99,
    starCount: 5,
    image: "/microcore.png",
  },
  {
    name: "O3-PRIME",
    description: "100% re-esterified triglyceride fish oil",
    longDescription:
      "O3 Prime delivers a leading quality source of bio-available, high potency fish oil in the reesterified triglyceride form. Sustainably sourced from deepwater anchovy and processed using enhanced molecular distillation for optimal purity. High EPA/DHA concentration (565mg per gram of oil), and coated with natural lemon flavoring to enhance taste and prevent unwanted “fish burps”.",
    price: 34.99,
    starCount: 5,
    image: "/o3-prime.png",
  },
  {
    name: "PURE-CREATINE",
    description: "Ultra filtered 200 mesh monohydrate",
    longDescription:
      "Pure Creatine delivers a premium quality source of ultra-filtered creatine monohydrate in 200 mesh form, providing a 2.4x smaller particle size for improved consistency and dissolvability. We guarantee this will be the smoothest and easiest mixing creatine product you've ever tried, or your money back.",
    price: 37.99,
    starCount: 5,
    image: "/pure-creatine.png",
  },
];

export const stacks = [
  {
    name: "TRANSFORMATION",
    saving: 10,
    price: 185.95,
    image: "/transformation-stack.png",
    longDescription:
      "The Transformation Stack is our most complete supplement combo to fully optimize muscle gain, fat loss, training performance, recovery and overall health: Iso-M7™ (whey protein powder), Microcore™ (high potency multivitamin), O3 Prime™ (premium grade fish oil), Cre-Elite™ (muscle growth & recovery blend) and PureForm™ (pre-workout formula).",
    map: <map name={"transformation"}></map>,
  },
  {
    name: "FUNDAMENTALS",
    saving: 10,
    price: 113.97,
    image: "/fundamentals-stack.png",
    longDescription:
      "The fundamentals stack contains three supplements for those who want to include only the most essential items in their program: Iso-M7™ (whey protein powder), Microcore™ (high potency multivitamin), Pure Creatine™ (creatine monohydrate).",
    map: (
      <map name={"fundamentals"}>
        <area
          target="_blank"
          alt="pure-creatine"
          title="pure-creatine"
          href={`/products/pure-creatine`}
          coords="4,128,4,317,17,332,25,335,118,339,120,216,125,208,133,204,133,193,127,186,127,166,143,163,160,163,172,163,172,125,136,119,84,119,40,121"
          shape="poly"
        />
        <area
          target="_blank"
          alt="microcore"
          title="microcore"
          href="/products/microcore"
          coords="119,358,121,216,127,207,134,203,133,194,128,185,128,166,170,164,213,167,213,187,209,193,208,205,216,209,221,216,222,234,222,344,220,360,208,366,190,368,169,369,150,370,133,367"
          shape="poly"
        />
        <area
          target="_blank"
          alt="iso-m7"
          title="iso-m7"
          href="/product/iso-m7"
          coords="173,162,174,82,185,56,202,41,195,35,196,7,244,2,290,1,331,3,358,8,359,31,353,41,363,52,376,70,381,88,379,304,374,329,362,339,328,344,276,348,241,347,223,343,224,215,208,203,217,189,215,164"
          shape="poly"
        />
      </map>
    ),
  },

  {
    name: "MUSCLE-GAIN",
    saving: 10,
    price: 122.97,
    image: "/muscle-gain-stack.png",
    longDescription:
      "The Muscle Gain Stack contains three supplements that are specifically geared toward maximizing muscle hypetrophy, strength gain and lifting performance: Iso-M7™ (whey protein powder), Cre-Elite™ (muscle growth & recovery blend) and PureForm™ (pre-workout formula).",
    map: <map name={"muscle-gain"}></map>,
  },

  {
    name: "RECOVERY",
    saving: 10,
    price: 102.97,
    image: "/recovery-stack.png",
    longDescription:
      "The Recovery Stack contains three supplements that will help you recuperate more effectively in between training sessions so that you can perform at your very best both in and out of the gym: Microcore™ (high potency multivitamin), O3 Prime™ (premium grade fish oil) and TruREM™ (natural sleep aid).",
    map: <map name={"recovery"}></map>,
  },
];

// types
export type Review = (typeof reviews)[0];
export type Product = (typeof products)[0];
export type Stack = (typeof stacks)[0];
