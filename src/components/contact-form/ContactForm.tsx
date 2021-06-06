import { useState } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { convertCompilerOptionsFromJson } from "typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


interface Contact {
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  email: string
}

const ContactForm = () => {

  const classes = useStyles();



  const submit = (e: any): void => {
    e.preventDefault();
    setValue({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      email: ''
    })
  };

  const [contacto, setValue] = useState<Contact>({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: ''
  });

  const handleInput = (e: any): void => {
    setValue({
      ...contacto,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid
          container spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '20vh' }}>
          <Grid >
            <form
              className={classes.root}
              noValidate={false}
              onSubmit={submit}
              autoComplete="off">
              <TextField id="nombre"
                label="nombre"   
                value={contacto?.nombre || ''}
                onChange={handleInput}           
                required />
              <TextField id="apellidoPaterno"
                label="apellido paterno"
                value={contacto?.apellidoPaterno || ''}
                onChange={handleInput}
                required />
              <TextField id="apellidoMaterno"
                label="apellido materno"
                value={contacto?.apellidoMaterno || ''}
                onChange={handleInput}
                required />
              <TextField id="email"
                label="email"
                value={contacto?.email || ''}
                onChange={handleInput}
                required />
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
};

export default ContactForm