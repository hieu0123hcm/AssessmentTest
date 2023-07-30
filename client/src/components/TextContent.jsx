import { Card, CardContent, CardHeader } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TextContent = () => {

  const [textContent, setTextContent] = useState('')
  const wordListData = useSelector((state) => state.wordList.result);

  //Get the content, reload if manipulated
  useEffect(() => {
    const getText = async () => {
        await fetch("http://localhost:5000/corpus/getText", {
          method: "GET",
        }).then((res) => res.json()).then((data) => {
          setTextContent(data.results)
        })
        
      };  
      getText();
  }, [wordListData])


  return (
    <Card sx={{whiteSpace: 'pre-wrap' ,paddingX:'25px',width:'25vw', height:'50vh', overflowX:'hidden', overflowY:'scroll' }} >
        <CardHeader title='Text Content'/>
        <CardContent >
          {textContent}
        </CardContent>
    </Card>
  )
}

export default TextContent