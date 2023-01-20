import React from 'react'
import { AppBar , Toolbar , styled, Box, Typography } from '@mui/material'
import Search from './Search';
import Custombuttons from './Custombuttons';

const StyledHeader = styled(AppBar)`
   background: #2874f0;
   height: 55px;
`
const Header = () => {

const logoURL = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`
const CustomButtonWrapper = styled(Box)`
margin-left: 20px;
`
const Subheading = styled(Typography)`
font-size: 10px;
font-style: italic;
`
const Sublogo = styled('img')({
  width: 10,
  height: 10,
marginLeft: 2,
})

  return (
   <StyledHeader>
    <Toolbar style={{ minHeight: 55}}>
       <Component>
        <img src={logoURL} alt="logo" style={{ width: 75}} />
        <Box style={{ display: 'flex'}}>
          <Subheading>
            Explore 
           &nbsp;<Box component="span" style={{ color:"#FFE500"}}>Plus</Box>
          </Subheading>
          <Sublogo src={subURL} alt="sub-logo" />
        </Box>
       </Component>
       <Search/>
       <CustomButtonWrapper>
         <Custombuttons/> 
       </CustomButtonWrapper>
    </Toolbar>
   </StyledHeader>
  )
}

export default Header