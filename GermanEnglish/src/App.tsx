import './App.css'
import { Route,Routes } from "react-router-dom";
import Home from './components/HomeComponents/Home';
import Flashcards from './components/FlashCardComponents/Flashcards';
import  ResponsiveAppBar  from "./components/AppBar";
import NotFound from "./components/NotFound";
import QuestionPage from './components/QuestionPageComponents/QuestionPage';

function App() {

  return (
    <>
      {/* navbar */}
      <ResponsiveAppBar/>
      {/* travelling among pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards/>} />
        <Route path="/questions" element={<QuestionPage/>} />
        <Route path="*" element={<NotFound/>} /> {/* if there is no such a path */}
      </Routes>
    </>
  )
}

export default App
