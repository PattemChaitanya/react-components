import ComplexClipboard from "./complex-clipboard";
import SimpleClipboard from "./simple-clipboard";

export const jsonToPageDisplay = {
  pageTitle: "Clipboard",
  description: "Variety of clipboard",
  jsonToDisplay: [
    {
      title: "Simple clipboard",
      subTitle: "Simple clipboard",
      toDisplay: "",
      component: <SimpleClipboard />,
      open: false,
    },
    {
      title: "Complex clipboard",
      subTitle: "Complex clipboard",
      toDisplay: "",
      component: <ComplexClipboard />,
      open: false,
    },
  ]
}
    