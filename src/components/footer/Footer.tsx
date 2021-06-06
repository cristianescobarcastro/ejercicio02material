import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = () => {
    return (
        <Box>
            <Container maxWidth="xl">
                <Grid
                    container spacing={6}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '80vh' }}>
                    <Grid >
                        <Box
                            borderBottom={2}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontFamily="Roboto">2021 Cristián Escobar</Box>
                        <Box display="flex"
                            width={200} height={40}
                            bgcolor="lightgreen"
                            alignItems="center"
                            justifyContent="center"
                            fontFamily="Roboto">
                            <Link href="/" color="inherit">Link Contacto</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
};

export default Footer