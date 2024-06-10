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

};

interface ApproachesProps {
    approaches: ApproachProps[]
}

export const Approaches = (props: ApproachesProps) => {
    const { approaches } = props

    return (
        <Container className="lg:p-8 dark:bg-gray-100 dark:text-gray-800 ">
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
                    />
                ))}
            </div>

        </Container>
    );
};



const Approach = ({ imgSrc, title, tag, description, buttonText, imgPos = "left" }: ApproachProps) => {
    return (
        <div className={`flex flex-col overflow-hidden rounded-md shadow-sm ${imgPos === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>            <Image
            width={640}
            height={480}
            src={imgSrc}
            alt={title}
            className="h-80 dark:bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">{tag}</span>
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="my-6 dark:text-gray-600">{description}</p>
                <button type="button" className="self-start">{buttonText}</button>
            </div>
        </div>
    );
}
