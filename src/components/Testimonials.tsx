import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpeg";
import userTwoImg from "../../public/img/user2.jpeg";
import userThreeImg from "../../public/img/user3.jpeg";
import userFourImg from "../../public/img/user4.jpeg";
import userFiveImg from "../../public/img/user5.jpeg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userOneImg}
              name="Virginia Ruguru"
              title="Founder and Team Leader of Torch Initiatives."
            />
            <p className="text-2xl leading-normal ">
              A passionate  <Mark>advocate for sustainable</Mark>
              , living and holistic well-being. Her visionary leadership and commitment to transformative
              impact guide our team towards a brighter, more compassionate future.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userFiveImg} // replace with Mary Njeri's image
              name="Mary Njeri"
              title="Project Assistant"
            />
            <p className="text-2xl leading-normal ">
              A graduate in Biotechnology, Mary plays a crucial role at Torch Initiatives, advocating for plant-based diets and sustainable agricultural practices. She is dedicated to promoting health and sustainability through innovative projects and community engagement.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userFourImg} // replace with Mumbi Gladys's image
              name="Mumbi Gladys"
              title="Intern and Youth Mobilizer"
            />
            <p className="text-2xl leading-normal ">
              A <Mark>Kenyan youth and nursing student</Mark>
              with a passion for social transformation. Currently serving at Torch Initiatives,
              Mumbi is leveraging her skills to make a positive impact in communities.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userTwoImg}
              name="Phanuel Mathenge"
              title="Head of Logistics"
            />
            <p className="text-2xl leading-normal ">
              The driving  <Mark>logistical operations</Mark>
              at Torch Initiatives. Phanuel, as the Logistics Lead at Torch Initiatives,
              brings extensive experience in optimizing supply chain activities and ensuring
              seamless coordination for our initiatives. His dedication to efficiency and precision
              is crucial in executing our projects effectively.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userThreeImg}
              name="Gitura Mwaura"
              title="Communications Consultant"
            />
            <p className="text-2xl leading-normal ">
              A <Mark>seasoned author and journalist</Mark>
              with a rich background in community development.
              His expertise in impact assessment, reporting, and documentary production,
              coupled with his dedication to effective communication, significantly contributes
              to our mission at Torch Initiatives.
            </p>
          </div>
        </div>
        
        
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex flex-col items-center space-x-3 mb-4">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-24 h-24">
        <Image
          src={props.image}
          className="rounded-full w-full h-full mb-4"
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
