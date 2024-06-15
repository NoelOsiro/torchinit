'use client'
import CarouselItem from "./CarouselItem";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/plant.png";
import heroImg1 from "../../public/img/plant2.png";


export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="w-full slider-container">
            <CarouselItem
              header="Africa Vegan Restaurant Week🎊, the first of its kind on the continent!🌍 "
              paragraph={`Torch Initiatives is excited to participate in this Africa-wide 
              campaign and week-long celebration, organized by activists and organizations 
              from across Africa, aims to increase accessibility to healthy, plant-based food 
              options and encourage restaurants to adopt vegan menus. In Kenya, Torch Initiatives 
              is bringing the light of veganism through this campaign.🌱🍽️🎉`}
              link="/blog/vegan-restaurant-week"
              imgSrc={heroImg1}
            />
            
            {/* <CarouselItem
              header="Advocating for plant based diets for food security, health and ethics in Africa"
              paragraph={`Our mission is to promote a healthy, eco-friendly eating lifestyle,
              recognizing its pivotal role in individual well-being and environmental
              sustainability. We believe that mindful dietary choices contribute to a
              collective effort towards a healthier planet.`}
              link="/blog/plant-based-diets"
              imgSrc={heroImg}
            /> */}
        </div>

      </Container>

    </>
  );
}


