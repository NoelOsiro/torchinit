import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";


import { Cta } from "@/components/Cta";

import Image from "next/image";
export default function Program() {
  return (
    <Container>
      <SectionTitle
        preTitle="Torch Initiatives Community"
        title="Our community is our pride"
      ></SectionTitle>

      <div className="lg:flex items-stretch md:mt-12 mt-8">
        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div className="sm:w-1/2 mt-4 lg:mt-0 relative">
              <ArticleCard
                date="Environment Sustainability"
                title="Transforming Waste into Nourishment"
                description="How waste can be transformed into a source of nourishment."
                imgSrc="/img/blog/blog5.jpeg"
                imgAlt="chair"
                imgWidth={400}
                imgHeight={500}
                link={'/blog/transforming-waste-into-nourishment'}
              />
            </div>
            <div className="sm:w-1/2 mt-4 lg:mt-0 relative">
            <ArticleCard
                date="Healthy Living"
                title="Significant Impact on Dietary Habits"
                description="Naramat School in Kajiado County and Joy Schools in Nairobi County. Educated children, staff, and parents on the health and environmental benefits of plant-based diets."
                imgSrc="/img/blog/blog4.jpeg"
                imgAlt="chair"
                imgWidth={400}
                imgHeight={500}
                link={'/blog/the-decorated-ways'}
              />
            </div>
          </div>
          <div className="relative mt-4">
            <ArticleCard
              date="Community Impact"
              title="Local Resource Mobilization Skills"
              description="Facilitated training sessions on organic farming and eco-friendly pest control methods adopted by the communities we serve."
              imgSrc="/img/resource.jpeg"
              imgAlt="chair"
              imgWidth={800}
              imgHeight={500}
              link={'/blog/the-decorated-ways'}
            />
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div className="relative mt-4 lg:mt-0">
            <ArticleCard
              date="Plant based diet"
              title="Plant-based Diet Education Program for Schools"
              description="We have been working with schools to educate students on the benefits of a plant-based diet."
              imgSrc="/img/planted.jpeg"
              imgAlt="chair"
              imgWidth={800}
              imgHeight={500}
              link={'/blog/the-decorated-ways'}
            />
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div className="relative w-full">
              <ArticleCard
                date="Youth Empowerment"
                title="Empowerment Program for Youth"
                description="Empowering the youth to be the change they want to see in the world."
                imgSrc="/img/empower5.jpeg"
                imgAlt="chair"
                imgWidth={400}
                imgHeight={500}
                link={'/blog/the-decorated-ways'}
              />
            </div>
            <div className="relative w-full sm:mt-0 mt-4">
              <ArticleCard
                date="Sustainabilty"
                title="Sustainability Program for communities"
                description="Sustainability program for communities to help them become more eco-friendly."
                imgSrc="/img/empower.jpg"
                imgAlt="chair"
                imgWidth={400}
                imgHeight={500}
                link={'/blog/the-decorated-ways'}
              />
            </div>
          </div>
        </div>
      </div>

      <Cta />
    </Container>
  );
}


interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  link:string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, description, imgSrc, imgAlt, imgWidth, imgHeight,link }) => (
  <>
    <div>
      <p className="p-6 text-md font-bold leading-4 text-white absolute top-0 right-0">{date}</p>
      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-xl font-bold text-white hover:text-black">{title}</h2>
        <p className="text-base leading-4 text-white mt-2">{description}</p>
        <a href={link} className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:underline hover:scale-110 hover:text-green-400">
          <p className="pr-2 text-sm font-medium leading-none hover:scale-110 hover:text-green-400">Read More</p>
          <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
    <Image loading='lazy' width={imgWidth} height={imgHeight} src={imgSrc} className="w-full rounded-md" alt={imgAlt} />
    </>
);
