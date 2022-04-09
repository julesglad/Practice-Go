import styled from "styled-components";


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    background: beige;
    margin: 1rem;
    padding: 1rem;
    
`


export const Button = styled.button`
    border-radius: .25rem;
    background-color: aqua;
    border-style: none;
    width: 5rem;
    height: 1.5rem;
    font-family: sans-serif;
    margin: 1rem;
    align-items: right;
    grid-column: 4;
    grid-row: 1.5;


    &:hover {
        transform: scale(1.05);
        transition-duration: 0.1s;
        transition-duration: 0.1s;
    }
    
`

export const Form = styled.form`
    margin: 1rem;
    width: auto;
    grid-column: 2;
    background: gray;
    border-radius: .35rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 1rem;

`

export const Input = styled.input`
    border-radius: .15rem;
    border-style: none;
    padding: .25rem;
    margin: .15rem;
    grid-column: 1;
    grid-row: 1;
    
    

`

export const Label = styled.label`
    margin: .15rem;
    font-family: sans-serif;
    color: white;
    
`

export const DateWrapper = styled.div`
    grid-row: 1;
`

export const NotesWrapper = styled.div`
    grid-row: 2;
`

export const StopWatchWrapper = styled.div`

`
