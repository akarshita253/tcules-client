import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import Section from "@/components/global/Section";
import { ContactUsQuery } from "@/lib/codegen/graphql";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";
import ContactUsFormSection from "./components/ContactUsFormSection";
import BottomCards from "./components/BottomCards";
import Link from "next/link";
import Image from "next/image";
import { DotIcon } from "lucide-react";

const ContactUsContainer = ({
  contactUsData,
}: {
  contactUsData: NonNullable<ContactUsQuery>;
}) => {
  const data = contactUsData?.contactUs;
  const cardsData = contactUsData?.contactUs?.cards;
  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Section>
            <h1 className="text-center mb-6">
              <span className="text-display-sm text-accent-600">
                {data?.heading?.split("|").at(0)}
              </span>
              <span className="text-heading-sm text-neutral-800">
                {data?.heading?.split("|").at(0)}
              </span>
            </h1>
            <p className="text-label-xl text-neutral-700 text-center">
              {data?.description}
            </p>
          </Section>
          <Section>
            <ApolloWrapper>
              <ContactUsFormSection />
            </ApolloWrapper>
          </Section>
          {cardsData && <BottomCards cardsData={cardsData} />}
          <div className="py-6">
            <p className="text-neutral-600 text-center text-sm mb-4">
              Follow us on
            </p>
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-12">
              {data?.socialMedia &&
                data?.socialMedia.map((singleLink) => {
                  return (
                    <Link href={singleLink?.href || "#"} key={singleLink?.id}>
                      {singleLink?.icon?.url && (
                        <Image
                          src={singleLink?.icon?.url}
                          width={20}
                          height={20}
                          alt={
                            singleLink?.icon?.alternativeText ||
                            "icon-social-media"
                          }
                        />
                      )}
                    </Link>
                  );
                })}
            </div>
          <div className="flex items-center justify-center gap-2">
            <span>Ahmedabad Office</span>
            <span>
              <DotIcon className="text-accent-500"/>
            </span>
            <span>Office-based team</span>
            <span>
              <DotIcon className="text-accent-500"/>
            </span>
            <span>Global clients</span>
          </div>
          </div>
        </Block>
      </Container>
    </main>
  );
};

export default ContactUsContainer;
