import * as React from 'react';
import {Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import { useSelector, useDispatch } from 'react-redux';
import { allBuckets, addBucket } from '../features/Reducer_bucket';
import { selectToggler, toggleDrawer } from '../features/Reducer_toggle.js'
import Cards from './All_cards'
import {IconButton, Toolbar} from "@mui/material";
import { Close}  from '@mui/icons-material'
import ListItem from './ListItem.jsx'

const handleClose = (dispatch, open) => dispatch(toggleDrawer(!open))

function Home() {
  const [cards, setCards] = React.useState([]);
  const [active, setActive] = React.useState(-1);
  const [deleteCardClicked, rerenderOnce] = React.useState(false)

  const buckets = useSelector(allBuckets)
  const mobileOpen = useSelector(selectToggler)
  const dispatch = useDispatch()

    const Contain = (
    <div style={{ display: 'flex',flexDirection:'column' }} >
      <div>
        <Toolbar sx={{ justifyContent: 'space-evenly' }}>

        <Typography  variant='h7'
              onClick={()=>{
                dispatch(addBucket())
                handleClose(dispatch, mobileOpen)
              }}
              sx={{display: { sm: 'none' }}}
              style={{align:"right",fontFamily:'Montserrat',padding:'5px',
          color:'#80cbc4',cursor:'pointer',marginTop:'10px',borderStyle:'solid',textAlign:'center'}}
              >Add Bucket</Typography>
        <IconButton
            onClick={() => handleClose(dispatch, mobileOpen)}
            sx={{ display: { sm: 'none' }}}
        >
          <Close />
        </IconButton>
        </Toolbar>
      </div>

      <Divider orientation="vertical" sx={{ borderRightWidth: 5 }}/>
      <List style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {buckets.map((bucket, index) => {
          const bgColor = active === index ? "#2196f3":"";
          if((deleteCardClicked) && (active === index)){
            setCards(bucket.cards)
            rerenderOnce(false);
          }
          return (
              <ListItem rerenderOnce={rerenderOnce} initialEditValue={bucket.initialEdit} key={bucket.id} index={index} bucket={bucket} bgColor={bgColor} setActive={setActive} setCards={setCards} active={active} />
          )
        })}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex',flexDirection:'column',alignItems:'center' }}>
      <div
        style={{backgroundColor:'#e1bee7',width:'100%',textAlign:'center',padding:'20px',fontSize:'30px',
        fontFamily:'Montserrat'
      }}
      >
        Following are the available Buckets:
      </div>
      <div style={{width:'100%',backgroundColor:'#f3e5f5'}}>
      <div style={{margin:'auto',width:'40%',textAlign:'center'}}>
      
          {Contain}
        
      </div>
      </div>
      <Divider  sx={{ borderRightWidth: 5}}/>
      <div style={{width:'100%',backgroundColor:'#f3e5f5'}}>
        <Cards rerenderOnce={rerenderOnce} bucketIndex={active} cards={cards} />
      </div>

      
    </div>
  );
}

export default Home;
