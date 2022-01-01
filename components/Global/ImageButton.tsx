import styled from "styled-components";

const StyledImageButton = styled.button`
  padding: 0.6em 1.6em;
  margin-top: 1em;
  font-family: "Causten";
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.primaryAccent};
  color: ${({ theme }) => theme.color.primaryText};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.color.primaryAccent};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    margin-left: 0.5em;
  }

  img {
    max-width: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    box-shadow: 0px 0px 20px ${({ theme }) => theme.color.primaryAccent};
  }
`;

const ImageButton: React.FC<{ title: string; onClick: () => void }> = (
  props
) => {
  return (
    <StyledImageButton onClick={props.onClick}>
      {props.children}
      <p>{props.title}</p>
    </StyledImageButton>
  );
};

export default ImageButton;
