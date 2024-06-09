import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { Team } from "@/components/Team";
export default function Programs() {
  return (
    <Container>

      <SectionTitle
        preTitle="Our Team"
        title="Meet the team"
      >
        We are a team of passionate people who love to develop community and empower the generation.
      </SectionTitle>
      <Team />
      <SectionTitle preTitle="Activities" title="We participate">
        Our team is involved in various activities that help us grow and develop our skills, while also helping the community.
      </SectionTitle>
      <Faq />
      <Cta />
    </Container>
  );
}
