import { Fragment, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { selectPosts, updatePosts } from "../store/features/posts/postsSlice";
import { selectUser } from "../store/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Spinner from "../components/Spinner";
import PostHeader from "../components/PostHeader.component";
import PostContent from "../components/PostContent.component";
import { getPostsList } from "../api/fetchData";
import { AppContainer } from "../App.styles";

function Post() {
  //user id
  const { id } = useParams<{ id: string }>();
  //redux
  const user = useAppSelector((state) => selectUser(state, Number(id)));
  const postList = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    getPostsList().then((response) => dispatch(updatePosts(response)));
  }, [dispatch]);

  //after a scroll down and navigate to another route, the scroll will stay at down position
  //this useEffect correct it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //if the sata is lost from redux due to a refresh, go back home to fetch it
  //(we can use redux persiste if we want to keep the data)
  if (!user) {
    navigate("/");
  }

  const userPosts = useMemo(
    () => postList.filter((post) => post.userId === user?.id),
    [postList, user]
  );

  return (
    <AppContainer>
      {user && userPosts ? (
        <Fragment>
          <PostHeader userName={user.name} />
          <PostContent userPosts={userPosts} userName={user.name} />
        </Fragment>
      ) : (
        <Spinner />
      )}
    </AppContainer>
  );
}

export default Post;
