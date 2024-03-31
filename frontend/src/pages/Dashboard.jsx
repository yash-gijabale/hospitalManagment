import React from "react";
import "../index.css";
import "../component/component.css";
import "../pages/common.css";
import DashboardCard from "../component/dashboardComponent/DashboardCard";
import PageTitle from "../component/common/PageTitle";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Dashboard = () => {
  return (
    <div className="main_view">
      <PageTitle title={"Dashboard"} />
      <div className="dashboard_main">
        <div className="stats_div" style={{width:'100%', display:'flex', gap:'1rem'}}>
          <div className="left_dashboard" style={{ width: "25%" }}>
            <DashboardCard card={{ title: "Total Patient", stats: 100 }} />
            <DashboardCard card={{ title: "Total Doctors", stats: 10 }} />
            <DashboardCard card={{ title: "Total Appointment", stats: 10 }} />
          </div>
          <div className="left_dashboard" style={{ width: "75%" }}>
            <Card sx={{ minWidth: 275, marginTop: "1rem" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ textAlign: "start", fontSize: 15 }}
                >
                  Total Revenue
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Card sx={{ width: "33%", backgroundColor: "#03a9f4" }}>
                    <CardContent>
                      <Typography sx={{ color: "white" }}>
                        {" "}
                        <AccountBalanceIcon /> 100
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ width: "33%", backgroundColor: "#ffeb3b" }}>
                    <CardContent>
                      <Typography>100</Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ width: "33%", backgroundColor: "#8bc34a" }}>
                    <CardContent>
                      <Typography>100</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
