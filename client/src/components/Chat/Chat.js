// Styles
import {
  Wrapper,
  TopBar,
  BackButton,
  Image,
  Name,
  ChatWrapper,
  ChatMessage,
  MessageWrapper,
  BottomWrapper,
  Input,
  Send,
} from "./Styles";

const conversation = [
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
  { from: "user", msg: "hey brother whats up" },
  { from: "me", msg: "nothin much man just handing out" },
];

const Chat = ({ user }) => {
  const { image, name = "User" } = user;
  return (
    <Wrapper>
      <TopBar>
        <BackButton>{`<-`}</BackButton>
        <Image src={image} />
        <Name>{name}</Name>
      </TopBar>
      <ChatWrapper>
        {conversation.map((message, i) =>
          message.from === "me" ? (
            <MessageWrapper from={message.from} key={i}>
              <ChatMessage from={message.from}>{message.msg}</ChatMessage>
            </MessageWrapper>
          ) : (
            <MessageWrapper from={message.from} key={i}>
              <Image small={true} src={image}></Image>
              <ChatMessage from={message.from}>{message.msg}</ChatMessage>
            </MessageWrapper>
          )
        )}
      </ChatWrapper>
      <BottomWrapper>
        <Input placeholder="Aa" />
        <Send>Send</Send>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Chat;
