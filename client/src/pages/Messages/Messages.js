import { useContext, useState } from "react";

// Components
import Chat from "../../components/Chat/Chat";

// Comtext
import { UserContext } from "../../contexts/UserContext";
import useMessages from "../../hooks/useMessages";

// Styles
import {
  Wrapper,
  Title,
  Image,
  Message,
  Content,
  UserName,
  LastMessage,
  TopBar,
  UserImage,
  SearchBar,
  FriendsBar,
} from "./Styles";

const Messages = () => {
  const { state } = useContext(UserContext);
  const [messageView, setMessageView] = useState({ isOpen: false, user: null });
  const inbox = useMessages();

  const openMessage = (image, username) => {
    setMessageView({
      isOpen: !messageView.isOpen,
      user: { image: image, username: username },
    });
  };

  return state.isLoading && inbox.loading ? (
    <p>loading...</p>
  ) : (
    <Wrapper>
      {!messageView.isOpen ? (
        <>
          <TopBar>
            <UserImage image={state.user.profilePhoto} />
            <Title>Messages</Title>
          </TopBar>
          <SearchBar placeholder="search..." />
          <FriendsBar onClick={() => console.log(inbox)}>Click me</FriendsBar>
          <LastMessage>loading..</LastMessage>
          {inbox.data.map((user) => (
            <Message
              onClick={() =>
                openMessage(
                  user.profilePhoto,
                  user.name.firstName + " " + user.name.lastName
                )
              }
              key={user._id}
            >
              <Image image={user.profilePhoto} />
              <Content>
                <UserName>{`${user.name.firstName} ${user.name.lastName}`}</UserName>
                <LastMessage read={false}>Hello</LastMessage>
              </Content>
            </Message>
          ))}
        </>
      ) : (
        <Chat user={messageView.user} />
      )}
    </Wrapper>
  );
};

export default Messages;
