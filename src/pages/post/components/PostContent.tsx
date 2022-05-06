import Card from "./Card";
import { PostList } from "../styles/PostContent";
import { PostListModel } from "../../../api/models/PostModel";

type Props = {
  userPosts: PostListModel;
  userName: string;
};

function PostContent({ userPosts, userName }: Props) {
  return (
    <PostList>
      {userPosts.map((userPost) => (
        <Card userPost={userPost} userName={userName} key={userPost.id} />
      ))}
    </PostList>
  );
}

export default PostContent;
