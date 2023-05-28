import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

//set interface to take props
interface AFlashcardProps {
  img: string;
  eng: string;
  ger: string;
}

const AFlashcard: React.FC<AFlashcardProps> = ({ img, eng, ger }) => {
  const [language, setLanguage] = useState("");

//set the language to chosen one
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLanguage(event.currentTarget.value);
  };

  return (
    <Card sx={{ width: 350 }}>

{/* Cards photo part */}
      <CardMedia
        sx={{
          height: "100px",
          paddingTop: "56.25%", // 16:9 aspect ratio (adjust as needed)
          objectFit: "contain",
        }}
        image={img}
      />

{/* Cards translated word part */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "rgb(209, 209, 209,0.75)",
        }}
      >
        <Typography variant="h4" color="text.secondary">
          {language == "" ? "?" : language == "eng" ? eng : ger} {/* return the languages' value */}
        </Typography>
      </CardContent>

{/* Cards action part */}
      <CardActions sx={{ background: "rgb(209, 209, 209,0.25)" }}>
        
{/* English word button */}
        <Button value="eng" size="small" onClick={handleClick}>
          English
        </Button>
{/* German word button */}
        <Button
          sx={{ color: "darkOrange" }}
          value="ger"
          size="small"
          onClick={handleClick}
        >
          German
        </Button>
      </CardActions>

    </Card>
  );
};

export default AFlashcard;
