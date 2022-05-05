import { AppContainer } from "../App.styles";
import Banner from "../components/Banner.component";
import UsersTable from "../components/UsersTable.component";

function Home() {
  return (
    <AppContainer>
      <Banner title="Users list" />
      <UsersTable />
    </AppContainer>
  );
}

export default Home;
