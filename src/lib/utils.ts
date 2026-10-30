import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}

export const TOPICS = [
  "General",
  "Engineering",
  "AI",
  "Church Tech",
  "Creatives",
  "Founders",
  "Gaming",
] as const;

type Community = {
  name: string;
  description: string;
  url: string;
  topic: (typeof TOPICS)[number];
  platform: string;
  region: "Global" | "North America" | "Europe" | "Africa";
  /** Date added to this list, as "YYYY-MM-DD". */
  addedAt: string;
};

const NEW_FOR_DAYS = 90;

export function isNewCommunity(addedAt: string, now = new Date()) {
  const ageInDays = (now.getTime() - new Date(addedAt).getTime()) / 86_400_000;
  return ageInDays <= NEW_FOR_DAYS;
}

export const FAITH_TECH_COMMUNITIES: Community[] = [
  {
    name: "FaithTech",
    description:
      "A global tech community for Christ helping people in tech find community and steward their skills to glorify God.",
    url: "https://faithtech.com",
    topic: "General",
    platform: "Local hubs",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "Indigitous",
    description:
      "Helping you discover your place in God's mission and reach your world.",
    url: "https://indigitous.org",
    topic: "General",
    platform: "Website",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "codeFellowship()",
    description:
      "A Christ-centered developer video podcast focused on developer stories, tech topics, and the Gospel.",
    url: "https://creators.spotify.com/pod/profile/codefellowship/",
    topic: "Engineering",
    platform: "Podcast",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "TheoTech Facebook Group",
    description:
      "A group exploring the theology of technology and activating tech entrepreneurship for the gospel.",
    url: "https://www.facebook.com/groups/theotech",
    topic: "Founders",
    platform: "Facebook",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "Christian Creators in Tech",
    description:
      "A community on X/Twitter for fellowship, collaboration, and showcasing Christian tech projects.",
    url: "https://x.com/i/communities/1773059527652393233",
    topic: "General",
    platform: "X",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "Prayer For Designers",
    description:
      "Slack and Facebook groups for Christian designers to connect and pray together.",
    url: "https://prayerfordesigners.com",
    topic: "Creatives",
    platform: "Slack",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "Faith Driven Entrepreneur",
    description:
      "Free 8-week groups, online or in person, for Christ-following entrepreneurs, plus FDE+, a community for founders facing scale.",
    url: "https://groups.faithdrivenentrepreneur.org/app/home",
    topic: "Founders",
    platform: "Small groups",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "Faithly",
    description:
      "A LinkedIn-style platform for pastors, staff, and volunteers in ministry organizations.",
    url: "https://faithly.co",
    topic: "Church Tech",
    platform: "Website",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "AI for Church Leaders and Pastors",
    description:
      "A Facebook group exploring generative AI in church ministry and empowering leaders with tech tools.",
    url: "https://www.facebook.com/groups/aiforchurchleaders",
    topic: "AI",
    platform: "Facebook",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "r/churchtech",
    description:
      "A subreddit for all questions related to technology used in church settings.",
    url: "https://www.reddit.com/r/churchtech",
    topic: "Church Tech",
    platform: "Reddit",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "ICF Digital & Technics",
    description:
      "A Discord channel by ICF Church for digital and tech enthusiasts.",
    url: "http://digital.icf.church/community",
    topic: "General",
    platform: "Discord",
    region: "Europe",
    addedAt: "2025-04-10",
  },
  {
    name: "Christians in Tech Career Networking on LinkedIn",
    description:
      "A LinkedIn group for Christians in tech to network and grow professionally and spiritually.",
    url: "https://www.linkedin.com/groups/14538040/",
    topic: "General",
    platform: "LinkedIn",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "Christians in Tech",
    description:
      "A Columbus, Ohio community that meets every two weeks, with a Discord server for conversation between meetups.",
    url: "https://christians-in-tech.org",
    topic: "General",
    platform: "Meetup",
    region: "North America",
    addedAt: "2025-04-10",
  },
  {
    name: "Christians in AI (CHAI)",
    description:
      "A global community of Christians working in AI, with monthly talks, weekly prayer meetings, and a mentorship program.",
    url: "https://chaiglobal.ai",
    topic: "AI",
    platform: "Events",
    region: "Global",
    addedAt: "2025-04-10",
  },
  {
    name: "CGDC Connect",
    description:
      "The Christian Game Developers Conference's private community for game developers, artists, and designers, with weekly online groups and dev showcases.",
    url: "https://connect.cgdc.org/sign_up",
    topic: "Gaming",
    platform: "Circle",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Christian Tech Community",
    description:
      "A community for Christians in every tech role, with a large WhatsApp group, mentor matching, and yearly conferences.",
    url: "https://www.christiantechcommunity.org/",
    topic: "General",
    platform: "WhatsApp",
    region: "Africa",
    addedAt: "2026-10-30",
  },
  {
    name: "Church IT Network",
    description:
      "A peer learning community for church IT staff and volunteers, with a 24/7 Discord chat and a national conference.",
    url: "https://churchitnetwork.com",
    topic: "Church Tech",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Catholic Devs",
    description:
      "Catholic developers and designers connect on Slack and GitHub through the Catholic Digital Commons and Open Source Catholic.",
    url: "https://catholicdigitalcommons.org/community",
    topic: "Engineering",
    platform: "Slack",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Catholic Coders Guild",
    description:
      "A Discord server where Catholic coders find jobs, cofounders, and friends, and build tech for the Church.",
    url: "https://discord.gg/qykHxp6uUg",
    topic: "Engineering",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Christian Programmers Discord",
    description:
      "A Discord server for Christians who code, with channels for faith discussion and programming help.",
    url: "https://discord.me/christianprogrammers",
    topic: "Engineering",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Geeks Under Grace",
    description:
      "A Christian geek culture ministry covering games, movies, and tech, with an active Discord server.",
    url: "https://www.geeksundergrace.com/",
    topic: "Gaming",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "ACT: Association of Christian Technologists",
    description:
      "A Meetup group of technologists who gather online each month for Bible study, prayer, and discussion.",
    url: "https://www.meetup.com/act-association-of-christian-technologists/",
    topic: "General",
    platform: "Meetup",
    region: "North America",
    addedAt: "2026-10-30",
  },
  {
    name: "Christian AI Innovators Hub",
    description:
      "A free Skool community for Christians exploring AI, with resources, webinars, and discussions.",
    url: "https://www.skool.com/christian-ai-7530/about",
    topic: "AI",
    platform: "Skool",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Missional AI",
    description:
      "A global network of Christian technologists and ministry leaders building AI for mission, with a Slack workspace and yearly summits.",
    url: "https://missional.ai",
    topic: "AI",
    platform: "Slack",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Covenant Foundry",
    description:
      "A Discord server where Christian software builders and founders share progress, get feedback, and talk through decisions.",
    url: "https://discord.gg/JcWQNBXH42",
    topic: "Engineering",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Debugging Disciples",
    description:
      "A Slack community for Christian men in tech and computer science, with a weekly online Bible study. Joining requires an application.",
    url: "https://debuggingdisciples.org/join",
    topic: "Engineering",
    platform: "Slack",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Church Communications",
    description:
      "A large private Facebook group where church communicators discuss design, web, social media, and church tech tools.",
    url: "https://www.facebook.com/groups/churchcomm",
    topic: "Creatives",
    platform: "Facebook",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Christian Engineering Society",
    description:
      "A membership society for Christian engineers, including software engineers, with a Facebook group, reading group, and conference.",
    url: "https://www.christianengineering.org",
    topic: "Engineering",
    platform: "Website",
    region: "North America",
    addedAt: "2026-10-30",
  },
  {
    name: "Christians In Startups London",
    description:
      "An informal group for Christians working in or founding tech startups, with London socials and a LinkedIn group.",
    url: "https://luma.com/cisl",
    topic: "Founders",
    platform: "Events",
    region: "Europe",
    addedAt: "2026-10-30",
  },
  {
    name: "Faithbase",
    description:
      "A Romania-based community for Christian technologists and founders exploring faith and AI, with a WhatsApp group and conferences.",
    url: "https://faithbase.tech",
    topic: "AI",
    platform: "WhatsApp",
    region: "Europe",
    addedAt: "2026-10-30",
  },
  {
    name: "Kingdom Code",
    description:
      "A UK community of Christians who love tech, now part of FaithTech, known for its yearly BUILD hackathon in London.",
    url: "https://kingdomcode.org.uk",
    topic: "General",
    platform: "Events",
    region: "Europe",
    addedAt: "2026-10-30",
  },
  {
    name: "Affiliation of Christians in AI (ACAI)",
    description:
      "A group within the American Scientific Affiliation for fellowship, networking, and discussion among Christians in AI, with free online events.",
    url: "https://network.asa3.org/members/member_engagement/groups.aspx?id=264255",
    topic: "AI",
    platform: "Events",
    region: "North America",
    addedAt: "2026-10-30",
  },
  {
    name: "Church Sound & Media Techs",
    description:
      "A large Facebook group where church techs share knowledge on audio, lighting, projection, broadcast, and presentation software.",
    url: "https://www.facebook.com/groups/ChurchSoundMediaTechs",
    topic: "Church Tech",
    platform: "Facebook",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Church Creatives",
    description:
      "A large Facebook group that inspires, teaches, and trains church media professionals and volunteers.",
    url: "https://www.facebook.com/groups/churchcreative",
    topic: "Creatives",
    platform: "Facebook",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Church Social Media Managers",
    description:
      "A large Facebook group for people who run social media for churches and ministries.",
    url: "https://www.facebook.com/groups/ChurchSocialMediaManagers",
    topic: "Creatives",
    platform: "Facebook",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Vitaliverse",
    description:
      "A large Christian Discord for Linux, open source, self-hosting, privacy, cybersecurity, and ethical AI.",
    url: "https://discord.com/servers/vitaliverse-1367125414925041674",
    topic: "Engineering",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Love Thy Nerd",
    description:
      "A ministry to nerds and nerd culture with an active Discord for Christian gamers, including frequent game nights.",
    url: "https://lovethynerd.com/discord",
    topic: "Gaming",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "What Would Jesus Tech",
    description:
      "A podcast where Christian technologists discuss faith, work, and new tech, with a small Discord for listeners.",
    url: "https://discord.gg/cZqTAGrB98",
    topic: "General",
    platform: "Discord",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "SENT Ventures",
    description:
      "A membership network for Catholic founders, CEOs, and investors, with mentoring and a yearly SENT Summit.",
    url: "https://www.sentventures.com",
    topic: "Founders",
    platform: "Membership",
    region: "North America",
    addedAt: "2026-10-30",
  },
  {
    name: "Community of Mission Information Workers",
    description:
      "A global network of Christians working with data and research in mission, with a discussion group, bulletin, and virtual conference.",
    url: "https://globalcmiw.org",
    topic: "General",
    platform: "Email group",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "CMG Community",
    description:
      "A large Facebook group from Church Motion Graphics on church screen visuals, video, livestreaming, and stage design.",
    url: "https://www.facebook.com/groups/VisualChurchMedia",
    topic: "Creatives",
    platform: "Facebook",
    region: "Global",
    addedAt: "2026-10-30",
  },
  {
    name: "Churches That Live Stream",
    description:
      "A Facebook group for church livestream teams to trade advice on cameras, software, and troubleshooting.",
    url: "https://www.facebook.com/groups/churchstreamers",
    topic: "Church Tech",
    platform: "Facebook",
    region: "Global",
    addedAt: "2026-10-30",
  },
];
