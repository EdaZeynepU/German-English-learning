
import { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';




interface AFlashcardProps {
  img: string;
  eng: string;
  ger: string
}

const AFlashcard: React.FC<AFlashcardProps> = ({ img, eng, ger }) => {

  console.log(img);
  const [language, setLanguage] = useState("");

  const handleClick=(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setLanguage(event.currentTarget.value);
  }

  return (
    <Card sx={{ width: 350,}}>
      <CardMedia
        sx={{height: "100px",
          paddingTop: '56.25%', // 16:9 aspect ratio (adjust as needed)
          objectFit: 'contain',}}
        image={img}
      />
      <CardContent sx={{display:"flex", justifyContent:"center", background:"rgb(209, 209, 209,0.75)"}}>
        <Typography variant="h4" color="text.secondary">
          {language==""? "?":language=="eng"? eng:ger}
        </Typography>
      </CardContent>
      <CardActions sx={{background:"rgb(209, 209, 209,0.25)"}}>
        <Button  value="eng" size="small" onClick={handleClick}>English</Button>
        <Button sx={{color:"darkOrange"}} value="ger" size="small" onClick={handleClick}>German</Button>
      </CardActions>
    </Card>
  );
}

export default AFlashcard;

