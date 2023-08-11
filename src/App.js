import {useState, useEffect} from "react"
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/PostPage";
import { Navbar } from "./components/Navbar";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EditPostPage } from "./pages/EditPostPage";
import { PostItem } from "./components/PostItem";

export default function App(props) {
    
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="/posts/edit/:id" element={<EditPostPage/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}