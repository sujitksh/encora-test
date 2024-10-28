import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";

function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<RepoList />} />
           <Route path="/repo/:name" element={<RepoDetails />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
