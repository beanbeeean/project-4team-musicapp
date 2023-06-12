import React, { useState } from "react";
import Album from "./Album";
import "../css/newMusic.css"
import { Container } from "react-bootstrap";

const NewMusic = () => {

    const [page, setPage] = useState(1);

    const prevBtnHandler = () => {
        if(page>1)
            setPage(c => c - 1);
        else
            setPage(c => c = 5);
    }; 

    const nextBtnHandler = () => {
        if(page<5)
            setPage(c => c + 1);
        else
            setPage(c => c = 1);
    };


    return (
        <Container >
            <div className="box">
                <ul>
                    <li>최신음악</li>
                    <li>종합</li>
                    <li>국내</li>
                    <li>국외</li> 
                    <li onClick={nextBtnHandler}>&#62;</li>
                    <li onClick={prevBtnHandler}>&#60;</li>
                    <li>{page}/5</li>
                     </ul>
            </div>
            
            <table>
                <tbody>
                    <tr>
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                    </tr>
                    <tr>
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                    </tr>
                </tbody>
            </table>
        </Container>
           
    );
}

export default NewMusic;