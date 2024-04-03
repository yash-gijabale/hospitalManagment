import React from "react";
import PageTitle from "../../component/common/PageTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

const NewDoctor = () => {
  const addDoctor = (e) => {
    e.preventDefault()

    let formData = Object.fromEntries(new FormData(e.target))
    console.log(formData)
  };

  return (
    <div className="main_view">
      <PageTitle title={"Add Doctor"} />

      <div className="patient_form">
        <form onSubmit={(e) => addDoctor(e)}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginTop: 4,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstName"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastName"
            />
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              name="mobileNumber"
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
            />

            <TextField
              id="outlined-basic"
              label="Date Of Birth"
              type="date"
              variant="outlined"
              name="dob"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                name="gender"
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
            />

            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              name="city"
            />

            <TextField
              id="outlined-basic"
              label="Education"
              variant="outlined"
              name="education"
            />

            <TextField
              id="outlined-basic"
              label="Spectiality"
              variant="outlined"
              name="speciality"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"
                name="department"
              >
                <MenuItem value={"dept1"}>Department 1</MenuItem>
                <MenuItem value={"dept2"}>Department 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                type="file"
                variant="outlined"
                name="profile"
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginTop: 1,
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#fcb900",
                "&:hover": {
                  backgroundColor: "#fcb900",
                },
                color: "black",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default NewDoctor;
