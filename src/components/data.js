import {
  FaceSmileIcon,
  BookOpenIcon,
  UsersIcon,
  ShoppingBagIcon,
  HeartIcon,
  ArrowPathIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/empower4.jpeg";
import benefitTwoImg from "../../public/img/empower.jpg";
import benefitThreeImg from "../../public/img/plant.png";
import { CloudIcon } from "@heroicons/react/24/solid";
import { Flower2Icon, HandCoinsIcon, HeartHandshakeIcon, LeafIcon, RecycleIcon, SproutIcon } from "lucide-react";

const benefitOne = {
  title: "Plant based diets",
  button:true,
  desc: "We focus on instilling positive attitudes and 21st-century employability skills in young people, preparing them to thrive in a rapidly evolving world.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Promote a healthy, eco-friendly eating lifestyle",
      desc: "Our mission is to promote a healthy, eco-friendly eating lifestyle.",
      icon: <SproutIcon />,
    },
    {
      title: "Recognize the pivotal role in well-being and sustainability",
      desc: "Recognizing its pivotal role in individual well-being and environmental sustainability.",
      icon: <LeafIcon />,
    },
    {
      title: "Mindful dietary choices for a healthier planet",
      desc: "We believe that mindful dietary choices contribute to a collective effort towards a healthier planet.",
      icon: <Flower2Icon />,
    },
],
};

const benefitTwo = {
  title: "Building Sustainable Communities",
  desc: "Our community empowerment initiatives center on cultivating sustainable attitudes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Promote Green Living",
      desc: "Encourage the adoption of eco-friendly practices and sustainable living.",
      icon: <RecycleIcon />,
    },
    {
      title: "Support Local Economies",
      desc: "Promote local businesses and farmers to boost the local economy and reduce carbon footprint.",
      icon: <HandCoinsIcon/>,
    },
    {
      title: "Encourage Community Participation",
      desc: "Foster a sense of community through participation in local events and initiatives.",
      icon: <UsersIcon />,
    },
  ],
};

const benefitThree = {
  title: "Empowering Youth",
  desc: "We focus on instilling positive attitudes and 21st-century employability skills in young people, preparing them to thrive in a rapidly evolving world.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Promote Education",
      desc: "Encourage and support the pursuit of education to empower youth with knowledge and skills.",
      icon: <BookOpenIcon/>,
    },
    {
      title: "Foster Leadership",
      desc: "Provide opportunities for leadership roles to instill confidence and decision-making abilities.",
      icon: <HeartHandshakeIcon />,
    },
    {
      title: "Encourage Community Involvement",
      desc: "Engage youth in community service to foster a sense of responsibility and belonging.",
      icon: <UsersIcon/>,
    },
  ],
};


export {benefitOne, benefitTwo, benefitThree};
{/* <CarouselItem
              header="Advocating for plant based diets for food security, health and ethics in Africa"
              paragraph={`Our mission is to promote a healthy, eco-friendly eating lifestyle,
              recognizing its pivotal role in individual well-being and environmental
              sustainability. We believe that mindful dietary choices contribute to a
              collective effort towards a healthier planet.`}
              link="/blog/plant-based-diets"
              imgSrc={heroImg}
            /> */}
