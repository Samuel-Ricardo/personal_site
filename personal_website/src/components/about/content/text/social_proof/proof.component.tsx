export const SocialProof = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <ul id="social-proof">
      {children.map(c => (
        <li key={c?.toString()}>{c}</li>
      ))}
    </ul>
  );
};
