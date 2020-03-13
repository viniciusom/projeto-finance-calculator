import React from 'react';
import { Container, FormControl, InputLabel, Select, makeStyles, TextField, MenuItem, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';

function FinanceCalculator() {

  const useStyles = makeStyles(theme => ({
    formType: {
      margin: theme.spacing(1),
      marginTop: 50,
      minWidth: 300,
    },
    formMonth: {
      margin: theme.spacing(1),
      marginTop: 20,
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop: 50,
        width: 300,
      },
    },
    second: {
      margin: theme.spacing(1),
      marginTop: 20,
      width: 300,
    },
    button: {
      margin: theme.spacing(1),
      marginTop: 20,
      width: 300,
      height: 56,
    },
    table: {
      marginTop: 50,
      minWidth: 650,
    },
  }));
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);
  const handleChange = (event: any) => {
    setType(event.target.value);
  };

  function createData(month: string, earning: number, costs: number, balance: number) {
    return { month, earning, costs, balance };
  }

  const rows = [
    createData('April', 4750, 1250, 3500),
    createData('May', 4750, 1250, 7000),
    createData('June', 4750, 1250, 10500),
    createData('July', 4750, 1250, 14000),
    createData('August', 4750, 1250, 17500),
    createData('September', 4750, 1250, 21000),
    createData('October', 4750, 1250, 24500),
    createData('November', 4750, 1250, 28000),
    createData('December', 4750, 1250, 31500),
  ];

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formType}>
              <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                Select type
            </InputLabel>
              <Select
                labelId="select-type"
                id="select-type"
                value={type}
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="fixedearning">Fixed Earning</MenuItem>
                <MenuItem value="additionalearning">Additional Earning</MenuItem>
                <MenuItem value="fixedcosts">Fixed Costs</MenuItem>
                <MenuItem value="additionalcosts">Additional Costs</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="From" variant="outlined" className={classes.root} />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Value" variant="outlined" className={classes.root} />
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={4}>
            <TextField id="outlined-basic" label="Manytimes" variant="outlined" className={classes.second} />
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formMonth}>
              <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                From month
              </InputLabel>
              <Select
                labelId="from-month"
                id="from-month"
                value={type}
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="april">April</MenuItem>
                <MenuItem value="may">May</MenuItem>
                <MenuItem value="june">June</MenuItem>
                <MenuItem value="july">July</MenuItem>
                <MenuItem value="august">August</MenuItem>
                <MenuItem value="september">September</MenuItem>
                <MenuItem value="october">October</MenuItem>
                <MenuItem value="november">November</MenuItem>
                <MenuItem value="december">December</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" href="#contained-buttons" className={classes.button}>
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Earning</TableCell>
                <TableCell>Costs</TableCell>
                <TableCell>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.month}>
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell>{row.earning}</TableCell>
                  <TableCell>{row.costs}</TableCell>
                  <TableCell>{row.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default FinanceCalculator;