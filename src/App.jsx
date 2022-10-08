import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Quote from "./Components/Quote";
import {Colors} from "./public";

const api = axios.create({
  baseURL: `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
})

const APPSTYLE = (color) => {
  return ({
    backgroundColor: color,
  })
}

const App = () => {

  const [QuoteObj, changeQuote] = useState({});

  const [Data, ChangeData] = useState();

  const ChangeText = () => {
    if (Data) {
      const Obj = Data[Math.floor(Math.random() * 102)];
      changeQuote({
        quote: Obj.quote,
        author: Obj.author,
        color: Colors[Math.floor(Math.random() * Colors.length)],
      });
    }
  }

  useEffect(() => {
    api.get("/").then((res) => {
      return res.data
    }).then((data) => {
      ChangeData(data.quotes);
    })
  }, [])

  useEffect(() => {
    ChangeText();
  }, [Data]);

  return (
    <div className="App" style={APPSTYLE(QuoteObj.color)}>
      <Quote Obj={QuoteObj} ChangeVoid={ChangeText} />
    </div>
  );
}

export default App
