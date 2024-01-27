import './container.style.scss';

export const NavbarItemContainer = ({ children }: React.PropsWithChildren) => {
  return <ul className="item-container">{children}</ul>;
};
