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
      <Hero />

      <SectionTitle
        preTitle="Our Approach"
        title="Torch Initiatives: Fostering Positive Youth Attitudes and Sustainable Communities"
      >
      At Torch Initiatives, we are dedicated to social responsibility, 
      advocating for positive youth attitudes and aptitudes while championing 
      community sustainability. We emphasize the proper utilization of community 
      resources, nurturing positive cultures, and responsible stewardship.

      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
