
import {  Box, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import Banner from './Banner'
import Navbar from './Navbar'
import { useDispatch , useSelector} from 'react-redux';
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'



const Component = styled(Box)`
padding: 10px;
background: #f2f2f2;
`

const Home = () => {

 const { products } = useSelector(state => state.getProducts)

console.log(products);
   const dispatch = useDispatch(); 

   useEffect(() => {
    dispatch(getProducts())
   },[dispatch])

  return (
   <>
      <Navbar/>
      <Component>
         <Banner/> 
         <MidSlide products={products} Title="Deal of the Day" timer={true} />
        
         <Slide products={products} Title="Discounts for You" timer={false} />
         <MidSection/>
         <Slide products={products} Title="Suggested Items" timer={false}  />
         <Slide products={products} Title="Reccomended Items" timer={false}  />
         <Slide products={products} Title="Top Selections" timer={false}  />
         <Slide products={products} Title="Deal of the Day" timer={false}  />
         <Slide products={products} Title="Season's Top picks" timer={false}  />
         <Slide products={products} Title="Deals on Accessories" timer={false}  />
      </Component> 
   </>
  )
}

export default Home