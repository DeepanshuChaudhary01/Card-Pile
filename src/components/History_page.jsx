import React, { useState } from 'react'
import { Button, Grid, Toolbar, Typography } from '@mui/material'
import HistoryCard from './Card_history'
import { selectAllHistory, clearHistory } from '../features/Reducer_history'
import { useDispatch, useSelector } from 'react-redux'

const History = () => {
  const [modalComponent, setModal] = useState("");
  const dispatch = useDispatch()
  const historyArr = useSelector(selectAllHistory)
  const handleClearHistory = () => { 
    dispatch(clearHistory());
  }
  return (
    <div style={{ position: 'relative', p: '1rem', display: 'flex', flexDirection: 'column',backgroundColor:'#f3e5f5' }}>
      <div
      style={{backgroundColor:'#e1bee7',width:'100%',textAlign:'center',padding:'20px',fontSize:'30px',
      fontFamily:'Montserrat'}}
      >
        History
      </div>
      <Toolbar sx={{ justifyContent: "space-between"}}>
      <Button onClick={()=>handleClearHistory()}><Typography variant="h6">Clear History</Typography></Button>
      </Toolbar>
      <Grid sx={{ height: '100%' ,mt: '1rem', py: '1rem', px: "2rem", alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           historyArr.map((card, index)=>{
                return (
                  <HistoryCard  id={card.id} index={index} key={card.id + index} title={card.title} link={card.link} time={card.now} setModal={setModal} /> /* TODO: time */
                )
           })
        }
      </Grid>
      {modalComponent}
    </div>
  )
}

export default History