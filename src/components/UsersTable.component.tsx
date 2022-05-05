import { Fragment, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import UserHomeType from "./UserHomeType";
import Spinner from "./Spinner";
import {
  selectUsers,
  updateAllUserList,
} from "../store/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUsersList } from "../api/fetchData";
import { Table } from "./UsersTable.styles";

const UsersTable = () => {
  const userList = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsersList().then((response) => {
      dispatch(updateAllUserList(response));
    });
  }, []);

  return userList.length === 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <UserHomeType userList={userList} />
      <Table>
        <TableHeader />
        <TableBody userList={userList} />
      </Table>
    </Fragment>
  );
};

export default UsersTable;
