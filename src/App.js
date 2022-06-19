import "./App.css";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDitails from "./components/Cards/CardDitails";

function App() {
  let [pageNum, setPageNum] = useState(1);
  let [search, setSearch] = useState("");
  let [fatchedData, updateFatchedData] = useState([]);
  let { info, results } = fatchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFatchedData(data);
    })();
  }, [api]);
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Search setSearch={setSearch} />
          <Routes>
            <Route exact path="/" element={<Cards results={results} />} />
            <Route path="/:id" element={<CardDitails />} />
          </Routes>
        </div>
      </Router>
      <footer>
        <Pagination info={info} pageNum={pageNum} setPageNum={setPageNum} />
      </footer>
    </>
  );
}

export default App;
