import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '../Components/Table';
import Map from '../Components/Map';
import InfoCard from '../Components/InfoCard';
import './wrapper.css'
import { MyContext } from '../Context/GlobalContext';
import { useContext } from 'react';

export default function StatsContainer() {

  let {data :{worldWideData}} = useContext(MyContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>

        <Grid item xs={12} md={2}>
          <div className="card_container">
            <InfoCard  title='Cases' active={true} cases={worldWideData?.cases} isRed={true}/>
            <InfoCard  title='Recovered' active={false} cases={worldWideData?.recovered} isRed={false}/>
            <InfoCard  title='Deaths' active={false} cases={worldWideData?.deaths} isRed={true}/>
            <InfoCard  title='Population' active={false} cases={worldWideData?.population} isRed={false}/>
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
