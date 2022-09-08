import styled from "styled-components";


export const CarritoLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.2rem 2.5rem;
    font-size: .6rem;
    cursor: pointer;
    transition: 0.5s all ease;
    
    &:hover{
        transition: 0.5s all ease;
        color: #000;
        background-color: #F3F17F;
    }

    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0.5rem .8rem;
        
        p{
            display: none;
            
        }
    }

    @media screen and (max-width: 960px){
        width: 100%;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            p{
                display: block;
                font-size: 1.8em;
                padding-left: 15px;
            }
        }
    }

`