import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialogue from '../login/LoginDialogue';
import { useState } from 'react';


const Wrapper = styled(Box)`
   display: flex;
   align-items: center;
   & > button, & > p , & > div {
    margin-right: 40px;
    font-size: 14px;
   } 
`

const CartButton = styled(Box)`
display: flex;
`
const LoginButton = styled(Button)`
color:#2874f0;
background : #FFFFFF; 
text-transform: none;
padding: 5px 40px;
border-radius: 2px;
box-shadow : none;
font-weight: 600;
height : 32px;
`


const Custombuttons = () => {


const [open, setOpen] = useState(false); 

const handleOpen = () => {
  setOpen("true");
}

  return (
    <Wrapper style={{display: "flex", justifyContent:"space-between" }}>
        <LoginButton variant='contained' onClick={() => handleOpen()}>Login</LoginButton>

        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>

        <CartButton>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
        </CartButton>
        <LoginDialogue open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default Custombuttons