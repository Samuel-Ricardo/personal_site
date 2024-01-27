import './container.style.scss';

export const NavbarItemContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="item-container">{children}</div>;
};
