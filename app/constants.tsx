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
    map: (
      <map name="transformation">
        <area
          target="_blank"
          alt="o3-prime"
          title="o3-prime"
          href="/products/o3-prime"
          coords="3,177,3,102,14,97,12,87,11,79,26,77,36,78,47,79,47,90,47,95,47,100,47,173,50,183,28,184,12,183"
          shape="poly"
        />
        <area
          target="_blank"
          alt="cre-elite"
          title="cre-elite"
          href="/products/cre-elite"
          coords="49,70,48,172,56,189,75,192,101,192,130,191,129,84,128,65,85,64,66,66"
          shape="poly"
        />
        <area
          target="_blank"
          alt="iso-m7"
          title="iso-m7"
          href="/products/iso-m7"
          coords="131,191,131,51,140,33,148,25,144,20,145,5,173,1,206,2,232,3,245,5,246,19,241,25,251,35,258,46,260,56,259,189,256,205,243,213,214,216,178,216,148,212,135,206"
          shape="poly"
        />
        <area
          target="_blank"
          alt="pureform"
          title="pureform"
          href="/products/pureform"
          coords="261,66,297,65,324,67,340,70,339,179,330,190,303,192,266,192,259,188"
          shape="poly"
        />
        <area
          target="_blank"
          alt="microcore"
          title="microcore"
          href="/products/microcore"
          coords="340,83,376,84,376,94,372,101,379,108,380,175,372,184,341,182"
          shape="poly"
        />
      </map>
    ),
  },
  {
    name: "FUNDAMENTALS",
    saving: 10,
    price: 113.97,
    image: "/fundamentals-stack.png",
    longDescription:
      "The fundamentals stack contains three supplements for those who want to include only the most essential items in their program: Iso-M7™ (whey protein powder), Microcore™ (high potency multivitamin), Pure Creatine™ (creatine monohydrate).",
    map: (
      <map name="fundamentals">
        <area
          target="_blank"
          alt="pure-creatine"
          title="pure-creatine"
          href="/products/pure-creatine"
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
    map: (
      <map name="muscle-gain">
        <area
          target="_blank"
          alt="cre-elite"
          title="cre-elite"
          href="/products/cre-elite"
          coords="3,93,2,234,14,247,50,253,98,253,112,251,111,88,46,86"
          shape="poly"
        />
        <area
          target="_blank"
          alt="iso-m7"
          title="iso-m7"
          href="/products/iso-m7"
          coords="113,247,113,66,124,42,135,33,132,26,129,7,149,2,181,2,216,2,239,4,259,5,259,27,255,31,263,42,275,57,277,71,277,242,272,266,250,274,211,280,168,278,135,272,119,265"
          shape="poly"
        />
        <area
          target="_blank"
          alt="pureform"
          title="pureform"
          href="/products/pureform"
          coords="280,87,325,87,366,90,379,94,380,122,379,235,369,248,329,253,291,254,276,251"
          shape="poly"
        />
      </map>
    ),
  },

  {
    name: "RECOVERY",
    saving: 10,
    price: 102.97,
    image: "/recovery-stack.png",
    longDescription:
      "The Recovery Stack contains three supplements that will help you recuperate more effectively in between training sessions so that you can perform at your very best both in and out of the gym: Microcore™ (high potency multivitamin), O3 Prime™ (premium grade fish oil) and TruREM™ (natural sleep aid).",
    map: (
      <map name="recovery">
        <area
          target="_blank"
          alt="microcore"
          title="microcore"
          href="/products/microcore"
          coords="3,235,4,74,18,63,19,49,15,44,13,20,57,16,98,17,112,19,112,43,106,46,105,60,117,68,123,80,121,219,119,239,102,244,67,247,25,245"
          shape="poly"
        />
        <area
          target="_blank"
          alt="tru-rem"
          title="tru-rem"
          href="/products/tru-rem"
          coords="109,62,112,41,143,35,191,32,236,34,264,40,265,46,256,56,251,65,252,226,225,227,176,231,136,228,120,221,123,74"
          shape="poly"
        />
        <area
          target="_blank"
          alt="o3-prime"
          title="o3-prime"
          href="/products/o3-prime"
          coords="255,222,255,64,262,51,279,45,280,31,274,26,275,5,318,3,360,5,361,29,355,31,356,44,375,52,380,62,379,231,368,242,342,246,306,247,279,245,259,239"
          shape="poly"
        />
      </map>
    ),
  },
];

// types
export type Review = (typeof reviews)[0];
export type Product = (typeof products)[0];
export type Stack = (typeof stacks)[0];
