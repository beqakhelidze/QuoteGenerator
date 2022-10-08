import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaTwitter, FaTumblr } from 'react-icons/fa';
import { ImQuotesLeft } from "react-icons/im";

const Twitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Do%20what%20you%20can%2C%20where%20you%20are%2C%20with%20what%20you%20have.%22%20Teddy%20Roosevelt";
const Tumblr = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption";

const Quote = ({ Obj, ChangeVoid }) => {

    const [Opacity, ChangeOpacity] = useState("");

    useEffect(() => {
        if (Object.keys(Obj).length) {
            ChangeOpacity(1);
        }
    }, [Obj]);


    const BUTTON = {
        backgroundColor: Obj.color,
    }

    let QUOTESTYLE = {
        color: Obj.color,
        opacity: Opacity,
    }

    const ChangeText = () => {
        ChangeOpacity(0)
        setTimeout(() => {
            ChangeVoid();
        }, 700);
    }


    return (
        <div className="QuoteBox">
            <h1 style={QUOTESTYLE} id="text">
                <ImQuotesLeft size={20} />
                {Obj.quote}
            </h1>
            <p className="Author" id="author" style={QUOTESTYLE}>- {Obj.author}</p>
            <div className="ButtonsDiv" >
                <a id="tweet-quote" href={Twitter} target="_top">
                    <button style={BUTTON}>
                        <FaTwitter/>
                    </button>
                </a>
                <a href={Tumblr} target="_blank">
                    <button style={BUTTON}>
                        <FaTumblr />
                    </button>
                </a>
                <button style={BUTTON} onClick={() => ChangeText()}>New quote</button>
            </div>
        </div>
    )
}

export default Quote;