import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpeg";
import userTwoImg from "../../public/img/user2.jpeg";
import userThreeImg from "../../public/img/user3.jpeg";
import userFourImg from "../../public/img/user4.jpeg";
import userFiveImg from "../../public/img/user5.jpeg";
import { createClient } from "@/utils/supabase/server";
import Spinner from "./Spinner";

export const Team= async () => {
  const supabase = createClient();
    const { data: teams, error } = await supabase
        .from('Team')
        .select('*')
        .order('id', { ascending: true });
    if (!teams) {
        return (
            <Container className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                <Spinner />
            </Container>
        )
    }
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userTwoImg}
              name={teams[0].name}
              title={teams[0].title}
            />
            <p className="leading-normal lg:text-xl md:text-lg sm:text-md">
              {teams[0].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userFiveImg} // replace with Mary Njeri's image
              name={teams[1].name}
              title={teams[1].title}
            />
            <p className="leading-normal lg:text-xl md:text-lg sm:text-md ">
              {teams[1].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userFourImg} // replace with Mumbi Gladys's image
              name={teams[2].name}
              title={teams[2].title}
            />
            <p className="leading-normal lg:text-xl md:text-lg sm:text-md ">
              {teams[2].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userOneImg}
              name={teams[3].name}
              title={teams[3].title}
            />
            <p className="leading-normal lg:text-xl md:text-lg sm:text-md ">
              {teams[3].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 xl:col-auto">
          <div className="flex flex-col justify-center w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userThreeImg}
              name={teams[4].name}
              title={teams[4].title}
            />
            <p className="leading-normal lg:text-xl md:text-lg sm:text-md ">
              {teams[4].description}
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
      <div className="flex-shrink-0 overflow-hidden rounded-full w-28 h-28">
        <Image
          src={props.image}
          className="rounded-full w-full h-full mb-4"
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
          unoptimized={true}
        />
      </div>
      <div className="text-center">
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
      <mark className="text-green-800 bg-green-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-green-900 dark:text-green-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
