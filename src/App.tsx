import Layout from "./components/layout";
import MyPage from "./components/MyPage";
import MyRecord from "./components/MyRecord";
import ScrollButton from "./components/ScrollButton";
import Column from "./components/Column";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MyPage />} />
          <Route path='myrecord' element={<MyRecord />}></Route>
          <Route path='column' element={<Column />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>

        <ScrollButton />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
