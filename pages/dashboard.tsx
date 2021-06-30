import { Button, Grid } from '@material-ui/core';
import { FC } from 'react';

import { DashboardLayout } from '../components/DashboardLayout';
import Banner from '../components/banner';

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
