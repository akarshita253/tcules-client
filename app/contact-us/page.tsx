import ContactUsContainer from "@/features/contact_us/ContactUsContainer";
import { ContactUsQuery } from "@/lib/codegen/graphql";
import { CONTACT_US_QUERY } from "@/lib/queries/contactUs";
import { strapiRequest } from "@/lib/utils";

const ContactUS = async () => {
  const response = await strapiRequest<ContactUsQuery>(CONTACT_US_QUERY);
  return <ContactUsContainer contactUsData={response}/>;
};

export default ContactUS;
