import ComplexDrawer from "./complex-drawer";
import SimpleDrawer from "./simple-drawer";

export const jsonToPageDisplay = {
  pageTitle: "Drawer",
  description: "Variety of drawer",
  jsonToDisplay: [
    {
      title: "Simple drawer",
      subTitle: "Simple drawer",
      toDisplay: "",
      component: <SimpleDrawer />,
      open: false,
    },
    {
      title: "Complex drawer",
      subTitle: "Complex drawer",
      toDisplay: "",
      component: <ComplexDrawer />,
      open: false,
    },
  ]
}
    