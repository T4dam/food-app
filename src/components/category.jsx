import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiCoolSpices, GiMeat, GiSandwich, GiCakeSlice} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
 

const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/European'}>
            <GiSandwich />
            <h4>European</h4>
        </SLink>
        <SLink to={'/cuisine/Indian'}>
            <GiCoolSpices />
            <h4>Indian</h4>
        </SLink>
        <SLink to={'/cuisine/African'}>
            <GiMeat />
            <h4>African</h4>
        </SLink>
        <SLink to={'/cuisine/British'}>
            <GiCakeSlice />
            <h4>British</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiChopsticks />
            <h4>Thai</h4>
        </SLink >
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 1rem 0rem;
gap:2rem;
`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 15%;
gap: .3rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: white;
    font-size: 0.8rem;
}
svg {
    color: white;
    font-size: 1.5rem;
}
&.active{
    background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
`

export default Category