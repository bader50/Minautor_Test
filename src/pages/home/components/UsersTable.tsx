import { Fragment } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import UserHomeType from "./UserHomeType";
import Spinner from "../../../ui/Spinner";
import { Table } from "../styles/UsersTable";
import { UserListModel } from "../../../api/models/UserModel";

const UsersTable = ({ userList }: { userList: UserListModel }) => {
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
