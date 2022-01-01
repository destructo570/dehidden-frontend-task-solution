import { StyledNftDetailsHeader, StyledLogo } from "./styledComponents";
import logo from "../../assets/icons/vector/logo.svg";
import Button from "../Global/Button";
import React from "react";
import CopyText from "../Global/CopyUrl";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";

const NftDetailsHeader: React.FC<{ shareUrl: string }> = (props) => {
  const notifCtx = useContext(NotificationContext);

  const onShareHandler = () => {
    if (props.shareUrl) {
      //Write the nft link to clipboard
      navigator.clipboard.writeText(props.shareUrl);
      notifCtx.showNotification("Copied!");
    }
  };
  return (
    <StyledNftDetailsHeader>
      <StyledLogo>
        <img src={logo.src} alt="logo" />
        <p>Dehidden</p>
      </StyledLogo>
      <Button title="Share" id="shareButton" onClick={onShareHandler} />
      <CopyText
        title="Copy"
        id="shareUrlComp"
        onClick={onShareHandler}
        url={props.shareUrl}
      />
    </StyledNftDetailsHeader>
  );
};

export default NftDetailsHeader;
