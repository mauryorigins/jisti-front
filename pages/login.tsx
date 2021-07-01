import {
  Avatar,
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';

import Form, { IFields, IFieldSchema } from '../components/Form';
import TextInput from '../components/Inputs/TextInput';

const LoginFieldsSchema: IFieldSchema[] = [
  {
    name: 'email',
    validations: {
      maxLength: {
        max: 64,
        errorMessage: 'El correo no puede tener mas de 64 caracteres',
      },
      emailFormat: {
        errorMessage: 'Email no es válido',
      },
      required: {
        errorMessage: 'Ingresa tu correo',
      },
    },
    value: '',
  },
  {
    name: 'password',
    validations: {
      minLength: {
        errorMessage: 'La contraseña debe tener al menos 8 caracteres',
        min: 8,
      },
      required: {
        errorMessage: 'La contraseña es requerida',
      },
    },
    value: '',
  },
];

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = (fields: IFields) => {
    console.log('LOGIN IN>', fields);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Card style={{ width: '340px' }}>
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login Form
            </Typography>
          </Grid>
          <Form onSubmit={handleRegister} fields={LoginFieldsSchema}>
            {({ handleSubmit, handleChange, valid, fields }) => (
              <Grid container spacing={4} direction="column">
                <Grid item xs={12}>
                  <TextInput
                    disabled={loading}
                    label="Correo electrónico"
                    value={fields.email.value}
                    onChange={handleChange('email')}
                    customErrorHandler
                    error={!!fields.email.errors.length}
                    helperText={fields.email.errors.join('. ')}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    disabled={loading}
                    label="Contraseña"
                    value={fields.password.value}
                    type="password"
                    onChange={handleChange('password')}
                    customErrorHandler
                    error={!!fields.password.errors.length}
                    helperText={fields.password.errors.join('. ')}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} container direction="row" justify="center">
                  {loading ? (
                    <CircularProgress data-testid="loading-indicator" />
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!valid}
                      variant="contained"
                      color="primary"
                    >
                      Iniciar Sesión
                    </Button>
                  )}
                </Grid>
              </Grid>
            )}
          </Form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
