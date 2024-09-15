import ComplexBreadcrumbs from "./complex-breadcrumbs";
import SimpleBreadcrumbs from "./simple-breadcrumbs";

export const jsonToPageDisplay = {
  pageTitle: "Breadcrumbs",
  description: "Variety of breadcrumbs",
  jsonToDisplay: [
    {
      title: "Simple breadcrumbs",
      subTitle: "Simple breadcrumbs",
      toDisplay: "",
      component: <SimpleBreadcrumbs />,
      open: false,
    },
    {
      title: "Complex breadcrumbs",
      subTitle: "Complex breadcrumbs",
      toDisplay: "",
      component: <ComplexBreadcrumbs />,
      open: false,
    },
  ]
}
    