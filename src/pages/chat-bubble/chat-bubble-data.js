import ComplexChatBubble from "./complex-chat-bubble";
import SimpleChatBubble from "./simple-chat-bubble";

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
  ],
};
