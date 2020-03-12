import React from 'react';
import { Container, FormControl, InputLabel, Select, makeStyles, TextField, MenuItem, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

function FinanceCalculator() {

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    table: {
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
  
  return(
    <>
      <Container maxWidth="lg">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Select type to insert on table finance
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
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
      <form className={classes.root}>
        <TextField id="outlined-basic" label="From" variant="outlined" />
        <TextField id="outlined-basic" label="Value" variant="outlined" />
        <TextField id="outlined-basic" label="Manytimes" variant="outlined" />
      </form>
      <div className={classes.root}>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Save
        </Button>
      </div>
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