export type AllCaseStudies = {
  __typename: "CaseStudy";
  title: string | null;
  slug: string | null;
  description: string | null;
  publishedAt: string | null;
  thumbnail: {
    alternativeText: string;
    url: string;
    height: string;
    width: string;
  }
};

export type AllCaseStudiesQuery = {
  __typename?: "Query";
  caseStudies: Array<AllCaseStudies>;
};
