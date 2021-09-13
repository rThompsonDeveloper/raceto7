import styled from "styled-components";

// Globals
import { blue } from "../../Globals";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const TopBar = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackButton = styled.p`
  color: white;
  font-size: 1.4em;
`;

export const Image = styled.img`
  width: ${(p) => (p.small ? "30px" : "50px")};
  height: ${(p) => (p.small ? "30px" : "50px")};
  border-radius: 100%;
  margin: 0px 10px;
`;

export const Name = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  overflow-y: scroll;
  margin-top: 68px;
  padding: 10px;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.from === "me" ? "flex-end" : "flex-start")};
`;

export const ChatMessage = styled.p`
  color: white;
  padding: 10px;
  background-image: ${(p) =>
    p.from === "user"
      ? "linear-gradient(0deg, #424242, #2d2d2d)"
      : "linear-gradient(0deg, #005294, #0021d6)"};
  border-radius: 10px;
  width: fit-content;
  margin: 4px 0px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 8px;
  background #333;
  border: none;
  outline: none;
  color: white;
`;

export const Send = styled.p`
  color: white;
  background: ${blue};
  padding: 6px 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
