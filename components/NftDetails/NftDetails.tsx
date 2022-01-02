import NftDetailsHeader from "./NftDetailsHeader";
import NftPreviewCard from "./NftPreviewCard";
import NftUtilities from "./NftUtilities";
import NftInfo from "./NftInfo";
import { DummyNftInfo } from "../../dummyData/data";
import { StyledNftDetails } from "./styledComponents";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import Head from "next/head";

const NftDetails = () => {
  const { data, loading, error } = useFetch<{ url: string }>(
    "https://jsonblob.com/api/926528805515051008"
  );
  const [isUtility, setUtility] = useState<boolean>(true);

  let shareUrl: string | undefined = "...";

  if (error) {
    console.log(error);
  }
  if (!loading && data !== undefined) {
    shareUrl = data.url;
  }

  const aboutHandler = () => {
    setUtility((prevState) => {
      const newState = prevState;
      return !newState;
    });
  };

  return (
    <StyledNftDetails>
      <Head>
        <Head>
          <title>Dehidden</title>
          <meta name="description" content="Shards of eth - Power Up"></meta>
        </Head>
      </Head>
      <NftDetailsHeader shareUrl={shareUrl} />
      <NftPreviewCard
        onAbout={aboutHandler}
        isUtility={isUtility}
        title={DummyNftInfo.title}
        collection={DummyNftInfo.collection.data}
        mintNumber={DummyNftInfo.mintNumber.toString()}
        openseaUrl={DummyNftInfo.activePlatform.url}
      />
      {isUtility && <NftUtilities data={DummyNftInfo.utilities} />}
      {!isUtility && <NftInfo data={DummyNftInfo} onAbout={aboutHandler} />}
    </StyledNftDetails>
  );
};

export default NftDetails;
