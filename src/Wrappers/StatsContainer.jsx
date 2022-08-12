import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '../Components/Table';
import Map from '../Components/Map';
import InfoCard from '../Components/InfoCard';
import './wrapper.css'
export default function StatsContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>

        <Grid item xs={12} md={2}>
          <div className="card_container">
            <InfoCard  title='Cases' active={true} cases={21} isRed={true} total={32} />
            <InfoCard  title='Recovered' active={false} cases={21} isRed={false} total={32} />
            <InfoCard  title='Deaths' active={false} cases={21} isRed={true} total={32} />
            <InfoCard  title='Population' active={false} cases={21} isRed={false} total={32} />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Map/>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Table/>
        </Grid>

      </Grid>
    </Box>
  );
}
