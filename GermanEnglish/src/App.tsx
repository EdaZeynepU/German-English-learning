import './App.css'
import { Route,Routes } from "react-router-dom";
import Home from './components/HomeComponents/Home';
import  ResponsiveAppBar  from "./components/AppBar";
import NotFound from "./components/NotFound";
import QuestionPage from './components/QuestionPageComponents/QuestionPage';
import FlashcardHomePage from "./components/FlashCardComponents/FlashcardHomePage";

function App() {

  return (
    <>
      {/* navbar */}
      <ResponsiveAppBar/>
      {/* travelling among pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<FlashcardHomePage/>} />
        <Route path="/questions" element={<QuestionPage/>} />
        <Route path="*" element={<NotFound/>} /> {/* if there is no such a path */}
      </Routes>
    </>
  )
}

export default App
