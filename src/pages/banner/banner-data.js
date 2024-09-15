import ComplexBanner from "./complex-banner";
import SimpleBanner from "./simple-banner";

export const jsonToPageDisplay = {
  pageTitle: "Banner",
  description: "Variety of banner",
  jsonToDisplay: [
    {
      title: "Simple banner",
      subTitle: "Simple banner",
      toDisplay: "",
      component: <SimpleBanner />,
      open: false,
    },
    {
      title: "Complex banner",
      subTitle: "Complex banner",
      toDisplay: "",
      component: <ComplexBanner />,
      open: false,
    },
  ]
}
    