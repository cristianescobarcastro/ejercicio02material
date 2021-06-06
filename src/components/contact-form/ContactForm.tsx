import { useState, useContext } from "react";
import ContadorContext from '../../context/context'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const contador = {
  contador: {
    cont: 0,
  }
}

interface Contact {
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  email: string
}

const ContactForm = () => {

  const classes = useStyles();  

  const contadorContext = useContext(ContadorContext);

  const [contact, setValue] = useState<Contact>({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: ''
  });

  const handleInput = (e: any): void => {
    setValue({
      ...contact, [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setValue({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      email: ''
    })    
    contadorContext.counter = contadorContext.counter + 1;
    contadorContext.email = contact.email;   
    alert('Contexto Contador: '+ contadorContext.counter +' Último email: '+ contadorContext.email ); 
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
              id="contact"
              className={classes.root}
              noValidate={false}
              onSubmit={handleSubmit}
              autoComplete="off">
              <Box><TextField id="nombre"
                label="nombre"
                name="nombre"
                value={contact?.nombre || ''}
                onChange={handleInput}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineRoundedIcon />
                    </InputAdornment>
                  ),
                }} />

                <TextField id="apellidoPaterno"
                  label="apellido paterno"
                  name="apellidoPaterno"
                  value={contact?.apellidoPaterno || ''}
                  onChange={handleInput}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineRoundedIcon />
                      </InputAdornment>
                    ),
                  }} />
                <TextField id="apellidoMaterno"
                  label="apellido materno"
                  name="apellidoMaterno"
                  value={contact?.apellidoMaterno || ''}
                  onChange={handleInput}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineRoundedIcon />
                      </InputAdornment>
                    ),
                  }} />
                <TextField id="email"
                  type="email"
                  label="email"
                  name="email"
                  value={contact?.email || ''}
                  onChange={handleInput}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }} />
              </Box>

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}                 
                  endIcon={<Icon>send</Icon>}>Enviar</Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
};

export default ContactForm