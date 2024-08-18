import ComplexSelectBox from "./complex-select-box";
import SimpleSelectBox from "./simple-select-box";

export const jsonToPageDisplay = {
  pageTitle: "SelectBox",
  description: "Variety of selectBox",
  jsonToDisplay: [
    {
      title: "Simple selectBox",
      subTitle: "Simple selectBox",
      toDisplay: "",
      component: <SimpleSelectBox />,
      open: false,
    },
    {
      title: "Complex selectBox",
      subTitle: "Complex selectBox",
      toDisplay: "",
      component: <ComplexSelectBox />,
      open: false,
    },
  ],
};
