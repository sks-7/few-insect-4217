import { Container,Flex,Box,Image,Button,Text,Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../Utils/ShopStructure.css"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/CartReducer/action'

const SingleProductPage = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const [days,setDays]=useState('')
    const [productDetail,setProductDetail]=useState("")
    const datas=useSelector(store=>store.AppReducer.products)
    // console.log(productDetail)

    useEffect(()=>{
        if(id){
          const currentData=datas.find(album=>album.id==id)
          setProductDetail(currentData)
        }
      },[])
    useEffect(()=>{
        const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDates = `${day+4}-${month}-${year}`;
     setDays(currentDates); 
    },[])
      

  return (
    <BoxWrapper>
        <Flex gap={100}>
            <ImageWrapper>
                <Image src={productDetail.image} height='100%' alt="no image" />
            </ImageWrapper>
            <Box>
                <DescWrapper>
                 <Heading as='h2' size='lg'>{`${productDetail.title}`}</Heading>
                  <Text>{`Category: ${productDetail.category}`}</Text>
                  <Text>{`Price: $${productDetail.price}`}</Text> 
                </DescWrapper>
                <Link to={'/cartpage'}>
                  <Button id='addToBag' onClick={()=>dispatch(addToCart(productDetail))}> Add To Bag</Button>
                </Link>
                  <button id="shipbutton">Shiping & Returns</button>
                  <Container textAlign='left'>
                    <Text fontSize='xl'>Estimated Dilvery:</Text>
                    <Text fontSize='xl'> {days}</Text>
                  </Container>
            </Box>
        </Flex>
        </BoxWrapper>
  )
}

const BoxWrapper=styled.div`
margin-top:50px;
gap:20%;
padding:50px;
// border:2px solid green;
`

const ImageWrapper= styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   border:2px solid blue;
  padding:20px;
  height:500px;
  width:45%;
  text-align:center;
`;

const DescWrapper=styled.div`
// border:2px solid red;
text-align:left;
height:300px;
line-height:40px;
`

export default SingleProductPage
