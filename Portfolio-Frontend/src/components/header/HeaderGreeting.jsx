import "./Header.css";

const HeaderGreeting = () => {
  return (
    <div className="intro-container">
      <p className="header-title" id="greeting">
        Hello, my name is
      </p>
      <h1 className="header-title" id="name">
        Ryan Bowman.
      </h1>
    </div>
  );
};

export default HeaderGreeting;
