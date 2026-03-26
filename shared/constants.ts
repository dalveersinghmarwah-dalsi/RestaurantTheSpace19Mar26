// CDN Assets
export const ASSETS = {
  logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/NM2PPmxQAC9wMDr4g3eSwj/the_space_logo_90744dd2.webp',
  heroBg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/NM2PPmxQAC9wMDr4g3eSwj/hero_bg_117aa923.webp',
  theSpaceMain: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/NM2PPmxQAC9wMDr4g3eSwj/the_space_main_375ceefa.webp',
  theSpaceBelowMain: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/NM2PPmxQAC9wMDr4g3eSwj/the_space_below_main_caffe02b.webp',
  happeningsHeroBg: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/NM2PPmxQAC9wMDr4g3eSwj/happenings_hero_bg_18dbfef9.webp',
  whatsIncludedHeroBg: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663457170221/hTxZcErRVTsbUdcD.jpg',
  pricingHeroBg: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663457170221/XbySExLMTvoDWFbJ.jpg',
  addOnsHeroBg: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663457170221/YctNATaEhyKsSKqG.jpg',
  resourcesHeroBg: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663457170221/RVUkpnZCtCpYaiCf.jpg',
  contactHeroBg: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663457170221/cVGcUMNrfcZQQkEv.jpg',
};

// Venue Information
export const VENUE_INFO = {
  name: 'The Space',
  address: '38 High St., Westerly, RI 02891',
  phone: '(401) 439-3782',
  email: 'hello@reservethespace.com',
  social: {
    instagram: 'https://instagram.com/reservethespace',
    facebook: 'https://facebook.com/reservethespace',
    linkedin: 'https://linkedin.com/company/reservethespace',
  },
};

// Pricing Data
export const PRICING = {
  theSpace: {
    weekend: {
      rate: 175,
      dayRate: 1200,
      dayHours: 10,
    },
    friday: {
      rate: 150,
      dayRate: 1000,
      dayHours: 10,
    },
    weekdayAfter5pm: {
      rate: 75,
    },
    weekdayBefore5pm: {
      rate: 50,
    },
    minimums: {
      fri_sat_sun: 4,
      mon_thurs: 2,
    },
  },
  theSpaceBelow: {
    weekend: {
      rate: 150,
      dayRate: 1000,
      dayHours: 10,
    },
    friday: {
      rate: 125,
      dayRate: 800,
      dayHours: 10,
    },
    weekdayAfter5pm: {
      rate: 75,
    },
    weekdayBefore5pm: {
      rate: 50,
    },
    minimums: {
      fri_sat_sun: 4,
      mon_thurs: 2,
    },
    discount: '25% off when rented with The Space',
  },
};

// Venue Capacity
export const CAPACITY = {
  theSpace: {
    standing: '60-70 guests',
    seated: '40 guests',
    description: 'Bright, open, and adaptable',
  },
  theSpaceBelow: {
    standing: '40 guests',
    seated: '30 guests',
    description: 'A warm, speakeasy-inspired setting',
  },
};

// What's Included
export const WHATS_INCLUDED = {
  theSpace: {
    furniture: [
      'Six-Foot Folding Tables (4)',
      'Padded Folding Chairs (30)',
      'Pub Tables (4)',
      'Bar Height Stools (12)',
      'Convertible Table',
      'Couch',
      'Arm Chairs (2)',
    ],
    amenities: [
      'Riverside Patio',
      'Kitchenette',
      'Refrigerator',
      'Bathroom',
      'Video Projector',
      'Multiple Lighting Scenarios',
      'Soundsystem',
      'WIFI',
    ],
  },
  theSpaceBelow: {
    furniture: [
      'Love Seats (2)',
      'Arm Chairs (4)',
      'Bar Height Stools (9)',
      'Round Wooden Table',
      'Dining Chairs (4)',
      'Coffee Tables',
      'Side Tables',
      'Ottomans',
    ],
    amenities: [
      'Riverside Patio',
      'Kitchenette',
      'Refrigerator',
      'Bathroom',
      'Multiple Lighting Scenarios',
      'Soundsystem',
      'WIFI',
    ],
  },
};

// Add-ons
export const ADDONS = {
  services: [
    {
      name: 'Stress Free Clean Up',
      price: 100,
      description: 'Party on! You handle the basics, we\'ll tackle the rest of the cleanup.',
    },
    {
      name: 'Stress Free Set Up',
      price: 75,
      description: 'Skip the setup - we\'ve got it covered',
    },
  ],
  decor: [
    {
      name: 'Drink Buckets',
      price: 25,
      description: '2 Six Gallon Tin Drink Buckets',
    },
    {
      name: 'Decorative Glass Vessels With Pampas',
      price: 50,
      description: '3 Large Vessels (no pampas), 12 Medium Vessels w/Pampas',
    },
    {
      name: 'Wood Rounds',
      price: 25,
      description: '18 Large & 6 Small - Simple, versatile, and photo ready',
    },
    {
      name: 'Draping Fabric',
      price: 50,
      description: 'Champagne-white drape with decorative bows',
    },
    {
      name: 'Floral Chandelier',
      price: 50,
      description: 'A hanging statement piece that brings warmth and beauty',
    },
    {
      name: 'Floral Hoop',
      price: 50,
      description: 'This backdrop makes every memory blossom',
    },
    {
      name: 'Gold Hoop',
      price: 50,
      description: 'A backdrop that makes every memory golden!',
    },
    {
      name: 'Balloon Arch',
      price: 200,
      description: '6\' Wide x 4\' High - Adds instant joy and color',
    },
    {
      name: 'Letter Blocks with Balloons',
      price: 75,
      description: 'Set of 6 display boxes with your choice of balloon colors',
    },
    {
      name: 'Clothes and Gift Rack with Hangers',
      price: 50,
      description: 'Wooden standing rack with decorative vines',
    },
  ],
  furniture: [
    {
      name: 'Folding Tables',
      price: 10,
      description: 'Add up to 2 more 6\' and 4\' folding tables',
    },
    {
      name: 'Folding Chairs - Padded',
      price: 3,
      description: 'Add up to 10 more padded folding chairs',
    },
    {
      name: 'Kids Table & Chairs',
      price: null,
      description: 'A special spot just for kids',
    },
  ],
  packages: [
    {
      name: 'Farmhouse Chic Package',
      price: 125,
      description: 'Rustic charm with a modern polish. Natural wood accents and soft neutral tones',
    },
    {
      name: 'Floral Package',
      price: 100,
      description: 'Greenery, floral garlands, blooming flowers, vines, and a decorative wreath',
    },
  ],
};

// FAQ Data
export const FAQ_DATA = [
  {
    category: 'ALCOHOL',
    items: [
      {
        question: 'Is alcohol allowed at The Space?',
        answer: 'Alcohol is allowed at The Space. A $50 alcohol service fee applies if alcohol is served. All alcohol service must comply with local and state regulations and the terms of our event contract. For private events, hosts and guests may bring their own alcohol (BYOB). If alcohol is sold or charged for, a TIPS-certified bartender and required permits are needed. For events open to the public, a one-day Class F-1 permit from the Town of Westerly is required and alcohol must be served by a TIPS-certified bartender.',
      },
    ],
  },
  {
    category: 'DECORATING',
    items: [
      {
        question: 'Can I decorate The Space?',
        answer: 'Yes - make The Space your Space! We encourage you to bring your personal touch to your event. Please keep in mind the following guidelines: No taping, command strips, or adhesives on walls. A gallery chain area is available for hanging, and strong magnetic hooks can also be used on the metal frame. Please do not stand on furniture while decorating. A step stool is provided in the kitchen. No open flame décor candles (Birthday candles and catering sternos are fine). No glitter or confetti, as they are difficult to clean and may damage the venue.',
      },
    ],
  },
  {
    category: 'CATERING AND VENDORS',
    items: [
      {
        question: 'Can I use my own vendors?',
        answer: 'You are welcome to use any vendor you\'d like. A vendor list is available in the Resources tab. These are provided as helpful options, not restrictions, to make planning easier. Party planners, decorators, and other vendors are also welcome - just be sure they work within your booked rental time for delivery, setup, and pickup.',
      },
    ],
  },
  {
    category: 'PRICING',
    items: [
      {
        question: 'How is pricing structured?',
        answer: 'The Space and The Space Below are rented by the hour, with minimums depending on the day of the week. Your rental time includes setup and breakdown. Ask us about special discounts for recurring projects and full weekday rentals. We are happy to offer a 15% discount to members of the military (active duty and veterans), first responders, teachers, and not-for-profits.',
      },
    ],
  },
  {
    category: 'SIZE',
    items: [
      {
        question: 'What is the capacity?',
        answer: 'Our upstairs venue, The Space, comfortably accommodates 60–70 guests for a mostly standing event, or about 40 fully seated. We also offer our new lounge-style venue, The Space Below, which can be added to your rental for additional space and flexibility. When booked alongside the upstairs space, it\'s available at 25% off its standard rate. The Space Below comfortably fits about 50 guests standing or around 30 seated.',
      },
    ],
  },
  {
    category: 'PARKING',
    items: [
      {
        question: 'Where can I park?',
        answer: 'As we are located in downtown Westerly, there are several parking options nearby (all lots are no overnight parking): Canal Street lot (no time limit), YMCA lot across the street (no time limit), High Street lot to the right of Pizza Place (no time limit), High Street lot to the left of the bank (3-hour limit on weekdays, no limit evenings and weekends), High Street street parking (3-hour limit), Canal Street street parking (3-hour limit), and Loading zone directly in front of The Space (for client loading and unloading on weekdays 9 am – 4 pm, open parking after 4 pm on weekdays, and 3-hour limit on weekends). The no time limit lots are your best bet for easy parking.',
      },
    ],
  },
  {
    category: 'MUSIC',
    items: [
      {
        question: 'What are the music policies?',
        answer: 'The vibe is yours - set the tone with your own music or bring in live acoustic sounds to make the event feel just right. Our sound system connects to your phone, tablet, or laptop so you can play music from any media app or your own library. Acoustic musicians are welcome, but please plan your guest count with the space they will need in mind. Amplified live music, DJs, or sound systems (including PA systems, subwoofers, or other amplified equipment) are not permitted without prior written authorization from The Space. That doesn\'t mean no - it just means ask!',
      },
    ],
  },
];

// Events
export const EVENTS = [
  {
    id: 1,
    title: 'DISCO BINGO',
    date: 'Mar 26',
    time: '7:00 PM - 8:30 PM',
    price: 20,
    description: 'Thursday Night Fever hits The Space. Disco Bingo, great prizes, and good vibes - where classic bingo gets a funky disco twist. DJ Daevassi spins the hits while we keep the numbers rolling.',
    ageRestriction: '18+',
    includes: 'Includes entry, 5 bingo cards & snacks. Beer, wine, and soft drinks available for purchase',
  },
  {
    id: 2,
    title: 'Sips & Swings Part 1',
    date: 'Apr 9',
    time: '6:00 PM - 7:00 PM',
    price: 50,
    description: '"M" is for Mechanics - Discover the biomechanics of an efficient golf swing and learn simple ways to assess if your body can perform each key movement.',
    includes: 'Includes Entry, 1 free drink, and free 7-day access to Dr. Joubert\'s Golf Mobility Exercise Quick Tips',
  },
  {
    id: 3,
    title: 'DISCO BINGO',
    date: 'Apr 30',
    time: '7:00 PM - 8:30 PM',
    price: 20,
    description: 'Thursday Night Fever hits The Space. Disco Bingo, great prizes, and good vibes - where classic bingo gets a funky disco twist.',
    ageRestriction: '18+',
    includes: 'Includes entry, 5 bingo cards & snacks. Beer, wine, and soft drinks available for purchase',
  },
  {
    id: 4,
    title: 'Sips & Swings Part 2',
    date: 'May 14',
    time: '6:00 PM - 7:00 PM',
    price: 50,
    description: '"M" is for Mentality - Gain practical, on- and off-course tools to build unbreakable mental toughness and strengthen your mind-body connection.',
    includes: 'Includes Entry, 1 free drink, and Free 7 Day Access to Dr. Joubert\'s Mindful Meditation for Golfers',
  },
];
