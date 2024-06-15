import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export interface ApproachProps {
    imgSrc: string;
    title: string;
    description: string;
    buttonText: string;
    tag: string;
    imgPos?: "left" | "right";
    caption: string;

};

interface ApproachesProps {
    approaches: ApproachProps[]
}

export const Approaches = (props: ApproachesProps) => {
    const { approaches } = props

    return (
        <Container className="lg:p-8  dark:text-gray-800 ">
            <div className="container mx-auto space-y-12">
                {approaches.map((item, index) => (
                    <Approach
                        key={index}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item.description}
                        buttonText={item.buttonText}
                        tag={item.tag}
                        imgPos={item.imgPos}
                        caption={item.caption}
                    />
                ))}
            </div>

        </Container>
    );
};



const Approach = ({ imgSrc, title, tag, description, caption, buttonText, imgPos = "left" }: ApproachProps) => {
    return (
        <div className={`flex flex-col overflow-hidden rounded-md shadow-md ${imgPos === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <figure className="relative dark:bg-gray-500 aspect-video hover:scale-110">
                <Image
                    width={640}
                    height={480}
                    src={imgSrc}
                    alt={title}
                    className="object-cover rounded-lg" />
                <figcaption className="absolute bottom-4 w-full text-center mt-2 text-lg text-white font-bold transition-transform duration-500 hover:scale-110">{caption}</figcaption>
            </figure>
            <div className="flex flex-col justify-center flex-1 p-8">
                <span className="text-xs uppercase dark:text-gray-400">{tag}</span>
                <h3 className="text-3xl font-bold dark:text-green-400">{title}</h3>
                <p className="my-6 dark:text-gray-400">{description}</p>
                <button type="button" className="self-start px-4 py-2 text-md font-medium text-center text-white bg-green-600 rounded-md">{buttonText}</button>
            </div>
        </div>
    );
}
