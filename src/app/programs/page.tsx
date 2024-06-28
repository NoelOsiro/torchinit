import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Programs } from "@/components/Programs";
import { Footer } from "@/components/Footer";



import { Cta } from "@/components/Cta";

import { benefitOne, benefitThree, benefitTwo } from "@/components/programsData";
import { Navbar } from "@/components/Navbar";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
export default function Program() {
  return (
    <>
      <Navbar />
      <Banner />
      <Banner2 />
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
        <Programs data={benefitTwo} />
        <Programs imgPos="right" data={benefitThree} />

        <Cta />
      </Container>
      <Footer />
    </>

  );
}
