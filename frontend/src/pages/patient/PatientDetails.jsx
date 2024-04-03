import React, { useState } from "react";
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

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../common.css";
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

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 2,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const PatientDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={handleOpen}
                >
                  <AddIcon />
                  New
                </Button>
              </CardActions>
              <CardContent style={{ textAlign: "start" }}>
                <Typography
                  gutterBottom
                  variant="span"
                  component="div"
                  style={{ fontSize: 15, marginBottom: "1rem" }}
                >
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

                <Typography
                  gutterBottom
                  variant="span"
                  component="div"
                  style={{ fontSize: 15, marginBottom: "1rem" }}
                >
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

                <Typography
                  gutterBottom
                  variant="span"
                  component="div"
                  style={{ fontSize: 15, marginBottom: "1rem" }}
                >
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
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <form>
                <Box sx={Modalstyle}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    New Property
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "44ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Property Name"
                      variant="outlined"
                    />
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "21ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Min Value"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Max Value"
                      variant="outlined"
                      type="number"
                    />
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "21ch" },
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Current Value  "
                      variant="outlined"
                      type="number"
                    />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Color
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        s
                        label="Age"
                      >
                        <MenuItem value={10} color="primary">
                          Primary
                        </MenuItem>
                        <MenuItem value={20} color="secondary">
                          Secondary
                        </MenuItem>
                        <MenuItem value={30} color="danger">
                          Danger
                        </MenuItem>
                        <MenuItem value={30} color="warning">
                          Warning
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Button variant="contained" sx={{ marginLeft: "0.5rem" }}>
                    Add
                  </Button>
                </Box>
              </form>
            </Modal>
          </Card>
        </div>
        <div style={{ width: "70%" }}>
          <div style={{ width: "100%", marginBottom: "1rem" }}>
            <Card
              disableRipple
              style={{
                backgroundColor: "#FFF",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "#FFF",
                },
              }}
              className="timeline_card"
            >
              <CardActionArea
                disableRipple
                style={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    marginLeft: "1rem",
                    fontWeight: 600,
                  }}
                >
                  History
                </Typography>
                <Timeline sx={{ alignItems: "flex-start !important" }}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">02-03-2024</Typography>
                      <Typography variant="span">
                        Spinal Osteomyelitis Surgery
                      </Typography>
                      <br />
                      <Typography variant="span" color={"primary"}>
                        Dr. S.S. Patil
                      </Typography>
                      <br />
                      <Typography variant="p">Comment:</Typography>
                      <br />
                      <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi nostrum fuga mollitia aperiam in.
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <br />
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">15-01-2024</Typography>
                      <Typography variant="span">
                        Spinal Osteomyelitis Surgery
                      </Typography>
                      <br />
                      <Typography variant="span" color={"primary"}>
                        Dr. S.S. Patil
                      </Typography>
                      <br />
                      <Typography variant="p">Comment:</Typography>
                      <br />
                      <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi nostrum fuga mollitia aperiam in.
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">15-01-2024</Typography>
                      <Typography variant="span">
                        Spinal Osteomyelitis Surgery
                      </Typography>
                      <br />
                      <Typography variant="span" color={"primary"}>
                        Dr. S.S. Patil
                      </Typography>
                      <br />
                      <Typography variant="p">Comment:</Typography>
                      <br />
                      <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi nostrum fuga mollitia aperiam in.
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardActionArea>
            </Card>
          </div>
          <div style={{ width: "100%" }}>
            <Card
              disableRipple
              style={{
                backgroundColor: "#FFF",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "#FFF",
                },
              }}
              className="timeline_card"
            >
              <CardActionArea
                disableRipple
                style={{ width: "100%", justifyContent: "start" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    marginLeft: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Billing
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
