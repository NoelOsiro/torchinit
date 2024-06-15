'use client'
import CarouselItem from "./CarouselItem";
import { Container } from "@/components/Container";
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
        </div>

      </Container>

    </>
  );
}


