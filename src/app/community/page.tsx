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
      >
        
      </SectionTitle>

      <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
        <div className="sm:w-1/2 mt-4 lg:mt-0 relative">
        <ArticleCard
              date="12 April 2021"
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
              date="12 April 2021"
              title="The Decorated Ways"
              description="Dive into minimalism"
              imgSrc="/img/blog/blog4.jpeg"
              imgAlt="chair"
              imgWidth={400}
              imgHeight={500}
              link={'/blog/the-decorated-ways'}
            /></div>
          
        </div>
        <div className="relative mt-4">
          <ArticleCard
            date="12 April 2021"
            title="The Decorated Ways"
            description="Dive into minimalism"
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
            date="12 April 2021"
            title="The Decorated Ways"
            description="Dive into minimalism"
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
              date="12 April 2021"
              title="The Decorated Ways"
              description="Dive into minimalism"
              imgSrc="/img/empower5.jpeg"
              imgAlt="chair"
              imgWidth={400}
              imgHeight={500}
              link={'/blog/the-decorated-ways'}
            />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
            <ArticleCard
              date="12 April 2021"
              title="The Decorated Ways"
              description="Dive into minimalism"
              imgSrc="/img/youth.jpg"
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
      <p className="p-6 text-xs font-medium leading-3 text-black dark:text-white absolute top-0 right-0">{date}</p>
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
