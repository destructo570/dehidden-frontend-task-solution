import styled from "styled-components";

const StyledNotification = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1em 0;
  z-index: 200;

  p {
    font-family: "Causten";
    font-size: 1rem;
    font-weight: 500;
    border-radius: 50px;
    padding: 0.8em 1.6em;
    background-color: #FF2D62;
    color:  white};
    
  }
`;

const Notification: React.FC<{ message: string }> = (props) => {
  return (
    <StyledNotification>
      <p>{props.message}</p>
    </StyledNotification>
  );
};

export default Notification;
