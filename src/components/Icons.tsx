import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps, UsersIcon } from "lucide-react";
import { Flower2Icon, HandCoinsIcon, HeartHandshakeIcon, LeafIcon, RecycleIcon, SproutIcon } from "lucide-react";

// Define an interface for the ICON_MAP
interface IconMap {
  [key: string]: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

// Apply the interface to ICON_MAP
const ICON_MAP: IconMap = {
  'SproutIcon': SproutIcon,
  'LeafIcon': LeafIcon,
  'RecycleIcon': RecycleIcon,
  'Flower2Icon': Flower2Icon,
  'HandCoinsIcon': HandCoinsIcon,
  'HeartHandshakeIcon': HeartHandshakeIcon,
  'UsersIcon': UsersIcon,
  // Add other icons as needed
};

export default ICON_MAP;