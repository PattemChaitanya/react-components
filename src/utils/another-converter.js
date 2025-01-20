import { readFileSync } from "fs-extra";

export const formatAsCodeBlock = (filePath) => {
  try {
    let stringFormat = "";
    const response = fetch(filePath).then((response) => response.text());
    // const jsxContent = await response.text();
    console.log("Response from fetch:", response);

    return "```jsx\n" + stringFormat + "\n```";
  } catch (error) {
    console.error("Error fetching the JSX file:", error);
    return null;
  }
};

// export const codeConsider = async (filePath) => {
//   const codeBlock = await formatAsCodeBlock(filePath);
//   if (codeBlock) {
//     console.log(codeBlock);
//   }
// };
