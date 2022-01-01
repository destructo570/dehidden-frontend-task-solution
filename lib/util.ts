//Returns combined title and collection string for title.
export const generateNftInfoTitle = (
  title: string,
  collection: string
): string => {
  return `${collection} - ${title}`;
};

//Generates styled mint number ex. 7 => #0007
export const generateNftMintNumber = (number: string): string => {
  let num = number;
  const finalString = "#";
  if (number.length < 4) {
    const numOfZeros = 4 - number.length;
    if (numOfZeros > 0) {
      for (let i = numOfZeros; i !== 0; i--) {
        num = "0" + num;
      }
    }
  }
  return `${finalString.concat(num)}`;
};
