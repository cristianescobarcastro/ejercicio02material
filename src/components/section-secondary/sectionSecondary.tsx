import React, { useContext } from "react";
import ContadorContext from '../../context/context'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const SectionSecondary = () => {
    const contadorContext = useContext(ContadorContext);
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SectionSecondary;