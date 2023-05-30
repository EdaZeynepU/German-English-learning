import React, { useEffect, useState } from "react";
import AFlashcard from "./AFlashcard";
import {
  Button,
  Grid,
  Typography,
  Stack
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";

//imagePaths -> keys:string -> index:int -> path,ger,eng (string type)
const imagePaths: {
  [key: string]: { path: string; ger: string; eng: string }[];
} = {
  drinks: [
    {
      path: "../images/Coffee.jpg",
      ger: "Kaffee",
      eng: "Coffee",
    },
    {
      path: "../images/Tea.jpg",
      ger: "Tee",
      eng: "Tea",
    },
    {
      path: "../images/Beer.jpg",
      ger: "das Bier",
      eng: "Beer",
    },
    {
      path: "../images/Milk.jpg",
      ger: "die Milch",
      eng: "Milk",
    },
    {
      path: "../images/FruitJuice.jpg",
      ger: "der Fruchtsaft",
      eng: "Fruit juice",
    },
    {
      path: "../images/Water.jpg",
      ger: "das Wasser",
      eng: "water",
    },
    {
      path: "../images/Wine.jpg",
      ger: "Wein",
      eng: "Wine",
    },
  ],
  colors: [
    {
      path: "../images/Red.jpg",
      ger: "das rot",
      eng: "red",
    },
    {
      path: "../images/pink.jpg",
      ger: "Rosa",
      eng: "pink",
    },
    {
      path: "../images/brown.jpg",
      ger: "Braun",
      eng: "brown",
    },
    {
      path: "../images/orange.jpg",
      ger: "Orange ",
      eng: "orange",
    },
    {
      path: "../images/yellow.jpg",
      ger: "Gelb",
      eng: "yellow",
    },
    {
      path: "../images/blue.jpg",
      ger: "Blau",
      eng: "blue",
    },
    {
      path: "../images/purple.jpg",
      ger: "Violett",
      eng: "purple",
    },
    {
      path: "../images/green.jpg",
      ger: "Grün",
      eng: "green",
    },
    {
      path: "../images/black.jpg",
      ger: "Schwarz",
      eng: "black",
    },
    {
      path: "../images/gray.jpg",
      ger: "das grau",
      eng: "gray",
    },
    {
      path: "../images/white.jpg",
      ger: "Weiß",
      eng: "white",
    },
  ],
  partsOfTheHouse:[
    {
      path: "../images/house.jpg",
      ger: "das Haus",
      eng: "house",
    },{
      path: "../images/bedroom.jpg",
      ger: "das Schlafzimmer",
      eng: "bedroom",
    },{
      path: "../images/bathroom.jpg",
      ger: "das Badezimmer",
      eng: "bathroom",
    },{
      path: "../images/kitchen.jpg",
      ger: "die Küche",
      eng: "kitchen",
    },{
      path: "../images/garden.jpg",
      ger: "der Garten",
      eng: "garden",
    },{
      path: "../images/room.jpg",
      ger:"das Zimmer",
      eng: "room",
    },{
      path: "../images/stairs.jpg",
      ger:"die Treppeder",
      eng: "stairs",
    },{
      path: "../images/basement.jpg",
      ger:"der Keller",
      eng: "basement",
    },
  ]
};

interface FLashCardsprops {
  team: string;
}

const Flashcards: React.FC<FLashCardsprops> = ({ team }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  //making isLoading true after importing images
  useEffect(() => {
    importImages();
    setIsLoading(false);
  }, []);

  //importing photos
  const importImages = async () => {
    setIsLoading(false);
    const importedImages = await Promise.all(
      imagePaths[team].map(
        (element) =>
          import(element.path /* @vite-ignore */).then(
            (module) => module.default
          ) //ignore that part
      )
    );
    setImages(importedImages);
  };

  //To prevent messed up loading
  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setShowButtons(true);
      }
    }, 1000); // Wait a second for images then show buttons
  }, [isLoading]);

  return (
    <Grid
      container
      spacing={1}
      sx={{
        width:"95vw",
        margin: "10px auto"
      }}
    >
      {
        // if isloading is false then show loading, but if its true then retun images
        isLoading ? (
          <Typography component="div" variant="h1">
            Loading
          </Typography>
        ) : (
          <Grid
          item
          container
          sx={{
            margin:"40px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
            <Grid container item spacing={5}>
              {images.map((image, index) => (
                <Grid xs={12} md={4} key={index} container item justifyContent="center" >
                  <AFlashcard
                    key={index}
                    img={image}
                    eng={imagePaths[team][index].eng}
                    ger={imagePaths[team][index].ger}
                  />
                </Grid>
              ))}

              {
                //show buttons 1 seconds after importing images (preventing the mess)
                showButtons ? (
                <Grid key={99} xs={12} md={4} item justifyContent="center" >
                    {/* Link to Quiz */}
                    <Stack sx={{height:"350px",marginTop:"auto",marginBottom:"auto"}}>
                      <Link to="/questions" className="btnLink">
                      <Button
                        variant="contained"
                        color="primary"
                        className="btnInside"
                        startIcon={<QuizIcon />}
                        sx={{margin:"10px"}}
                      >
                        Quizz
                      </Button>
                    </Link>
                    {/* Link to Home */}
                    <Link to="/" className="btnLink">
                      <Button
                        variant="contained"
                        className="btnInside"
                        startIcon={<HomeIcon />}
                        sx={{margin:"10px"}}
                      >
                        Home
                      </Button>
                    </Link>
                    </Stack>
                    
                </Grid>
                ) : (
                  <></>
                )
              }
            </Grid>
         </Grid>
        )
      }
    </Grid>
  );
};

export default Flashcards;
