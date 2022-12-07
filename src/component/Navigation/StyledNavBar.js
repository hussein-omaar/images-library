import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";






export const Header = styled.header`

height: 80px;
display: flex;
justify-content: center;
align-items: center;



`

export const HeaderWrapper = styled.div`


 display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 90%;
  background: #fff;
 





`


export const Align = styled.div`


display: flex;
gap: 2rem;
justify-content: ${(props) =>  (props.align === "left" ? "flex-start" : (props.align === "right") ? "flex-end" : "flex-center" ) };
align-items: center;
width: 50%;

// gap: ${(props) =>  (props.align === "left" ? "36%" : "46%" ) }

`


export const NavLogo = styled(LinkR)`
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding: 0 24px;


`;




export const NavItems = [

  {label: "Features" , url : "/features"},
  {label : "Pricing" , url : "/pricing" },
  {label: "comunity" , url : "/comunity" },
  {label : "Support" , url : "/support"},

];



export const UnorderedList = styled.ul`


display: flex;
list-style-type: none;
gap: 1.5rem;



`


export const ListItems = styled.li`




`


export const NavLinks = styled(LinkR)`


   color: #18A0FB;
   text-decoration: none;
   cursor: pointer;
   cursor: pointer;





 

`;



export const NavBtnWraper = styled.div`


display: flex;
gap: 0.5rem







`


export const RegisterBtn = styled(LinkR)`

border-radius: 5px;
  background: #18a0fb;
  white-space: nowrap;
  padding: 11px 30px;
  color: #ffffff;
  font-weight: bold;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;


    &:hover {
    background: #fff;
    color: #18a0fb;
    border: 1px solid #18a0fb;
    transition: 0.5s;
  }



`

export const LoginBtn = styled(LinkR)`

  border-radius: 5px;
  background: #ffffff;
  white-space: nowrap;
  padding: 11px 30px;
  color: #18a0fb;
  font-weight: bold;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  border: 1px solid #18a0fb;
  cursor: pointer;
  text-decoration: none;


    &:hover {
    background: #18a0fb;
    color: #ffffff;
    // border: 1px solid #FFFFFF;
    transition: 0.5s;
  }


  


`
















































   {/* this is the old design that doesnt contain props */}

// export const Nav = styled.nav`
//   height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 80px;
//   width: 90%;
//   border: 2px solid #000;
//   background: #fff;
// `;

// export const NavLogo = styled(LinkR)`
//   color: #000000;
//   cursor: pointer;
//   font-weight: bold;
//   text-decoration: none;
//   padding: 0 24px;
//   // border: 1px solid red;
// `;

// export const HamburgerIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     font-size: 1.8rem;
//     cursor: pointer;
//     padding: 0 24px;
//   }
// `;
// export const NavMenue = styled.ul`
//   display: flex;
//   list-style: none;
//   text-align: center;
//   // border: 1px solid yellow;
//   //  margin-right: -22px;



//   // // 3rd nav

//   // width: 65%;
//   // white-space: nowrap;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// export const NavItem = styled.li`
//   height: 80px;
//   display: flex;
//   align-items: center;
//   padding: 0 0.7rem;

//   //  2nd Nav
//   // padding: 0 30px 0px 0px;
  
// `;

// export const NavLinks = styled(LinkR)`


//    color: #18A0FB;
//    text-decoration: none;
//    cursor: pointer;
//   //  display: flex ;
//   //  align-items: center;
//   //  padding: 0 1rem;
//   //  height: 100%;
//    cursor: pointer;





//    &.active {

//     border-bottom: 3px solid #23C55E;
//    }


// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   padding: 0 20px 0px 0px;
//   width: 15rem;
//   // border: 1px solid red;


//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const RegisterBtn = styled(LinkR)`
//   border-radius: 5px;
//   background: #18a0fb;
//   white-space: nowrap;
//   padding: 11px 35px;
//   color: #ffffff;
//   font-weight: bold;
//   font-size: 10px;
//   font-family: Arial, Helvetica, sans-serif;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;


//      // 3rd nav 
//     margin-left: 10px;


  


//   &:hover {
//     background: #fff;
//     color: #18a0fb;
//     border: 1px solid #18a0fb;
//     transition: 0.5s;
//   }
// `;

// export const LoginBtn = styled(LinkR)`
//   border-radius: 5px;
//   background: #ffffff;
//   white-space: nowrap;
//   padding: 11px 35px;
//   color: #18a0fb;
//   font-weight: bold;
//   font-size: 10px;
//   font-family: Arial, Helvetica, sans-serif;
//   outline: none;
//   border: 1px solid #18a0fb;
//   cursor: pointer;
//   text-decoration: none;

//   &:hover {
//     background: #18a0fb;
//     color: #ffffff;
//     // border: 1px solid #FFFFFF;
//     transition: 0.5s;
//   }
// `;
