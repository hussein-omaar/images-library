import styled from "styled-components";



export const HeroContainer = styled.div`




height : 700px;
max-width: 100vw;
display : flex;
justify-content: center;
align-items: center;
position: relative;
// border : 2px solid blue;


`

export const HeroBg = styled.div`



position: absolute;
top : 0;
right : 0;
bottom : 0;
left : 0;
width: 100%;
height: 100%;
border : 3px  solid green;
overflow: hidden;
z-index : -1;

`


export const BgVideo =  styled.video`

width: 100%;
height: 100%;
border: 2px solid red;
object-fit: cover;

`


export const HeroContent = styled.div`

display : flex;
flex-direction: column;
justify-content : center;
align-items: center;
gap: 1rem

`


export const H1Text = styled.h1`


font-size: 56px;
font-family: Montserrat;

`


export const HeroBtnWraper = styled.div`



`
export const HeroBtn  = styled.button`

padding: 10px 25px;
border-radius: 5px;
color: #fff;
background: #18A0FB;

`