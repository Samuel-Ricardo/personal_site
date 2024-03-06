import './about.style.scss';

export const HeroCardContentAbout = async (props: React.PropsWithChildren) => {
  return (
    <div className="about">
      <p>
        {props.children
          ? props.children
          : '👨‍💻| I&apos;m a Programmer passionated about unlocking 🔓 the barriers between the real 🧠 and the imaginary 🌌, convert dreams into reality and of course... <br /> Coffee ☕ into solutions 💡'}
      </p>
    </div>
  );
};
