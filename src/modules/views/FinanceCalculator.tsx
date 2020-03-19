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
  const [from, setFrom] = React.useState('');
  const [values, setValues] = React.useState(0);
  const [manytimes, setManytimes] = React.useState(0);
  const [month, setMonth] = React.useState(0);
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleType = (event: any) => {
    setType(event.target.value);
  };
  const handleMonth = (event: any) => {
    setMonth(event.target.value);
  }
  const handleFrom = (event: any) => {
    setFrom(event.target.value);
  }
  const handleValues = (event: any) => {
    setValues(event.target.value);
  }
  const handleManytimes = (event: any) => {
    setManytimes(event.target.value);
  }

  const months = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  function createData(months: string, earning: number, costs: number, balance: number) {
    return { months, earning, costs, balance };
  }

  var rows = [
    createData(months[month], values, 0, values*manytimes),
    ];

  const handleClick = () => {
    alert(`${type} ${from} ${values} ${manytimes} ${month}`);
    
    console.log(rows);
  }

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
                onChange={handleType}
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
            <TextField id="from" value={from} onChange={handleFrom} label="From" variant="outlined" className={classes.root} />
          </Grid>
          <Grid item xs={4}>
            <TextField id="value" value={values} onChange={handleValues} label="Value" variant="outlined" className={classes.root} />
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={4}>
            <TextField id="manytimes" value={manytimes} onChange={handleManytimes} label="Manytimes" variant="outlined" className={classes.second} />
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formMonth}>
              <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                From month
              </InputLabel>
              <Select
                labelId="from-month"
                id="from-month"
                value={month}
                onChange={handleMonth}
                labelWidth={labelWidth}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={0}>{months[0]}</MenuItem>
                <MenuItem value={1}>{months[1]}</MenuItem>
                <MenuItem value={2}>{months[2]}</MenuItem>
                <MenuItem value={3}>{months[3]}</MenuItem>
                <MenuItem value={4}>{months[4]}</MenuItem>
                <MenuItem value={5}>{months[5]}</MenuItem>
                <MenuItem value={6}>{months[6]}</MenuItem>
                <MenuItem value={7}>{months[7]}</MenuItem>
                <MenuItem value={8}>{months[8]}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={handleClick} color="primary" href="#contained-buttons" className={classes.button}>
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
                <TableRow key={row.months}>
                  <TableCell component="th" scope="row">
                    {row.months}
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