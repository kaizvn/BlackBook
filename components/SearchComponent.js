import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
function SearchComponent({ onClick, value }) {
    return (
        <div>
            <div className="search-home">
                <Grid alignItems="center" justify="center" container spacing={0}>
                    <Grid item lg={6}>
                        <Container>
                            <Grid justify="center" container>
                                <h1>BlackBook</h1>
                            </Grid>
                            <Grid container>
                                <Paper style={{
                                    padding: '10px 10px',
                                    margin: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1
                                }}>
                                    <InputBase
                                        value={value}
                                        style={{
                                            marginLeft: 8,
                                            flex: 1,
                                        }}
                                        placeholder="Search black book"
                                        inputProps={{ 'aria-label': 'Search Google Maps' }}
                                    />
                                    <Divider style={{
                                        width: 1,
                                        height: 28,
                                        margin: 4,
                                    }} />
                                    <Button color="primary" onClick={onClick}><SearchIcon /> Search</Button>
                                </Paper>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <style jsx>{`
                .search-home{
                    padding: 30px 0
                }
            `}</style>
        </div>
    );
}

export default SearchComponent;