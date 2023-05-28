import Landing from "./Landing";
import SidePart from "./SidePart";

import Grid from "@mui/material/Unstable_Grid2";

const Home = () => {
  return (
    <Grid container className="homePage" sx={{ display: "flex" }}>
      <Grid xs={12} md={9} sx={{ marginBottom: "10px" }}>
        {/* quotes and flags part */}
        <Landing />
      </Grid>
      <Grid xs={12} md={3} sx={{ marginTop: "10px" }}>
        {/* suggestions part */}
        <SidePart />
      </Grid>
    </Grid>
  );
};

export default Home;
