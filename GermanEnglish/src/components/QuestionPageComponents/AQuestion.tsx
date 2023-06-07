import React, { useEffect, useState } from "react";
import Question from "./Question";
import Grid from "@mui/material/Unstable_Grid2";
import x from "../../../api/Words.json";

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
    const choosenOptions = choosenTeam.map((word) => word.eng);
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
    </Grid>
  );
};

export default Questions;
