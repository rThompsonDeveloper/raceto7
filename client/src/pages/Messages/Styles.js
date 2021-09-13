import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0c0c0c;
`;

export const Message = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #232323;
  cursor: pointer;
`;

export const Image = styled.div`
  border-radius: 100%;
  background-image: ${(p) => `url(${p.image})`};
  background-size: cover;
  width: 50px !important;
  height: 50px !important;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const UserImage = styled.div`
  border-radius: 100%;
  background-image: ${(p) => `url(${p.image})`};
  background-size: cover;
  width: 30px !important;
  height: 30px !important;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 1em;
  color: white;
`;

export const LastMessage = styled.p`
  font-weight: ${(p) => (p.read ? "400" : "600")};
  font-size: 0.9em;
  color: white;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.4em;
  color: white;
`;

export const TopBar = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const SearchBar = styled.input`
  margin: 4px 6px;
  padding: 8px 12px;
  background: #585858;
  border-radius: 20px;
  font-size: 1.2em;
  border: none;
  color: white;
  outline: none;
`;

export const FriendsBar = styled.div`
  padding: 10px;
  overflow: scroll;
  white-space: nowrap;
  display: flex;
`;
