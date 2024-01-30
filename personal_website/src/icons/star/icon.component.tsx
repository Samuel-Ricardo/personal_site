import { IMotionSVGProps } from '@/@types/props/motion/svg';
import { MotionPath } from '@/components/motion/path.component';

import './icon.style.scss';

export const StarIcon = ({ Paths }: IMotionSVGProps) => {
  return (
    <svg
      id="star-icon"
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <MotionPath
        fill="yellow"
        d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"
        {...Paths}
      />
    </svg>
  );
};
