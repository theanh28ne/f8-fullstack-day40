import { HashRouter, Route, Routes } from "react-router";
import PostsList from "./pages/PostsList";
import Header from "./component/Header";
import UsersList from "./pages/UsersList";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route index element={<PostsList />} />
        <Route path="UsersList" element={<UsersList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
