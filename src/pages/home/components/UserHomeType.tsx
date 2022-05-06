import { UserListModel } from "../../../api/models/UserModel";
import { H4 } from "../styles/UsersTable";

type Props = {
  userList: UserListModel;
};

function UserHomeType({ userList }: Props) {
  const userInAptList = userList.filter(
    (user) => user.address.suite[0] === "A"
  );

  return (
    <H4>{`There is ${userInAptList.length} users living in apartment and ${
      userList.length - userInAptList.length
    } in a suite`}</H4>
  );
}

export default UserHomeType;
