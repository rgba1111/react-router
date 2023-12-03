import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, NavLink} from 'react-router-dom';


import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>  {/* root route */}
    <Route path="about" element={ <About/> } />  {/* nested route */}
    <Route path="signup" element={ <SignUp/> } />  {/* nested route */}
    <Route path="articles" element={ <Articles/> } />  {/* nested route */}
    <Route path="categories" element={ <Categories/> } />  {/* nested route */}
    <Route path="categories/:name" element={ <Category/> } />  {/* nested route */}
    <Route path=":title" element={ <Article/> } />  {/* nested route */}
    <Route path="authors/:name" element={ <Author/> } />  {/* nested route */}

    <Route path="profile" element={ <Profile/> } />  {/* nested route */}
    <Route path="profile/edit" element={ <EditProfileForm/> } />  {/* nested route */}

  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
