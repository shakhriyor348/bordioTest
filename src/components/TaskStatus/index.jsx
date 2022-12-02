import React from 'react'
import styled from 'styled-components'


const TaskStatusHeader = styled.div`
    display: flex;
    // justify-content: space-around;
    width: 100%; 
    // border-bottom: 1px solid #F3F3F3;
   
`

const TaskItems = styled.div`
    width: 290px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #222222;
    cursor: pointer;
    


    span {
        color: #8C939F;
        background: #E8EBEF;
        border-radius: 100px;
        padding: 2px 9px;
        margin-left: 10px;
    }
    
    h3 {
        padding-top: 25px;
        padding-bottom: 13px;
    }
`

const CreateStatus = styled.button`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #8C939F;
    display: flex;
    column-gap: 36px;
    padding-top: 25px;
    padding-bottom: 13px;
    width: 377px;
    border-left: 1px solid #F3F3F3;
    padding-left: 36px;
`


const TaskItemsMain = styled.div`
   border-top: 1px solid #F3F3F3;
   border-right: 1px solid #F3F3F3;
    padding-top: 36px;
    padding-left: 20px;
    padding-right: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
div{
    width: 270px;
    background: #ABE9CE;
    border-radius: 8px;
    padding: 15px;
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #222222;
    }
}
`

const TaskItemsMainCompleted = styled.div`
border-top: 1px solid #F3F3F3;
border-right: 1px solid #F3F3F3;
 padding-top: 36px;
 padding-left: 20px;
 padding-right: 10px;
 height: 100vh;
div{
 width: 270px;
 background: #F0F0F0;
 border-radius: 8px;
 padding: 15px;
 
 p {
    text-decoration-line: line-through;
    color: #A5A5A5;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
 }
}
`
const Button = styled.button`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding-top: 25px;
    padding-bottom: 13px;
    border-bottom: 1px solid #F3F3F3;
    border-left: 1px solid #F3F3F3;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #8C939F;
`





const TaskStatus = () => {
    return (
        <>
            <TaskStatusHeader>
                <div>
                    <TaskItems>
                        <h3>New task <span>4</span> </h3>
                    </TaskItems>
                    <TaskItemsMain>
                        <div>
                            <p>Check email</p>
                            <p>0:20h</p>
                        </div>
                        <div>
                            <p>Compare PPC agencies and make a report for Steven</p>
                            <p>3:00h</p>
                        </div>
                        <div>
                            <p>Meeting with Amanda (PR department)</p>
                            <p>0:30h</p>
                        </div>
                    </TaskItemsMain>
                </div>
                <div>
                    <TaskItems>
                        <h3>Scheduled <span>3</span> </h3>
                    </TaskItems>
                    <TaskItemsMain>
                        <div>
                            <p>Check email</p>
                            <p>0:20h</p>
                        </div>
                    </TaskItemsMain>
                </div>
                <div>
                    <TaskItems>
                        <h3>In progress<span>3</span> </h3>
                    </TaskItems>
                    <TaskItemsMain>
                        <div>
                            <p>Check email</p>
                            <p>0:20h</p>
                        </div>
                    </TaskItemsMain>
                </div>
                <div>
                    <TaskItems>
                        <h3>Completed<span>5</span> </h3>
                    </TaskItems>
                    <TaskItemsMainCompleted>
                        <div>
                            <p>Check email</p>
                            <p>0:20h</p>
                        </div>
                    </TaskItemsMainCompleted>
                </div>
                <div>
                    <TaskItems>
                        <Button>+ Create status </Button>
                    </TaskItems>

                </div>



            </TaskStatusHeader>

        </>
    )
}

export default TaskStatus