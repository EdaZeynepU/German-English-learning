import React, { useEffect, useState } from "react";
import AFlashcard from "./AFlashcard";
import { Button, Grid, Typography, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import x from "../../../api/Words.json";

//imagePaths -> keys:string -> index:int -> path,ger,eng (string type)
const imagePaths: {
  [key: string]: { path: string; ger: string; eng: string }[];
}= x.imagePaths;

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
        width: "95vw",
        margin: "10px auto",
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
              margin: "40px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Grid container item spacing={5}>
              {images.map((image, index) => (
                <Grid
                  xs={12}
                  md={4}
                  key={index}
                  container
                  item
                  justifyContent="center"
                >
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
                  <Grid key={99} xs={12} md={4} item justifyContent="center">
                    {/* Link to Quiz */}
                    <Stack
                      sx={{
                        height: "350px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <Link to="/questions" className="btnLink">
                        <Button
                          variant="contained"
                          color="primary"
                          className="btnInside"
                          startIcon={<QuizIcon />}
                          sx={{ margin: "10px" }}
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
                          sx={{ margin: "10px" }}
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
