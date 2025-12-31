import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import Section from "@/components/global/Section";
import { PrivacyPolicyQuery } from "@/lib/codegen/graphql";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type PrivacyPolicyData =
  PrivacyPolicyQuery['privacyPolicy']

interface PrivacyPolicy {
  privacyPolicyData: PrivacyPolicyData
}

const PrivacyPolicyContainer = ({ privacyPolicyData }: PrivacyPolicy) => {
  if (!privacyPolicyData) return null
  return (
    <Container className="md:grid grid-cols-12 gap-6">
      <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
        <Section>
          <div className="flex flex-col gap-4">
            <h1 className="text-heading-sm text-neutral-800">{privacyPolicyData?.heading}</h1>
            <small className="text-label-sm text-neutral-500">
              Last updated on {formatDate(privacyPolicyData?.updatedAt)}
            </small>
            <p className="text-label-sm text-neutral-800">
             {privacyPolicyData?.description}
            </p>
          </div>
        </Section>
         <Section>
          {privacyPolicyData?.legalDescription !== undefined &&
            privacyPolicyData?.legalDescription &&
            privacyPolicyData?.legalDescription?.length > 0 &&
            privacyPolicyData.legalDescription.map((content, index) => {
              if (!content || content.__typename !== "ComponentLegalDetails") {
                return null;
              }

              return (
                <div key={content.id ?? index} className="border-b mb-4 sm:mb-9">
                  {content.heading && (
                    <h2 className="text-heading-xs mb-6 text-neutral-800">
                      {content.heading}
                    </h2>
                  )}

                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      p: ({ children }) => (
                        <p className="text-label-md mb-6 sm:mb-12 text-neutral-700">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-5 mb-6 sm:mb-12 text-neutral-700">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="mb-1 text-label-md">{children}</li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-neutral-800">
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {content.description}
                  </ReactMarkdown>
                </div>
              );
            })}
        </Section>
      </Block>
    </Container>
  );
};

export default PrivacyPolicyContainer;
