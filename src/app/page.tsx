import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="What we do"
        title="Dedication to catalyzing transformative attitudes, and equipping individuals"
      >
        Torch Initiatives is dedicated to social responsibility, advocating for positive youth
        attitudes and aptitudes while championing community sustainability. We emphasize the
        proper utilization of community resources, nurturing positive cultures, and responsible
        stewardship.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Our values"
        title="Be a Volunteer Our Community"
      >
        Our values encompass a commitment to sustainability, 
        inclusivity, integrity, divine guidance, and plant-based advocacy, 
        prioritizing the welfare of humans and animals, 
        while investing in the potential of young people as beacons of hope for the future.
      </SectionTitle>

      <Video videoId="Fd4vgWR8gq8" />

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <Cta />
    </Container>
  );
}
