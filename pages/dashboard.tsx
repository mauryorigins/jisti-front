import { Button, Grid } from '@material-ui/core';
import { FC } from 'react';

import Banner from '../components/banner';
import { DashboardLayout } from '../components/dashboard-layout';

const Home: FC = () => {
  return (
    <DashboardLayout title="Onephase Home Component">
      <Banner />
      <Banner />
      <Banner />
      <Grid container direction="row" justify="center" alignItems="center">
        <p>Container 1</p>
      </Grid>
      <Button color="primary">Botón</Button>
    </DashboardLayout>
  );
};

export default Home;
