import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import SearchAppBar from "../ui/SearchInput";
import { SearchResult } from "../ui/SearchResult";
import FilterComponent from "./FilterComponent";
import { yourCardDataList } from "../../../action/cardData";

const YourCard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(yourCardDataList())
  }, [dispatch]);

  const { yourCardData } = useSelector((state) => state.cardData);
console.log(useSelector(state => console.log(state)))
  const [cardDataList, setCardDataList] = useState(yourCardData || []);
  const callBack = (value) => {
    setCardDataList(SearchResult(value, yourCardData));
  };

  const filteredData = (data) => {
    setCardDataList(data);
  };
  return (
    <>
      <SearchAppBar onAction={callBack} />
      <FilterComponent data={yourCardData} filteredData={filteredData} />
      <Grid
        container
        rowspacing={1}
        columnspacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Card data={cardDataList} />
      </Grid>
    </>
  );
};
export default YourCard;
