import './body.style.scss';

export const SliderBody = ({ children }: { children: any[] }) => {
  return (
    <ul className="static-carousel-container">
      {children
        .concat(children)
        .concat(children)
        .concat(children)
        .concat(children)
        .concat(children)
        .map(child => (
          <li key={child?.toString()} className="h-fit w-fit">
            {child}
          </li>
        ))}
    </ul>
  );
};
