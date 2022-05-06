import { useNavigate } from "react-router-dom";
import { UserListModel } from "../../../api/models/UserModel";
import { Td, Tr } from "../styles/UsersTable";

type Props = {
  userList: UserListModel;
};

function TableBody({ userList }: Props) {
  const navigate = useNavigate();

  return (
    <tbody>
      {userList.map((user) => (
        <Tr
          role="contentInfo"
          onClick={() => navigate(`/post/${user.id}`)}
          key={user.id}
        >
          <Td>{user.id}</Td>
          <Td>{user.name}</Td>
          <Td>{user.username}</Td>
        </Tr>
      ))}
    </tbody>
  );
}

export default TableBody;
