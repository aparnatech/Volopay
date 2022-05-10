import { CARD_DATA,YOUR_CARD_DATA } from "../action/ActionTypes";

const initialState = {
    cardData: [],
    yourCardData:[]
};
const ownerID = 1;
export default function cardData( state = initialState, action) {
    switch (action.type) {
      case CARD_DATA:
        return {
          ...state,
          cardData: action.data,
        };
      case YOUR_CARD_DATA:
        return {
          ...state,
          yourCardData: action.data.filter((item) => item.owner_id === ownerID),
        };
      default:
        return state;
    }
}

