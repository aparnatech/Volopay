import {Grid} from '@material-ui/core';
import ProgressBar from '../ui/ProgressBar'

const cardStyle = {
    card_div :{
        color: '#1c1d1f',
        whiteSpace: 'nowrap',
        flex: 1,
        minWidth: '1px'
    },
    sub_heading:{
        color: '#6a6f73',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    card_padding : {
        padding: '1rem'
    },
    badge:{
        fontSize:' 12px',
        border: '1px solid #dfdfdf',
        color: '#4e4e4e',
        borderRadius: '6px',
        display: 'inline-Block',
        padding: '0 1rem 0 1rem',
        whiteSpace: 'nowrap'
    },
    badge_div:{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12
    },
    icon_badge:{
        position: 'absolute',
        backgroundColor: '#f2dee3',
        top: '1.3rem',
        background: '2px 3px 4px 1px',
        right: '0.9rem',
        width: '40px',
        height: '40px',
        display: 'block',
        borderRadius: '30px',
        boxShadow: '2px 2px 10px 2px #dfdfdf',
        textAlign: 'right'
    },
    badge_position:{
        position:'relative'
    },
    padding_custom : {
        padding: '0.5',
        margin: '0.5rem'
    },
    dot: {
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        display: 'inline-block'
    },
    spaceBetweenTwoDiv : {
        marginBottom: '0.8rem'
    },
    pinkColor:{
       color : '#f36'
    }
}

const Card = ({data}) => {
    return (
        data.length > 0 ? data.map((card,index)=> {
          return ( <Grid item key={index} md={4} style={{...cardStyle.card_padding,...cardStyle.badge_position}} className='volopay_box_shadow'>
            <div style={{...cardStyle.card_div,...cardStyle.spaceBetweenTwoDiv}}>
              <h4 className='margin_0'>{card.name}</h4>
              <div><span style={cardStyle.icon_badge}>
              <i className='material-icons' style={{...cardStyle.padding_custom,...cardStyle.pinkColor}}>local_fire_department_icon</i>
                  </span></div>
              <div
                style={{...cardStyle.sub_heading,...cardStyle.spaceBetweenTwoDiv}}
              >
              {card.cardholder}.{card.budget_name}
              </div>
             <div style={{...cardStyle.badge_div,...cardStyle.spaceBetweenTwoDiv}}>
             <div style={{...cardStyle.badge,...cardStyle.spaceBetweenTwoDiv}}>{card.card_type}</div>
             <div>Expires: {card.expiry}</div>
                 </div> 
                 <div style={cardStyle.spaceBetweenTwoDiv}><ProgressBar/></div>
                 <div style={{...cardStyle.badge_div,...cardStyle.spaceBetweenTwoDiv}}>
             <div style={cardStyle.badge}><span style={cardStyle.dot} id='volopay_Background-Color'></span>spent</div>
             <div>{card.spent.value} {card.spent.currency}</div>
                 </div> 
                 <div style={cardStyle.badge_div}>
             <div style={cardStyle.badge}><span style={cardStyle.dot} id='green_Background-Color'></span>Available to Spend</div>
             <div>{card.available_to_spend.value} {card.available_to_spend.currency} </div>
                 </div> 
            </div>
          </Grid>)
        }) : <div>No Data!</div>
    );
}
export default Card