import {
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
  Paper,
  Button,
} from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function SidePart() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card className="side-element" sx={{ textAlign: "center" }}>
        <CardContent>
          If you want something for fun about language learning you can visit
          his youtube chanel
        </CardContent>
        <CardActions>
          <a href="https://www.youtube.com/@LanguageSimp" target="_blank"><Button startIcon={<ArrowRightAltIcon />}>Click Here</Button></a>
        </CardActions>
      </Card>
      <Card className="side-element" sx={{ textAlign: "center" }}>
        <CardContent>
          This website is not enough but wait, there is another website I can recommend... Duolingo! Just one deficiency it punish a lot
        </CardContent>
        <CardActions>
          <a href="https://www.duolingo.com/" target="_blank"><Button startIcon={<ArrowRightAltIcon />}>Click Here</Button> </a>
        </CardActions>
      </Card>
      <Card className="side-element" sx={{ textAlign: "center" }}>
        <CardContent>
          Language learning method from a youtuber.
        </CardContent>
        <CardActions>
        <a href="https://youtu.be/bRxLOH7vz-0" target="_blank"><Button startIcon={<ArrowRightAltIcon />}>Click Here</Button></a>
        </CardActions>
      </Card>
    </div>
  );
}

export default SidePart;