import React, { useState, useEffect } from 'react';
import OrderBook from './ob';
import './App.scss';
import {bitstampSocketSetup, bitmexSocketSetup, ftxSocketSetup,binanceSocketSetup} from './utils/websocket_setups';
import {symbols} from './utils/symbols';

const App = () => {
    const [tokenConnections, setTokenConnections] = useState({})
    const _SUPPORTED_CURRENCIES = ['BTC', 'ETH','XRP','LTC','Doge','ADA','EOS','Polka'];
    const exchanges = ['binance','bitmex','ftx','coinbase','kraken','bitstamp','bitfinex','okex','gemini','huobi'];

    let bitstampSocket1 = bitstampSocketSetup(symbols['bitstamp']['BTC']);
    let bitmexSocket1 = bitmexSocketSetup(symbols['bitmex']['BTC']);
    let ftxSocket1 = ftxSocketSetup(symbols['ftx']['BTC']);
    let binanceSocket1 = binanceSocketSetup(symbols['binance']['BTC'],1);

    function createNewOrderbook(){

    };

    return (
        <div>
            <h2>Crypto Order Book </h2>
            <OrderBook 
                bitstampSocket={bitstampSocket1} 
                bitmexSocket={bitmexSocket1} 
                ftxSocket={ftxSocket1}
                binanceSocket={binanceSocket1}
                />
        </div>
    );
};


export default App;