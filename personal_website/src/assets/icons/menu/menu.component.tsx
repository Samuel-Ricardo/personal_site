import { IMotionSVGProps } from '@/@types/props/motion/svg';
import { MotionPath } from '@/components/motion/path.component';

import './menu.style.scss';

export const MenuIcon = ({ Paths }: IMotionSVGProps) => {
  return (
    <svg
      id="menu-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g id="Menu / Menu_Alt_01">
          {' '}
          <MotionPath
            id="Vector"
            d="M12 17H19M5 12H19M5 7H19"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...Paths}
          ></MotionPath>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};
