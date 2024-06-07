import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  BookOpenIcon,
  UsersIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/youth.jpg";
import benefitTwoImg from "../../public/img/empower.jpg";
import { CloudIcon } from "@heroicons/react/24/solid";

const benefitOne = {
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
      icon: <FaceSmileIcon />,
    },
    {
      title: "Encourage Community Involvement",
      desc: "Engage youth in community service to foster a sense of responsibility and belonging.",
      icon: <UsersIcon/>,
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
      icon: <CloudIcon />,
    },
    {
      title: "Support Local Economies",
      desc: "Promote local businesses and farmers to boost the local economy and reduce carbon footprint.",
      icon: <ShoppingBagIcon/>,
    },
    {
      title: "Encourage Community Participation",
      desc: "Foster a sense of community through participation in local events and initiatives.",
      icon: <UsersIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
