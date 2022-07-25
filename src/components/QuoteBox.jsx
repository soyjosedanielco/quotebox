import React from "react"

function QuoteBox({color, quote, nextQuote}) {

    return (
        <article style={{color: `${color}`}}>
            <p className='article-quote'><i class="fa-solid fa-quote-left"></i> {quote.quote}</p>
            <p className='article-author'>{quote.author}</p>
        </article>
    )
}

export default QuoteBox
