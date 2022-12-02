import React, { useState } from 'react'
import ToolsItem from '../ToolsItem'

import logoBordio from '../../assets/images/Logo.png'
import searchIcon from '../../assets/icons/search.svg'
import avatarImg from '../../assets/images/avatar.png'
import arrowIcon from '../../assets/icons/arrow.svg'
import { AsideBlock, AsideWrapper, InputSearch, InputWrapper, UserWorkspace, WorkspaceTitle, ListsBlock, ListsTitle, Lists, ListsItem } from './styles'




const Aside = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <AsideWrapper>
            <AsideBlock>
                <div>
                    <a href="#">
                        <img src={logoBordio} alt="BordioLogo" />
                    </a>
                </div>
                <InputWrapper>
                    <InputSearch onChange={handleSearch} value={search} type='text' placeholder='Search...' />
                    <img src={searchIcon} alt="searchIcon" />
                </InputWrapper>
                <UserWorkspace>
                    <img src={avatarImg} alt="avatar" />
                    <WorkspaceTitle>My workspace</WorkspaceTitle>
                </UserWorkspace>
                <ListsBlock>
                    <img src={arrowIcon} alt="arrowIcon" />
                    <ListsTitle>Favorites</ListsTitle>
                </ListsBlock>
                <Lists>
                    <ListsItem>Marketing</ListsItem>
                    <ListsItem>Mobile App</ListsItem>
                </Lists>
                <ListsBlock>
                    <img src={arrowIcon} alt="arrowIcon" />
                    <ListsTitle>My Projects</ListsTitle>
                </ListsBlock>
                <Lists>
                    <ListsItem>Marketing</ListsItem>
                    <ListsItem>Landing Pages</ListsItem>
                    <ListsItem>Wedding</ListsItem>
                    <ListsItem>Mobile App</ListsItem>
                    <ListsItem>House Construction</ListsItem>
                </Lists>
            </AsideBlock>
            <ToolsItem />
        </AsideWrapper>
    )
}

export default Aside