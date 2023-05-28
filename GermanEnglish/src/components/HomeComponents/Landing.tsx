import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import usa from "./USA.jpg";
import germany from "./Germanyy.jpg";

//random quotes
const quotes: string[] = [
  "Language is the road map of a culture. It tells you where its people come from and where they are going. - Rita Mae Brown",
  "To have another language is to possess a second soul. - Charlemagne",
  "One language sets you in a corridor for life. Two languages open every door along the way. - Frank Smith",
  "Learning another language is not only learning different words for the same things, but learning another way to think about things. - Flora Lewis",
  "The limits of my language are the limits of my world. - Ludwig Wittgenstein",
  "The more languages you know, the more you are human. - Tomáš Garrigue Masaryk",
  "A different language is a different vision of life. - Federico Fellini",
  "To learn a language is to have one more window from which to look at the world. - Chinese proverb",
  "Language is the blood of the soul into which thoughts run and out of which they grow. - Oliver Wendell Holmes, Sr.",
  "Learning a new language is becoming a member of the club - the community of speakers of that language. - Frank Smith",
];

function Landing() {
  const [quote, setQuote] = useState<string>("");

  //random quotes setter
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div>
      {quote.length > 0 ? ( //waits for quote
//if quote is ready
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "80vh",
          }}
        >
{/* quote */}
          <Typography
            variant="h5"
            component="div"
            sx={{ margin: "auto 5px", textAlign: "center" }}
          >
            <FormatQuoteIcon />
            <span>{quote}</span>
            <FormatQuoteIcon />
          </Typography>
{/* flag images */}
          <Box className="imageWrapper-landing">
            <img src={germany} alt="noluyooo" className="landing-image" />
            <img src={usa} alt="noluyooo" className="landing-image" />
          </Box>
        </Stack>
      ) : (
//if quote is not ready
        <div>Loading</div>
      )}
    </div>
  );
}

export default Landing;
