import NftUtilityItem from "./components/NftUtilityItem";
import { StyledNftUtilities } from "./styledComponents";
import React from "react";
import { MoreInfo } from "../../dummyData/data";

const NftUtilities: React.FC<{ data: MoreInfo[] }> = (props) => {
  const utilityList = props.data.map((utility, index) => {
    return (
      <NftUtilityItem
        key={index}
        title={utility.data}
        iconUrl={utility.iconUrl}
        redirectUrl={utility.url}
        description={utility.description}
      />
    );
  });
  return <StyledNftUtilities>{utilityList}</StyledNftUtilities>;
};

export default NftUtilities;
