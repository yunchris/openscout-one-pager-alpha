/** A person related to a one pager. */
export interface OnePagerPerson {
  name: string;
  title: string;
  description?: string;
}

/** Public access one pager data fields. */
export interface OnePagerPublicData {
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
}

export interface OnePagerContactInfo {
  websiteURL: string;
  phoneNum: string;
  email: string;
  address: string;
  embedSource: string;
}

/** Full one pager data model. */
export interface OnePagerData {
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
  detailDescription?: string;
  founders: OnePagerPerson[];
  fundraisingStage?: string;
  fundraisingStageGoal?: number;
  fundsRaisedInStage?: number;
  fundraisingDetails?: string;
  pitchVideoLink?: string;
  investors?: OnePagerPerson[];
  faq?: string[][];
  contact?: OnePagerContactInfo[];
}
