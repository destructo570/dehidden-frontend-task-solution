import styled from "styled-components";
import ImageButton from "./ImageButton";
import copyIcon from "../../assets/icons/vector/copy-icon.svg";

const StyledCopyUrl = styled.div`
  display: flex;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  max-height: 50px;

  p {
    align-self: center;
    padding: 0 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }

  button {
    align-self: center;
    max-width: 200px;
  }
  button p {
    margin-left: 0em;
    padding: 0 0.4em;
  }
`;

const CopyUrl: React.FC<{
  title: string;
  id: string;
  url: string;
  onClick: () => void;
}> = (props) => {
  return (
    <StyledCopyUrl id={props.id}>
      <p>{props.url}</p>
      <ImageButton onClick={props.onClick} title="Copy">
        <img src={copyIcon.src} alt="" />
      </ImageButton>
    </StyledCopyUrl>
  );
};

export default CopyUrl;
