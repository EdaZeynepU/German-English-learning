import { useEffect, useState } from "react";
import AFlashcard from "./AFlashcard";
import {
  ImageList,
  ImageListItem,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";


//images-> path,ger,eng (string type)
const imagePaths = [
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
  {
    path: "../images/Red.jpg",
    ger: "das rot",
    eng: "red",
  },
];

const Flashcards = () => {
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
      imagePaths.map((element) =>
        import(element.path /* @vite-ignore */).then((module) => module.default)//ignore that part
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
    <>
      {
        // if isloading is false then show loading, but if its true then retun images
        isLoading ? (
          <Typography component="div" variant="h1">
            Loading
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <ImageList variant="quilted" cols={3} gap={12}>
              {images.map((image, index) => (
                <ImageListItem key={index}>
                  <AFlashcard
                    key={index}
                    img={image}
                    eng={imagePaths[index].eng}
                    ger={imagePaths[index].ger}
                  />
                </ImageListItem>
              ))}

              {
                //show buttons 1 seconds after importing images (preventing the mess)
                showButtons ? (
                  <Stack>
                    {/* Link to Quiz */}
                    <Link to="/questions" className="btnLink">
                      <Button
                        variant="contained"
                        color="primary"
                        className="btnInside"
                        startIcon={<QuizIcon />}
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
                      >
                        Home
                      </Button>
                    </Link>
                  </Stack>
                ) : (
                  <></>
                )
              }
            </ImageList>
          </Box>
        )
      }
    </>
  );
};

export default Flashcards;
