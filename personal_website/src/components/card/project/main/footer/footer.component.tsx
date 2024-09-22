import './footer.style.scss';

export const MainCardFooter = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="main-project-card-footer">{children}</div>;
};
