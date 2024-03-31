import React from "react";
import PageTitle from "../../component/common/PageTitle";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import AddIcon from "@mui/icons-material/Add";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
//   },
// }));

const PatientDetails = () => {
  return (
    <div className="main_view">
      <PageTitle title={"Patient Details"} />
      <div
        className="dashboard_main"
        style={{
          width: "100%",
          display: "flex",
          gap: "0.5rem",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ width: "30%" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="240"
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, marginTop: "1rem" }} disableRipple>
            <CardActionArea disableRipple>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  <AddIcon />New
                </Button>
              </CardActions>
              <CardContent style={{ textAlign: "start" }}>
                <Typography gutterBottom variant="span" component="div" style={{fontSize:15, marginBottom:'1rem'}}>
                  <span>Blood Presure</span>
                  <Tooltip title={50}>
                    <LinearProgress
                      color="secondary"
                      style={{ height: "10px", borderRadius: 5 }}
                      variant="determinate"
                      value={50}
                    />
                  </Tooltip>
                </Typography>

                <Typography gutterBottom variant="span" component="div" style={{fontSize:15,marginBottom:'1rem'}}>
                  <span>Hemoglobian</span>
                  <Tooltip title={10}>
                    <LinearProgress
                      color="warning"
                      style={{ height: "10px", borderRadius: 5 }}
                      variant="determinate"
                      value={10}
                    />
                  </Tooltip>
                </Typography>

                <Typography gutterBottom variant="span" component="div" style={{fontSize:15,marginBottom:'1rem'}}>
                  <span>Hemoglobian</span>
                  <Tooltip title={70}>
                    <LinearProgress
                      color="error"
                      style={{ height: "10px", borderRadius: 5 }}
                      variant="determinate"
                      value={70}
                    />
                  </Tooltip>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div style={{ width: "70%" }}>
        <Card disableRipple>
            <CardActionArea disableRipple>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  <AddIcon />New
                </Button>
              </CardActions>
              <CardContent style={{ textAlign: "start" }}>
                <Typography gutterBottom variant="span" component="div" style={{fontSize:15, marginBottom:'1rem'}}>
                  <span>Blood Presure</span>
                  <Tooltip title={50}>
                    <LinearProgress
                      color="secondary"
                      style={{ height: "10px", borderRadius: 5 }}
                      variant="determinate"
                      value={50}
                    />
                  </Tooltip>
                </Typography>

                <Typography gutterBottom variant="span" component="div" style={{fontSize:15,marginBottom:'1rem'}}>
                  <span>Hemoglobian</span>
                  <Tooltip title={10}>
                    <LinearProgress
                      color="warning"
                      style={{ height: "10px", borderRadius: 5 }}
                      variant="determinate"
                      value={10}
                    />
                  </Tooltip>
                </Typography>

                <Typography gutterBottom variant="span" component="div" style={{fontSize:15,marginBottom:'1rem'}}>
                  <span>Hemoglobian</span>
                  <Tooltip title={70}>
                    <LinearProgress
                      color="error"
                      style={{ height: "10px", borderRadius: 5 }}
                      variant="determinate"
                      value={70}
                    />
                  </Tooltip>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
