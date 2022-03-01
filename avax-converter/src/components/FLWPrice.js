import React from 'react'
import {sendAvaxValueGivenFLW} from '../utils/interact'
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';




function FLWPrice() {

    const [currentFLW, setCurrentFLW] = useState(0.1);
    const [FLWforGivenAVAX, setFLWforGivenAVAX] = useState(0);


    const handleAVAXtoFLW = async () => {
        var value = document.getElementById('avaxValue').value;
        console.log(value);
        var tempFLW = await sendAvaxValueGivenFLW();
        console.log(tempFLW);
        setCurrentFLW(tempFLW);
        setFLWforGivenAVAX(value/tempFLW);

    }

    useEffect(async () => {
        var tmp = await sendAvaxValueGivenFLW();
        setCurrentFLW(tmp);

    }, [])

    return (
        <Container>
            <input id="avaxValue" type="number"/> <span>AVAX</span>
            <div>
                <button onClick={handleAVAXtoFLW}>convert!</button>
            </div>
            <FLWContainer>
            <span>{FLWforGivenAVAX}</span> <span>FLW</span>
            </FLWContainer>
            <div>
                <span>{currentFLW} avax per FLW</span>
            </div>
        </Container>
    )
}

const FLWContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
`

const Container = styled.div`
    margin-top: 50px;
    input{
        margin-bottom: 30px;
    }
`

export default FLWPrice
