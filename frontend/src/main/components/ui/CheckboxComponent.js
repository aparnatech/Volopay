import React,{useState} from "react";
import { Grid,FormControl, FormGroup, Checkbox, FormControlLabel,makeStyles,Button, colors } from "@material-ui/core";
const typesOfCard = [{name: 'Subscription',id:1},{name:'burner',id:2}]
const CheckboxComponent = (props) => {

  const [checkedState, setCheckedState] = useState(new Array(typesOfCard.length).fill(false));   

   const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
        (++index === position) ? !item : item
    );
    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState,"updatedCheck")
    const selected = updatedCheckedState.map((item, index) => {
      console.log(Boolean(item) === true,"index")
        if (Boolean(item) === true) { return typesOfCard[index].name } return 0;
    })
console.log(selected,"selected")
props.onhandleClick(selected)
    // if (filteredSkills.length > 8) { return dispatch(showSnackbar("Select Minimum 3 skills, Maximum 8 skills", "#00bfff")) }
    // setSelectedSkills(filteredSkills)
}
  return (
        <FormGroup row>
        {typesOfCard.map((card) =>
      <FormControlLabel
      key = {card.id}
        control={<Checkbox checked={checkedState[card.id - 1]} onChange={() => handleOnChange(card.id)} name="checkedA" />}
        label={card.name} value={card.name}
      />)}
      </FormGroup>
  );
};

export default CheckboxComponent;
