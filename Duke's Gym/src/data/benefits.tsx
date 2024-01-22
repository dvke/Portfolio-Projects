import { BenefitType } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const benefits: Array<BenefitType> = [
  {
    id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Elevate your fitness journey with state-of-the-art facilities. Experience excellence in every workout.",
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Duke's Gym offers a diverse range of classes to suit every fitness enthusiast.",
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: `
Duke's Gym offers a variety of fitness classes for all levels, led by pro trainers. `,
  },
];

export default benefits;
