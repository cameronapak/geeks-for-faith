import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

type Community = {
  name: string;
  description: string;
  url: string;
};

export const FAITH_TECH_COMMUNITIES: Community[] = [
  {
    name: "FaithTech",
    description:
      "A global tech community for Christ helping people in tech find community and steward their skills to glorify God.",
    url: "https://faithtech.com",
  },
  {
    name: "Indigitous",
    description:
      "Helping you discover your place in God's mission and reach your world.",
    url: "https://indigitous.org",
  },
  {
    name: "codeFellowship()",
    description:
      "A Christ-centered developer video podcast focused on developer stories, tech topics, and the Gospel.",
    url: "https://creators.spotify.com/pod/profile/codefellowship/",
  },
  {
    name: "The Kingdom Founder",
    description:
      "A paid community for Christian entrepreneurs, CEOs, creatives, and leaders seeking connection and support.",
    url: "https://thekingdomfounder.com",
  },
  {
    name: "TheoTech Facebook Group",
    description:
      "A group exploring the theology of technology and activating tech entrepreneurship for the gospel.",
    url: "https://www.facebook.com/groups/theotech",
  },
  {
    name: "faith.tools Christians in Tech on X",
    description:
      "A community on X/Twitter for fellowship, collaboration, and showcasing Christian tech projects.",
    url: "https://x.com/i/communities/1773059527652393233",
  },
  {
    name: "Prayer For Designers",
    description:
      "Slack and Facebook groups for Christian designers to connect and pray together.",
    url: "https://www.facebook.com/groups/prayerfordesigners",
  },
  {
    name: "un-dark.io",
    description:
      "CV’s Web3 platform for co-creating and exploring the future of digital evangelism.",
    url: "https://un-dark.io",
  },
  {
    name: "Faith Driven Entrepreneur",
    description:
      "A global network of investors and entrepreneurs who believe God owns it all and care about faith-driven investment.",
    url: "https://www.faithdrivenentrepreneur.org",
  },
  {
    name: "Faithly",
    description:
      "A LinkedIn-style platform for pastors, staff, and volunteers in ministry organizations.",
    url: "https://faithly.co",
  },
  {
    name: "AI for Church Leaders and Pastors",
    description:
      "A Facebook group exploring generative AI in church ministry and empowering leaders with tech tools.",
    url: "https://www.facebook.com/groups/aiforchurchleaders",
  },
  {
    name: "r/churchtech",
    description:
      "A subreddit for all questions related to technology used in church settings.",
    url: "https://www.reddit.com/r/churchtech",
  },
  {
    name: "ICF Digital & Technics",
    description:
      "A Discord channel by ICF Church for digital and tech enthusiasts.",
    url: "https://discord.com/invite/cFxGCuh3gh",
  },
  {
    name: "Christians in Tech Career Networking on LinkedIn",
    description:
      "A LinkedIn group for Christians in tech to network and grow professionally and spiritually.",
    url: "https://www.linkedin.com/groups/13946994",
  },
  {
    name: "Christians in Tech",
    description:
      "A Discord community at the intersection of Faith and Technology.",
    url: "https://linktr.ee/christiansintechorg",
  },
  {
    name: "Christians in AI (CHAI)",
    description:
      "A global community exploring the intersection of Christianity and artificial intelligence.",
    url: "https://sites.google.com/view/chai-global/",
  },
  {
    name: "Christian Game Developers",
    description:
      "A private online community that supports and encourages believers in the game development industry to honor God through their work.",
    url: "https://www.facebook.com/groups/ChristianGameDevelopers/",
  },
];
