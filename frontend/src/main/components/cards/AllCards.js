import React from 'react';
import { useSelector } from 'react-redux'
import {Grid} from '@material-ui/core'
import Card from './Card'
const AllCard = ({data})=> {
  const {cardData} = useSelector(state=>state.cardData)
  console.log(cardData,"result")
  return (
    <Grid
      container
      spacing={3}
      rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}
      direction="row"
      justifyContent="space-around"
    >
      <Card data={data} />
    </Grid>
  );
}
export default AllCard
