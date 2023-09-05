import React from 'react'
import BoardConatiner from './BoardConatiner'
import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import Chessboard from 'chessboardjsx';


function Play() {

    // code from myoutube
    const [fen, setFen] = useState("start");

    let game = useRef(null)

    useEffect(() => {
        game.current = new Chess();
        console.log("game " + game)
        console.log("fen " + fen)


    }, []);
    const onDrop = ({ sourceSquare, targetSquare }) => {
        let move = game.current.move({
            from: sourceSquare,
            to: targetSquare
        })
        console.log(move)
        if (move === null) return false;
        setFen(game.current.fen())
    }


    return (
        <PlayConatiner>
            <CodeEval>
                <GameCodeHeading>
                    game code :
                </GameCodeHeading>
                <GameCodeContainer>
                    <GameCodeText>
                        {fen}
                    </GameCodeText>
                </GameCodeContainer>
            </CodeEval>
            <Chessboard position={fen} onDrop={onDrop} />
        </PlayConatiner>
    )
}

export default Play
const PlayConatiner = styled.div`
display:flex ;
justify-content: space-around;
`
const CodeEval = styled.div`
width: 40%;
height:40vw ;
`
const GameCodeContainer = styled.div`
border: 1px white solid;
border-radius: 10%;
background-color: #171717;
height: 100%;
`
const GameCodeHeading = styled.h1`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: 4.5vw;
  font-weight: 400;
  margin: 0;
  text-align: left;
  margin-bottom: 20px;
  padding-left: 40px;
`
const GameCodeText = styled.p`
font-size: var(--PSizeDisktop);
color : var(--concrete);
font-family: "BrandingAliskaje";
padding-left: 40px;
overflow-wrap: anywhere;
    padding-right: 40px;
    line-height: 250%;
`
