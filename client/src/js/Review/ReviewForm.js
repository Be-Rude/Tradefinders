import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const scores = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  }
];

export default function ReviewForm() {
  const classes = useStyles();
  const [scorePunctuality, setScorePunctuality] = React.useState(0);
  const [scoreCleanliness, setScoreCleanliness] = React.useState(0);
  const [scoreCommunication, setScoreCommunication] = React.useState(0);
  const [scorePrice, setScorePrice] = React.useState(0);


  // Punctuality

  // Cleanliness

  // Communication

  // Price



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Punctuality"
          value={scorePunctuality}
          onChange={(event) => {
            setScorePunctuality(event.target.value);
          }}
          helperText="Rated out of 10"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Cleanliness"
          value={scoreCleanliness}
          onChange={(event) => {
            setScoreCleanliness(event.target.value);
          }}
          helperText="Rated out of 10"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Communication"
          value={scoreCommunication}
          onChange={(event) => {
            setScoreCommunication(event.target.value);
          }}
          helperText="Rated out of 10"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Price"
          value={scorePrice}
          onChange={(event) => {
            setScorePrice(event.target.value);
          }}
          helperText="Rated out of 10"
          variant="outlined"
        >
          {scores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
