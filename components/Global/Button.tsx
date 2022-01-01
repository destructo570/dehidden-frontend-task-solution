import styled from "styled-components";

//TODO: Make the button lose box shadow on bigger screen and apply it on hover with animation.
const StyledButton = styled.button`
  padding: 0.4em 1.6em;
  margin: 1em 0;
  font-family: "Causten";
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.primaryAccent};
  color: ${({ theme }) => theme.color.primaryText};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.color.primaryAccent};

  &:hover {
    cursor: pointer;
  }
`;

const Button: React.FC<{ title: string; onClick: () => void; id?: string }> = (
  props
) => {
  return (
    <StyledButton id={props.id} onClick={props.onClick}>
      {props.title}
    </StyledButton>
  );
};

export default Button;
