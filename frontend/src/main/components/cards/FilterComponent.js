import React, { useState } from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";
import SelectComponent from "../ui/SelectComponent";
import CheckboxComponent from "../ui/CheckboxComponent";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   btn: {
//     backgroundColor: "#000000",
//     "&:hover": {
//       backgroundColor: "#000000",
//     },
//   },
//   gridMargin: {
//     margin: "1rem 0",
//   },
//   label: {
//     width: "100%",
//     padding: " 0 6% 0 6%",
//   },
//   formControl: {
//     minWidth: 207,
//   },
//   paginationButton: {
//     width: "80%",
//     listStyle: "none",
//     display: "flex",
//     justifyContent: "center",
//   },
//   clearAll: {
//     width: "60px",
//     margin: " 0.5rem 0",
//     borderRadius: "5%",
//     padding: "0.3rem",
//     backgroundColor: "#dfdfdf",
//   },
// }));
const FilterComponent = (props) => {
  const [type, setType] = useState([]);
  const [cardHolder, setCardHolder] = useState("");

  const onhandleClick = (value) => {
    setType(value);
  };

  const onhandleClickCard = (value) => {
    setCardHolder(value);
  };

  const filterData = (cancel = null) => {
    if (cancel) {
      props.filteredData(props.data);
      return;
    }
    const f = props.data.filter(function (item) {
      return type.includes(item["card_type"]) && item.cardholder === cardHolder;
    });
    props.filteredData(f);
  };

  return (
    <Grid container direction="row" justifyContent="space-around">
      <Grid item md={4} className="volopay_box_shadow">
        <div style={{ color: "#4c4c4c" }}>Filters</div>
        <div>
          <p> Type</p>
        </div>
        <CheckboxComponent data={props.data} onhandleClick={onhandleClick} />
        <SelectComponent data={props.data} onhandleClick={onhandleClickCard} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => filterData()}
        >
          Apply
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => filterData(true)}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
