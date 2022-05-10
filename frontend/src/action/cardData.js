import {CARD_DATA,YOUR_CARD_DATA} from '../action/ActionTypes'
import cardList from '../data/cardData.json'
export function cardDataList() {
    console.log(cardList,"ss")
    return {
        type: CARD_DATA,
        data : cardList
    }
}
export function yourCardDataList() {
    return {
        type: YOUR_CARD_DATA,
        data : cardList
    }
}
