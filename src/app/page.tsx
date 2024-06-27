import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";

import { Video } from "@/components/Video";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitThree, benefitTwo } from "@/components/data";
import Values from "@/components/Values";
import BenefitsSection from "@/components/BenefitsSection";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Values />
      <BenefitsSection/>

      <SectionTitle
        preTitle="Our values"
        title="Be a Volunteer Our Community"
      >
        Our values encompass a commitment to sustainability, 
        inclusivity, integrity, divine guidance, and plant-based advocacy, 
        prioritizing the welfare of humans and animals, 
        while investing in the potential of young people as beacons of hope for the future.
      </SectionTitle>

      <Video videoId="hTALjJHKW4g" previewImageUrl="/img/logo.png" />
      <Cta />
    </Container>
  );
}
