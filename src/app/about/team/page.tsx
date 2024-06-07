import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Programs() {
  return (
    <Container>

      <SectionTitle
        preTitle="Our Team"
        title="Meet the team"
      >
        We are a team of passionate people who love to develop community and help others.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="Activities" title="Frequently Asked Questions">
        
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
