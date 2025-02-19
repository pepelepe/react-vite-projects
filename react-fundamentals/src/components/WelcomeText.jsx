const WelcomeText = ({ user }) => {
  if (user) return <h3 style={{ color: "green" }}>Online</h3>;
  return <h3>Offline</h3>;
};

export default WelcomeText;
