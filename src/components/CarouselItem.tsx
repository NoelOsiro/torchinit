import Image from 'next/image';

interface CarouselItemProps {
    header: string;
    paragraph: string;
    link: string;
    imgSrc: any;
}
const CarouselItem = ({ header, paragraph, link, imgSrc }:CarouselItemProps) => (
    <div className="flex flex-col lg:flex-row items-center w-full">
    <div className="max-w-2xl mb-8 lg:w-1/2">
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        {header}
      </h1>
      <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        {paragraph}
      </p>
      <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
        <a
          href={link}
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
          Learn More
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center w-full h-full lg:w-1/2">
      <Image
        src={imgSrc}
        width={616}
        height={617}
        className={"object-cover rounded-md shadow-lg w-full h-full lg:w-96 lg:h-96 xl:w-96 xl:h-96"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
      />
    </div>
  </div>
);
export default CarouselItem;