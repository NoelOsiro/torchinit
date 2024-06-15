import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <Container>
      <SectionTitle
        preTitle="Contact Us"
        title="We'd love to hear from you"
      >
        Please fill out the form below and we will get back to you as soon as possible.
      </SectionTitle>
      <ContactForm />
    </Container>
  );
}