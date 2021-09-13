import { Image, Content, Title, SubTitle } from "./Styles";

const Banner = ({ height, image, title, subTitle }) => {
  return (
    <Image image={image} height={height}>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Content>
    </Image>
  );
};

export default Banner;
