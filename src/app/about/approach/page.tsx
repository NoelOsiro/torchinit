import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Cta } from "@/components/Cta";
import { Approaches } from "@/components/Approaches";
import { approaches } from "@/components/approachData";
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
      <Approaches approaches={approaches}/>
      <Cta />
    </Container>
  );
}
