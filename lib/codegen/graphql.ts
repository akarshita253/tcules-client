/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlogMainSectionDynamicZoneInput: { input: any; output: any; }
  CapablityCapablitiesSingleTypeDynamicZoneInput: { input: any; output: any; }
  CaseStudyCaseStudyContentsDynamicZoneInput: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  EventMainSectionDynamicZoneInput: { input: any; output: any; }
  InterviewMainSectionDynamicZoneInput: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  LabSingleTypeDetailSectionDynamicZoneInput: { input: any; output: any; }
  PodcastMainSectionDynamicZoneInput: { input: any; output: any; }
  PrivacyPolicyLegalDescriptionDynamicZoneInput: { input: any; output: any; }
  TermsOfUseLegalDescriptionDynamicZoneInput: { input: any; output: any; }
};

export type About = {
  __typename?: 'About';
  bgImage?: Maybe<UploadFile>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionTwo?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  fifthSection?: Maybe<ComponentAboutAboutFifthSection>;
  fourthSection?: Maybe<ComponentAboutAboutFourthSection>;
  heading?: Maybe<Scalars['String']['output']>;
  headingTwo?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentAboutAboutSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  seventhSection?: Maybe<ComponentAboutAboutSeventhSection>;
  sixthSection?: Maybe<ComponentAboutAboutSixthSection>;
  thirdSection?: Maybe<ComponentAboutAboutSecondSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AboutInput = {
  bgImage?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionTwo?: InputMaybe<Scalars['String']['input']>;
  fifthSection?: InputMaybe<ComponentAboutAboutFifthSectionInput>;
  fourthSection?: InputMaybe<ComponentAboutAboutFourthSectionInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingTwo?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentAboutAboutSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  seventhSection?: InputMaybe<ComponentAboutAboutSeventhSectionInput>;
  sixthSection?: InputMaybe<ComponentAboutAboutSixthSectionInput>;
  thirdSection?: InputMaybe<ComponentAboutAboutSecondSectionInput>;
};

export type Author = {
  __typename?: 'Author';
  companyName?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  ideaAboutProject?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  nodes: Array<Author>;
  pageInfo: Pagination;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  companyName?: InputMaybe<StringFilterInput>;
  contactNumber?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  ideaAboutProject?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ideaAboutProject?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Blog = {
  __typename?: 'Blog';
  blogProfileSection?: Maybe<Array<Maybe<ComponentSharedProfile>>>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  featureImage: Array<Maybe<UploadFile>>;
  featureImage_connection?: Maybe<UploadFileRelationResponseCollection>;
  mainSection?: Maybe<Array<Maybe<BlogMainSectionDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogBlogProfileSectionArgs = {
  filters?: InputMaybe<ComponentSharedProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogFeatureImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogFeatureImage_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  nodes: Array<Blog>;
  pageInfo: Pagination;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  blogProfileSection?: InputMaybe<ComponentSharedProfileFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  blogProfileSection?: InputMaybe<Array<InputMaybe<ComponentSharedProfileInput>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featureImage?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mainSection?: InputMaybe<Array<Scalars['BlogMainSectionDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogMainSectionDynamicZone = ComponentBlogAndCasestudiesBlogOrCasestudyText | ComponentBlogAndCasestudiesCodeSection | ComponentBlogAndCasestudiesIframe | ComponentBlogAndCasestudiesSectionImage | ComponentBlogAndCasestudiesSepration | ComponentBlogAndCasestudiesTldrSection | ComponentBlogAndCasestudiesVideo | ComponentSharedRichText | ComponentSharedSeo | Error;

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  nodes: Array<Blog>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CapablitiesSubPage = {
  __typename?: 'CapablitiesSubPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  hero?: Maybe<ComponentServiceHeroSection>;
  howWeWorkSection?: Maybe<ComponentServiceHowWeWork>;
  miscSection?: Maybe<ComponentServiceServiceMisc>;
  operatingPhilosophySection?: Maybe<ComponentServiceOurOperatingPhilosophy>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  recentWorkSection?: Maybe<ComponentServiceExploreRecentWork>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  subPageName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatWeDesignSection?: Maybe<ComponentServiceWhatWeDesign>;
  whyTeamHireSection?: Maybe<ComponentServiceWhyTeamHireUs>;
};

export type CapablitiesSubPageEntityResponseCollection = {
  __typename?: 'CapablitiesSubPageEntityResponseCollection';
  nodes: Array<CapablitiesSubPage>;
  pageInfo: Pagination;
};

export type CapablitiesSubPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CapablitiesSubPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  hero?: InputMaybe<ComponentServiceHeroSectionFiltersInput>;
  howWeWorkSection?: InputMaybe<ComponentServiceHowWeWorkFiltersInput>;
  miscSection?: InputMaybe<ComponentServiceServiceMiscFiltersInput>;
  not?: InputMaybe<CapablitiesSubPageFiltersInput>;
  operatingPhilosophySection?: InputMaybe<ComponentServiceOurOperatingPhilosophyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CapablitiesSubPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  recentWorkSection?: InputMaybe<ComponentServiceExploreRecentWorkFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  subPageName?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  whatWeDesignSection?: InputMaybe<ComponentServiceWhatWeDesignFiltersInput>;
  whyTeamHireSection?: InputMaybe<ComponentServiceWhyTeamHireUsFiltersInput>;
};

export type CapablitiesSubPageInput = {
  hero?: InputMaybe<ComponentServiceHeroSectionInput>;
  howWeWorkSection?: InputMaybe<ComponentServiceHowWeWorkInput>;
  miscSection?: InputMaybe<ComponentServiceServiceMiscInput>;
  operatingPhilosophySection?: InputMaybe<ComponentServiceOurOperatingPhilosophyInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  recentWorkSection?: InputMaybe<ComponentServiceExploreRecentWorkInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subPageName?: InputMaybe<Scalars['String']['input']>;
  whatWeDesignSection?: InputMaybe<ComponentServiceWhatWeDesignInput>;
  whyTeamHireSection?: InputMaybe<ComponentServiceWhyTeamHireUsInput>;
};

export type Capablity = {
  __typename?: 'Capablity';
  capablitiesSingleType?: Maybe<Array<Maybe<CapablityCapablitiesSingleTypeDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CapablityCapablitiesSingleTypeDynamicZone = ComponentCapablitiesCapablitiesCardSection | ComponentServiceHeroSection | ComponentSharedSeo | Error;

export type CapablityInput = {
  capablitiesSingleType?: InputMaybe<Array<Scalars['CapablityCapablitiesSingleTypeDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type Career = {
  __typename?: 'Career';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  fourthSection?: Maybe<ComponentCareerCareerFourthSectionNew>;
  heading?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentCareerCareerSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  thirdSection?: Maybe<ComponentCareerCareerThirdSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CareerInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fourthSection?: InputMaybe<ComponentCareerCareerFourthSectionNewInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentCareerCareerSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  thirdSection?: InputMaybe<ComponentCareerCareerThirdSectionInput>;
};

export type CaseStudy = {
  __typename?: 'CaseStudy';
  caseStudyContents?: Maybe<Array<Maybe<CaseStudyCaseStudyContentsDynamicZone>>>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  heroImage?: Maybe<UploadFile>;
  profile?: Maybe<Array<Maybe<ComponentBlogAndCasestudiesCompanyProfile>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  statement?: Maybe<Array<Maybe<ComponentBlogAndCasestudiesProblemAndSolution>>>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CaseStudyCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CaseStudyCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CaseStudyProfileArgs = {
  filters?: InputMaybe<ComponentBlogAndCasestudiesCompanyProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CaseStudyStatementArgs = {
  filters?: InputMaybe<ComponentBlogAndCasestudiesProblemAndSolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CaseStudyTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CaseStudyTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyCaseStudyContentsDynamicZone = ComponentBlogAndCasestudiesBlogOrCasestudyText | ComponentBlogAndCasestudiesCodeSection | ComponentBlogAndCasestudiesIframe | ComponentBlogAndCasestudiesSectionImage | ComponentBlogAndCasestudiesSepration | ComponentBlogAndCasestudiesVideo | ComponentElementsLink | ComponentSharedQuote | ComponentSharedSeo | Error;

export type CaseStudyEntityResponseCollection = {
  __typename?: 'CaseStudyEntityResponseCollection';
  nodes: Array<CaseStudy>;
  pageInfo: Pagination;
};

export type CaseStudyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CaseStudyFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CaseStudyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CaseStudyFiltersInput>>>;
  profile?: InputMaybe<ComponentBlogAndCasestudiesCompanyProfileFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  statement?: InputMaybe<ComponentBlogAndCasestudiesProblemAndSolutionFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CaseStudyInput = {
  caseStudyContents?: InputMaybe<Array<Scalars['CaseStudyCaseStudyContentsDynamicZoneInput']['input']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  profile?: InputMaybe<Array<InputMaybe<ComponentBlogAndCasestudiesCompanyProfileInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  statement?: InputMaybe<Array<InputMaybe<ComponentBlogAndCasestudiesProblemAndSolutionInput>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudyLandingPage = {
  __typename?: 'CaseStudyLandingPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentSingleTypeCaseStudyPageHeroSection>;
  misc?: Maybe<ComponentSingleTypeCaseStudyPageMiscellaneous>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CaseStudyLandingPageInput = {
  heroSection?: InputMaybe<ComponentSingleTypeCaseStudyPageHeroSectionInput>;
  misc?: InputMaybe<ComponentSingleTypeCaseStudyPageMiscellaneousInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type CaseStudyRelationResponseCollection = {
  __typename?: 'CaseStudyRelationResponseCollection';
  nodes: Array<CaseStudy>;
};

export type Category = {
  __typename?: 'Category';
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogRelationResponseCollection>;
  case_studies_categories: Array<Maybe<CaseStudy>>;
  case_studies_categories_connection?: Maybe<CaseStudyRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  events: Array<Maybe<Event>>;
  events_connection?: Maybe<EventRelationResponseCollection>;
  interviews: Array<Maybe<Interview>>;
  interviews_connection?: Maybe<InterviewRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  podcasts: Array<Maybe<Podcast>>;
  podcasts_connection?: Maybe<PodcastRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryCase_Studies_CategoriesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryCase_Studies_Categories_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryInterviewsArgs = {
  filters?: InputMaybe<InterviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryInterviews_ConnectionArgs = {
  filters?: InputMaybe<InterviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPodcastsArgs = {
  filters?: InputMaybe<PodcastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPodcasts_ConnectionArgs = {
  filters?: InputMaybe<PodcastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  nodes: Array<Category>;
  pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  case_studies_categories?: InputMaybe<CaseStudyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  interviews?: InputMaybe<InterviewFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  podcasts?: InputMaybe<PodcastFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  case_studies_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  interviews?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  podcasts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  nodes: Array<Category>;
};

export type ClientContact = {
  __typename?: 'ClientContact';
  clientComments?: Maybe<Scalars['String']['output']>;
  clientCompany?: Maybe<Scalars['String']['output']>;
  clientContact?: Maybe<Scalars['String']['output']>;
  clientEmail?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  clientProfilePicture?: Maybe<UploadFile>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClientContactEntityResponseCollection = {
  __typename?: 'ClientContactEntityResponseCollection';
  nodes: Array<ClientContact>;
  pageInfo: Pagination;
};

export type ClientContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientContactFiltersInput>>>;
  clientComments?: InputMaybe<StringFilterInput>;
  clientCompany?: InputMaybe<StringFilterInput>;
  clientContact?: InputMaybe<StringFilterInput>;
  clientEmail?: InputMaybe<StringFilterInput>;
  clientName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ClientContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientContactFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientContactInput = {
  clientComments?: InputMaybe<Scalars['String']['input']>;
  clientCompany?: InputMaybe<Scalars['String']['input']>;
  clientContact?: InputMaybe<Scalars['String']['input']>;
  clientEmail?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  clientProfilePicture?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComponentAboutAboutFifthSection = {
  __typename?: 'ComponentAboutAboutFifthSection';
  cardDetails?: Maybe<Array<Maybe<ComponentAboutAboutFifthSectionCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentAboutAboutFifthSectionCardDetailsArgs = {
  filters?: InputMaybe<ComponentAboutAboutFifthSectionCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentAboutAboutFifthSectionCards = {
  __typename?: 'ComponentAboutAboutFifthSectionCards';
  description?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isImageVisible?: Maybe<Scalars['Boolean']['output']>;
  profilePicture?: Maybe<UploadFile>;
};

export type ComponentAboutAboutFifthSectionCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFifthSectionCardsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  designation?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  isImageVisible?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentAboutAboutFifthSectionCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFifthSectionCardsFiltersInput>>>;
};

export type ComponentAboutAboutFifthSectionCardsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isImageVisible?: InputMaybe<Scalars['Boolean']['input']>;
  profilePicture?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentAboutAboutFifthSectionInput = {
  cardDetails?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFifthSectionCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentAboutAboutFourthSection = {
  __typename?: 'ComponentAboutAboutFourthSection';
  accordianDetails?: Maybe<Array<Maybe<ComponentAboutAboutFourthSectionDetails>>>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
};


export type ComponentAboutAboutFourthSectionAccordianDetailsArgs = {
  filters?: InputMaybe<ComponentAboutAboutFourthSectionDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentAboutAboutFourthSectionDetails = {
  __typename?: 'ComponentAboutAboutFourthSectionDetails';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentAboutAboutFourthSectionDetailsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFourthSectionDetailsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAboutAboutFourthSectionDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFourthSectionDetailsFiltersInput>>>;
};

export type ComponentAboutAboutFourthSectionDetailsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentAboutAboutFourthSectionInput = {
  accordianDetails?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFourthSectionDetailsInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentAboutAboutSecondSection = {
  __typename?: 'ComponentAboutAboutSecondSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Maybe<UploadFile>>;
  images_connection?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentAboutAboutSecondSectionImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentAboutAboutSecondSectionImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentAboutAboutSecondSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentAboutAboutSeventhSection = {
  __typename?: 'ComponentAboutAboutSeventhSection';
  cardDetails?: Maybe<Array<Maybe<ComponentAboutSeventhSectionCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};


export type ComponentAboutAboutSeventhSectionCardDetailsArgs = {
  filters?: InputMaybe<ComponentAboutSeventhSectionCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentAboutAboutSeventhSectionInput = {
  cardDetails?: InputMaybe<Array<InputMaybe<ComponentAboutSeventhSectionCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentAboutAboutSixthSection = {
  __typename?: 'ComponentAboutAboutSixthSection';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sixthSectionCards?: Maybe<Array<Maybe<ComponentAboutAboutFifthSectionCards>>>;
};


export type ComponentAboutAboutSixthSectionSixthSectionCardsArgs = {
  filters?: InputMaybe<ComponentAboutAboutFifthSectionCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentAboutAboutSixthSectionInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sixthSectionCards?: InputMaybe<Array<InputMaybe<ComponentAboutAboutFifthSectionCardsInput>>>;
};

export type ComponentAboutSeventhSectionCards = {
  __typename?: 'ComponentAboutSeventhSectionCards';
  bgColor?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentAboutSeventhSectionCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutSeventhSectionCardsFiltersInput>>>;
  bgColor?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentAboutSeventhSectionCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutSeventhSectionCardsFiltersInput>>>;
};

export type ComponentAboutSeventhSectionCardsInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentBlogAndCasestudiesBlogOrCasestudyText = {
  __typename?: 'ComponentBlogAndCasestudiesBlogOrCasestudyText';
  blogContent?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogAndCasestudiesCaseStudyPositioning = {
  __typename?: 'ComponentBlogAndCasestudiesCaseStudyPositioning';
  id: Scalars['ID']['output'];
};

export type ComponentBlogAndCasestudiesCodeSection = {
  __typename?: 'ComponentBlogAndCasestudiesCodeSection';
  codeSnippet?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogAndCasestudiesCompanyProfile = {
  __typename?: 'ComponentBlogAndCasestudiesCompanyProfile';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogAndCasestudiesCompanyProfileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlogAndCasestudiesCompanyProfileFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlogAndCasestudiesCompanyProfileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlogAndCasestudiesCompanyProfileFiltersInput>>>;
};

export type ComponentBlogAndCasestudiesCompanyProfileInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBlogAndCasestudiesIframe = {
  __typename?: 'ComponentBlogAndCasestudiesIframe';
  description?: Maybe<Scalars['JSON']['output']>;
  embedCode?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ComponentBlogAndCasestudiesProblemAndSolution = {
  __typename?: 'ComponentBlogAndCasestudiesProblemAndSolution';
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlogAndCasestudiesProblemAndSolutionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlogAndCasestudiesProblemAndSolutionFiltersInput>>>;
  desc?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlogAndCasestudiesProblemAndSolutionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlogAndCasestudiesProblemAndSolutionFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentBlogAndCasestudiesProblemAndSolutionInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlogAndCasestudiesSectionImage = {
  __typename?: 'ComponentBlogAndCasestudiesSectionImage';
  id: Scalars['ID']['output'];
  imageSection: Array<Maybe<UploadFile>>;
  imageSection_connection?: Maybe<UploadFileRelationResponseCollection>;
  layout?: Maybe<Enum_Componentblogandcasestudiessectionimage_Layout>;
};


export type ComponentBlogAndCasestudiesSectionImageImageSectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlogAndCasestudiesSectionImageImageSection_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlogAndCasestudiesSepration = {
  __typename?: 'ComponentBlogAndCasestudiesSepration';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  marginBottom?: Maybe<Scalars['Int']['output']>;
  marginTop?: Maybe<Scalars['Int']['output']>;
  styles?: Maybe<Enum_Componentblogandcasestudiessepration_Styles>;
  thickness?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlogAndCasestudiesTldrSection = {
  __typename?: 'ComponentBlogAndCasestudiesTldrSection';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  tdlrDescription?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlogAndCasestudiesVideo = {
  __typename?: 'ComponentBlogAndCasestudiesVideo';
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  loop?: Maybe<Scalars['Boolean']['output']>;
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  videoFile: Array<Maybe<UploadFile>>;
  videoFile_connection?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentBlogAndCasestudiesVideoVideoFileArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlogAndCasestudiesVideoVideoFile_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCapablitiesCapablitiesCardSection = {
  __typename?: 'ComponentCapablitiesCapablitiesCardSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  sectionCards?: Maybe<Array<Maybe<ComponentCapablitiesCapablitiesCards>>>;
  serviceName?: Maybe<Enum_Componentcapablitiescapablitiescardsection_Servicename>;
  subRouteLink?: Maybe<ComponentElementsLink>;
};


export type ComponentCapablitiesCapablitiesCardSectionSectionCardsArgs = {
  filters?: InputMaybe<ComponentCapablitiesCapablitiesCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCapablitiesCapablitiesCards = {
  __typename?: 'ComponentCapablitiesCapablitiesCards';
  cardPoints?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};


export type ComponentCapablitiesCapablitiesCardsCardPointsArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCapablitiesCapablitiesCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCapablitiesCapablitiesCardsFiltersInput>>>;
  cardPoints?: InputMaybe<ComponentElementsPointsFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentCapablitiesCapablitiesCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCapablitiesCapablitiesCardsFiltersInput>>>;
};

export type ComponentCareerCareerCards = {
  __typename?: 'ComponentCareerCareerCards';
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentCareerCareerCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCareerCareerCardsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCareerCareerCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCareerCareerCardsFiltersInput>>>;
};

export type ComponentCareerCareerCardsInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentCareerCareerFifthSection = {
  __typename?: 'ComponentCareerCareerFifthSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
  rightSection?: Maybe<ComponentCareerThirdRightSection>;
};

export type ComponentCareerCareerFourthSection = {
  __typename?: 'ComponentCareerCareerFourthSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingTwo?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  rightSection?: Maybe<ComponentCareerThirdRightSection>;
};

export type ComponentCareerCareerFourthSectionNew = {
  __typename?: 'ComponentCareerCareerFourthSectionNew';
  bottomHeading?: Maybe<Scalars['String']['output']>;
  bottomLink?: Maybe<ComponentElementsLink>;
  cards?: Maybe<Array<Maybe<ComponentCareerCareerNewCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};


export type ComponentCareerCareerFourthSectionNewCardsArgs = {
  filters?: InputMaybe<ComponentCareerCareerNewCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCareerCareerFourthSectionNewInput = {
  bottomHeading?: InputMaybe<Scalars['String']['input']>;
  bottomLink?: InputMaybe<ComponentElementsLinkInput>;
  cards?: InputMaybe<Array<InputMaybe<ComponentCareerCareerNewCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentCareerCareerIconPoints = {
  __typename?: 'ComponentCareerCareerIconPoints';
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  points?: Maybe<Scalars['String']['output']>;
};

export type ComponentCareerCareerIconPointsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCareerCareerIconPointsFiltersInput>>>;
  not?: InputMaybe<ComponentCareerCareerIconPointsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCareerCareerIconPointsFiltersInput>>>;
  points?: InputMaybe<StringFilterInput>;
};

export type ComponentCareerCareerNewCards = {
  __typename?: 'ComponentCareerCareerNewCards';
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentCareerCareerNewCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCareerCareerNewCardsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentCareerCareerNewCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCareerCareerNewCardsFiltersInput>>>;
};

export type ComponentCareerCareerNewCardsInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentCareerCareerSecondSection = {
  __typename?: 'ComponentCareerCareerSecondSection';
  cardDetails?: Maybe<Array<Maybe<ComponentCareerCareerCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentCareerCareerSecondSectionCardDetailsArgs = {
  filters?: InputMaybe<ComponentCareerCareerCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCareerCareerSecondSectionInput = {
  cardDetails?: InputMaybe<Array<InputMaybe<ComponentCareerCareerCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentCareerCareerThirdSection = {
  __typename?: 'ComponentCareerCareerThirdSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  openings: Array<Maybe<Opening>>;
  openings_connection?: Maybe<OpeningRelationResponseCollection>;
};


export type ComponentCareerCareerThirdSectionOpeningsArgs = {
  filters?: InputMaybe<OpeningFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentCareerCareerThirdSectionOpenings_ConnectionArgs = {
  filters?: InputMaybe<OpeningFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCareerCareerThirdSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  openings?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentCareerThirdRightSection = {
  __typename?: 'ComponentCareerThirdRightSection';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
  rightSectionPoints?: Maybe<Array<Maybe<ComponentCareerCareerIconPoints>>>;
};


export type ComponentCareerThirdRightSectionRightSectionPointsArgs = {
  filters?: InputMaybe<ComponentCareerCareerIconPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContactUsContactUsBottomCards = {
  __typename?: 'ComponentContactUsContactUsBottomCards';
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentContactUsContactUsBottomCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactUsContactUsBottomCardsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentContactUsContactUsBottomCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactUsContactUsBottomCardsFiltersInput>>>;
};

export type ComponentContactUsContactUsBottomCardsInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentContactUsSocialMediaLinks = {
  __typename?: 'ComponentContactUsSocialMediaLinks';
  id: Scalars['ID']['output'];
};

export type ComponentElementsButtons = {
  __typename?: 'ComponentElementsButtons';
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsButtonsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsButtonsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsButtonsFiltersInput>>>;
};

export type ComponentElementsButtonsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsElements = {
  __typename?: 'ComponentElementsElements';
  id: Scalars['ID']['output'];
};

export type ComponentElementsLink = {
  __typename?: 'ComponentElementsLink';
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsLinkFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsLinkFiltersInput>>>;
};

export type ComponentElementsLinkInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsPoints = {
  __typename?: 'ComponentElementsPoints';
  id: Scalars['ID']['output'];
  listText?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsPointsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsPointsFiltersInput>>>;
  listText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsPointsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsPointsFiltersInput>>>;
};

export type ComponentElementsPointsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  listText?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentEventsEventDetails = {
  __typename?: 'ComponentEventsEventDetails';
  descOne?: Maybe<Scalars['String']['output']>;
  descTwo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentEventsEventDetailsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsEventDetailsFiltersInput>>>;
  descOne?: InputMaybe<StringFilterInput>;
  descTwo?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventsEventDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventsEventDetailsFiltersInput>>>;
};

export type ComponentEventsEventDetailsInput = {
  descOne?: InputMaybe<Scalars['String']['input']>;
  descTwo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentFooterFooterLegalSection = {
  __typename?: 'ComponentFooterFooterLegalSection';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  legalLinks?: Maybe<Array<Maybe<ComponentElementsLink>>>;
};


export type ComponentFooterFooterLegalSectionLegalLinksArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFooterFooterLegalSectionInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  legalLinks?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
};

export type ComponentFooterFooterLinks = {
  __typename?: 'ComponentFooterFooterLinks';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
  links?: Maybe<Array<Maybe<ComponentFooterPagesLinks>>>;
};


export type ComponentFooterFooterLinksLinksArgs = {
  filters?: InputMaybe<ComponentFooterPagesLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFooterFooterLinksInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
  links?: InputMaybe<Array<InputMaybe<ComponentFooterPagesLinksInput>>>;
};

export type ComponentFooterFooterSocialMediaLinks = {
  __typename?: 'ComponentFooterFooterSocialMediaLinks';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  rightSection?: Maybe<ComponentFooterFooterSocialMediaRightSection>;
  socialMedia?: Maybe<Array<Maybe<ComponentElementsLink>>>;
};


export type ComponentFooterFooterSocialMediaLinksSocialMediaArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFooterFooterSocialMediaLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  rightSection?: InputMaybe<ComponentFooterFooterSocialMediaRightSectionInput>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
};

export type ComponentFooterFooterSocialMediaRightSection = {
  __typename?: 'ComponentFooterFooterSocialMediaRightSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<ComponentElementsLink>>>;
};


export type ComponentFooterFooterSocialMediaRightSectionLinksArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFooterFooterSocialMediaRightSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
};

export type ComponentFooterPagesLinks = {
  __typename?: 'ComponentFooterPagesLinks';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pageLinks?: Maybe<Array<Maybe<ComponentElementsLink>>>;
};


export type ComponentFooterPagesLinksPageLinksArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFooterPagesLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterPagesLinksFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFooterPagesLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterPagesLinksFiltersInput>>>;
  pageLinks?: InputMaybe<ComponentElementsLinkFiltersInput>;
};

export type ComponentFooterPagesLinksInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pageLinks?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
};

export type ComponentHomepageBranchCards = {
  __typename?: 'ComponentHomepageBranchCards';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentHomepageBranchCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageBranchCardsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageBranchCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageBranchCardsFiltersInput>>>;
};

export type ComponentHomepageBranchCardsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageFourthSectionCards = {
  __typename?: 'ComponentHomepageFourthSectionCards';
  cardImage?: Maybe<UploadFile>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentHomepageFourthSectionCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageFourthSectionCardsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageFourthSectionCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageFourthSectionCardsFiltersInput>>>;
};

export type ComponentHomepageFourthSectionCardsInput = {
  cardImage?: InputMaybe<Scalars['ID']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageHomepageContactAndTestimonials = {
  __typename?: 'ComponentHomepageHomepageContactAndTestimonials';
  client_detail?: Maybe<Author>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  testimonial?: Maybe<Testimonial>;
};

export type ComponentHomepageHomepageContactAndTestimonialsInput = {
  client_detail?: InputMaybe<Scalars['ID']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  testimonial?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageHomepageFifthSection = {
  __typename?: 'ComponentHomepageHomepageFifthSection';
  blogsDetails: Array<Maybe<Blog>>;
  blogsDetails_connection?: Maybe<BlogRelationResponseCollection>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentHomepageHomepageFifthSectionBlogsDetailsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentHomepageHomepageFifthSectionBlogsDetails_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomepageHomepageFifthSectionInput = {
  blogsDetails?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageHomepageFourthSection = {
  __typename?: 'ComponentHomepageHomepageFourthSection';
  button?: Maybe<ComponentElementsLink>;
  cards?: Maybe<Array<Maybe<ComponentHomepageFourthSectionCards>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};


export type ComponentHomepageHomepageFourthSectionCardsArgs = {
  filters?: InputMaybe<ComponentHomepageFourthSectionCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomepageHomepageFourthSectionInput = {
  button?: InputMaybe<ComponentElementsLinkInput>;
  cards?: InputMaybe<Array<InputMaybe<ComponentHomepageFourthSectionCardsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageHomepageHeroSection = {
  __typename?: 'ComponentHomepageHomepageHeroSection';
  bottomTags?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
  button?: Maybe<Array<Maybe<ComponentElementsLink>>>;
  descriptionOne?: Maybe<Scalars['String']['output']>;
  descriptionTwo?: Maybe<Scalars['String']['output']>;
  headingOne?: Maybe<Scalars['String']['output']>;
  headingTwo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rightSectionImage?: Maybe<UploadFile>;
};


export type ComponentHomepageHomepageHeroSectionBottomTagsArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentHomepageHomepageHeroSectionButtonArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomepageHomepageHeroSectionInput = {
  bottomTags?: InputMaybe<Array<InputMaybe<ComponentElementsPointsInput>>>;
  button?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
  descriptionOne?: InputMaybe<Scalars['String']['input']>;
  descriptionTwo?: InputMaybe<Scalars['String']['input']>;
  headingOne?: InputMaybe<Scalars['String']['input']>;
  headingTwo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rightSectionImage?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageHomepageSecondSection = {
  __typename?: 'ComponentHomepageHomepageSecondSection';
  id: Scalars['ID']['output'];
  secondSection?: Maybe<Array<Maybe<ComponentHomepageHomepageSecondSectionPoints>>>;
};


export type ComponentHomepageHomepageSecondSectionSecondSectionArgs = {
  filters?: InputMaybe<ComponentHomepageHomepageSecondSectionPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomepageHomepageSecondSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  secondSection?: InputMaybe<Array<InputMaybe<ComponentHomepageHomepageSecondSectionPointsInput>>>;
};

export type ComponentHomepageHomepageSecondSectionPoints = {
  __typename?: 'ComponentHomepageHomepageSecondSectionPoints';
  bgImage?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  link?: Maybe<ComponentHomepageSecondSectionCaseStudyRelation>;
};

export type ComponentHomepageHomepageSecondSectionPointsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageHomepageSecondSectionPointsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentHomepageSecondSectionCaseStudyRelationFiltersInput>;
  not?: InputMaybe<ComponentHomepageHomepageSecondSectionPointsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageHomepageSecondSectionPointsFiltersInput>>>;
};

export type ComponentHomepageHomepageSecondSectionPointsInput = {
  bgImage?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentHomepageSecondSectionCaseStudyRelationInput>;
};

export type ComponentHomepageHomepageThirdSection = {
  __typename?: 'ComponentHomepageHomepageThirdSection';
  cards?: Maybe<Array<Maybe<ComponentHomepageBranchCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};


export type ComponentHomepageHomepageThirdSectionCardsArgs = {
  filters?: InputMaybe<ComponentHomepageBranchCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomepageHomepageThirdSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentHomepageBranchCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomepageSecondSectionCaseStudyRelation = {
  __typename?: 'ComponentHomepageSecondSectionCaseStudyRelation';
  botomImage?: Maybe<UploadFile>;
  case_study?: Maybe<CaseStudy>;
  id: Scalars['ID']['output'];
};

export type ComponentHomepageSecondSectionCaseStudyRelationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageSecondSectionCaseStudyRelationFiltersInput>>>;
  case_study?: InputMaybe<CaseStudyFiltersInput>;
  not?: InputMaybe<ComponentHomepageSecondSectionCaseStudyRelationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageSecondSectionCaseStudyRelationFiltersInput>>>;
};

export type ComponentHomepageSecondSectionCaseStudyRelationInput = {
  botomImage?: InputMaybe<Scalars['ID']['input']>;
  case_study?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHowWeWorkCardDetails = {
  __typename?: 'ComponentHowWeWorkCardDetails';
  id: Scalars['ID']['output'];
};

export type ComponentHowWeWorkCards = {
  __typename?: 'ComponentHowWeWorkCards';
  button?: Maybe<ComponentElementsLink>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  points?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
};


export type ComponentHowWeWorkCardsPointsArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHowWeWorkCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHowWeWorkCardsFiltersInput>>>;
  button?: InputMaybe<ComponentElementsLinkFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHowWeWorkCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHowWeWorkCardsFiltersInput>>>;
  points?: InputMaybe<ComponentElementsPointsFiltersInput>;
};

export type ComponentHowWeWorkCardsInput = {
  button?: InputMaybe<ComponentElementsLinkInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  points?: InputMaybe<Array<InputMaybe<ComponentElementsPointsInput>>>;
};

export type ComponentHowWeWorkHowWeWorkHeroSection = {
  __typename?: 'ComponentHowWeWorkHowWeWorkHeroSection';
  button?: Maybe<Array<Maybe<ComponentElementsButtons>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentHowWeWorkHowWeWorkHeroSectionButtonArgs = {
  filters?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHowWeWorkHowWeWorkHeroSectionInput = {
  button?: InputMaybe<Array<InputMaybe<ComponentElementsButtonsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHowWeWorkLowFrictionWays = {
  __typename?: 'ComponentHowWeWorkLowFrictionWays';
  details?: Maybe<Array<Maybe<ComponentHowWeWorkCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentHowWeWorkLowFrictionWaysDetailsArgs = {
  filters?: InputMaybe<ComponentHowWeWorkCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHowWeWorkLowFrictionWaysInput = {
  details?: InputMaybe<Array<InputMaybe<ComponentHowWeWorkCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHowWeWorkRightDetails = {
  __typename?: 'ComponentHowWeWorkRightDetails';
  description?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentHowWeWorkRightDetailsDescriptionArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHowWeWorkRightDetailsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHowWeWorkRightDetailsFiltersInput>>>;
  description?: InputMaybe<ComponentElementsPointsFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHowWeWorkRightDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHowWeWorkRightDetailsFiltersInput>>>;
};

export type ComponentHowWeWorkRightDetailsInput = {
  description?: InputMaybe<Array<InputMaybe<ComponentElementsPointsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHowWeWorkRightStartingPoint = {
  __typename?: 'ComponentHowWeWorkRightStartingPoint';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  leftCard?: Maybe<Array<Maybe<ComponentSharedCard>>>;
};


export type ComponentHowWeWorkRightStartingPointLeftCardArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHowWeWorkRightStartingPointInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  leftCard?: InputMaybe<Array<InputMaybe<ComponentSharedCardInput>>>;
};

export type ComponentLabsCardSection = {
  __typename?: 'ComponentLabsCardSection';
  cards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentLabsCardSectionCardsArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilCardDetails = {
  __typename?: 'ComponentLabsFilCardDetails';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentLabsFilCardDetailsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLabsFilCardDetailsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentLabsFilCardDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLabsFilCardDetailsFiltersInput>>>;
};

export type ComponentLabsFilCardDetailsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentLabsFilLabsFilEighthSection = {
  __typename?: 'ComponentLabsFilLabsFilEighthSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentLabsFilLabsFilEighthSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilLabsFilFifthSection = {
  __typename?: 'ComponentLabsFilLabsFilFifthSection';
  cards?: Maybe<Array<Maybe<ComponentLabsFilCardDetails>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentLabsFilLabsFilFifthSectionCardsArgs = {
  filters?: InputMaybe<ComponentLabsFilCardDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilLabsFilFifthSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentLabsFilCardDetailsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilLabsFilFourthSection = {
  __typename?: 'ComponentLabsFilLabsFilFourthSection';
  description?: Maybe<Scalars['String']['output']>;
  fourthSection?: Maybe<ComponentLabsFilLabsFilSecondSection>;
  id: Scalars['ID']['output'];
};

export type ComponentLabsFilLabsFilFourthSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fourthSection?: InputMaybe<ComponentLabsFilLabsFilSecondSectionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilLabsFilHeroSection = {
  __typename?: 'ComponentLabsFilLabsFilHeroSection';
  button?: Maybe<Array<Maybe<ComponentElementsLink>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
};


export type ComponentLabsFilLabsFilHeroSectionButtonArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilLabsFilHeroSectionInput = {
  button?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLabsFilLabsFilSecondSection = {
  __typename?: 'ComponentLabsFilLabsFilSecondSection';
  cards?: Maybe<Array<Maybe<ComponentLabsFilCardDetails>>>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};


export type ComponentLabsFilLabsFilSecondSectionCardsArgs = {
  filters?: InputMaybe<ComponentLabsFilCardDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilLabsFilSecondSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentLabsFilCardDetailsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilLabsFilSeventhSection = {
  __typename?: 'ComponentLabsFilLabsFilSeventhSection';
  description?: Maybe<Scalars['String']['output']>;
  faqs: Array<Maybe<Faq>>;
  faqs_connection?: Maybe<FaqRelationResponseCollection>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentLabsFilLabsFilSeventhSectionFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentLabsFilLabsFilSeventhSectionFaqs_ConnectionArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilLabsFilSeventhSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  faqs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilLabsFilSixthSection = {
  __typename?: 'ComponentLabsFilLabsFilSixthSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  leftCard?: Maybe<ComponentLabsFilSixthSectionLeftCard>;
  rightCard?: Maybe<Array<Maybe<ComponentLabsFilSixthSectionRightCard>>>;
};


export type ComponentLabsFilLabsFilSixthSectionRightCardArgs = {
  filters?: InputMaybe<ComponentLabsFilSixthSectionRightCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilLabsFilSixthSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  leftCard?: InputMaybe<ComponentLabsFilSixthSectionLeftCardInput>;
  rightCard?: InputMaybe<Array<InputMaybe<ComponentLabsFilSixthSectionRightCardInput>>>;
};

export type ComponentLabsFilLabsFilThirdSection = {
  __typename?: 'ComponentLabsFilLabsFilThirdSection';
  cards?: Maybe<Array<Maybe<ComponentLabsFilThirdSectionCards>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};


export type ComponentLabsFilLabsFilThirdSectionCardsArgs = {
  filters?: InputMaybe<ComponentLabsFilThirdSectionCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsFilLabsFilThirdSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentLabsFilThirdSectionCardsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilSixthSectionLeftCard = {
  __typename?: 'ComponentLabsFilSixthSectionLeftCard';
  bottomText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentLabsFilSixthSectionLeftCardInput = {
  bottomText?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilSixthSectionRightCard = {
  __typename?: 'ComponentLabsFilSixthSectionRightCard';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentLabsFilSixthSectionRightCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLabsFilSixthSectionRightCardFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLabsFilSixthSectionRightCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLabsFilSixthSectionRightCardFiltersInput>>>;
};

export type ComponentLabsFilSixthSectionRightCardInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLabsFilThirdSectionCards = {
  __typename?: 'ComponentLabsFilThirdSectionCards';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentLabsFilThirdSectionCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLabsFilThirdSectionCardsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentLabsFilThirdSectionCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLabsFilThirdSectionCardsFiltersInput>>>;
};

export type ComponentLabsFilThirdSectionCardsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentLabsLabsInterface = {
  __typename?: 'ComponentLabsLabsInterface';
  id: Scalars['ID']['output'];
  labsInterfaceCards?: Maybe<Array<Maybe<ComponentLabsLabsInterfaceCards>>>;
};


export type ComponentLabsLabsInterfaceLabsInterfaceCardsArgs = {
  filters?: InputMaybe<ComponentLabsLabsInterfaceCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLabsLabsInterfaceCards = {
  __typename?: 'ComponentLabsLabsInterfaceCards';
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentLabsLabsInterfaceCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLabsLabsInterfaceCardsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentLabsLabsInterfaceCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLabsLabsInterfaceCardsFiltersInput>>>;
};

export type ComponentLabsLabsInterfaceCardsInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentLabsLabsInterfaceInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  labsInterfaceCards?: InputMaybe<Array<InputMaybe<ComponentLabsLabsInterfaceCardsInput>>>;
};

export type ComponentLegalDetails = {
  __typename?: 'ComponentLegalDetails';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentMatterDesignMatterDesignCards = {
  __typename?: 'ComponentMatterDesignMatterDesignCards';
  cardImage?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  link?: Maybe<Array<Maybe<ComponentElementsLink>>>;
};


export type ComponentMatterDesignMatterDesignCardsLinkArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMatterDesignMatterDesignCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignCardsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentMatterDesignMatterDesignCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignCardsFiltersInput>>>;
};

export type ComponentMatterDesignMatterDesignCardsInput = {
  cardImage?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
};

export type ComponentMatterDesignMatterDesignContactUs = {
  __typename?: 'ComponentMatterDesignMatterDesignContactUs';
  description?: Maybe<Scalars['String']['output']>;
  headingOne?: Maybe<Scalars['String']['output']>;
  headingTwo?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentMatterDesignMatterDesignContactUsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  headingOne?: InputMaybe<Scalars['String']['input']>;
  headingTwo?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentMatterDesignMatterDesignDisplayCards = {
  __typename?: 'ComponentMatterDesignMatterDesignDisplayCards';
  d?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  images: Array<Maybe<UploadFile>>;
  images_connection?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentMatterDesignMatterDesignDisplayCardsImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentMatterDesignMatterDesignDisplayCardsImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMatterDesignMatterDesignDisplayCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignDisplayCardsFiltersInput>>>;
  d?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMatterDesignMatterDesignDisplayCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignDisplayCardsFiltersInput>>>;
};

export type ComponentMatterDesignMatterDesignDisplayCardsInput = {
  d?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentMatterDesignMatterDesignFifthSection = {
  __typename?: 'ComponentMatterDesignMatterDesignFifthSection';
  cards?: Maybe<Array<Maybe<ComponentMatterDesignMatterDesignCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentMatterDesignMatterDesignFifthSectionCardsArgs = {
  filters?: InputMaybe<ComponentMatterDesignMatterDesignCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMatterDesignMatterDesignFifthSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentMatterDesignMatterDesignFourthSection = {
  __typename?: 'ComponentMatterDesignMatterDesignFourthSection';
  displayCards?: Maybe<Array<Maybe<ComponentMatterDesignMatterDesignDisplayCards>>>;
  id: Scalars['ID']['output'];
};


export type ComponentMatterDesignMatterDesignFourthSectionDisplayCardsArgs = {
  filters?: InputMaybe<ComponentMatterDesignMatterDesignDisplayCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMatterDesignMatterDesignFourthSectionInput = {
  displayCards?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignDisplayCardsInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentMatterDesignMatterDesignHeroSection = {
  __typename?: 'ComponentMatterDesignMatterDesignHeroSection';
  description?: Maybe<Scalars['String']['output']>;
  featureImage?: Maybe<UploadFile>;
  headingOne?: Maybe<Scalars['String']['output']>;
  headingTwo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentMatterDesignMatterDesignHeroSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  featureImage?: InputMaybe<Scalars['ID']['input']>;
  headingOne?: InputMaybe<Scalars['String']['input']>;
  headingTwo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentMatterDesignMatterDesignSecondSection = {
  __typename?: 'ComponentMatterDesignMatterDesignSecondSection';
  cardDetails?: Maybe<Array<Maybe<ComponentMatterDesignMatterDesignCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};


export type ComponentMatterDesignMatterDesignSecondSectionCardDetailsArgs = {
  filters?: InputMaybe<ComponentMatterDesignMatterDesignCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMatterDesignMatterDesignSecondSectionInput = {
  cardDetails?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentMatterDesignMatterDesignStripOne = {
  __typename?: 'ComponentMatterDesignMatterDesignStripOne';
  bgIcon?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentMatterDesignMatterDesignStripOneInput = {
  bgIcon?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentMatterDesignMatterDesignThirdSection = {
  __typename?: 'ComponentMatterDesignMatterDesignThirdSection';
  cards?: Maybe<Array<Maybe<ComponentMatterDesignMatterDesignCards>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentMatterDesignMatterDesignThirdSectionCardsArgs = {
  filters?: InputMaybe<ComponentMatterDesignMatterDesignCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMatterDesignMatterDesignThirdSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentMatterDesignMatterDesignCardsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentNavbarNavbarLevel1Group = {
  __typename?: 'ComponentNavbarNavbarLevel1Group';
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isSubMenuAvailable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  navLevelTwoGroup?: Maybe<Array<Maybe<ComponentNavbarNavbarLevel2Group>>>;
};


export type ComponentNavbarNavbarLevel1GroupNavLevelTwoGroupArgs = {
  filters?: InputMaybe<ComponentNavbarNavbarLevel2GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavbarNavbarLevel1GroupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavbarNavbarLevel1GroupFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  isSubMenuAvailable?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  navLevelTwoGroup?: InputMaybe<ComponentNavbarNavbarLevel2GroupFiltersInput>;
  not?: InputMaybe<ComponentNavbarNavbarLevel1GroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavbarNavbarLevel1GroupFiltersInput>>>;
};

export type ComponentNavbarNavbarLevel1GroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isSubMenuAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  navLevelTwoGroup?: InputMaybe<Array<InputMaybe<ComponentNavbarNavbarLevel2GroupInput>>>;
};

export type ComponentNavbarNavbarLevel2Group = {
  __typename?: 'ComponentNavbarNavbarLevel2Group';
  description?: Maybe<Scalars['String']['output']>;
  hasSubMenu?: Maybe<Scalars['Boolean']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  levelTwoLinks?: Maybe<Array<Maybe<ComponentElementsLink>>>;
  name?: Maybe<Scalars['String']['output']>;
};


export type ComponentNavbarNavbarLevel2GroupLevelTwoLinksArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavbarNavbarLevel2GroupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavbarNavbarLevel2GroupFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  hasSubMenu?: InputMaybe<BooleanFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  levelTwoLinks?: InputMaybe<ComponentElementsLinkFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavbarNavbarLevel2GroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavbarNavbarLevel2GroupFiltersInput>>>;
};

export type ComponentNavbarNavbarLevel2GroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hasSubMenu?: InputMaybe<Scalars['Boolean']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  levelTwoLinks?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPodcasteEventsInterviewsShadowCard = {
  __typename?: 'ComponentPodcasteEventsInterviewsShadowCard';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBackgroundAvailable?: Maybe<Scalars['Boolean']['output']>;
  isShadowVisible?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentPspPspCards = {
  __typename?: 'ComponentPspPspCards';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  links?: Maybe<ComponentElementsLink>;
  points?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
};


export type ComponentPspPspCardsPointsArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPspPspCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspCardsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  links?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentPspPspCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspCardsFiltersInput>>>;
  points?: InputMaybe<ComponentElementsPointsFiltersInput>;
};

export type ComponentPspPspCardsSection = {
  __typename?: 'ComponentPspPspCardsSection';
  cards?: Maybe<Array<Maybe<ComponentPspPspCards>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentPspPspCardsSectionCardsArgs = {
  filters?: InputMaybe<ComponentPspPspCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPspPspContactus = {
  __typename?: 'ComponentPspPspContactus';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentPspPspContactusFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspContactusFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPspPspContactusFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspContactusFiltersInput>>>;
};

export type ComponentPspPspContactusInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentPspPspFaqSection = {
  __typename?: 'ComponentPspPspFaqSection';
  description?: Maybe<Scalars['String']['output']>;
  faqs: Array<Maybe<Faq>>;
  faqs_connection?: Maybe<FaqRelationResponseCollection>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentPspPspFaqSectionFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentPspPspFaqSectionFaqs_ConnectionArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPspPspFaqSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspFaqSectionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  faqs?: InputMaybe<FaqFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPspPspFaqSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspFaqSectionFiltersInput>>>;
};

export type ComponentPspPspFaqSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  faqs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentPspPspResourceSection = {
  __typename?: 'ComponentPspPspResourceSection';
  case_studies: Array<Maybe<CaseStudy>>;
  case_studies_connection?: Maybe<CaseStudyRelationResponseCollection>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};


export type ComponentPspPspResourceSectionCase_StudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentPspPspResourceSectionCase_Studies_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPspPspResourceSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspResourceSectionFiltersInput>>>;
  case_studies?: InputMaybe<CaseStudyFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentPspPspResourceSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspResourceSectionFiltersInput>>>;
};

export type ComponentPspPspResourceSectionInput = {
  case_studies?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentPspPspSecondSection = {
  __typename?: 'ComponentPspPspSecondSection';
  cardImage?: Maybe<Array<Maybe<ComponentSharedMedia>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentPspPspSecondSectionCardImageArgs = {
  filters?: InputMaybe<ComponentSharedMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPspPspSecondSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspSecondSectionFiltersInput>>>;
  cardImage?: InputMaybe<ComponentSharedMediaFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPspPspSecondSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspSecondSectionFiltersInput>>>;
};

export type ComponentPspPspSecondSectionInput = {
  cardImage?: InputMaybe<Array<InputMaybe<ComponentSharedMediaInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentPspPspSixthSection = {
  __typename?: 'ComponentPspPspSixthSection';
  featureImage?: Maybe<UploadFile>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentPspPspSixthSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspSixthSectionFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentPspPspSixthSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspSixthSectionFiltersInput>>>;
};

export type ComponentPspPspSixthSectionInput = {
  featureImage?: InputMaybe<Scalars['ID']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentPspPspTestimonialSection = {
  __typename?: 'ComponentPspPspTestimonialSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  testimonials: Array<Maybe<Testimonial>>;
  testimonials_connection?: Maybe<TestimonialRelationResponseCollection>;
};


export type ComponentPspPspTestimonialSectionTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentPspPspTestimonialSectionTestimonials_ConnectionArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPspPspTestimonialSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPspPspTestimonialSectionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPspPspTestimonialSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPspPspTestimonialSectionFiltersInput>>>;
  testimonials?: InputMaybe<TestimonialFiltersInput>;
};

export type ComponentPspPspTestimonialSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  testimonials?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentPspPspThirdSection = {
  __typename?: 'ComponentPspPspThirdSection';
  bottomIcon?: Maybe<UploadFile>;
  bottomLink?: Maybe<ComponentElementsLink>;
  descriptionBottom?: Maybe<Scalars['String']['output']>;
  descriptionTop?: Maybe<Scalars['String']['output']>;
  headingBottom?: Maybe<Scalars['String']['output']>;
  headingTop?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentResourcesCards = {
  __typename?: 'ComponentResourcesCards';
  cardImage?: Maybe<UploadFile>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentResourcesCardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentResourcesCardsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentResourcesCardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentResourcesCardsFiltersInput>>>;
};

export type ComponentResourcesCardsInput = {
  cardImage?: InputMaybe<Scalars['ID']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentResourcesFilterSection = {
  __typename?: 'ComponentResourcesFilterSection';
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
};


export type ComponentResourcesFilterSectionCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentResourcesFilterSectionCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentResourcesFilterSectionTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentResourcesFilterSectionTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentResourcesFilterSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentResourcesFilterSectionFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentResourcesFilterSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentResourcesFilterSectionFiltersInput>>>;
  tags?: InputMaybe<TagFiltersInput>;
};

export type ComponentResourcesFilterSectionInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentResourcesResourceFourthSection = {
  __typename?: 'ComponentResourcesResourceFourthSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentResourcesResourceFourthSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentResourcesResourceThirdSection = {
  __typename?: 'ComponentResourcesResourceThirdSection';
  case_studies: Array<Maybe<CaseStudy>>;
  case_studies_connection?: Maybe<CaseStudyRelationResponseCollection>;
  filterResource?: Maybe<Array<Maybe<ComponentResourcesFilterSection>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentResourcesResourceThirdSectionCase_StudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentResourcesResourceThirdSectionCase_Studies_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentResourcesResourceThirdSectionFilterResourceArgs = {
  filters?: InputMaybe<ComponentResourcesFilterSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentResourcesResourceThirdSectionInput = {
  case_studies?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  filterResource?: InputMaybe<Array<InputMaybe<ComponentResourcesFilterSectionInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentResourcesSecondSection = {
  __typename?: 'ComponentResourcesSecondSection';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
};

export type ComponentResourcesSecondSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentServiceExploreRecentWork = {
  __typename?: 'ComponentServiceExploreRecentWork';
  exploreCards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
  exploreLink?: Maybe<ComponentElementsLink>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentServiceExploreRecentWorkExploreCardsArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceExploreRecentWorkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceExploreRecentWorkFiltersInput>>>;
  exploreCards?: InputMaybe<ComponentSharedCardFiltersInput>;
  exploreLink?: InputMaybe<ComponentElementsLinkFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceExploreRecentWorkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceExploreRecentWorkFiltersInput>>>;
};

export type ComponentServiceExploreRecentWorkInput = {
  exploreCards?: InputMaybe<Array<InputMaybe<ComponentSharedCardInput>>>;
  exploreLink?: InputMaybe<ComponentElementsLinkInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentServiceHeroSection = {
  __typename?: 'ComponentServiceHeroSection';
  description?: Maybe<Scalars['String']['output']>;
  descriptionTwo?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  heroSectionButton?: Maybe<Array<Maybe<ComponentElementsButtons>>>;
  id: Scalars['ID']['output'];
  label?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
};


export type ComponentServiceHeroSectionHeroSectionButtonArgs = {
  filters?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentServiceHeroSectionLabelArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceHeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceHeroSectionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  descriptionTwo?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  heroSectionButton?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  label?: InputMaybe<ComponentElementsPointsFiltersInput>;
  not?: InputMaybe<ComponentServiceHeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceHeroSectionFiltersInput>>>;
};

export type ComponentServiceHeroSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionTwo?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heroSectionButton?: InputMaybe<Array<InputMaybe<ComponentElementsButtonsInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Array<InputMaybe<ComponentElementsPointsInput>>>;
};

export type ComponentServiceHowWeWork = {
  __typename?: 'ComponentServiceHowWeWork';
  heading?: Maybe<Scalars['String']['output']>;
  howWeWorkCards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
  id: Scalars['ID']['output'];
  labels?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
  link?: Maybe<ComponentElementsLink>;
};


export type ComponentServiceHowWeWorkHowWeWorkCardsArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentServiceHowWeWorkLabelsArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceHowWeWorkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceHowWeWorkFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  howWeWorkCards?: InputMaybe<ComponentSharedCardFiltersInput>;
  labels?: InputMaybe<ComponentElementsPointsFiltersInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ComponentServiceHowWeWorkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceHowWeWorkFiltersInput>>>;
};

export type ComponentServiceHowWeWorkInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  howWeWorkCards?: InputMaybe<Array<InputMaybe<ComponentSharedCardInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  labels?: InputMaybe<Array<InputMaybe<ComponentElementsPointsInput>>>;
  link?: InputMaybe<ComponentElementsLinkInput>;
};

export type ComponentServiceOurOperatingPhilosophy = {
  __typename?: 'ComponentServiceOurOperatingPhilosophy';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  operatingPhilosophyCards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
};


export type ComponentServiceOurOperatingPhilosophyOperatingPhilosophyCardsArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceOurOperatingPhilosophyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceOurOperatingPhilosophyFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceOurOperatingPhilosophyFiltersInput>;
  operatingPhilosophyCards?: InputMaybe<ComponentSharedCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceOurOperatingPhilosophyFiltersInput>>>;
};

export type ComponentServiceOurOperatingPhilosophyInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operatingPhilosophyCards?: InputMaybe<Array<InputMaybe<ComponentSharedCardInput>>>;
};

export type ComponentServiceServiceMisc = {
  __typename?: 'ComponentServiceServiceMisc';
  button?: Maybe<ComponentElementsButtons>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
};

export type ComponentServiceServiceMiscFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceServiceMiscFiltersInput>>>;
  button?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceServiceMiscFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceServiceMiscFiltersInput>>>;
};

export type ComponentServiceServiceMiscInput = {
  button?: InputMaybe<ComponentElementsButtonsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceWhatWeDesign = {
  __typename?: 'ComponentServiceWhatWeDesign';
  bottomDetails?: Maybe<ComponentSharedCard>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  whatWeDesignCards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
};


export type ComponentServiceWhatWeDesignWhatWeDesignCardsArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceWhatWeDesignFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceWhatWeDesignFiltersInput>>>;
  bottomDetails?: InputMaybe<ComponentSharedCardFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceWhatWeDesignFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceWhatWeDesignFiltersInput>>>;
  whatWeDesignCards?: InputMaybe<ComponentSharedCardFiltersInput>;
};

export type ComponentServiceWhatWeDesignInput = {
  bottomDetails?: InputMaybe<ComponentSharedCardInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  whatWeDesignCards?: InputMaybe<Array<InputMaybe<ComponentSharedCardInput>>>;
};

export type ComponentServiceWhyTeamHireUs = {
  __typename?: 'ComponentServiceWhyTeamHireUs';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  whyHireUsCards?: Maybe<Array<Maybe<ComponentSharedCard>>>;
};


export type ComponentServiceWhyTeamHireUsWhyHireUsCardsArgs = {
  filters?: InputMaybe<ComponentSharedCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceWhyTeamHireUsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceWhyTeamHireUsFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceWhyTeamHireUsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceWhyTeamHireUsFiltersInput>>>;
  whyHireUsCards?: InputMaybe<ComponentSharedCardFiltersInput>;
};

export type ComponentServiceWhyTeamHireUsInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  whyHireUsCards?: InputMaybe<Array<InputMaybe<ComponentSharedCardInput>>>;
};

export type ComponentSharedCard = {
  __typename?: 'ComponentSharedCard';
  button?: Maybe<ComponentElementsButtons>;
  cardImage?: Maybe<UploadFile>;
  cardTiles?: Maybe<Array<Maybe<ComponentSharedTiles>>>;
  description?: Maybe<Scalars['JSON']['output']>;
  details?: Maybe<Array<Maybe<ComponentHowWeWorkRightDetails>>>;
  heading?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  isIconVisible?: Maybe<Scalars['Boolean']['output']>;
  list?: Maybe<Array<Maybe<ComponentElementsPoints>>>;
};


export type ComponentSharedCardCardTilesArgs = {
  filters?: InputMaybe<ComponentSharedTilesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedCardDetailsArgs = {
  filters?: InputMaybe<ComponentHowWeWorkRightDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedCardListArgs = {
  filters?: InputMaybe<ComponentElementsPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedCardFiltersInput>>>;
  button?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  cardTiles?: InputMaybe<ComponentSharedTilesFiltersInput>;
  description?: InputMaybe<JsonFilterInput>;
  details?: InputMaybe<ComponentHowWeWorkRightDetailsFiltersInput>;
  heading?: InputMaybe<StringFilterInput>;
  isIconVisible?: InputMaybe<BooleanFilterInput>;
  list?: InputMaybe<ComponentElementsPointsFiltersInput>;
  not?: InputMaybe<ComponentSharedCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedCardFiltersInput>>>;
};

export type ComponentSharedCardInput = {
  button?: InputMaybe<ComponentElementsButtonsInput>;
  cardImage?: InputMaybe<Scalars['ID']['input']>;
  cardTiles?: InputMaybe<Array<InputMaybe<ComponentSharedTilesInput>>>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  details?: InputMaybe<Array<InputMaybe<ComponentHowWeWorkRightDetailsInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isIconVisible?: InputMaybe<Scalars['Boolean']['input']>;
  list?: InputMaybe<Array<InputMaybe<ComponentElementsPointsInput>>>;
};

export type ComponentSharedFocusString = {
  __typename?: 'ComponentSharedFocusString';
  id: Scalars['ID']['output'];
};

export type ComponentSharedFocusStringFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedFocusStringFiltersInput>>>;
  not?: InputMaybe<ComponentSharedFocusStringFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedFocusStringFiltersInput>>>;
};

export type ComponentSharedHeroSection = {
  __typename?: 'ComponentSharedHeroSection';
  button?: Maybe<Array<Maybe<ComponentElementsLink>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  highlightedDescription?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedHeroSectionButtonArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedHeroSectionInput = {
  button?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  highlightedDescription?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedMedia = {
  __typename?: 'ComponentSharedMedia';
  file?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMediaFiltersInput>>>;
  not?: InputMaybe<ComponentSharedMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMediaFiltersInput>>>;
};

export type ComponentSharedMediaInput = {
  file?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedProfile = {
  __typename?: 'ComponentSharedProfile';
  designation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profilePicture: Array<Maybe<UploadFile>>;
  profilePicture_connection?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentSharedProfileProfilePictureArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedProfileProfilePicture_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedProfileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedProfileFiltersInput>>>;
  designation?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedProfileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedProfileFiltersInput>>>;
};

export type ComponentSharedProfileInput = {
  designation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentSharedQuote = {
  __typename?: 'ComponentSharedQuote';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedRichText = {
  __typename?: 'ComponentSharedRichText';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  codeJson?: Maybe<Scalars['JSON']['output']>;
  focusString?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  og_graph?: Maybe<ComponentSharedSeoOg>;
  robots?: Maybe<Enum_Componentsharedseo_Robots>;
  slug?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  codeJson?: InputMaybe<JsonFilterInput>;
  focusString?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  og_graph?: InputMaybe<ComponentSharedSeoOgFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  robots?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoFocus = {
  __typename?: 'ComponentSharedSeoFocus';
  focusString?: Maybe<Array<Maybe<ComponentSharedFocusString>>>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedSeoFocusFocusStringArgs = {
  filters?: InputMaybe<ComponentSharedFocusStringFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  codeJson?: InputMaybe<Scalars['JSON']['input']>;
  focusString?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  og_graph?: InputMaybe<ComponentSharedSeoOgInput>;
  robots?: InputMaybe<Enum_Componentsharedseo_Robots>;
  slug?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentSharedSeoOg = {
  __typename?: 'ComponentSharedSeoOg';
  id: Scalars['ID']['output'];
  og_description?: Maybe<Scalars['String']['output']>;
  og_image?: Maybe<UploadFile>;
  og_title?: Maybe<Scalars['String']['output']>;
  twitter_card_type?: Maybe<Enum_Componentsharedseoog_Twitter_Card_Type>;
};

export type ComponentSharedSeoOgFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoOgFiltersInput>>>;
  not?: InputMaybe<ComponentSharedSeoOgFiltersInput>;
  og_description?: InputMaybe<StringFilterInput>;
  og_title?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoOgFiltersInput>>>;
  twitter_card_type?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeoOgInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Scalars['ID']['input']>;
  og_title?: InputMaybe<Scalars['String']['input']>;
  twitter_card_type?: InputMaybe<Enum_Componentsharedseoog_Twitter_Card_Type>;
};

export type ComponentSharedSlider = {
  __typename?: 'ComponentSharedSlider';
  files: Array<Maybe<UploadFile>>;
  files_connection?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedSliderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedSliderFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedTiles = {
  __typename?: 'ComponentSharedTiles';
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedTilesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTilesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedTilesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTilesFiltersInput>>>;
};

export type ComponentSharedTilesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSingleTypeCaseStudyPageHeroSection = {
  __typename?: 'ComponentSingleTypeCaseStudyPageHeroSection';
  button?: Maybe<ComponentElementsButtons>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSingleTypeCaseStudyPageHeroSectionInput = {
  button?: InputMaybe<ComponentElementsButtonsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSingleTypeCaseStudyPageMiscellaneous = {
  __typename?: 'ComponentSingleTypeCaseStudyPageMiscellaneous';
  button?: Maybe<ComponentElementsButtons>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
};

export type ComponentSingleTypeCaseStudyPageMiscellaneousInput = {
  button?: InputMaybe<ComponentElementsButtonsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUs = {
  __typename?: 'ContactUs';
  cards?: Maybe<Array<Maybe<ComponentContactUsContactUsBottomCards>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  socialMedia?: Maybe<Array<Maybe<ComponentElementsLink>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactUsCardsArgs = {
  filters?: InputMaybe<ComponentContactUsContactUsBottomCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContactUsSocialMediaArgs = {
  filters?: InputMaybe<ComponentElementsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactUsInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentContactUsContactUsBottomCardsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentElementsLinkInput>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum Enum_Componentblogandcasestudiessectionimage_Layout {
  Bento = 'bento',
  Default = 'default',
  TwoLeftFocus = 'twoLeftFocus',
  TwoRightFocus = 'twoRightFocus'
}

export enum Enum_Componentblogandcasestudiessepration_Styles {
  Dashed = 'dashed',
  Dotted = 'dotted',
  Solid = 'solid',
  Thick = 'thick'
}

export enum Enum_Componentcapablitiescapablitiescardsection_Servicename {
  Ai = 'AI',
  CommonEntryPoints = 'CommonEntryPoints',
  Design = 'Design',
  Engineering = 'Engineering',
  HowWeWork = 'HowWeWork'
}

export enum Enum_Componentsharedseoog_Twitter_Card_Type {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export enum Enum_Componentsharedseo_Robots {
  Follow = 'follow',
  Index = 'index',
  Nofollow = 'nofollow',
  Noindex = 'noindex'
}

export enum Enum_Subscription_Userstatus {
  Active = 'active',
  Cancelled = 'cancelled',
  Expired = 'expired',
  Inactive = 'inactive',
  Paused = 'paused'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  eventWhereAbout?: Maybe<Array<Maybe<ComponentEventsEventDetails>>>;
  featureImage?: Maybe<UploadFile>;
  mainSection?: Maybe<Array<Maybe<EventMainSectionDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventEventWhereAboutArgs = {
  filters?: InputMaybe<ComponentEventsEventDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventEntityResponseCollection = {
  __typename?: 'EventEntityResponseCollection';
  nodes: Array<Event>;
  pageInfo: Pagination;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  eventWhereAbout?: InputMaybe<ComponentEventsEventDetailsFiltersInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventWhereAbout?: InputMaybe<Array<InputMaybe<ComponentEventsEventDetailsInput>>>;
  featureImage?: InputMaybe<Scalars['ID']['input']>;
  mainSection?: InputMaybe<Array<Scalars['EventMainSectionDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EventMainSectionDynamicZone = ComponentBlogAndCasestudiesBlogOrCasestudyText | ComponentBlogAndCasestudiesSectionImage | ComponentBlogAndCasestudiesSepration | ComponentBlogAndCasestudiesTldrSection | ComponentBlogAndCasestudiesVideo | ComponentPodcasteEventsInterviewsShadowCard | Error;

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  nodes: Array<Event>;
};

export type Faq = {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  nodes: Array<Faq>;
  pageInfo: Pagination;
};

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type FaqRelationResponseCollection = {
  __typename?: 'FaqRelationResponseCollection';
  nodes: Array<Faq>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  footer?: Maybe<ComponentFooterFooterLinks>;
  legal?: Maybe<ComponentFooterFooterLegalSection>;
  logo?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialMedia?: Maybe<ComponentFooterFooterSocialMediaLinks>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterInput = {
  footer?: InputMaybe<ComponentFooterFooterLinksInput>;
  legal?: InputMaybe<ComponentFooterFooterLegalSectionInput>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialMedia?: InputMaybe<ComponentFooterFooterSocialMediaLinksInput>;
};

export type GenericMorph = About | Author | Blog | CapablitiesSubPage | Capablity | Career | CaseStudy | CaseStudyLandingPage | Category | ClientContact | ComponentAboutAboutFifthSection | ComponentAboutAboutFifthSectionCards | ComponentAboutAboutFourthSection | ComponentAboutAboutFourthSectionDetails | ComponentAboutAboutSecondSection | ComponentAboutAboutSeventhSection | ComponentAboutAboutSixthSection | ComponentAboutSeventhSectionCards | ComponentBlogAndCasestudiesBlogOrCasestudyText | ComponentBlogAndCasestudiesCaseStudyPositioning | ComponentBlogAndCasestudiesCodeSection | ComponentBlogAndCasestudiesCompanyProfile | ComponentBlogAndCasestudiesIframe | ComponentBlogAndCasestudiesProblemAndSolution | ComponentBlogAndCasestudiesSectionImage | ComponentBlogAndCasestudiesSepration | ComponentBlogAndCasestudiesTldrSection | ComponentBlogAndCasestudiesVideo | ComponentCapablitiesCapablitiesCardSection | ComponentCapablitiesCapablitiesCards | ComponentCareerCareerCards | ComponentCareerCareerFifthSection | ComponentCareerCareerFourthSection | ComponentCareerCareerFourthSectionNew | ComponentCareerCareerIconPoints | ComponentCareerCareerNewCards | ComponentCareerCareerSecondSection | ComponentCareerCareerThirdSection | ComponentCareerThirdRightSection | ComponentContactUsContactUsBottomCards | ComponentContactUsSocialMediaLinks | ComponentElementsButtons | ComponentElementsElements | ComponentElementsLink | ComponentElementsPoints | ComponentEventsEventDetails | ComponentFooterFooterLegalSection | ComponentFooterFooterLinks | ComponentFooterFooterSocialMediaLinks | ComponentFooterFooterSocialMediaRightSection | ComponentFooterPagesLinks | ComponentHomepageBranchCards | ComponentHomepageFourthSectionCards | ComponentHomepageHomepageContactAndTestimonials | ComponentHomepageHomepageFifthSection | ComponentHomepageHomepageFourthSection | ComponentHomepageHomepageHeroSection | ComponentHomepageHomepageSecondSection | ComponentHomepageHomepageSecondSectionPoints | ComponentHomepageHomepageThirdSection | ComponentHomepageSecondSectionCaseStudyRelation | ComponentHowWeWorkCardDetails | ComponentHowWeWorkCards | ComponentHowWeWorkHowWeWorkHeroSection | ComponentHowWeWorkLowFrictionWays | ComponentHowWeWorkRightDetails | ComponentHowWeWorkRightStartingPoint | ComponentLabsCardSection | ComponentLabsFilCardDetails | ComponentLabsFilLabsFilEighthSection | ComponentLabsFilLabsFilFifthSection | ComponentLabsFilLabsFilFourthSection | ComponentLabsFilLabsFilHeroSection | ComponentLabsFilLabsFilSecondSection | ComponentLabsFilLabsFilSeventhSection | ComponentLabsFilLabsFilSixthSection | ComponentLabsFilLabsFilThirdSection | ComponentLabsFilSixthSectionLeftCard | ComponentLabsFilSixthSectionRightCard | ComponentLabsFilThirdSectionCards | ComponentLabsLabsInterface | ComponentLabsLabsInterfaceCards | ComponentLegalDetails | ComponentMatterDesignMatterDesignCards | ComponentMatterDesignMatterDesignContactUs | ComponentMatterDesignMatterDesignDisplayCards | ComponentMatterDesignMatterDesignFifthSection | ComponentMatterDesignMatterDesignFourthSection | ComponentMatterDesignMatterDesignHeroSection | ComponentMatterDesignMatterDesignSecondSection | ComponentMatterDesignMatterDesignStripOne | ComponentMatterDesignMatterDesignThirdSection | ComponentNavbarNavbarLevel1Group | ComponentNavbarNavbarLevel2Group | ComponentPodcasteEventsInterviewsShadowCard | ComponentPspPspCards | ComponentPspPspCardsSection | ComponentPspPspContactus | ComponentPspPspFaqSection | ComponentPspPspResourceSection | ComponentPspPspSecondSection | ComponentPspPspSixthSection | ComponentPspPspTestimonialSection | ComponentPspPspThirdSection | ComponentResourcesCards | ComponentResourcesFilterSection | ComponentResourcesResourceFourthSection | ComponentResourcesResourceThirdSection | ComponentResourcesSecondSection | ComponentServiceExploreRecentWork | ComponentServiceHeroSection | ComponentServiceHowWeWork | ComponentServiceOurOperatingPhilosophy | ComponentServiceServiceMisc | ComponentServiceWhatWeDesign | ComponentServiceWhyTeamHireUs | ComponentSharedCard | ComponentSharedFocusString | ComponentSharedHeroSection | ComponentSharedMedia | ComponentSharedProfile | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSeo | ComponentSharedSeoFocus | ComponentSharedSeoOg | ComponentSharedSlider | ComponentSharedTiles | ComponentSingleTypeCaseStudyPageHeroSection | ComponentSingleTypeCaseStudyPageMiscellaneous | ContactUs | Event | Faq | Footer | Global | Homepage | HowWeWork | I18NLocale | Interview | LabSingleType | LabsFilLandingPage | MatterDesignSystem | Navbar | Opening | Podcast | PrivacyPolicy | ProgrammaticSeoPage | Resource | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Service | Subscription | Tag | TermsOfUse | Testimonial | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  defaultSeo?: Maybe<ComponentSharedSeo>;
  documentId: Scalars['ID']['output'];
  favicon?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  siteDescription: Scalars['String']['output'];
  siteName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalInput = {
  defaultSeo?: InputMaybe<ComponentSharedSeoInput>;
  favicon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  siteDescription?: InputMaybe<Scalars['String']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  contactSection?: Maybe<ComponentHomepageHomepageContactAndTestimonials>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  fifthSection?: Maybe<ComponentHomepageHomepageFifthSection>;
  fourthSection?: Maybe<ComponentHomepageHomepageFourthSection>;
  heroSection?: Maybe<ComponentHomepageHomepageHeroSection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentHomepageHomepageSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  thirdSection?: Maybe<ComponentHomepageHomepageThirdSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomepageInput = {
  contactSection?: InputMaybe<ComponentHomepageHomepageContactAndTestimonialsInput>;
  fifthSection?: InputMaybe<ComponentHomepageHomepageFifthSectionInput>;
  fourthSection?: InputMaybe<ComponentHomepageHomepageFourthSectionInput>;
  heroSection?: InputMaybe<ComponentHomepageHomepageHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentHomepageHomepageSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  thirdSection?: InputMaybe<ComponentHomepageHomepageThirdSectionInput>;
};

export type HowWeWork = {
  __typename?: 'HowWeWork';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentHowWeWorkHowWeWorkHeroSection>;
  miscSection?: Maybe<ComponentSingleTypeCaseStudyPageMiscellaneous>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentHowWeWorkRightStartingPoint>;
  seo?: Maybe<ComponentSharedSeo>;
  thirdSection?: Maybe<ComponentHowWeWorkLowFrictionWays>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HowWeWorkInput = {
  heroSection?: InputMaybe<ComponentHowWeWorkHowWeWorkHeroSectionInput>;
  miscSection?: InputMaybe<ComponentSingleTypeCaseStudyPageMiscellaneousInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentHowWeWorkRightStartingPointInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  thirdSection?: InputMaybe<ComponentHowWeWorkLowFrictionWaysInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type Interview = {
  __typename?: 'Interview';
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  featureImage?: Maybe<UploadFile>;
  mainSection?: Maybe<Array<Maybe<InterviewMainSectionDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InterviewCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InterviewCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InterviewTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InterviewTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InterviewEntityResponseCollection = {
  __typename?: 'InterviewEntityResponseCollection';
  nodes: Array<Interview>;
  pageInfo: Pagination;
};

export type InterviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InterviewFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<InterviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InterviewFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InterviewInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureImage?: InputMaybe<Scalars['ID']['input']>;
  mainSection?: InputMaybe<Array<Scalars['InterviewMainSectionDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type InterviewMainSectionDynamicZone = ComponentBlogAndCasestudiesBlogOrCasestudyText | ComponentBlogAndCasestudiesSectionImage | ComponentBlogAndCasestudiesSepration | ComponentBlogAndCasestudiesTldrSection | ComponentBlogAndCasestudiesVideo | ComponentPodcasteEventsInterviewsShadowCard | Error;

export type InterviewRelationResponseCollection = {
  __typename?: 'InterviewRelationResponseCollection';
  nodes: Array<Interview>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LabSingleType = {
  __typename?: 'LabSingleType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  detailSection?: Maybe<Array<Maybe<LabSingleTypeDetailSectionDynamicZone>>>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentSharedHeroSection>;
  interfaceLabs?: Maybe<ComponentLabsLabsInterface>;
  miscSection?: Maybe<ComponentServiceServiceMisc>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LabSingleTypeDetailSectionDynamicZone = ComponentLabsCardSection | Error;

export type LabSingleTypeInput = {
  detailSection?: InputMaybe<Array<Scalars['LabSingleTypeDetailSectionDynamicZoneInput']['input']>>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  interfaceLabs?: InputMaybe<ComponentLabsLabsInterfaceInput>;
  miscSection?: InputMaybe<ComponentServiceServiceMiscInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type LabsFilLandingPage = {
  __typename?: 'LabsFilLandingPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  eighthSection?: Maybe<ComponentLabsFilLabsFilEighthSection>;
  fifthSection?: Maybe<ComponentLabsFilLabsFilFifthSection>;
  fourthSection?: Maybe<ComponentLabsFilLabsFilFourthSection>;
  heroSection?: Maybe<ComponentLabsFilLabsFilHeroSection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentLabsFilLabsFilSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  seventhSection?: Maybe<ComponentLabsFilLabsFilSeventhSection>;
  sixthSection?: Maybe<ComponentLabsFilLabsFilSixthSection>;
  thirdSection?: Maybe<ComponentLabsFilLabsFilThirdSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LabsFilLandingPageInput = {
  eighthSection?: InputMaybe<ComponentLabsFilLabsFilEighthSectionInput>;
  fifthSection?: InputMaybe<ComponentLabsFilLabsFilFifthSectionInput>;
  fourthSection?: InputMaybe<ComponentLabsFilLabsFilFourthSectionInput>;
  heroSection?: InputMaybe<ComponentLabsFilLabsFilHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentLabsFilLabsFilSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  seventhSection?: InputMaybe<ComponentLabsFilLabsFilSeventhSectionInput>;
  sixthSection?: InputMaybe<ComponentLabsFilLabsFilSixthSectionInput>;
  thirdSection?: InputMaybe<ComponentLabsFilLabsFilThirdSectionInput>;
};

export type MatterDesignSystem = {
  __typename?: 'MatterDesignSystem';
  contactUs?: Maybe<ComponentMatterDesignMatterDesignContactUs>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  fifthSection?: Maybe<ComponentMatterDesignMatterDesignFifthSection>;
  fourthSection?: Maybe<ComponentMatterDesignMatterDesignFourthSection>;
  heroSection?: Maybe<ComponentMatterDesignMatterDesignHeroSection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentMatterDesignMatterDesignSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  stripOne?: Maybe<ComponentMatterDesignMatterDesignStripOne>;
  stripTwo?: Maybe<ComponentMatterDesignMatterDesignStripOne>;
  thirdSection?: Maybe<ComponentMatterDesignMatterDesignThirdSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MatterDesignSystemInput = {
  contactUs?: InputMaybe<ComponentMatterDesignMatterDesignContactUsInput>;
  fifthSection?: InputMaybe<ComponentMatterDesignMatterDesignFifthSectionInput>;
  fourthSection?: InputMaybe<ComponentMatterDesignMatterDesignFourthSectionInput>;
  heroSection?: InputMaybe<ComponentMatterDesignMatterDesignHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentMatterDesignMatterDesignSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  stripOne?: InputMaybe<ComponentMatterDesignMatterDesignStripOneInput>;
  stripTwo?: InputMaybe<ComponentMatterDesignMatterDesignStripOneInput>;
  thirdSection?: InputMaybe<ComponentMatterDesignMatterDesignThirdSectionInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAuthor?: Maybe<Author>;
  createBlog?: Maybe<Blog>;
  createCapablitiesSubPage?: Maybe<CapablitiesSubPage>;
  createCaseStudy?: Maybe<CaseStudy>;
  createCategory?: Maybe<Category>;
  createClientContact?: Maybe<ClientContact>;
  createEvent?: Maybe<Event>;
  createFaq?: Maybe<Faq>;
  createInterview?: Maybe<Interview>;
  createOpening?: Maybe<Opening>;
  createPodcast?: Maybe<Podcast>;
  createProgrammaticSeoPage?: Maybe<ProgrammaticSeoPage>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createSubscription?: Maybe<Subscription>;
  createTag?: Maybe<Tag>;
  createTestimonial?: Maybe<Testimonial>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<DeleteMutationResponse>;
  deleteAuthor?: Maybe<DeleteMutationResponse>;
  deleteBlog?: Maybe<DeleteMutationResponse>;
  deleteCapablitiesSubPage?: Maybe<DeleteMutationResponse>;
  deleteCapablity?: Maybe<DeleteMutationResponse>;
  deleteCareer?: Maybe<DeleteMutationResponse>;
  deleteCaseStudy?: Maybe<DeleteMutationResponse>;
  deleteCaseStudyLandingPage?: Maybe<DeleteMutationResponse>;
  deleteCategory?: Maybe<DeleteMutationResponse>;
  deleteClientContact?: Maybe<DeleteMutationResponse>;
  deleteContactUs?: Maybe<DeleteMutationResponse>;
  deleteEvent?: Maybe<DeleteMutationResponse>;
  deleteFaq?: Maybe<DeleteMutationResponse>;
  deleteFooter?: Maybe<DeleteMutationResponse>;
  deleteGlobal?: Maybe<DeleteMutationResponse>;
  deleteHomepage?: Maybe<DeleteMutationResponse>;
  deleteHowWeWork?: Maybe<DeleteMutationResponse>;
  deleteInterview?: Maybe<DeleteMutationResponse>;
  deleteLabSingleType?: Maybe<DeleteMutationResponse>;
  deleteLabsFilLandingPage?: Maybe<DeleteMutationResponse>;
  deleteMatterDesignSystem?: Maybe<DeleteMutationResponse>;
  deleteNavbar?: Maybe<DeleteMutationResponse>;
  deleteOpening?: Maybe<DeleteMutationResponse>;
  deletePodcast?: Maybe<DeleteMutationResponse>;
  deletePrivacyPolicy?: Maybe<DeleteMutationResponse>;
  deleteProgrammaticSeoPage?: Maybe<DeleteMutationResponse>;
  deleteResource?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteService?: Maybe<DeleteMutationResponse>;
  deleteSubscription?: Maybe<DeleteMutationResponse>;
  deleteTag?: Maybe<DeleteMutationResponse>;
  deleteTermsOfUse?: Maybe<DeleteMutationResponse>;
  deleteTestimonial?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<About>;
  updateAuthor?: Maybe<Author>;
  updateBlog?: Maybe<Blog>;
  updateCapablitiesSubPage?: Maybe<CapablitiesSubPage>;
  updateCapablity?: Maybe<Capablity>;
  updateCareer?: Maybe<Career>;
  updateCaseStudy?: Maybe<CaseStudy>;
  updateCaseStudyLandingPage?: Maybe<CaseStudyLandingPage>;
  updateCategory?: Maybe<Category>;
  updateClientContact?: Maybe<ClientContact>;
  updateContactUs?: Maybe<ContactUs>;
  updateEvent?: Maybe<Event>;
  updateFaq?: Maybe<Faq>;
  updateFooter?: Maybe<Footer>;
  updateGlobal?: Maybe<Global>;
  updateHomepage?: Maybe<Homepage>;
  updateHowWeWork?: Maybe<HowWeWork>;
  updateInterview?: Maybe<Interview>;
  updateLabSingleType?: Maybe<LabSingleType>;
  updateLabsFilLandingPage?: Maybe<LabsFilLandingPage>;
  updateMatterDesignSystem?: Maybe<MatterDesignSystem>;
  updateNavbar?: Maybe<Navbar>;
  updateOpening?: Maybe<Opening>;
  updatePodcast?: Maybe<Podcast>;
  updatePrivacyPolicy?: Maybe<PrivacyPolicy>;
  updateProgrammaticSeoPage?: Maybe<ProgrammaticSeoPage>;
  updateResource?: Maybe<Resource>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateService?: Maybe<Service>;
  updateSubscription?: Maybe<Subscription>;
  updateTag?: Maybe<Tag>;
  updateTermsOfUse?: Maybe<TermsOfUse>;
  updateTestimonial?: Maybe<Testimonial>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCapablitiesSubPageArgs = {
  data: CapablitiesSubPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCaseStudyArgs = {
  data: CaseStudyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateClientContactArgs = {
  data: ClientContactInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateEventArgs = {
  data: EventInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateInterviewArgs = {
  data: InterviewInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOpeningArgs = {
  data: OpeningInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePodcastArgs = {
  data: PodcastInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProgrammaticSeoPageArgs = {
  data: ProgrammaticSeoPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAuthorArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBlogArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCapablitiesSubPageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCaseStudyArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteClientContactArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteEventArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteFaqArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteInterviewArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOpeningArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePodcastArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProgrammaticSeoPageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteSubscriptionArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTestimonialArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCapablitiesSubPageArgs = {
  data: CapablitiesSubPageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCapablityArgs = {
  data: CapablityInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCareerArgs = {
  data: CareerInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCaseStudyArgs = {
  data: CaseStudyInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCaseStudyLandingPageArgs = {
  data: CaseStudyLandingPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateClientContactArgs = {
  data: ClientContactInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateContactUsArgs = {
  data: ContactUsInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFaqArgs = {
  data: FaqInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHowWeWorkArgs = {
  data: HowWeWorkInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateInterviewArgs = {
  data: InterviewInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLabSingleTypeArgs = {
  data: LabSingleTypeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLabsFilLandingPageArgs = {
  data: LabsFilLandingPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateMatterDesignSystemArgs = {
  data: MatterDesignSystemInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateNavbarArgs = {
  data: NavbarInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOpeningArgs = {
  data: OpeningInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePodcastArgs = {
  data: PodcastInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePrivacyPolicyArgs = {
  data: PrivacyPolicyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProgrammaticSeoPageArgs = {
  data: ProgrammaticSeoPageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateResourceArgs = {
  data: ResourceInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTermsOfUseArgs = {
  data: TermsOfUseInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Navbar = {
  __typename?: 'Navbar';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  navButton?: Maybe<Array<Maybe<ComponentElementsButtons>>>;
  navLevelOneGroup?: Maybe<Array<Maybe<ComponentNavbarNavbarLevel1Group>>>;
  navbarLogo?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NavbarNavButtonArgs = {
  filters?: InputMaybe<ComponentElementsButtonsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NavbarNavLevelOneGroupArgs = {
  filters?: InputMaybe<ComponentNavbarNavbarLevel1GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavbarInput = {
  navButton?: InputMaybe<Array<InputMaybe<ComponentElementsButtonsInput>>>;
  navLevelOneGroup?: InputMaybe<Array<InputMaybe<ComponentNavbarNavbarLevel1GroupInput>>>;
  navbarLogo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Opening = {
  __typename?: 'Opening';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  link?: Maybe<ComponentElementsLink>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  roleDescription?: Maybe<Scalars['String']['output']>;
  roleDomain?: Maybe<Scalars['String']['output']>;
  roleLocation?: Maybe<Scalars['String']['output']>;
  roleName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OpeningEntityResponseCollection = {
  __typename?: 'OpeningEntityResponseCollection';
  nodes: Array<Opening>;
  pageInfo: Pagination;
};

export type OpeningFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OpeningFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<OpeningFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OpeningFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  roleDescription?: InputMaybe<StringFilterInput>;
  roleDomain?: InputMaybe<StringFilterInput>;
  roleLocation?: InputMaybe<StringFilterInput>;
  roleName?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OpeningInput = {
  link?: InputMaybe<ComponentElementsLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  roleDescription?: InputMaybe<Scalars['String']['input']>;
  roleDomain?: InputMaybe<Scalars['String']['input']>;
  roleLocation?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
};

export type OpeningRelationResponseCollection = {
  __typename?: 'OpeningRelationResponseCollection';
  nodes: Array<Opening>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Podcast = {
  __typename?: 'Podcast';
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  featureImage?: Maybe<UploadFile>;
  mainSection?: Maybe<Array<Maybe<PodcastMainSectionDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
  thumbnail?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PodcastCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PodcastCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PodcastTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PodcastTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PodcastEntityResponseCollection = {
  __typename?: 'PodcastEntityResponseCollection';
  nodes: Array<Podcast>;
  pageInfo: Pagination;
};

export type PodcastFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PodcastFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PodcastFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PodcastFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PodcastInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureImage?: InputMaybe<Scalars['ID']['input']>;
  mainSection?: InputMaybe<Array<Scalars['PodcastMainSectionDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastMainSectionDynamicZone = ComponentBlogAndCasestudiesBlogOrCasestudyText | ComponentBlogAndCasestudiesSectionImage | ComponentBlogAndCasestudiesSepration | ComponentBlogAndCasestudiesTldrSection | ComponentBlogAndCasestudiesVideo | ComponentPodcasteEventsInterviewsShadowCard | Error;

export type PodcastRelationResponseCollection = {
  __typename?: 'PodcastRelationResponseCollection';
  nodes: Array<Podcast>;
};

export type PrivacyPolicy = {
  __typename?: 'PrivacyPolicy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  legalDescription?: Maybe<Array<Maybe<PrivacyPolicyLegalDescriptionDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PrivacyPolicyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  legalDescription?: InputMaybe<Array<Scalars['PrivacyPolicyLegalDescriptionDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type PrivacyPolicyLegalDescriptionDynamicZone = ComponentLegalDetails | Error;

export type ProgrammaticSeoPage = {
  __typename?: 'ProgrammaticSeoPage';
  contactUs?: Maybe<ComponentPspPspContactus>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  faqSection?: Maybe<ComponentPspPspFaqSection>;
  fifthSection?: Maybe<Scalars['JSON']['output']>;
  fourthSection?: Maybe<Scalars['JSON']['output']>;
  heroSectionLink?: Maybe<ComponentElementsLink>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  resourceSection?: Maybe<ComponentPspPspResourceSection>;
  secondSection?: Maybe<ComponentPspPspSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  sixthSection?: Maybe<ComponentPspPspSixthSection>;
  slug?: Maybe<Scalars['String']['output']>;
  testimonialSection?: Maybe<ComponentPspPspTestimonialSection>;
  thirdSection?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgrammaticSeoPageEntityResponseCollection = {
  __typename?: 'ProgrammaticSeoPageEntityResponseCollection';
  nodes: Array<ProgrammaticSeoPage>;
  pageInfo: Pagination;
};

export type ProgrammaticSeoPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProgrammaticSeoPageFiltersInput>>>;
  contactUs?: InputMaybe<ComponentPspPspContactusFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  faqSection?: InputMaybe<ComponentPspPspFaqSectionFiltersInput>;
  fifthSection?: InputMaybe<JsonFilterInput>;
  fourthSection?: InputMaybe<JsonFilterInput>;
  heroSectionLink?: InputMaybe<ComponentElementsLinkFiltersInput>;
  not?: InputMaybe<ProgrammaticSeoPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProgrammaticSeoPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resourceSection?: InputMaybe<ComponentPspPspResourceSectionFiltersInput>;
  secondSection?: InputMaybe<ComponentPspPspSecondSectionFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sixthSection?: InputMaybe<ComponentPspPspSixthSectionFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  testimonialSection?: InputMaybe<ComponentPspPspTestimonialSectionFiltersInput>;
  thirdSection?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProgrammaticSeoPageInput = {
  contactUs?: InputMaybe<ComponentPspPspContactusInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  faqSection?: InputMaybe<ComponentPspPspFaqSectionInput>;
  fifthSection?: InputMaybe<Scalars['JSON']['input']>;
  fourthSection?: InputMaybe<Scalars['JSON']['input']>;
  heroSectionLink?: InputMaybe<ComponentElementsLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resourceSection?: InputMaybe<ComponentPspPspResourceSectionInput>;
  secondSection?: InputMaybe<ComponentPspPspSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sixthSection?: InputMaybe<ComponentPspPspSixthSectionInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  testimonialSection?: InputMaybe<ComponentPspPspTestimonialSectionInput>;
  thirdSection?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  author?: Maybe<Author>;
  authors: Array<Maybe<Author>>;
  authors_connection?: Maybe<AuthorEntityResponseCollection>;
  blog?: Maybe<Blog>;
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogEntityResponseCollection>;
  capablitiesSubPage?: Maybe<CapablitiesSubPage>;
  capablitiesSubPages: Array<Maybe<CapablitiesSubPage>>;
  capablitiesSubPages_connection?: Maybe<CapablitiesSubPageEntityResponseCollection>;
  capablity?: Maybe<Capablity>;
  career?: Maybe<Career>;
  caseStudies: Array<Maybe<CaseStudy>>;
  caseStudies_connection?: Maybe<CaseStudyEntityResponseCollection>;
  caseStudy?: Maybe<CaseStudy>;
  caseStudyLandingPage?: Maybe<CaseStudyLandingPage>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<Category>;
  clientContact?: Maybe<ClientContact>;
  clientContacts: Array<Maybe<ClientContact>>;
  clientContacts_connection?: Maybe<ClientContactEntityResponseCollection>;
  contactUs?: Maybe<ContactUs>;
  event?: Maybe<Event>;
  events: Array<Maybe<Event>>;
  events_connection?: Maybe<EventEntityResponseCollection>;
  faq?: Maybe<Faq>;
  faqs: Array<Maybe<Faq>>;
  faqs_connection?: Maybe<FaqEntityResponseCollection>;
  footer?: Maybe<Footer>;
  global?: Maybe<Global>;
  homepage?: Maybe<Homepage>;
  howWeWork?: Maybe<HowWeWork>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  interview?: Maybe<Interview>;
  interviews: Array<Maybe<Interview>>;
  interviews_connection?: Maybe<InterviewEntityResponseCollection>;
  labSingleType?: Maybe<LabSingleType>;
  labsFilLandingPage?: Maybe<LabsFilLandingPage>;
  matterDesignSystem?: Maybe<MatterDesignSystem>;
  me?: Maybe<UsersPermissionsMe>;
  navbar?: Maybe<Navbar>;
  opening?: Maybe<Opening>;
  openings: Array<Maybe<Opening>>;
  openings_connection?: Maybe<OpeningEntityResponseCollection>;
  podcast?: Maybe<Podcast>;
  podcasts: Array<Maybe<Podcast>>;
  podcasts_connection?: Maybe<PodcastEntityResponseCollection>;
  privacyPolicy?: Maybe<PrivacyPolicy>;
  programmaticSeoPage?: Maybe<ProgrammaticSeoPage>;
  programmaticSeoPages: Array<Maybe<ProgrammaticSeoPage>>;
  programmaticSeoPages_connection?: Maybe<ProgrammaticSeoPageEntityResponseCollection>;
  resource?: Maybe<Resource>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  service?: Maybe<Service>;
  subscription?: Maybe<Subscription>;
  subscriptions: Array<Maybe<Subscription>>;
  subscriptions_connection?: Maybe<SubscriptionEntityResponseCollection>;
  tag?: Maybe<Tag>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagEntityResponseCollection>;
  termsOfUse?: Maybe<TermsOfUse>;
  testimonial?: Maybe<Testimonial>;
  testimonials: Array<Maybe<Testimonial>>;
  testimonials_connection?: Maybe<TestimonialEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthorArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthors_ConnectionArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBlogArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCapablitiesSubPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCapablitiesSubPagesArgs = {
  filters?: InputMaybe<CapablitiesSubPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCapablitiesSubPages_ConnectionArgs = {
  filters?: InputMaybe<CapablitiesSubPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCapablityArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCareerArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCaseStudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCaseStudies_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCaseStudyArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCaseStudyLandingPageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryClientContactArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryClientContactsArgs = {
  filters?: InputMaybe<ClientContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryClientContacts_ConnectionArgs = {
  filters?: InputMaybe<ClientContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactUsArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEventArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqs_ConnectionArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFooterArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGlobalArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHomepageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHowWeWorkArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInterviewArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInterviewsArgs = {
  filters?: InputMaybe<InterviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInterviews_ConnectionArgs = {
  filters?: InputMaybe<InterviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLabSingleTypeArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLabsFilLandingPageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMatterDesignSystemArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNavbarArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOpeningArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOpeningsArgs = {
  filters?: InputMaybe<OpeningFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOpenings_ConnectionArgs = {
  filters?: InputMaybe<OpeningFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPodcastArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPodcastsArgs = {
  filters?: InputMaybe<PodcastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPodcasts_ConnectionArgs = {
  filters?: InputMaybe<PodcastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPrivacyPolicyArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProgrammaticSeoPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProgrammaticSeoPagesArgs = {
  filters?: InputMaybe<ProgrammaticSeoPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProgrammaticSeoPages_ConnectionArgs = {
  filters?: InputMaybe<ProgrammaticSeoPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryResourceArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServiceArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySubscriptionArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySubscriptionsArgs = {
  filters?: InputMaybe<SubscriptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySubscriptions_ConnectionArgs = {
  filters?: InputMaybe<SubscriptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTermsOfUseArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTestimonialArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTestimonials_ConnectionArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type Resource = {
  __typename?: 'Resource';
  cardDetails?: Maybe<Array<Maybe<ComponentResourcesCards>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  fourthSection?: Maybe<ComponentResourcesResourceFourthSection>;
  heading?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  secondSection?: Maybe<ComponentResourcesSecondSection>;
  seo?: Maybe<ComponentSharedSeo>;
  thirdSection?: Maybe<ComponentResourcesResourceThirdSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ResourceCardDetailsArgs = {
  filters?: InputMaybe<ComponentResourcesCardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResourceInput = {
  cardDetails?: InputMaybe<Array<InputMaybe<ComponentResourcesCardsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fourthSection?: InputMaybe<ComponentResourcesResourceFourthSectionInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  secondSection?: InputMaybe<ComponentResourcesSecondSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  thirdSection?: InputMaybe<ComponentResourcesResourceThirdSectionInput>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type Service = {
  __typename?: 'Service';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  hero?: Maybe<ComponentServiceHeroSection>;
  howWeWorkSection?: Maybe<ComponentServiceHowWeWork>;
  miscSection?: Maybe<ComponentServiceServiceMisc>;
  operatingPhilosophySection?: Maybe<ComponentServiceOurOperatingPhilosophy>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  recentWorkSection?: Maybe<ComponentServiceExploreRecentWork>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatWeDesignSection?: Maybe<ComponentServiceWhatWeDesign>;
  whyTeamHireSection?: Maybe<ComponentServiceWhyTeamHireUs>;
};

export type ServiceInput = {
  hero?: InputMaybe<ComponentServiceHeroSectionInput>;
  howWeWorkSection?: InputMaybe<ComponentServiceHowWeWorkInput>;
  miscSection?: InputMaybe<ComponentServiceServiceMiscInput>;
  operatingPhilosophySection?: InputMaybe<ComponentServiceOurOperatingPhilosophyInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  recentWorkSection?: InputMaybe<ComponentServiceExploreRecentWorkInput>;
  whatWeDesignSection?: InputMaybe<ComponentServiceWhatWeDesignInput>;
  whyTeamHireSection?: InputMaybe<ComponentServiceWhyTeamHireUsInput>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userStatus?: Maybe<Enum_Subscription_Userstatus>;
};

export type SubscriptionEntityResponseCollection = {
  __typename?: 'SubscriptionEntityResponseCollection';
  nodes: Array<Subscription>;
  pageInfo: Pagination;
};

export type SubscriptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SubscriptionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  endAt?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<SubscriptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  startedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userStatus?: InputMaybe<StringFilterInput>;
};

export type SubscriptionInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userStatus?: InputMaybe<Enum_Subscription_Userstatus>;
};

export type Tag = {
  __typename?: 'Tag';
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogRelationResponseCollection>;
  case_studies: Array<Maybe<CaseStudy>>;
  case_studies_connection?: Maybe<CaseStudyRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  events: Array<Maybe<Event>>;
  events_connection?: Maybe<EventRelationResponseCollection>;
  interviews: Array<Maybe<Interview>>;
  interviews_connection?: Maybe<InterviewRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  podcasts: Array<Maybe<Podcast>>;
  podcasts_connection?: Maybe<PodcastRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagCase_StudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagCase_Studies_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagInterviewsArgs = {
  filters?: InputMaybe<InterviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagInterviews_ConnectionArgs = {
  filters?: InputMaybe<InterviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagPodcastsArgs = {
  filters?: InputMaybe<PodcastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagPodcasts_ConnectionArgs = {
  filters?: InputMaybe<PodcastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  nodes: Array<Tag>;
  pageInfo: Pagination;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  case_studies?: InputMaybe<CaseStudyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  interviews?: InputMaybe<InterviewFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  podcasts?: InputMaybe<PodcastFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  case_studies?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  interviews?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  podcasts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  nodes: Array<Tag>;
};

export type TermsOfUse = {
  __typename?: 'TermsOfUse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  legalDescription?: Maybe<Array<Maybe<TermsOfUseLegalDescriptionDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TermsOfUseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  legalDescription?: InputMaybe<Array<Scalars['TermsOfUseLegalDescriptionDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type TermsOfUseLegalDescriptionDynamicZone = ComponentLegalDetails | Error;

export type Testimonial = {
  __typename?: 'Testimonial';
  clientComments?: Maybe<Scalars['String']['output']>;
  clientCompany?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  clientPosition?: Maybe<Scalars['String']['output']>;
  clientProfilePicture?: Maybe<UploadFile>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TestimonialEntityResponseCollection = {
  __typename?: 'TestimonialEntityResponseCollection';
  nodes: Array<Testimonial>;
  pageInfo: Pagination;
};

export type TestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  clientComments?: InputMaybe<StringFilterInput>;
  clientCompany?: InputMaybe<StringFilterInput>;
  clientName?: InputMaybe<StringFilterInput>;
  clientPosition?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TestimonialInput = {
  clientComments?: InputMaybe<Scalars['String']['input']>;
  clientCompany?: InputMaybe<Scalars['String']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  clientPosition?: InputMaybe<Scalars['String']['input']>;
  clientProfilePicture?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestimonialRelationResponseCollection = {
  __typename?: 'TestimonialRelationResponseCollection';
  nodes: Array<Testimonial>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'About', heading?: string | null, headingTwo?: string | null, description?: string | null, descriptionTwo?: string | null, bgImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, secondSection?: { __typename?: 'ComponentAboutAboutSecondSection', heading?: string | null, description?: string | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null> } | null, thirdSection?: { __typename?: 'ComponentAboutAboutSecondSection', heading?: string | null, description?: string | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null> } | null, fourthSection?: { __typename?: 'ComponentAboutAboutFourthSection', label?: string | null, accordianDetails?: Array<{ __typename?: 'ComponentAboutAboutFourthSectionDetails', id: string, heading?: string | null, description?: string | null } | null> | null } | null, fifthSection?: { __typename?: 'ComponentAboutAboutFifthSection', heading?: string | null, cardDetails?: Array<{ __typename?: 'ComponentAboutAboutFifthSectionCards', id: string, description?: string | null, designation?: string | null, isImageVisible?: boolean | null, profilePicture?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null } | null> | null } | null, sixthSection?: { __typename?: 'ComponentAboutAboutSixthSection', heading?: string | null, sixthSectionCards?: Array<{ __typename?: 'ComponentAboutAboutFifthSectionCards', id: string, heading?: string | null, description?: string | null } | null> | null } | null, seventhSection?: { __typename?: 'ComponentAboutAboutSeventhSection', heading?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null, isExternal?: boolean | null } | null, cardDetails?: Array<{ __typename?: 'ComponentAboutSeventhSectionCards', id: string, heading?: string | null, description?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null, isExternal?: boolean | null } | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null } | null> | null } | null } | null };

export type CapablityQueryVariables = Exact<{ [key: string]: never; }>;


export type CapablityQuery = { __typename?: 'Query', capablity?: { __typename?: 'Capablity', capablitiesSingleType?: Array<
      | { __typename: 'ComponentCapablitiesCapablitiesCardSection', id: string, heading?: string | null, description?: string | null, serviceName?: Enum_Componentcapablitiescapablitiescardsection_Servicename | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, sectionCards?: Array<{ __typename?: 'ComponentCapablitiesCapablitiesCards', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null, cardPoints?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null } | null> | null, subRouteLink?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null }
      | { __typename: 'ComponentServiceHeroSection', heading?: string | null, description?: string | null, descriptionTwo?: string | null, heroSectionButton?: Array<{ __typename?: 'ComponentElementsButtons', id: string, name?: string | null, href?: string | null } | null> | null, label?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null }
      | { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string }
      | { __typename?: 'Error' }
     | null> | null } | null };

export type CareerQueryVariables = Exact<{ [key: string]: never; }>;


export type CareerQuery = { __typename?: 'Query', career?: { __typename?: 'Career', heading?: string | null, description?: string | null, secondSection?: { __typename?: 'ComponentCareerCareerSecondSection', heading?: string | null, cardDetails?: Array<{ __typename?: 'ComponentCareerCareerCards', id: string, heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null } | null> | null } | null, thirdSection?: { __typename?: 'ComponentCareerCareerThirdSection', heading?: string | null, description?: string | null, openings: Array<{ __typename?: 'Opening', documentId: string, roleName?: string | null, roleLocation?: string | null, roleDomain?: string | null, roleDescription?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null, isExternal?: boolean | null } | null } | null> } | null, fourthSection?: { __typename?: 'ComponentCareerCareerFourthSectionNew', heading?: string | null, bottomHeading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, isExternal?: boolean | null, name?: string | null } | null, bottomLink?: { __typename?: 'ComponentElementsLink', href?: string | null, isExternal?: boolean | null, name?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCareerCareerNewCards', id: string, heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, isExternal?: boolean | null, name?: string | null } | null } | null> | null } | null } | null };

export type ContactUsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactUsQuery = { __typename?: 'Query', contactUs?: { __typename?: 'ContactUs', heading?: string | null, description?: string | null, cards?: Array<{ __typename?: 'ComponentContactUsContactUsBottomCards', id: string, heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null } | null } | null> | null, socialMedia?: Array<{ __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null, id: string, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> | null } | null };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', footer?: { __typename?: 'Footer', logo?: { __typename?: 'UploadFile', alternativeText?: string | null, height?: number | null, width?: number | null, url: string } | null, footer?: { __typename?: 'ComponentFooterFooterLinks', heading?: string | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null, links?: Array<{ __typename?: 'ComponentFooterPagesLinks', id: string, heading?: string | null, pageLinks?: Array<{ __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null, isExternal?: boolean | null } | null> | null } | null> | null } | null, socialMedia?: { __typename?: 'ComponentFooterFooterSocialMediaLinks', label?: string | null, socialMedia?: Array<{ __typename?: 'ComponentElementsLink', id: string, href?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> | null, rightSection?: { __typename?: 'ComponentFooterFooterSocialMediaRightSection', id: string, heading?: string | null, description?: string | null, links?: Array<{ __typename?: 'ComponentElementsLink', isExternal?: boolean | null, name?: string | null, href?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null } | null> | null } | null } | null, legal?: { __typename?: 'ComponentFooterFooterLegalSection', address?: string | null, legalLinks?: Array<{ __typename?: 'ComponentElementsLink', id: string, name?: string | null, href?: string | null } | null> | null } | null } | null };

export type BlogsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type BlogsQuery = { __typename?: 'Query', blogs: Array<{ __typename: 'Blog', createdAt?: any | null, updatedAt?: any | null, title?: string | null, slug?: string | null, featureImage: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null>, blogProfileSection?: Array<{ __typename?: 'ComponentSharedProfile', id: string, name?: string | null, designation?: string | null, profilePicture: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | null> | null, mainSection?: Array<
      | { __typename: 'ComponentBlogAndCasestudiesBlogOrCasestudyText', id: string, blogContent?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesCodeSection', id: string, codeSnippet?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesIframe', url?: string | null, title?: string | null, width?: number | null, description?: any | null, embedCode?: string | null, height?: number | null, id: string, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }
      | { __typename: 'ComponentBlogAndCasestudiesSectionImage', layout?: Enum_Componentblogandcasestudiessectionimage_Layout | null, imageSection: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null> }
      | { __typename: 'ComponentBlogAndCasestudiesSepration', title?: string | null, color?: string | null, marginBottom?: number | null, marginTop?: number | null, thickness?: number | null }
      | { __typename: 'ComponentBlogAndCasestudiesTldrSection', id: string, heading?: string | null, tdlrDescription?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesVideo', id: string, autoplay?: boolean | null, description?: any | null, loop?: boolean | null, title?: string | null, videoFile: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null>, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }
      | { __typename: 'ComponentSharedRichText', body?: string | null }
      | { __typename: 'ComponentSharedSeo', metaTitle: string, metaDescription: string }
      | { __typename?: 'Error' }
     | null> | null } | null> };

export type AllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBlogsQuery = { __typename?: 'Query', blogs: Array<{ __typename?: 'Blog', title?: string | null, slug?: string | null, publishedAt?: any | null, updatedAt?: any | null, createdAt?: any | null, documentId: string, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null } | null>, featureImage: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null> } | null> };

export type CapablitiesSubPagesQueryVariables = Exact<{
  filters?: InputMaybe<CapablitiesSubPageFiltersInput>;
}>;


export type CapablitiesSubPagesQuery = { __typename?: 'Query', capablitiesSubPages: Array<{ __typename?: 'CapablitiesSubPage', subPageName?: string | null, slug?: string | null, hero?: { __typename: 'ComponentServiceHeroSection', heading?: string | null, description?: string | null, label?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, heroSectionButton?: Array<{ __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null> | null } | null, whyTeamHireSection?: { __typename: 'ComponentServiceWhyTeamHireUs', heading?: string | null, whyHireUsCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, icon?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, list?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null } | null> | null } | null, whatWeDesignSection?: { __typename: 'ComponentServiceWhatWeDesign', heading?: string | null, whatWeDesignCards?: Array<{ __typename?: 'ComponentSharedCard', heading?: string | null, icon?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null } | null> | null, bottomDetails?: { __typename?: 'ComponentSharedCard', heading?: string | null, description?: any | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, operatingPhilosophySection?: { __typename: 'ComponentServiceOurOperatingPhilosophy', heading?: string | null, operatingPhilosophyCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null> | null } | null, howWeWorkSection?: { __typename: 'ComponentServiceHowWeWork', heading?: string | null, labels?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null, howWeWorkCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null } | null> | null } | null, recentWorkSection?: { __typename: 'ComponentServiceExploreRecentWork', heading?: string | null, exploreLink?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null, exploreCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null, list?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null } | null> | null } | null, miscSection?: { __typename: 'ComponentServiceServiceMisc', heading?: string | null, description?: string | null, label?: string | null, button?: { __typename?: 'ComponentElementsButtons', id: string, name?: string | null, href?: string | null } | null } | null } | null> };

export type CaseStudiesQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CaseStudiesQuery = { __typename?: 'Query', caseStudies: Array<{ __typename: 'CaseStudy', title?: string | null, slug?: string | null, description?: string | null, publishedAt?: any | null, documentId: string, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, profile?: Array<{ __typename?: 'ComponentBlogAndCasestudiesCompanyProfile', id: string, heading?: string | null, description?: string | null } | null> | null, statement?: Array<{ __typename?: 'ComponentBlogAndCasestudiesProblemAndSolution', id: string, type?: string | null, desc?: string | null } | null> | null, caseStudyContents?: Array<
      | { __typename: 'ComponentBlogAndCasestudiesBlogOrCasestudyText', id: string, blogContent?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesCodeSection', id: string, codeSnippet?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesIframe', id: string, title?: string | null, url?: string | null, height?: number | null, width?: number | null, embedCode?: string | null, description?: any | null, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }
      | { __typename: 'ComponentBlogAndCasestudiesSectionImage', id: string, layout?: Enum_Componentblogandcasestudiessectionimage_Layout | null, imageSection: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null> }
      | { __typename: 'ComponentBlogAndCasestudiesSepration', title?: string | null, marginTop?: number | null, marginBottom?: number | null, color?: string | null, styles?: Enum_Componentblogandcasestudiessepration_Styles | null }
      | { __typename: 'ComponentBlogAndCasestudiesVideo', id: string, title?: string | null, autoplay?: boolean | null, loop?: boolean | null, description?: any | null, videoFile: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null>, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null }
      | { __typename?: 'ComponentElementsLink' }
      | { __typename: 'ComponentSharedQuote', id: string, title?: string | null, body?: string | null }
      | { __typename: 'ComponentSharedSeo', metaTitle: string, metaDescription: string }
      | { __typename: 'Error', message?: string | null, code: string }
     | null> | null } | null> };

export type CaseStudyLandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type CaseStudyLandingPageQuery = { __typename?: 'Query', caseStudyLandingPage?: { __typename?: 'CaseStudyLandingPage', heroSection?: { __typename?: 'ComponentSingleTypeCaseStudyPageHeroSection', heading?: string | null, description?: string | null, button?: { __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null } | null, misc?: { __typename?: 'ComponentSingleTypeCaseStudyPageMiscellaneous', label?: string | null, heading?: string | null, description?: string | null, button?: { __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null } | null } | null };

export type AllCaseStudiesQueryVariables = Exact<{
  filters?: InputMaybe<CaseStudyFiltersInput>;
}>;


export type AllCaseStudiesQuery = { __typename?: 'Query', caseStudies: Array<{ __typename: 'CaseStudy', documentId: string, title?: string | null, description?: string | null, createdAt?: any | null, updatedAt?: any | null, slug?: string | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null } | null> } | null> };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null, description?: string | null, slug?: string | null } | null> };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null, description?: string | null } | null> };

export type EventsQueryVariables = Exact<{
  filters?: InputMaybe<EventFiltersInput>;
}>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename: 'Event', title?: string | null, description?: string | null, updatedAt?: any | null, slug?: string | null, createdAt?: any | null, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, eventWhereAbout?: Array<{ __typename?: 'ComponentEventsEventDetails', id: string, descOne?: string | null, descTwo?: string | null } | null> | null, tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null, description?: string | null } | null>, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, mainSection?: Array<
      | { __typename: 'ComponentBlogAndCasestudiesBlogOrCasestudyText', id: string, blogContent?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesSectionImage', layout?: Enum_Componentblogandcasestudiessectionimage_Layout | null, imageSection: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null> }
      | { __typename: 'ComponentBlogAndCasestudiesSepration', color?: string | null, styles?: Enum_Componentblogandcasestudiessepration_Styles | null }
      | { __typename: 'ComponentBlogAndCasestudiesTldrSection', id: string, heading?: string | null, tdlrDescription?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesVideo', autoplay?: boolean | null, id: string, loop?: boolean | null, title?: string | null, videoFile: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null>, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null }
      | { __typename: 'ComponentPodcasteEventsInterviewsShadowCard', id: string, heading?: string | null, description?: string | null, isShadowVisible?: boolean | null, isBackgroundAvailable?: boolean | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null }
      | { __typename?: 'Error' }
     | null> | null } | null> };

export type GetSingleEventQueryVariables = Exact<{
  filters?: InputMaybe<EventFiltersInput>;
}>;


export type GetSingleEventQuery = { __typename?: 'Query', events: Array<{ __typename: 'Event', title?: string | null, updatedAt?: any | null, createdAt?: any | null, description?: string | null, slug?: string | null, documentId: string, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null } | null> } | null> };

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'Homepage', heroSection?: { __typename?: 'ComponentHomepageHomepageHeroSection', headingOne?: string | null, headingTwo?: string | null, descriptionOne?: string | null, descriptionTwo?: string | null, rightSectionImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, button?: Array<{ __typename?: 'ComponentElementsLink', id: string, name?: string | null, href?: string | null } | null> | null, bottomTags?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null } | null, secondSection?: { __typename?: 'ComponentHomepageHomepageSecondSection', secondSection?: Array<{ __typename?: 'ComponentHomepageHomepageSecondSectionPoints', id: string, heading?: string | null, description?: string | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null, bgImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null, link?: { __typename?: 'ComponentHomepageSecondSectionCaseStudyRelation', botomImage?: { __typename?: 'UploadFile', alternativeText?: string | null, height?: number | null, url: string, width?: number | null } | null, case_study?: { __typename?: 'CaseStudy', slug?: string | null, title?: string | null } | null } | null } | null> | null } | null, thirdSection?: { __typename?: 'ComponentHomepageHomepageThirdSection', heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, cards?: Array<{ __typename?: 'ComponentHomepageBranchCards', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> | null } | null, fourthSection?: { __typename?: 'ComponentHomepageHomepageFourthSection', heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, button?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null, cards?: Array<{ __typename?: 'ComponentHomepageFourthSectionCards', id: string, heading?: string | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null> | null } | null, fifthSection?: { __typename?: 'ComponentHomepageHomepageFifthSection', heading?: string | null, description?: string | null, blogsDetails: Array<{ __typename?: 'Blog', title?: string | null, slug?: string | null, tags: Array<{ __typename?: 'Tag', name?: string | null } | null> } | null> } | null, contactSection?: { __typename?: 'ComponentHomepageHomepageContactAndTestimonials', heading?: string | null, testimonial?: { __typename?: 'Testimonial', clientComments?: string | null, clientCompany?: string | null, clientName?: string | null, clientPosition?: string | null } | null } | null } | null };

export type InterviewsQueryVariables = Exact<{
  filters?: InputMaybe<InterviewFiltersInput>;
}>;


export type InterviewsQuery = { __typename?: 'Query', interviews: Array<{ __typename: 'Interview', title?: string | null, updatedAt?: any | null, createdAt?: any | null, description?: string | null, slug?: string | null, documentId: string, tags: Array<{ __typename?: 'Tag', name?: string | null, documentId: string } | null>, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, mainSection?: Array<
      | { __typename: 'ComponentBlogAndCasestudiesBlogOrCasestudyText', id: string, blogContent?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesSectionImage', layout?: Enum_Componentblogandcasestudiessectionimage_Layout | null, imageSection: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null> }
      | { __typename: 'ComponentBlogAndCasestudiesSepration', color?: string | null, styles?: Enum_Componentblogandcasestudiessepration_Styles | null }
      | { __typename: 'ComponentBlogAndCasestudiesTldrSection', id: string, heading?: string | null, tdlrDescription?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesVideo', autoplay?: boolean | null, id: string, loop?: boolean | null, title?: string | null, videoFile: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null>, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null }
      | { __typename: 'ComponentPodcasteEventsInterviewsShadowCard', id: string, heading?: string | null, description?: string | null, isShadowVisible?: boolean | null, isBackgroundAvailable?: boolean | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null }
      | { __typename?: 'Error' }
     | null> | null } | null> };

export type GetSingleInterviewQueryVariables = Exact<{
  filters?: InputMaybe<InterviewFiltersInput>;
}>;


export type GetSingleInterviewQuery = { __typename?: 'Query', interviews: Array<{ __typename: 'Interview', title?: string | null, updatedAt?: any | null, createdAt?: any | null, description?: string | null, slug?: string | null, documentId: string, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null } | null> } | null> };

export type LabSingleTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type LabSingleTypeQuery = { __typename?: 'Query', labSingleType?: { __typename?: 'LabSingleType', heroSection?: { __typename?: 'ComponentSharedHeroSection', heading?: string | null, description?: string | null, highlightedDescription?: string | null, button?: Array<{ __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null> | null } | null, detailSection?: Array<
      | { __typename: 'ComponentLabsCardSection', id: string, heading?: string | null, cards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, url: string, height?: number | null } | null, list?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null } | null> | null }
      | { __typename?: 'Error' }
     | null> | null, miscSection?: { __typename?: 'ComponentServiceServiceMisc', label?: string | null, heading?: string | null, description?: string | null, button?: { __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null } | null, interfaceLabs?: { __typename?: 'ComponentLabsLabsInterface', labsInterfaceCards?: Array<{ __typename?: 'ComponentLabsLabsInterfaceCards', id: string, heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, height?: number | null, url: string, width?: number | null } | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null } | null> | null } | null } | null };

export type PodcastsQueryVariables = Exact<{
  filters?: InputMaybe<PodcastFiltersInput>;
}>;


export type PodcastsQuery = { __typename?: 'Query', podcasts: Array<{ __typename: 'Podcast', title?: string | null, description?: string | null, createdAt?: any | null, documentId: string, slug?: string | null, updatedAt?: any | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, tags: Array<{ __typename?: 'Tag', name?: string | null, documentId: string } | null>, mainSection?: Array<
      | { __typename: 'ComponentBlogAndCasestudiesBlogOrCasestudyText', id: string, blogContent?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesSectionImage', layout?: Enum_Componentblogandcasestudiessectionimage_Layout | null, imageSection: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null> }
      | { __typename: 'ComponentBlogAndCasestudiesSepration', color?: string | null, styles?: Enum_Componentblogandcasestudiessepration_Styles | null }
      | { __typename: 'ComponentBlogAndCasestudiesTldrSection', id: string, heading?: string | null, tdlrDescription?: string | null }
      | { __typename: 'ComponentBlogAndCasestudiesVideo', autoplay?: boolean | null, id: string, loop?: boolean | null, title?: string | null, videoFile: Array<{ __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null>, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null }
      | { __typename: 'ComponentPodcasteEventsInterviewsShadowCard', id: string, heading?: string | null, description?: string | null, isShadowVisible?: boolean | null, isBackgroundAvailable?: boolean | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null }
      | { __typename?: 'Error' }
     | null> | null } | null> };

export type GetSinglePodcastQueryVariables = Exact<{
  filters?: InputMaybe<PodcastFiltersInput>;
}>;


export type GetSinglePodcastQuery = { __typename?: 'Query', podcasts: Array<{ __typename: 'Podcast', title?: string | null, updatedAt?: any | null, createdAt?: any | null, description?: string | null, slug?: string | null, documentId: string, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, thumbnail?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, categories: Array<{ __typename?: 'Category', documentId: string, name?: string | null } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, name?: string | null } | null> } | null> };

export type ProgrammaticSeoPagesQueryVariables = Exact<{
  filters?: InputMaybe<ProgrammaticSeoPageFiltersInput>;
}>;


export type ProgrammaticSeoPagesQuery = { __typename?: 'Query', programmaticSeoPages: Array<{ __typename?: 'ProgrammaticSeoPage', title?: string | null, slug?: string | null, description?: string | null, thirdSection?: any | null, fourthSection?: any | null, fifthSection?: any | null, heroSectionLink?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null, secondSection?: { __typename?: 'ComponentPspPspSecondSection', heading?: string | null, cardImage?: Array<{ __typename?: 'ComponentSharedMedia', id: string, file?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> | null } | null, sixthSection?: { __typename?: 'ComponentPspPspSixthSection', heading?: string | null, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null } | null, testimonialSection?: { __typename?: 'ComponentPspPspTestimonialSection', heading?: string | null, description?: string | null, testimonials: Array<{ __typename?: 'Testimonial', clientComments?: string | null, clientName?: string | null, clientPosition?: string | null, clientProfilePicture?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> } | null, resourceSection?: { __typename?: 'ComponentPspPspResourceSection', heading?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null, case_studies: Array<{ __typename?: 'CaseStudy', slug?: string | null, title?: string | null, description?: string | null, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null, tags: Array<{ __typename?: 'Tag', name?: string | null } | null>, categories: Array<{ __typename?: 'Category', name?: string | null } | null> } | null> } | null, faqSection?: { __typename?: 'ComponentPspPspFaqSection', heading?: string | null, description?: string | null, faqs: Array<{ __typename?: 'Faq', documentId: string, question?: string | null, answer?: string | null } | null> } | null, contactUs?: { __typename?: 'ComponentPspPspContactus', heading?: string | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, canonicalURL?: string | null, codeJson?: any | null, focusString?: string | null, robots?: Enum_Componentsharedseo_Robots | null, slug?: string | null, structuredData?: any | null, og_graph?: { __typename?: 'ComponentSharedSeoOg', og_title?: string | null, og_description?: string | null, twitter_card_type?: Enum_Componentsharedseoog_Twitter_Card_Type | null, og_image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null } | null } | null } | null> };

export type ServiceQueryVariables = Exact<{ [key: string]: never; }>;


export type ServiceQuery = { __typename?: 'Query', service?: { __typename?: 'Service', hero?: { __typename: 'ComponentServiceHeroSection', heading?: string | null, description?: string | null, label?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, heroSectionButton?: Array<{ __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null> | null } | null, whyTeamHireSection?: { __typename: 'ComponentServiceWhyTeamHireUs', heading?: string | null, whyHireUsCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, icon?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, list?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null } | null> | null } | null, whatWeDesignSection?: { __typename: 'ComponentServiceWhatWeDesign', heading?: string | null, whatWeDesignCards?: Array<{ __typename?: 'ComponentSharedCard', heading?: string | null, icon?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null } | null> | null, bottomDetails?: { __typename?: 'ComponentSharedCard', heading?: string | null, description?: any | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, operatingPhilosophySection?: { __typename: 'ComponentServiceOurOperatingPhilosophy', heading?: string | null, operatingPhilosophyCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null> | null } | null, howWeWorkSection?: { __typename: 'ComponentServiceHowWeWork', heading?: string | null, labels?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null, howWeWorkCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null } | null> | null } | null, recentWorkSection?: { __typename: 'ComponentServiceExploreRecentWork', heading?: string | null, exploreLink?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null, exploreCards?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, cardTiles?: Array<{ __typename?: 'ComponentSharedTiles', id: string, heading?: string | null, description?: string | null } | null> | null, list?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null } | null> | null } | null, miscSection?: { __typename: 'ComponentServiceServiceMisc', heading?: string | null, description?: string | null, label?: string | null, button?: { __typename?: 'ComponentElementsButtons', id: string, name?: string | null, href?: string | null } | null } | null } | null };

export type TestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type TestimonialsQuery = { __typename?: 'Query', testimonials: Array<{ __typename?: 'Testimonial', clientName?: string | null, clientPosition?: string | null, clientCompany?: string | null, clientComments?: string | null, clientProfilePicture?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> };

export type HowWeWorkQueryVariables = Exact<{ [key: string]: never; }>;


export type HowWeWorkQuery = { __typename?: 'Query', howWeWork?: { __typename?: 'HowWeWork', heroSection?: { __typename?: 'ComponentHowWeWorkHowWeWorkHeroSection', heading?: string | null, description?: string | null, button?: Array<{ __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null> | null } | null, secondSection?: { __typename?: 'ComponentHowWeWorkRightStartingPoint', heading?: string | null, leftCard?: Array<{ __typename?: 'ComponentSharedCard', id: string, heading?: string | null, description?: any | null, button?: { __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, url: string, height?: number | null } | null, list?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, details?: Array<{ __typename?: 'ComponentHowWeWorkRightDetails', heading?: string | null, description?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null } | null> | null } | null> | null } | null, thirdSection?: { __typename?: 'ComponentHowWeWorkLowFrictionWays', heading?: string | null, details?: Array<{ __typename?: 'ComponentHowWeWorkCards', id: string, heading?: string | null, points?: Array<{ __typename?: 'ComponentElementsPoints', id: string, listText?: string | null } | null> | null, button?: { __typename?: 'ComponentElementsLink', name?: string | null, description?: string | null } | null } | null> | null } | null, miscSection?: { __typename?: 'ComponentSingleTypeCaseStudyPageMiscellaneous', label?: string | null, heading?: string | null, description?: string | null, button?: { __typename?: 'ComponentElementsButtons', name?: string | null, href?: string | null } | null } | null } | null };

export type LabsFilLandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LabsFilLandingPageQuery = { __typename?: 'Query', labsFilLandingPage?: { __typename?: 'LabsFilLandingPage', heroSection?: { __typename?: 'ComponentLabsFilLabsFilHeroSection', label?: string | null, heading?: string | null, description?: string | null, button?: Array<{ __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null> | null } | null, secondSection?: { __typename?: 'ComponentLabsFilLabsFilSecondSection', heading?: string | null, icon?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null, cards?: Array<{ __typename?: 'ComponentLabsFilCardDetails', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null } | null> | null } | null, thirdSection?: { __typename?: 'ComponentLabsFilLabsFilThirdSection', heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, cards?: Array<{ __typename?: 'ComponentLabsFilThirdSectionCards', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null } | null> | null } | null, fourthSection?: { __typename?: 'ComponentLabsFilLabsFilFourthSection', description?: string | null, fourthSection?: { __typename?: 'ComponentLabsFilLabsFilSecondSection', id: string, heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, cards?: Array<{ __typename?: 'ComponentLabsFilCardDetails', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null } | null> | null } | null } | null, fifthSection?: { __typename?: 'ComponentLabsFilLabsFilFifthSection', heading?: string | null, description?: string | null, cards?: Array<{ __typename?: 'ComponentLabsFilCardDetails', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, link?: { __typename?: 'ComponentElementsLink', name?: string | null, href?: string | null } | null } | null> | null } | null, sixthSection?: { __typename?: 'ComponentLabsFilLabsFilSixthSection', heading?: string | null, description?: string | null, leftCard?: { __typename?: 'ComponentLabsFilSixthSectionLeftCard', heading?: string | null, description?: string | null, bottomText?: string | null } | null, rightCard?: Array<{ __typename?: 'ComponentLabsFilSixthSectionRightCard', id: string, heading?: string | null, description?: string | null } | null> | null } | null, seventhSection?: { __typename?: 'ComponentLabsFilLabsFilSeventhSection', heading?: string | null, description?: string | null, faqs: Array<{ __typename?: 'Faq', question?: string | null, answer?: string | null, slug?: string | null } | null> } | null, eighthSection?: { __typename?: 'ComponentLabsFilLabsFilEighthSection', heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null };

export type PrivacyPolicyQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivacyPolicyQuery = { __typename?: 'Query', privacyPolicy?: { __typename?: 'PrivacyPolicy', heading?: string | null, description?: string | null, updatedAt?: any | null, legalDescription?: Array<
      | { __typename: 'ComponentLegalDetails', id: string, heading?: string | null, description?: string | null }
      | { __typename?: 'Error' }
     | null> | null } | null };

export type TermsOfUseQueryVariables = Exact<{ [key: string]: never; }>;


export type TermsOfUseQuery = { __typename?: 'Query', termsOfUse?: { __typename?: 'TermsOfUse', heading?: string | null, description?: string | null, updatedAt?: any | null, legalDescription?: Array<
      | { __typename: 'ComponentLegalDetails', id: string, heading?: string | null, description?: string | null }
      | { __typename?: 'Error' }
     | null> | null } | null };

export type MatterDesignSystemQueryVariables = Exact<{ [key: string]: never; }>;


export type MatterDesignSystemQuery = { __typename?: 'Query', matterDesignSystem?: { __typename?: 'MatterDesignSystem', heroSection?: { __typename?: 'ComponentMatterDesignMatterDesignHeroSection', label?: string | null, headingOne?: string | null, headingTwo?: string | null, description?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null, featureImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null, secondSection?: { __typename?: 'ComponentMatterDesignMatterDesignSecondSection', heading?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null, cardDetails?: Array<{ __typename?: 'ComponentMatterDesignMatterDesignCards', id: string, heading?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null, link?: Array<{ __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null> | null } | null> | null } | null, thirdSection?: { __typename?: 'ComponentMatterDesignMatterDesignThirdSection', heading?: string | null, cards?: Array<{ __typename?: 'ComponentMatterDesignMatterDesignCards', id: string, heading?: string | null, description?: string | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null> | null } | null, stripOne?: { __typename?: 'ComponentMatterDesignMatterDesignStripOne', heading?: string | null, description?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null, bgIcon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null, fourthSection?: { __typename?: 'ComponentMatterDesignMatterDesignFourthSection', displayCards?: Array<{ __typename?: 'ComponentMatterDesignMatterDesignDisplayCards', id: string, heading?: string | null, d?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null> } | null> | null } | null, fifthSection?: { __typename?: 'ComponentMatterDesignMatterDesignFifthSection', heading?: string | null, cards?: Array<{ __typename?: 'ComponentMatterDesignMatterDesignCards', heading?: string | null, description?: string | null, id: string, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null> | null } | null, stripTwo?: { __typename?: 'ComponentMatterDesignMatterDesignStripOne', heading?: string | null, description?: string | null, bgIcon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, name?: string | null } | null } | null, contactUs?: { __typename?: 'ComponentMatterDesignMatterDesignContactUs', headingOne?: string | null, headingTwo?: string | null, description?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null };

export type NavbarQueryVariables = Exact<{ [key: string]: never; }>;


export type NavbarQuery = { __typename?: 'Query', navbar?: { __typename?: 'Navbar', navbarLogo?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null } | null, navButton?: Array<{ __typename?: 'ComponentElementsButtons', href?: string | null, name?: string | null } | null> | null, navLevelOneGroup?: Array<{ __typename?: 'ComponentNavbarNavbarLevel1Group', id: string, name?: string | null, href?: string | null, isSubMenuAvailable?: boolean | null, navLevelTwoGroup?: Array<{ __typename?: 'ComponentNavbarNavbarLevel2Group', id: string, name?: string | null, description?: string | null, hasSubMenu?: boolean | null, href?: string | null, levelTwoLinks?: Array<{ __typename?: 'ComponentElementsLink', id: string, name?: string | null, href?: string | null, description?: string | null, isExternal?: boolean | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, url: string, height?: number | null } | null } | null> | null } | null> | null } | null> | null } | null };

export type ResourceQueryVariables = Exact<{ [key: string]: never; }>;


export type ResourceQuery = { __typename?: 'Query', resource?: { __typename?: 'Resource', heading?: string | null, description?: string | null, cardDetails?: Array<{ __typename?: 'ComponentResourcesCards', id: string, heading?: string | null, cardImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> | null, secondSection?: { __typename?: 'ComponentResourcesSecondSection', heading?: string | null, description?: string | null, link?: { __typename?: 'ComponentElementsLink', href?: string | null, isExternal?: boolean | null, name?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } | null, thirdSection?: { __typename?: 'ComponentResourcesResourceThirdSection', heading?: string | null, filterResource?: Array<{ __typename?: 'ComponentResourcesFilterSection', id: string, label?: string | null, categories: Array<{ __typename?: 'Category', name?: string | null } | null>, tags: Array<{ __typename?: 'Tag', name?: string | null } | null> } | null> | null, case_studies: Array<{ __typename?: 'CaseStudy', documentId: string, title?: string | null, slug?: string | null, updatedAt?: any | null, createdAt?: any | null, thumbnail?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null> } | null, fourthSection?: { __typename?: 'ComponentResourcesResourceFourthSection', heading?: string | null, description?: string | null } | null } | null };


export const AboutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"About"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"headingTwo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionTwo"}},{"kind":"Field","name":{"kind":"Name","value":"bgImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"accordianDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fifthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"isImageVisible"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sixthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sixthSectionCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seventhSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutQuery, AboutQueryVariables>;
export const CapablityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Capablity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capablity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capablitiesSingleType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentServiceHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionTwo"}},{"kind":"Field","name":{"kind":"Name","value":"heroSectionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentCapablitiesCapablitiesCardSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"serviceName"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subRouteLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedSeo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CapablityQuery, CapablityQueryVariables>;
export const CareerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Career"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"career"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"openings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"roleLocation"}},{"kind":"Field","name":{"kind":"Name","value":"roleDomain"}},{"kind":"Field","name":{"kind":"Name","value":"roleDescription"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottomHeading"}},{"kind":"Field","name":{"kind":"Name","value":"bottomLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CareerQuery, CareerQueryVariables>;
export const ContactUsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContactUs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactUs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ContactUsQuery, ContactUsQueryVariables>;
export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"pageLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rightSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"legal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"legalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const BlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogProfileSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesBlogOrCasestudyText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesCodeSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeSnippet"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesIframe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"embedCode"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSectionImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"imageSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSepration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"}},{"kind":"Field","name":{"kind":"Name","value":"thickness"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesTldrSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tdlrDescription"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"loop"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"videoFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedSeo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogsQuery, BlogsQueryVariables>;
export const AllBlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllBlogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]} as unknown as DocumentNode<AllBlogsQuery, AllBlogsQueryVariables>;
export const CapablitiesSubPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CapablitiesSubPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CapablitiesSubPageFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capablitiesSubPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subPageName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroSectionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"whyTeamHireSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"whyHireUsCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"whatWeDesignSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"whatWeDesignCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottomDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operatingPhilosophySection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"operatingPhilosophyCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"howWeWorkSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"howWeWorkCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recentWorkSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"exploreLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exploreCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"miscSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CapablitiesSubPagesQuery, CapablitiesSubPagesQueryVariables>;
export const CaseStudiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CaseStudies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caseStudies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"caseStudyContents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesBlogOrCasestudyText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesCodeSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"codeSnippet"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesIframe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"embedCode"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSectionImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"imageSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSepration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"styles"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"videoFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"loop"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedQuote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSharedSeo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CaseStudiesQuery, CaseStudiesQueryVariables>;
export const CaseStudyLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CaseStudyLandingPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caseStudyLandingPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"misc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CaseStudyLandingPageQuery, CaseStudyLandingPageQueryVariables>;
export const AllCaseStudiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCaseStudies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CaseStudyFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caseStudies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AllCaseStudiesQuery, AllCaseStudiesQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventWhereAbout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"descOne"}},{"kind":"Field","name":{"kind":"Name","value":"descTwo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesTldrSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tdlrDescription"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSectionImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"imageSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSepration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"styles"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesBlogOrCasestudyText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"videoFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"loop"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentPodcasteEventsInterviewsShadowCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isShadowVisible"}},{"kind":"Field","name":{"kind":"Name","value":"isBackgroundAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const GetSingleEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSingleEventQuery, GetSingleEventQueryVariables>;
export const HomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingOne"}},{"kind":"Field","name":{"kind":"Name","value":"headingTwo"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionOne"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionTwo"}},{"kind":"Field","name":{"kind":"Name","value":"rightSectionImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottomTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bgImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"botomImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"case_study"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fifthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blogsDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"testimonial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientComments"}},{"kind":"Field","name":{"kind":"Name","value":"clientCompany"}},{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"clientPosition"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomepageQuery, HomepageQueryVariables>;
export const InterviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Interviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InterviewFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesTldrSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tdlrDescription"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSectionImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"imageSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSepration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"styles"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesBlogOrCasestudyText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"videoFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"loop"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentPodcasteEventsInterviewsShadowCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isShadowVisible"}},{"kind":"Field","name":{"kind":"Name","value":"isBackgroundAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InterviewsQuery, InterviewsQueryVariables>;
export const GetSingleInterviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleInterview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"InterviewFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSingleInterviewQuery, GetSingleInterviewQueryVariables>;
export const LabSingleTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LabSingleType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labSingleType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"highlightedDescription"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"detailSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentLabsCardSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"miscSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"interfaceLabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labsInterfaceCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LabSingleTypeQuery, LabSingleTypeQueryVariables>;
export const PodcastsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Podcasts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PodcastFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"podcasts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesTldrSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"tdlrDescription"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSectionImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"imageSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesSepration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"styles"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesBlogOrCasestudyText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogAndCasestudiesVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"videoFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"loop"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentPodcasteEventsInterviewsShadowCard"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isShadowVisible"}},{"kind":"Field","name":{"kind":"Name","value":"isBackgroundAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PodcastsQuery, PodcastsQueryVariables>;
export const GetSinglePodcastDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSinglePodcast"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PodcastFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"podcasts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSinglePodcastQuery, GetSinglePodcastQueryVariables>;
export const ProgrammaticSeoPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProgrammaticSeoPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProgrammaticSeoPageFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"programmaticSeoPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"heroSectionLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"}},{"kind":"Field","name":{"kind":"Name","value":"fifthSection"}},{"kind":"Field","name":{"kind":"Name","value":"sixthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testimonialSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientComments"}},{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"clientPosition"}},{"kind":"Field","name":{"kind":"Name","value":"clientProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"resourceSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"case_studies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"faqSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"faqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactUs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalURL"}},{"kind":"Field","name":{"kind":"Name","value":"codeJson"}},{"kind":"Field","name":{"kind":"Name","value":"focusString"}},{"kind":"Field","name":{"kind":"Name","value":"robots"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"structuredData"}},{"kind":"Field","name":{"kind":"Name","value":"og_graph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"og_title"}},{"kind":"Field","name":{"kind":"Name","value":"og_description"}},{"kind":"Field","name":{"kind":"Name","value":"og_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitter_card_type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProgrammaticSeoPagesQuery, ProgrammaticSeoPagesQueryVariables>;
export const ServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroSectionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"whyTeamHireSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"whyHireUsCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"whatWeDesignSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"whatWeDesignCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bottomDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operatingPhilosophySection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"operatingPhilosophyCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"howWeWorkSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"howWeWorkCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recentWorkSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"exploreLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exploreCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardTiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"miscSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ServiceQuery, ServiceQueryVariables>;
export const TestimonialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"clientPosition"}},{"kind":"Field","name":{"kind":"Name","value":"clientCompany"}},{"kind":"Field","name":{"kind":"Name","value":"clientComments"}},{"kind":"Field","name":{"kind":"Name","value":"clientProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]} as unknown as DocumentNode<TestimonialsQuery, TestimonialsQueryVariables>;
export const HowWeWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HowWeWork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"howWeWork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"leftCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"miscSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HowWeWorkQuery, HowWeWorkQueryVariables>;
export const LabsFilLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LabsFilLandingPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labsFilLandingPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fifthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sixthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"leftCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"bottomText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rightCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seventhSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"faqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"eighthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LabsFilLandingPageQuery, LabsFilLandingPageQueryVariables>;
export const PrivacyPolicyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrivacyPolicy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privacyPolicy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"legalDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentLegalDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>;
export const TermsOfUseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TermsOfUse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"termsOfUse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"legalDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentLegalDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TermsOfUseQuery, TermsOfUseQueryVariables>;
export const MatterDesignSystemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MatterDesignSystem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matterDesignSystem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"headingOne"}},{"kind":"Field","name":{"kind":"Name","value":"headingTwo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cardDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stripOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bgIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"d"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fifthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stripTwo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"bgIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactUs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingOne"}},{"kind":"Field","name":{"kind":"Name","value":"headingTwo"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MatterDesignSystemQuery, MatterDesignSystemQueryVariables>;
export const NavbarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Navbar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navbar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navbarLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navLevelOneGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"isSubMenuAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"navLevelTwoGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasSubMenu"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"levelTwoLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavbarQuery, NavbarQueryVariables>;
export const ResourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Resource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cardDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"cardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thirdSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"filterResource"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"case_studies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourthSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<ResourceQuery, ResourceQueryVariables>;