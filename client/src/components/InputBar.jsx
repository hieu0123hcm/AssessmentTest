import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeWordList } from '../data/wordSlice';
import { addWord, removeWord, searchWord } from '../services/WordAPI';


const InputBar = () => {
 //input value state
 const [word, setWord] = useState('')

 const dispatch = useDispatch();
 
 const handleTextChange = (e) => {
    setWord(e.target.value);
 }
  return (
    <Box>
    <TextField
        type="search"
        size='small'
        sx={{
          width:  230 ,
          mb:'5px'
        }}
        placeholder='Enter your word...'
        onChange={handleTextChange}
      />
      
      <Box mb={'5px'}>
        <Button  onClick={() => searchWord(word,dispatch,changeWordList)} startIcon={<SearchIcon/>}>Search</Button>
        <Button  onClick={() => addWord(word,dispatch,changeWordList)} startIcon={<AddIcon/>}>Add</Button>
        <Button  onClick={() => removeWord(word,dispatch,changeWordList)} startIcon={<RemoveIcon/>}>Remove</Button>
      </Box>
  </Box>
  )
}

export default InputBar