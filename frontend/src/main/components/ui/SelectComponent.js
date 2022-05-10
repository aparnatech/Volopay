import React from "react";
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectComponent(props) {
    console.log(props,"props")
  const cardHolder = props.data.filter((item) => item.cardholder);
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.onhandleClick(event.target.value)
  };
  console.log(props.data, "age");
  return (
    <Grid item md={6}>
      <span>cardholder</span>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={0} disabled>
            Select Cardholder
          </MenuItem>
          {cardHolder.map((item, index) => (
            <MenuItem key={index} value={item.cardholder}>
              {item.cardholder}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
