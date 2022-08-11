import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '../Components/Table';
import Map from '../Components/Map';
import InfoCard from '../Components/InfoCard';
export default function StatsContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={2}>
          <InfoCard  title='Cases' active={212} cases={21} isRed={false} total={32} />
          <InfoCard  title='Cases' active={212} cases={21} isRed={false} total={32} />
          <InfoCard  title='Cases' active={212} cases={21} isRed={false} total={32} />

        </Grid>

        <Grid item xs={12} md={6}>
          <Map/>
        </Grid>

        <Grid item xs={12} md={4}>
          <Table/>
        </Grid>

      </Grid>
    </Box>
  );
}
