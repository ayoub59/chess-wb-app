import React from 'react'
import BoardConatiner from './BoardConatiner'
import styled, { css } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
// import { Chessboard } from "react-chessboard"
import Chessboard from 'chessboardjsx';


function Play() {

    //  code from chat gpt
    //     import React, { useState } from 'react';
    // import Chess from 'chess.js';
    // import Chessboard from 'chessboardjsx';

    // function App() {
    //   const [fen, setFen] = useState('start');
    //   const [chess, setChess] = useState(new Chess());

    //   function handleMove(from, to) {
    //     const move = chess.move({ from, to });
    //     if (move === null) {
    //       throw new Error(`Invalid move: { "from": "${from}", "to": "${to}" }`);
    //     }
    //     setFen(chess.fen());
    //     setChess(chess);
    //   }

    //   return (
    //     <div>
    //       <Chessboard
    //         id="chessboard"
    //         position={fen}
    //         onDrop={(source, target) => handleMove(source, target)}
    //       />
    //     </div>
    //   );
    // }

    // export default App;

    // code from myoutube
    const [fen, setFen] = useState("start");

    let game = useRef(null)

    useEffect(() => {
        game.current = new Chess();
        console.log(game)


    }, []);
    const onDrop = ({ sourceSquare, targetSquare }) => {
        let move = game.current.move({
            from: sourceSquare,
            to: targetSquare
        })
        console.log(move)
        if (move === null) return false;

        // update the fen
        setFen(game.current.fen())
    }


    // console.log(game.ascii())
    return (
        <PlayConatiner>
            <CodeEval>

            </CodeEval>

            <Chessboard position={fen} onDrop={onDrop} />

            {/* <BoardConatiner position={fen} onDrop={onDrop} /> */}

        </PlayConatiner>
    )
}

export default Play
const PlayConatiner = styled.div`
display:flex ;
justify-content: space-around;
`
const CodeEval = styled.div`
background-color: #171717;
width: 30%;
`


/* code from meduim */
/* 
    const [game, setGame] = useState(new Chess());

    // perform modify function on game state
    function safeGameMutate(modify) {
        setGame((g) => {
            const update = { ...g };
            modify(update);
            return update;
        });
    }
    // make computer move
    function makeRandomMove() {
        const possibleMoves = game.moves();
        // exit if the game is over
        if (game.game_over() || game.in_draw() || possibleMoves.length === 0) return;
        // select random move
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        // play random move
        safeGameMutate((game) => {
            game.move(possibleMoves[randomIndex]);
        });
    }
    // perform action when piece dropped by user
    function onDrop(sourceSquare, targetSquare) {
        // attempt move
        let move = null;
        safeGameMutate((game) => {
            move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q'
            });
        });

        // illegal move made
        if (move === null) return false;
        // valid move made, make computer move
        setTimeout(makeRandomMove, 200);
        return true;
    } */
