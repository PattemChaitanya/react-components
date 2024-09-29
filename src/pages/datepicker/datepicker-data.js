import ComplexDatepicker from "./complex-datepicker";
import SimpleDatepicker from "./simple-datepicker";

export const jsonToPageDisplay = {
  pageTitle: "Datepicker",
  description: "Variety of datepicker",
  jsonToDisplay: [
    {
      title: "Simple datepicker",
      subTitle: "Simple datepicker",
      toDisplay: "",
      component: <SimpleDatepicker />,
      open: false,
    },
    {
      title: "Complex datepicker",
      subTitle: "Complex datepicker",
      toDisplay: "",
      component: <ComplexDatepicker />,
      open: false,
    },
  ],
};
