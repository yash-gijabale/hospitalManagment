import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DashboardCard = ({card}) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: '1rem', boxShadow:'1px 1px 5px 1px #e0e0e0', borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" >
            {card.title}
        </Typography>
        <Typography variant="h4" sx={{fontWeight: 600, marginTop: 2}}>
          {card.stats}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" style={{borderColor:'#fcb900', color:"#fcb900"}}>View</Button>
      </CardActions>
    </Card>
  )
}

export default DashboardCard