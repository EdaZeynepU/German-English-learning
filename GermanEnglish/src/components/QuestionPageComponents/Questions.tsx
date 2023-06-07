import React, { useEffect, useState } from "react";
import Question from "./AQuestion";
import Grid from "@mui/material/Unstable_Grid2";
import x from "../../../api/Words.json";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CardMembership from "@mui/icons-material/CardMembership";

interface teamInterface {
  path: string;
  ger: string;
  eng: string;
}
interface QuestionProps{
    category:string;
}

const imagePaths: {
    [key: string]: { path: string; ger: string; eng: string }[];
  }= x.imagePaths;

const Questions: React.FC<QuestionProps> = ({category}) => {
  //   const [options] = useState(Array.from(fruitMap.options())); // options from map
  const [team, setTeam] = useState<teamInterface[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const choosenTeam=imagePaths[category];
    setTeam(choosenTeam);
    const choosenOptions = choosenTeam.map((word) => word.ger);
    setOptions(choosenOptions);
    console.log("say hi");
    
  },[]);

  const getRandomStrings = (answer: String): String[] => {
    const randomStrings: String[] = [];

    // random number from 0 to maps size-1
    const x = Math.floor(Math.random() * options.length);

    // Add random strings to the array
    randomStrings.push(options[x]);
    randomStrings.push(options[(x + 2) % options.length]);
    randomStrings.push(options[(x + 4) % options.length]);
    // If there isn't answer among random options then ad it randomly
    if (randomStrings.indexOf(answer) == -1) {
      randomStrings[x % 3] = answer;
    }
    return randomStrings;
  };

  return (
    <Grid container xs={12} gap={3} sx={{ justifyContent: "center", }}>
      {team.map((word, index) => (
        <Question
          key={index}
          answer={word.ger}
          question={word.eng}
          fullAnswers={getRandomStrings(word.ger)}
        />
      ))}

      <Grid
        sx={{
          height: "340px",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Link to="/flashcards" className="btnLinkQuiz">
          <Button
            variant="contained"
            color="secondary"
            className="btnInsideQuiz"
            startIcon={<CardMembership />}
            sx={{ margin: "10px" }}
          >
            Flashcards
          </Button>
        </Link>
        {/* Link to Home */}
        <Link to="/" className="btnLinkQuiz">
          <Button
            variant="contained"
            color="secondary"
            className="btnInsideQuiz"
            startIcon={<HomeIcon />}
            sx={{ margin: "10px" }}
          >
            Home
          </Button>
          
        </Link>
      </Grid>
    </Grid>
  );
};

export default Questions;
