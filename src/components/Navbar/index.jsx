import React, { useState } from 'react'
import styled from 'styled-components'


import selectIcon from '../../assets/icons/arrowSelect.svg'
import searchIcon from '../../assets/icons/search.svg'
import messageIcon from '../../assets/icons/message.svg'
import avatar from '../../assets/images/avatar.png'
import TaskStatus from '../TaskStatus'


const Nav = styled.nav`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px #F0F1F2;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    height: 80px;
    
`

const NavLeft = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 16px;
`
const NavRight = styled.div`
    display: flex;
    align-items: center;
    column-gap: 23px;
`
const Button = styled.button`
    background: #0094FF;
    border-radius: 50px;
    border: none;
    color: #FFFFFF;
    padding: 15px 20px 15px 27px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #FFFFFF;
    cursor: pointer;
`

const Select = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #E1E4E7;
    border-radius: 50px;
    cursor: pointer;
    padding: 12px 20px;
    column-gap: 8px;
    transition: .3s all;

    &.active img {
        transform: rotate(180deg);
    }

    ul {
        position: absolute;
        top: 100%;
        left: 0;
        background: #FFFFFF;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        width: 132px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: left;
        margin-top: 8px;
        opacity: 0;
        z-index: -1;
        transition: all .3s;

        li {
            cursor: pointer;
            padding: 12px 0 12px 8px;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
        }

      
    }
    &.active ul {
            opacity: 1;
            z-index: 99;
        }
`

const InputWrapper = styled.div`
    position: relative;
    width: 180px;
    img {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`

const InputSearch = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    background: #F5F8FA;
    border-radius: 50px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #8C939F;
`

const MessageBlock = styled.div`
    position: relative;

    div {
        position: absolute;
        top: -15px;
        right: -15px;
        background: #F21247;
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        padding: 5px 4px;
    }
`


const list = [
    { id: Math.random().toString(36).substring(2, 9), text: 'Board view' },
    { id: Math.random().toString(36).substring(2, 9), text: 'Table view' },
    { id: Math.random().toString(36).substring(2, 9), text: 'Kanban' }
]

const Navbar = () => {
    const [selected, setSelected] = useState(false)
    const [text, setText] = useState('Kanban')

    const handleSelect = () => {
        setSelected(!selected)
    }

    const handleSelectItem = (e) => {
        setText(e.target.textContent)
        setSelected(false)
    }

    return (
        <>
            <Nav>
                <NavLeft>
                    <Button>+ Add new</Button>
                    <Select onClick={handleSelect} className={selected ? 'active' : ''}>
                        {text}
                        <img src={selectIcon} alt="select" />
                        <ul>
                            {list.map(item => (
                                <li onClick={handleSelectItem} key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </Select>
                    <Select>
                        Filter
                        <img src={selectIcon} alt="select" />
                    </Select>
                </NavLeft>
                <NavRight>
                    <InputWrapper>
                        <InputSearch type='text' placeholder='Search...' />
                        <img src={searchIcon} alt="searchIcon" />
                    </InputWrapper>
                    <MessageBlock>
                        <img src={messageIcon} alt="message-icon" />
                        <div>99+</div>
                    </MessageBlock>
                    <img src={avatar} alt="avatar" />
                </NavRight>
            </Nav>
            <TaskStatus />
        </>
    )
}

export default Navbar