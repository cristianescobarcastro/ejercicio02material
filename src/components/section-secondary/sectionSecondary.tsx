import { useContext } from "react";
import ContadorContext from '../../context/context'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


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

const SectionSecondary = () => {
    const contadorContext = useContext(ContadorContext);
 
    const handleSubmit = (e: any): void => {      
        e.preventDefault();
        alert('Contexto Contador Hijo: '+ contadorContext.counter +' Último email: '+ contadorContext.email ); 
    };

    const classes = useStyles();  

    return (
        <div>
            <Container maxWidth="xl">
                <Grid
                    container spacing={4}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '30vh' }}>
                    <Grid >
                        <form
                            id="contact"
                            className={classes.root}
                            noValidate={false}
                            onSubmit={handleSubmit}
                            autoComplete="off">
                            <Box>
                                <TextField
                                    id="contador"
                                    label="Contador envíos"
                                    InputProps={{
                                        readOnly: true,
                                    }}                                   
                                    value={contadorContext.counter}
                                />
                            </Box>
                            <Box>
                                <TextField
                                    id="detalle"
                                    label="Email último envío"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={contadorContext.email}
                                />
                            </Box>
                            <Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit">
                                   Ver Contexto</Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SectionSecondary;