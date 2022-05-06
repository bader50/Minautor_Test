import { useEffect } from "react";
import {
  selectUsers,
  updateAllUserList,
} from "../../store/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUsersList } from "../../api/httpService";
import Banner from "../../ui/Banner.component";
import UsersTable from "./components/UsersTable";
import { Container } from "./styles/UsersTable";

function Home() {
  const userList = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsersList().then((response) => {
      dispatch(updateAllUserList(response));
    });
  }, [dispatch]);

  return (
    <Container>
      <Banner title="Users list" />
      <UsersTable userList={userList} />
    </Container>
  );
}

export default Home;
