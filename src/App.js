import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainApi from "./MainApi";
import "./App.css";
import SingleBook from "./SingleBook";
import BookLayout from "./BookLayout";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import Services from "./Services";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/services" element={<Services />}></Route>

            <Route path={"/books"} element={<BookLayout />}>
              <Route index element={
              <>
              <MainApi heading='CHILDREN BOOKS' Request='juvenile_fiction'/>
              <MainApi heading='PROGRAMMING BOOKS' Request='programming'/>
              <MainApi  heading='LOVE BOOKS' Request='love'/>
              <MainApi heading='BUSINESS BOOKS' Request='business'/>
              <MainApi heading='BIOGRAPHY BOOKS' Request='biography'/>
              <MainApi heading='FILMS BOOKS' Request='films'/>
              <MainApi heading='POETRY BOOKS' Request='poetry'/>
              <MainApi heading='PAINTING BOOKS' Request='painting__paintings'/>
              </>
            }></Route>
              <Route path=":id" element={<SingleBook />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet/>
    </>
  );
}

export default App;
