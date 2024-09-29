import ComplexDropDowns from "./complex-drop-downs";
import NotificationDropDowns from "./notification-drop-downs";
import SimpleDropDowns from "./simple-drop-downs";

export const jsonToPageDisplay = {
  pageTitle: "Drop downs",
  description: "Variety of drop downs",
  jsonToDisplay: [
    {
      title: "Click and Hover drop downs",
      subTitle: "Click and Hover drop downs",
      toDisplay: "",
      component: <SimpleDropDowns />,
      open: false,
    },
    {
      title: "Profile drop downs",
      subTitle: "Profile drop downs",
      toDisplay: "",
      component: <ComplexDropDowns />,
      open: false,
    },
    {
      title: "Notifications drop-downs",
      subTitle: "Notifications drop-downs",
      toDisplay: "",
      component: <NotificationDropDowns />,
      open: false,
    },
  ],
};
