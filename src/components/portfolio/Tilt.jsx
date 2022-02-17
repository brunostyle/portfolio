import TiltContainer from "react-tilt";

const Tilt = ({ children }) => {
  return (
      <TiltContainer options={{ max: 50, scale: '105%', transition: true }}>
        {children}
      </TiltContainer>
  );
};

export default Tilt;
