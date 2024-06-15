import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Programs } from "@/components/Programs";


import { Cta } from "@/components/Cta";

import { benefitOne, benefitThree, benefitTwo } from "@/components/programsData";
export default function Program() {
  return (
    <Container>

      <SectionTitle
        preTitle="Our programs"
        title="Dedication to catalyzing transformative attitudes, and equipping individuals"
      >
        Our programs are designed to empower individuals and communities,
        fostering positive attitudes and aptitudes while championing community sustainability.
        We emphasize the proper utilization of community resources, nurturing positive cultures,
        and responsible stewardship.
      </SectionTitle>

      <Programs imgPos="right" data={benefitOne} />
      <Programs data={benefitThree} />
      <Programs imgPos="right" data={benefitTwo} />
      <Cta />
    </Container>
  );
}
