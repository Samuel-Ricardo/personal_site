export const NavMenuContainer = async ({
  children,
}: React.PropsWithChildren) => {
  return (
    <nav id="nav-menu">
      <ul>{children}</ul>
    </nav>
  );
};
