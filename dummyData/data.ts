export type MoreInfo = {
  data: string;
  iconUrl: string;
  url: string;
  description: string;
};
export type MetaData = {
  tokenId: number;
  tokenStandard: string;
  Blockchain: string;
  contractAddress: string;
};
export type NftInfoObject = {
  title: string;
  subTitle: string;
  mintNumber: number;
  description: string;
  url: string;
  imageUrl: string;
  mintedOn: MoreInfo;
  activePlatform: MoreInfo;
  creator: MoreInfo;
  collection: MoreInfo;
  metaData: MetaData;
  utilities: MoreInfo[];
};

export const DummyNftInfo: NftInfoObject = {
  title: "Power Up",
  subTitle:
    "An NFT family that consists of memorabilia enclosed in a crystal ether.",
  mintNumber: 2,
  description:
    "This Shard symbolizes one of Technology's most significant moments embedded in the web3 layer of Ethereum. Shards of Eth are an emerging crypto asset, as their smart contract design prevents manipulation and duplication in the marketplace. Possessing a Shard grants you access to a set of unlockables powered by Dehidden, a game changing utility tech for NFTs.",
  url: "https://wwww.nftshareurlhere.com/420",
  imageUrl: "https://wwww.nftpreviewimagehere.com/420",
  mintedOn: {
    data: "20th August",
    iconUrl: "https://imgur.com/QAoxFRi.png",
    url: "",
    description: "",
  },
  activePlatform: {
    data: "Open Sea",
    iconUrl: "https://imgur.com/thGfJGX.png",
    url: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/20361720196251722520255843584474688316908758145602765193901507433588831813633",
    description: "",
  },
  creator: {
    data: "Dehidden",
    iconUrl: "https://imgur.com/Bsc5Inc.png",
    url: "https://opensea.io/Dehidden",
    description: "",
  },
  collection: {
    data: "Shards of ETH",
    iconUrl: "https://imgur.com/Ds0TaCz.png",
    url: "https://opensea.io/collection/shardsofeth",
    description: "",
  },
  utilities: [
    {
      data: "View on IPFS/ARWEAVE",
      description: "Your NFT data stored safely forever",
      iconUrl: "https://imgur.com/WOnJSVS.png",
      url: "https://actionurl.com",
    },
    {
      data: "View AR experience",
      iconUrl: "https://imgur.com/Skf7DR4.png",
      description: "See how your NFT looks in augmented reality",
      url: "https://actionurl.com",
    },
    {
      data: "Download 3d model",
      iconUrl: "https://imgur.com/taGT4wy.png",
      description: "Instantly get access to the blender file",
      url: "https://actionurl.com",
    },
    {
      data: "Join the community",
      iconUrl: "https://imgur.com/b5Tn0Fn.png",
      description: "Unlock Community access with your NFT",
      url: "https://actionurl.com",
    },
  ],
  metaData: {
    tokenId: 20361720196251722520255843584474688316908758145602765193901507433588831813633,
    tokenStandard: "ERC-1155",
    Blockchain: "Polygon",
    contractAddress: "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
  },
};
