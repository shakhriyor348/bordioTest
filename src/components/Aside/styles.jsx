import styled from "styled-components"

export const AsideWrapper = styled.div`
    position: fixed;
    display: flex;
`

export const AsideBlock = styled.aside`
    background: #0F1D40;
    height: 100vh;
    width: 219px;
    display: flex;
    flex-direction: column;
    align-items: center;
   padding-top: 26px;
  
`

export const InputSearch = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    background: #2D4071;
    border-radius: 4px; 
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #8C939F;
    
`

export const InputWrapper = styled.div`
    margin-top: 35px;
    position: relative;

    img {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`

export const UserWorkspace = styled.div`
    display: flex;
    background: #2D4071;
    width: 100%;
    margin-top: 19px;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    padding: 6px 0;
    cursor: pointer;
`

export const WorkspaceTitle = styled.h2`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    
`

export const ListsBlock = styled.div`
    display: flex;
    margin-top: 17px;
    align-items: center;
    column-gap: 15px;
    cursor: pointer;
    width: 100%;
    padding-left: 23px;
`

export const ListsTitle = styled.h3`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

export const Lists = styled.ul`
    width: 100%;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    margin-top: 22px;
    cursor: pointer;
`

export const ListsItem = styled.li`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #8C939F;
`