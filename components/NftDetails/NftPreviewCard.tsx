import ImageButton from "../Global/ImageButton";
import infoIcon from "../../assets/icons/vector/info-icon.svg";
import openSeaIcon from "../../assets/icons/vector/open-sea.svg";
import NftImage from "../../assets/images/mobile/shards_nft.png";
import { StyledNftPreviewCard } from "./styledComponents";
import React from "react";
import { generateNftMintNumber } from "../../lib/util";

const NftPreviewCard: React.FC<{
  onAbout: () => void;
  isUtility: boolean;
  title: string;
  collection: string;
  mintNumber: string;
  openseaUrl: string;
}> = (props) => {
  const openSeaHandler = () => {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href: "https://www.google.com",
    }).click();
  };
  let action = (
    <ImageButton title="About" onClick={props.onAbout}>
      <img src={infoIcon.src} alt="" />
    </ImageButton>
  );

  if (!props.isUtility) {
    action = (
      <ImageButton title="View on opensea" onClick={openSeaHandler}>
        <img src={openSeaIcon.src} alt="" />
      </ImageButton>
    );
  }
  return (
    <StyledNftPreviewCard>
      <img src={NftImage.src} alt="" />
      <h3>{props.collection}</h3>
      <h1>{props.title}</h1>
      <h2>{generateNftMintNumber(props.mintNumber)}</h2>
      {action}
    </StyledNftPreviewCard>
  );
};

export default NftPreviewCard;
