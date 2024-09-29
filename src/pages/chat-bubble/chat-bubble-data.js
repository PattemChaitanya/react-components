import ComplexChatBubble from "./complex-chat-bubble";
import DocumentChatBubble from "./document-chat-bubble";
import SimpleChatBubble from "./simple-chat-bubble";
import UrlSharingChatBubble from "./url-sharing-chat-bubble";

export const jsonToPageDisplay = {
  pageTitle: "Chat-bubble",
  description: "Variety of chat-bubble",
  jsonToDisplay: [
    {
      title: "Simple chat-bubble",
      subTitle: "Simple chat-bubble",
      toDisplay: "",
      component: <SimpleChatBubble />,
      open: false,
    },
    {
      title: "Complex chat-bubble",
      subTitle: "Complex chat-bubble",
      toDisplay: "",
      component: <ComplexChatBubble />,
      open: false,
    },
    {
      title: "Document chat-bubble",
      subTitle: "Document chat-bubble",
      toDisplay: "",
      component: <DocumentChatBubble />,
      open: false,
    },
    {
      title: "Url sharing chat-bubble",
      subTitle: "Url sharing chat-bubble",
      toDisplay: "",
      component: <UrlSharingChatBubble />,
      open: false,
    },
  ],
};
