import React from "react"
import { useState } from "react"
import QuoteBox from "./QuoteBox"

import getRandomNumber from '../helps/getRandomNumber'
import quotes from '../helps/quotes.json'
import colors from '../helps/colors'


function BackGround() {
    let quoteElement = getRandomNumber(quotes);
    let colorElement = getRandomNumber(colors);

    const [quote, setQuote] = useState(quotes[quoteElement]);
    const [color, setColor] = useState(colors[colorElement]);

    const nextQuote = () => {
        setQuote(quotes[quoteElement]);
        setColor(colors[colorElement])
    }

    return (
        <main style={{backgroundColor: `${color}`}} >
            <div>
                <QuoteBox 
                    color={color}
                    quote={quote}
                />
                <p className='box-button' onClick={nextQuote} style={{color: `${color}`}}><i class="fa-solid fa-circle-right fa-2xl"></i></p>
            </div>

        </main>
    )
}

export default BackGround
