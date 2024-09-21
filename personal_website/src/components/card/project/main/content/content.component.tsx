import './content.style.scss';

export const MainCardContent = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="main-project-card-content">
      <p>{children}</p>
    </div>
  );
};
