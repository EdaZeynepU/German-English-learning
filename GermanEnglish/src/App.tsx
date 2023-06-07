import './App.css'
import { Route,Routes } from "react-router-dom";
import Home from './components/HomeComponents/Home';
import  ResponsiveAppBar  from "./components/AppBar";
import NotFound from "./components/NotFound";
import QuestionHomePage from './components/QuestionPageComponents/QuestionHomePage';
import FlashcardHomePage from "./components/FlashCardComponents/FlashcardHomePage";
import Contact from "./Contact";

function App() {

  return (
    <>
      {/* navbar */}
      <ResponsiveAppBar/>
      {/* travelling among pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<FlashcardHomePage/>} />
        <Route path="/questions" element={<QuestionHomePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} /> {/* if there is no such a path */}
      </Routes>
    </>
  )
}

export default App
