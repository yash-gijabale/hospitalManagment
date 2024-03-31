import React, { Fragment } from "react";

// MUI
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

// ICONS
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DraftsIcon from "@mui/icons-material/Drafts";
import ThreePIcon from "@mui/icons-material/ThreeP";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = React.useState({
    patient: false,
    doctor: false,
  });

  const handleClick = (tap) => {
    let menus = { ...open };
    menus[tap] = !menus[tap];
    setOpen(menus);
  };
  return (
    <Fragment>
      <div className="sidebar_main">
        <div
          style={{ width: "100%", backgroundColor: "#fcb900", height: "65px" }}
        ></div>
        {/* <Link to={""}>Dashboard</Link>
        <Link to={"/new-patient"}>new</Link> */}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            marginTop: "1rem",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Link to={"/"}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>

          <ListItemButton
            onClick={() => handleClick("patient")}
            style={{ backgroundColor: "#fef4d6" }}
          >
            <ListItemIcon>
              <ThreePIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Patients" />
            {open.patient ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.patient} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to={"/new-patient"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PersonAddIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="New Patient" />
                </ListItemButton>
              </Link>
            </List>

            <List component="div" disablePadding>
              <Link to={"/all-patients"}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PersonAddIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="All Patients" />
                </ListItemButton>
              </Link>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PersonAddIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="Patient Details" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick("doctor")}>
            <ListItemIcon>
              <AssignmentIndIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Doctors" />
            {open.doctor ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open.doctor} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PersonAddIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="New Doctor" />
              </ListItemButton>
            </List>

            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PersonAddIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="All Doctors" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PersonAddIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="Doctor Profile" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </Fragment>
  );
};

export default Sidebar;
