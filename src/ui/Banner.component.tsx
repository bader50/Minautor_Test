import { BannerContainer, H1 } from "./Banner.styles";

type Props = {
  title: string;
};

function Banner({ title }: Props) {
  return (
    <BannerContainer>
      <H1>{title}</H1>
    </BannerContainer>
  );
}

export default Banner;
