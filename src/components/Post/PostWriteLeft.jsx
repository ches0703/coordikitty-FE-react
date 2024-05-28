import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  Stack,
} from '@mui/material'

const PostWriteLeft = ({setImgFile}) => {


  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef()
  const handleImgUploadBtn = () => {
    fileInputRef.current.click()
  }
  const handleImgFile = (e) => {
    const file = e.target.files[0]
    setImgFile(file)
    setPreview(URL.createObjectURL(file));
  }


  return (
    <Stack width={"100%"} padding={"1rem 0.5rem"} justifyContent={'space-between'} spacing={1}>
    {/* Preview */}
    <Box
      flexGrow={1}
      borderRadius={'0.75rem'} backgroundColor={'#cfcfcf'}
      overflow={'hidden'}
    >
      {preview && <img src={preview} alt={preview} style={{ width: '100%', height: '100%', objectFit: 'contain' }}></img>}
    </Box>

    {/* Selected img list */}
    {/* <Stack direction={'row'} spacing={1}
      width={"100%"} height={"7rem"}
      marginTop={"1rem"}
      backgroundColor={'gray'}
    >
      <Box
        height={'100%'} borderRadius={'0.75rem'} overflow={'hidden'}
        sx={{ aspectRatio: 1 }}
      >
        <img src={testImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
      </Box>
    </Stack> */}
    {/* File input */}
    
    <Button 
      variant='contained' fullWidth disableElevation
      onClick={handleImgUploadBtn}
    >사진 추가</Button>
    <input 
      type='file' ref={fileInputRef} onChange={handleImgFile} accept='image/*'
      style={{display: 'none'}}></input>
  </Stack>


  )
}

export default PostWriteLeft