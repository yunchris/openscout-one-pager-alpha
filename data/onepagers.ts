import { OnePagerData, OnePagerPublicData } from "../model/model";
import * as founders from "./founders";
import * as investors from "./investors";

/** An empty one pager, for initial React state */
export const EMPTY_ONE_PAGER: OnePagerData = {
  companyName: "",
  url: "",
  industryTags: [],
  briefDescription: "",
  founders: [],
  faq: [],
};

const facebook: OnePagerData = {
  companyName: "Facebook",
  url: "facebook",
  industryTags: ["Social Media", "Messaging", "Mobile"],
  briefDescription:
    "Online social networking platform for users to connect with friends and family",
  detailDescription:
    "Users can create a profile, share images and other media, send and accept friend requests. Largest social media with more than 2B users worldwide",
  fundraisingStage: "Seed",
  fundraisingStageGoal: 500000,
  fundsRaisedInStage: 100000,
  fundraisingDetails: "To transform from a school network to a public website",
  founders: [founders.facebook1, founders.facebook2, founders.facebook3],
  pitchVideoLink: "https://www.youtube.com/watch?v=WzgNAN3dW-I",
  investors: [investors.investor2],
  faq: [
    ["Who is often called the father of the computer?","Charles Babbage"],
    ["What is the name of the man who launched eBay back in 1995?","Pierre Omidyar"],
    ["Who discovered penicillin?","Alexander Fleming"],
    ["What is meteorology the study of?", "The Weather"],
    ["Which planet has the most gravity?", "Jupiter"],
    ["What is the rarest M&M color?","Brown"],
    ["In what year were the first Air Jordan sneakers released?","1984"],
    ["According to Greek mythology who was the first woman on earth?","Pandora"],
    ["Which African country was formerly known as Abyssinia?", "Ethiopia"],
    ["Tennis star Serena Williams won which major tournament while pregnant with her first child?","The Australian Open"]
  ],
};

const lendingClub: OnePagerData = {
  companyName: "Lending Club",
  url: "lending-club",
  industryTags: ["P2P", "Consumer Lending", "Finance"],
  briefDescription: "P2P platform for creditworthy borrowers and lenders",
  detailDescription:
    "Peer lending network that brings together creditworthy borrowers and investors for simpler borrowing and investing at better rates",
  fundraisingStage: "Series B",
  fundraisingStageGoal: 12000000,
  fundsRaisedInStage: 5000000,
  fundraisingDetails: "Expand capabilities and accelerate customer growth",
  founders: [founders.lendingClub1, founders.lendingClub2],
  investors: [investors.investor1],
  faq: [
    ["In which European city would you find Orly airport?","Paris"],
    ["Who is often credited with creating the world’s first car?","Karl Benz"],
    ["Which company owns Bugatti, Lamborghini. Audi, Porsche, and Ducati?","Volkswagon"],
    ["What’s the primary ingredient in hummus?","Chickpeas"],
    ["Which country invented tea?","China"],
    ["Which European nation was said to invent hot dogs?","Germany"],
    ["Which singer’s real name is Stefani Joanne Angelina Germanotta?","Lady Gaga"],
    ["The only known monotremes in the animal kingdom are the echidna and which other creature?","The platypus"],
    ["Fissures, vents and plugs are all associated with which geological feature?","Volcanos"],
    ["Which country consumes the most chocolate per capita?", "Switzerland"]
  ],
};

const spotify: OnePagerData = {
  companyName: "Spotify",
  url: "spotify",
  industryTags: ["music", "streaming"],
  briefDescription: "Ad-financed music streaming service	",
  detailDescription:
    "Commercial streaming service that provides digital content from a wide range of artists. Users can search music, create, share playlists, and integrate social media accounts. Can be access on computers or mobile devices.",
  fundraisingStage: "Series A",
  fundraisingStageGoal: 21600000,
  fundsRaisedInStage: 500000,
  fundraisingDetails: "Grow music library and licenses, developers salaries",
  founders: [founders.spotify1, founders.spotify2],
  pitchVideoLink: "https://www.youtube.com/watch?v=ZDXETBfXSuc&t=166s",
  investors: [investors.investor1],
  faq: [
    ["What is the loudest animal on Earth?","The sperm whale"],
    ["In which body part can you find the femur?","Leg"],
    ["What is Hawkeye’s real name?","Clint Barton"],
    ["What is the capital of New Zealand?","Wellington"],
    ["Which city in India would you find the Taj Mahal in?","Agra"],
    ["How many times does the heartbeat per day?","More than 100,000"],
    ["What was the first toy to be advertised on television?","Mr. Potato Head"],
    ["What is the tiny piece at the end of a shoelace called?", "An aglet"],
    ["Which of Shakespeare’s plays is the longest?", "Hamlet"],
    ["Which country is known as the Land of White Elephant?", "Thailand"]
  ],
};

const workday: OnePagerData = {
  companyName: "Workday",
  url: "workday",
  industryTags: ["SaaS", "HR", "Software"],
  briefDescription: "SaaS provider for enterprises",
  detailDescription:
    "Provides human capital management, payroll, financial management software solutions for enterprises",
  fundraisingStage: "Pre-Seed",
  fundraisingStageGoal: 15000000,
  fundsRaisedInStage: 1000000,
  fundraisingDetails: "Develop software platform",
  founders: [founders.workday1, founders.workday2],
  investors: [investors.investor1, investors.investor2],
  faq: [
    ["What color eyes do most humans have?","Brown"],
    ["What is the name of the thin, but long country that spans more than half of the western coast of South America?","Chile"],
    ["About how many taste buds does the average human tongue have?","10,000"],
    ["Night Crawler, member of the X-Men, has what kind of powers?","Teleportation"],
    ["Which continent is the largest?","Asia"],
    ["Which organ has four chambers?","The heart"],
    ["When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?","Six"],
    ["Which country produces the most coffee in the world?","Brazil"],
    ["Which two countries share the longest international border?","Canada and the USA"],
    ["Which bone are babies born without?", "Knee cap"]
  ],
};

const zynga: OnePagerData = {
  companyName: "Zynga",
  url: "zynga",
  industryTags: ["Gaming", "Mobile"],
  briefDescription: "Develops and operates social games",
  detailDescription:
    "Offers online social games such as Words With Friends, Zynga Poker and Farmville. Operates games on web, social networking sites and mobile platforms worldwide. Provides advertising services in its games.",
  fundraisingStage: "Series B",
  fundraisingStageGoal: 29000000,
  fundsRaisedInStage: 10000000,
  fundraisingDetails: "Game production, acquisition and marketing",
  founders: [founders.zynga1, founders.zynga2, founders.zynga3],
  pitchVideoLink: "https://www.youtube.com/watch?v=HdVWHAPiqno",
  investors: [investors.investor1, investors.investor3],
  faq: [
    ["How many hearts does an octopus have?","Three"],
    ["What is the name of Batman’s butler?","Alfred"],
    ["Which American state is the largest (by area)?","Alaska"],
    ["Which desert is the largest in the world?","The Sahara Desert (although Antarctica which is larger might qualify as a desert as well)"],
    ["When is Canada Day?","July 1st"],
    ["What is your body’s largest organ?","The skin"],
    ["How many eyes does a bee have?","Five"],
    ["What was the name of the rock band formed by Jimmy Page?","Led Zeppelin"],
    ["Which mammal has no vocal cords?","Giraffe"],
    ["Power outages in the US are mostly caused by what?","Squirrels"]
  ],
};

/** Map of urls to full one pager data. */
export const ONE_PAGERS_ALL_DATA_MAP: Map<string, OnePagerData> = new Map([
  [facebook.url, facebook],
  [lendingClub.url, lendingClub],
  [spotify.url, spotify],
  [workday.url, workday],
  [zynga.url, zynga],
]);

/** Array of all public one pager data. */
export const ONE_PAGERS_PUBLIC_DATA_ARRAY: OnePagerPublicData[] = Array.from(
  ONE_PAGERS_ALL_DATA_MAP.values()
).map((onePager: OnePagerData) => {
  return {
    companyName: onePager.companyName,
    url: onePager.url,
    industryTags: onePager.industryTags,
    briefDescription: onePager.briefDescription,
  };
});
