import './body.style.scss';

export const SliderBody = async ({ children }: { children: any[] }) => {
  return (
    <ul className="static-carousel-container">
      {children.map(child => (
        <li key={child?.toString()} className="h-fit w-fit">
          {child}
        </li>
      ))}
    </ul>
  );
};
