import styled from "styled-components";
import ('https://fonts.googleapis.com/css2?family=Courgette&family=Kaushan+Script&display=swap');

export const Container = styled.div`
    background-color: #545453;
    height: 70px;
    width: 100%;
    
    
`;

export const Wrapper = styled.div`
   /* width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;*/
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1250px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    flex-wrap: wrap;

`;

export const LogoContainer =  styled.div`
   /* display: flex;
    align-items: center;
    margin-left: 0.5rem;
    font-size: 1.5rem;*/
    display: flex;
    align-items: center;
    margin-left: .1em;
    height: 100%;

    p{
        color: #F3F17F;
        font-size: 2.2rem;
        font-family: 'Kaushan Script';
    }

    svg{
        color: #9B42C7;
        margin-right: 5px;
    }

    
`;

export const Menu = styled.ul`
   /* height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;*/
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 960px) {
        position: absolute;
        background-color: #545453;
        top: 50px;
        right: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 90vh;
        transition: .5s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px)  {
        display: flex;
        width: 100%;
        height: 70px;
        align-items: center;
        justify-content: center;
    }
`;

export const MenuItemLink = styled.a`
   /* display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    font-size: 1.5rem;
    font-weight: 300;*/
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        transition: 0.5s all ease;
        color: #000;
        background-color: #F3F17F;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }


`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        align-items: center;
        cursor: pointer;

        svg{
            color: #9B42C7;
            margin-right: 5px;
        }
    }

`