import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostContent from "../components/PostContent";
import PostHeader from "../components/PostHeader";

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const post = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

afterEach(cleanup);

describe("Test if the Post page is rendered", () => {
  test("Verify the presence of the title", () => {
    // http.getUsersList().mockResolvedValueOnce({ ok: true });
    render(
      <BrowserRouter>
        <PostHeader userName={user.name} />
      </BrowserRouter>
    );
    // const nameElement2 = screen.getByText(/Leanne Graham/i);
    // expect(out).toBeInTheDocument();

    // expect(http.getUsersList).toHaveBeenCalledTimes(1);
    const nameElement = screen.getByText(/Leanne Graham list of posts/i);
    expect(nameElement).toBeInTheDocument();
  });

  test("Verify the presence of the user", async () => {
    render(<PostContent userName={user.name} userPosts={post} />);
    const nameElement = screen.getByText(/Leanne Graham/i);
    expect(nameElement).toBeInTheDocument();
  });
});
