
import CarouselItem from "./CarouselItem";
import { Container } from "@/components/Container";
import heroImg1 from "../../public/img/plant2.png";
import { createClient } from "@/utils/supabase/server";
import Spinner from "./Spinner";


export const Hero = async () => {
  const supabase = createClient()


  let { data: Hero, error } = await supabase
    .from('Hero')
    .select('*')
    .single()
  if (!Hero) {
    return (
      <Container className="flex flex-wrap ">
        <Spinner />
      </Container>
    )
  }

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="w-full slider-container">
          <CarouselItem
            header={Hero.header}
            paragraph={Hero.paragraph}
            link={Hero.link}
            imgSrc={Hero.imageLink}
          />
        </div>

      </Container>

    </>
  );
}


