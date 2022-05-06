import { PostModel } from "../../../api/models/PostModel";
import { Author, Avatar, CardContainer, H2, Initial, P } from "../styles/Card";

type Props = {
  userPost: PostModel;
  userName: string;
};

function Card({ userPost, userName }: Props) {
  const [firstName, lastName] = userName.split(" ");
  return (
    <CardContainer>
      <Avatar>
        <Initial>{`${firstName[0]}${lastName[0]}`}</Initial>
      </Avatar>
      <div>
        <H2>{userPost.title}</H2>
        <P>{userPost.body}</P>
        <Author>{`${firstName} ${lastName} • 5 minutes ago`}</Author>
      </div>
    </CardContainer>
  );
}

export default Card;
