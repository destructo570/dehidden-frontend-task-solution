import Image from "next/image";
import React, { useState } from "react";
import backIcon from "../../assets/icons/vector/arrow-left-line.svg";
import { NftInfoObject } from "../../dummyData/data";
import { generateNftInfoTitle } from "../../lib/util";
import {
  StyledNftInfo,
  StyledNftInfoHeader,
  StyledNftInfoSections,
  StyledNftInfoDescription,
  StyledNftInfoDetails,
  StyledMoreInfo,
} from "./styledComponents";

const NftInfo: React.FC<{ data: NftInfoObject; onAbout: () => void }> = (
  props
) => {
  const [isDescription, setDescription] = useState<boolean>(true);

  const descriptionHandler = () => {
    setDescription(true);
  };
  const detailsHandler = () => {
    setDescription(false);
  };

  const descriptionSection = (
    <StyledNftInfoDescription>
      <h1>
        {generateNftInfoTitle(props.data.title, props.data.collection.data)}
      </h1>
      <h3>{props.data.subTitle}</h3>
      <p>{props.data.description}</p>
    </StyledNftInfoDescription>
  );

  const nftDetailsSection = (
    <StyledNftInfoDetails>
      <div>
        <p>Minted On</p>
        <StyledMoreInfo>
          <Image
            src={props.data.mintedOn.iconUrl}
            width={44}
            height={44}
            alt=""
          />
          <p>{props.data.mintedOn.data}</p>
        </StyledMoreInfo>
      </div>
      <div>
        <p>Active Platform</p>
        <StyledMoreInfo>
          <Image
            src={props.data.activePlatform.iconUrl}
            width={44}
            height={44}
            alt=""
          />
          <p>{props.data.activePlatform.data}</p>
        </StyledMoreInfo>
      </div>
      <div>
        <p>Creator</p>
        <StyledMoreInfo>
          <Image
            src={props.data.creator.iconUrl}
            width={44}
            height={44}
            alt=""
          />
          <p>{props.data.creator.data}</p>
        </StyledMoreInfo>
      </div>
      <div>
        <p>Collection</p>
        <StyledMoreInfo>
          <Image
            src={props.data.collection.iconUrl}
            width={44}
            height={44}
            alt=""
          />
          <p>{props.data.collection.data}</p>
        </StyledMoreInfo>
      </div>
    </StyledNftInfoDetails>
  );
  return (
    <StyledNftInfo>
      <StyledNftInfoHeader onClick={props.onAbout}>
        <img src={backIcon.src} alt="go back to utilities" />
        <p>Back to utilities</p>
      </StyledNftInfoHeader>
      <StyledNftInfoSections isDescription={isDescription}>
        <p onClick={descriptionHandler}>Description</p>
        <p onClick={detailsHandler}>Details</p>
      </StyledNftInfoSections>
      {isDescription && descriptionSection}
      {!isDescription && nftDetailsSection}
    </StyledNftInfo>
  );
};

export default NftInfo;
