import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'

const Nav = styled(Box)`
display:  flex;
margin : 55px 130px 0px 130px;
justify-content : space-between;
`

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`

const Text = styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;
`

const Navbar = () => {
  return (
    <Nav>
       {
        navData.map((data,id) => (
            <Container key={id}>
            <img src={data.url} alt="nav" width={64} />

            <Text>{data.text}</Text>
            
            </Container> 
        ))
       } 
    </Nav>
  )
}

export default Navbar