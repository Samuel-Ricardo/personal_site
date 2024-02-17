import { MotionPath } from '@/components/motion/path.component';

import './download.icon.scss';
import { IMotionSVGProps } from '@/@types/props/motion/svg';

export const DownloadIcon = ({ Paths }: IMotionSVGProps) => {
  return (
    <svg
      id="download-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <MotionPath
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...Paths}
        d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
      />
    </svg>
  );
};
