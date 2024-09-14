import './content.style.scss';

export const MainProjectCardContent = async ({
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
