import React from 'react'
import styled from 'styled-components'
import { Chessboard } from "react-chessboard";


function BoardConatiner() {
    return (
        <Conatiner>
            <Chessboard position={"start"} />
        </Conatiner>
    )
}

export default BoardConatiner
const Conatiner = styled.div`
width: 35vw;
`