import loadingIcon from "../../images/loading.gif";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Icon = styled.img`
  box-sizing: border-box;
  max-width: 100px;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Icon src={loadingIcon} />
    </Wrapper>
  );
};

export default Loading;
