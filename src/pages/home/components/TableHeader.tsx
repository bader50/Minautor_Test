import { Th, Thead, Tr } from "../styles/UsersTable";


function TableHeader() {
  return (
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>name</Th>
        <Th>username</Th>
      </Tr>
    </Thead>
  );
}

export default TableHeader;
