import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(()=>{
    getPopular()
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)

            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            
            setPopular(data.recipes)
        }

    }
  return (
    <Wrapper>
        <h3>Popular</h3>
        <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem'
        }}>

        {popular.map(item=>{
            return (
                <SplideSlide key={item.id}>

                <Card>
                    <Link to={'/recipe/' + item.id}>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.title} />
                    <Gradient />
                    </Link>
                </Card>
                </SplideSlide>
            )
        })}
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-bottom: 4rem;
`
const Card = styled.div`
min-height: 18em;
border-radius: 2rem;
overflow: hidden;
position: relative;
box-shadow: 2px 4px 8px 0px #363635;
margin: 11px 0px;

img {
border-radius: 2rem;
position: absolute;
left: 0
width: 100%;
height: 100%;
object-fit: cover;


}
p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%; 
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align:center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center
}
` 
const Gradient = styled.div`
z-index:3;
position:absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular