import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const WordsList = () => {
  const wordListData = useSelector((state) => state.wordList.result);
  
  return (
    <Stack direction={'column'} alignItems={'start'}>
      
      {
      //Case: Search
      wordListData.type === 'search' && <Box>
        <Typography> Search Results: </Typography>
        <ul>
        {
          wordListData.results?.slice(0,3).map((item,index)=>{
            return <li key={index}>{item.item}</li>
          })
        }
        </ul>
      </Box>
      }
      {
        //Case: Add
      wordListData.type === 'add' && <Box>
        <Typography>Word added: </Typography>
        <ul>
          <li>{wordListData.result}</li>
        </ul>
      </Box>
      }
      {
        //Case: Remove
      wordListData.type === 'remove' && <Box>
        <Typography>Word removed: </Typography>
        <ul>
          <li>{wordListData.result}</li>
        </ul>
      </Box>
      }
    </Stack>
  )
}

export default WordsList 