import styled from "styled-components";

const StyledIconButton = styled.div``;

const IconButton: React.FC = (props) => {
  return <StyledIconButton>{props.children}</StyledIconButton>;
};

export default IconButton;
