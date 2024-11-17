import Accordion from "../pages/accordion";
import Alert from "../pages/alert";
import Avatar from "../pages/avatar";
import Badge from "../pages/badge";
import ButtonGroup from "../pages/button-group";
import BottomNavigation from "../pages/bottom-nav";
import Buttons from "../pages/buttons";
import Cards from "../pages/cards";
import DragAndDrop from "../pages/drag-and-drop/drag-and-drop";
import Drawer from "../pages/drawer";
import Footer from "../pages/footer";
import Images from "../pages/images";
import Table from "../pages/table";
import Todo from "../pages/todo/todo";
import RadioButton from "../pages/radio-button";
import SelectBox from "../pages/select-box";
import Banner from "../pages/banner";
import Breadcrumbs from "../pages/breadcrumbs";
import ChatBubble from "../pages/chat-bubble";
import Clipboard from "../pages/clipboard";
import Datepicker from "../pages/datepicker";
import DropDowns from "../pages/drop-downs";
import Gallery from "../pages/gallery";

export const menu = [
  {
    title: "Drag and drop",
    path: "/drag-and-drop",
    component: <DragAndDrop />,
  },
  {
    title: "To Do List",
    path: "/to-do",
    component: <Todo />,
  },
  {
    title: "Container",
    path: "/container",
    component: "<Container />",
  },
  {
    title: "Cards",
    path: "/cards",
    component: "<Cards />",
  },
  {
    title: "Loaders",
    path: "/loaders",
    component: "<Loaders />",
  },
  {
    title: "Navbar(header)",
    path: "/navbar",
    component: "<Navbar />",
  },
  {
    title: "Footer",
    path: "/footer",
    component: "<Footer />",
  },
  {
    title: "Side bar(drawer)",
    path: "/sidebar",
    component: "<SidebarDrawer />",
  },
  {
    title: "Responsive layout",
    path: "/responsive-layout",
    component: "<ResponsiveLayout />",
  },
  {
    title: "Avatar",
    path: "/avatar",
    component: "<Avatar />",
  },
  {
    title: "Images",
    path: "/images",
    component: <Images />,
  },
  {
    title: "Table",
    path: "/table",
    component: <Table />,
  },
  {
    title: "Pagination",
    path: "/pagination",
    component: "<Pagination />",
  },
  {
    title: "Modal",
    path: "/modal",
    component: "<Modal />",
  },
  {
    title: "Tooltip",
    path: "/tooltip",
    component: "<Tooltip />",
  },
  {
    title: "Popover",
    path: "/popover",
    component: "<Popover />",
  },
  {
    title: "Alert",
    path: "/alert",
    component: "<Alert />",
  },
  {
    title: "Progress bar",
    path: "/progress-bar",
    component: "<ProgressBar />",
  },
  {
    title: "Stepper",
    path: "/stepper",
    component: "<Stepper />",
  },
  {
    title: "Tabs",
    path: "/tabs",
    component: "<Tabs />",
  },
  {
    title: "Accordion",
    path: "/accordion",
    component: "<Accordion />",
  },
  {
    title: "Breadcrumbs",
    path: "/breadcrumbs",
    component: "<Breadcrumbs />",
  },
  {
    title: "Badge",
    path: "/badge",
    component: "<Badge />",
  },
];

export const components = [
  {
    title: "Buttons",
    path: "buttons",
    to: "/components/buttons",
    component: "<Buttons />",
  },
  {
    title: "List",
    path: "list",
    to: "/components/list",
    component: "<List />",
  },
  {
    title: "Playground",
    path: "playground",
    to: "/components/playground",
    component: "<Playground />",
  },
  {
    title: "Typography",
    path: "typography",
    to: "/components/typography",
    component: "<Typography />",
  },
  {
    title: "Icons",
    path: "icons",
    to: "/components/icons",
    component: "<Icons />",
  },
  {
    title: "Avatar",
    path: "avatar",
    to: "/components/avatar",
    component: "<Avatar />",
  },
  {
    title: "Image",
    path: "image",
    to: "/components/image",
    component: "<Image />",
  },
  {
    title: "Radio button",
    path: "radio-button",
    to: "/components/radio-button",
    component: <RadioButton />,
  },
  {
    title: "Select box",
    path: "select-box",
    to: "/components/select-box",
    component: <SelectBox />,
  },
  {
    title: "Typography",
    path: "/components/typography",
    component: "<Typography />",
  },
  {
    title: "Container",
    path: "/components/container",
    component: "<Container />",
  },
];

export const newMenu = [
  {
    title: "Accordion",
    path: "/accordion",
    component: <Accordion />,
  },
  { title: "Alert", path: "/alert", component: <Alert /> },
  { title: "Avatar", path: "/avatar", component: <Avatar /> },
  { title: "Badge", path: "/badge", component: <Badge /> },
  { title: "Banner", path: "/banner", component: <Banner /> },
  {
    title: "Bottom Navigation",
    path: "/bottom-navigation",
    component: <BottomNavigation />,
  },
  {
    title: "Breadcrumbs",
    path: "/breadcrumbs",
    component: <Breadcrumbs />,
  },
  {
    title: "Button Group",
    path: "/button-group",
    component: <ButtonGroup />,
  },
  { title: "Buttons", path: "/buttons", component: <Buttons /> },
  { title: "Card", path: "/card", component: <Cards /> },
  { title: "Carousel", path: "/carousel", component: "<Carousel />" },
  {
    title: "Chat Bubble",
    path: "/chat-bubble",
    component: <ChatBubble />,
  },
  {
    title: "Clipboard",
    path: "/clipboard",
    component: <Clipboard />,
  },

  {
    title: "Datepicker",
    path: "/datepicker",
    component: <Datepicker />,
  },
  {
    title: "Drag and drop",
    path: "/drag-and-drop",
    component: <DragAndDrop />,
  },
  { title: "Drawer", path: "/drawer", component: <Drawer /> },
  {
    title: "Dropdowns",
    path: "/dropdowns",
    component: <DropDowns />,
  },
  { title: "Footer", path: "/footer", component: <Footer /> },
  { title: "Forms", path: "/forms", component: "<Forms />" },
  { title: "Gallery", path: "/gallery", component: <Gallery /> },
  {
    title: "Indicators",
    path: "/indicators",
    component: "<Indicators />",
  },
  {
    title: "Images",
    path: "/images",
    component: <Images />,
  },
  {
    title: "List Group",
    path: "/list-group",
    component: "<ListGroup />",
  },
  { title: "Loaders", path: "/loaders", component: "<Loaders />" },
  { title: "Modal", path: "/modal", component: "<Modal />" },
  { title: "Navbar", path: "/navbar", component: "<Navbar />" },
  {
    title: "Pagination",
    path: "/pagination",
    component: "<Pagination />",
  },
  { title: "Popover", path: "/popover", component: "<Popover />" },
  {
    title: "Progress bar",
    path: "/progress-bar",
    component: "<Progressbar />",
  },
  { title: "Rating", path: "/rating", component: "<Rating />" },
  {
    title: "Responsive layout.",
    path: "/responsive-layout.",
    component: "<Responsivelayout. />",
  },
  { title: "Sidebar", path: "/sidebar", component: "<Sidebar />" },
  { title: "Skeleton", path: "/skeleton", component: "<Skeleton />" },
  { title: "Spinner", path: "/spinner", component: "<Spinner />" },
  { title: "Stepper", path: "/stepper", component: "<Stepper />" },
  { title: "Tables", path: "/tables", component: <Table /> },
  { title: "Tabs", path: "/tabs", component: "<Tabs />" },
  { title: "Timeline", path: "/timeline", component: "<Timeline />" },
  { title: "Toast", path: "/toast", component: "<Toast />" },
  { title: "Tooltips", path: "/tooltips", component: "<Tooltips />" },
];
