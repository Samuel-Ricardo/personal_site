'use client';

import './icon.style.scss';
import { useCallback, useState } from 'react';

export const SocialFloattingButtonIcon = ({
  children,
}: {
  children: any[];
}) => {
  const [active, setActive] = useState(false);
  const handleClick = useCallback(e => setActive(!active), [active]);

  return (
    <div className="social-icon" onClick={handleClick}>
      {active ? children[0] : children[1]}
    </div>
  );
};
