import React, { useState } from 'react'
import styled from 'styled-components'

import roadmapIcon from '../../assets/icons/roadmap.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import tasksIcon from '../../assets/icons/tasks.svg'
import notesIcon from '../../assets/icons/notes.svg'
import filesIcon from '../../assets/icons/files.svg'


const list = [
  { id: Math.random().toString(36).substring(2, 9), icon: roadmapIcon, title: 'Roadmap' },
  { id: Math.random().toString(36).substring(2, 9), icon: calendarIcon, title: 'Schedule' },
  { id: Math.random().toString(36).substring(2, 9), icon: tasksIcon, title: 'Tasks' },
  { id: Math.random().toString(36).substring(2, 9), icon: notesIcon, title: 'Notes' },
  { id: Math.random().toString(36).substring(2, 9), icon: filesIcon, title: 'Files' },
]




const ToolsBlock = styled.div`
    padding-top: 24px;
    width: 154px;
    background: #F5F8FA;

`

const ToolsTitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-left: 16px;
`

const ToolsList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 17px;
    cursor: pointer;
    margin-top: 43px;
`

const ToolsListItem = styled.li`
  display: flex;  
  align-items: center;
  column-gap: 15px;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 50px;
    background: #0094FF;
    border-radius: 0px 10px 10px 0px;
    opacity: 0;
    transition: all .3s ease;
  }

  &.active::before {
    opacity: 1;
  }

  &.active {
    color: #0094FF;
  }
`

const ToolsItem = () => {
  const [active, setActive] = useState(list[1].id)


  const handleClick = (id) => {
    setActive(id)
  }

  return (
    <ToolsBlock>
      <ToolsTitle>Tools</ToolsTitle>
      <ToolsList>
        {list.map((item, i) => (
          <ToolsListItem onClick={() => handleClick(item.id)} key={item.id} className={active === item.id ? 'active' : ''}>
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </ToolsListItem>
        ))}

      </ToolsList>
    </ToolsBlock>
  )
}

export default ToolsItem