import './App.css'
import { Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Flashcards from './components/Flashcards';
import  AppBar  from "./components/AppBar";
import NotFound from "./components/NotFound";
import QuestionPage from './components/QuestionPage';

function App() {

  return (
    <>
      <AppBar/>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards/>} />
        <Route path="/questions" element={<QuestionPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
