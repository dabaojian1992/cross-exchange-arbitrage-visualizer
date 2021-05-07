import React, { useState, useEffect } from 'react';


let OrderBook = ({bitstampSocket, bitmexSocket, ftxSocket, binanceSocket}) => {

  let [bitstamp_orders, setBitstamp_orders] = useState();
  let [bitmex_orders, setBitmex_orders] = useState();
  let [ftx_orders, setFtx_orders] = useState();
  let [binance_orders, setBinance_orders] = useState(); 

  function socketSubscription(socket, changeState){
    socket.subscribe(
      msg => {Object.keys(msg).length > 0 ? changeState(() => [msg]) : null},
      err => {console.log(err)}
    );
  };
    
  useEffect(()=>{
    socketSubscription(bitstampSocket, setBitstamp_orders);
    socketSubscription(bitmexSocket, setBitmex_orders);
    socketSubscription(ftxSocket, setFtx_orders);
    socketSubscription(binanceSocket, setBinance_orders);



    return () => {
      bitstampSocket.unsubscribe();
      bitmexSocket.unsubscribe();
      ftxSocket.unsubscribe();
      binanceSocket.unsubscribe();
    };
  },[]);
  

  
  // const orderRows = (arr) => 
  //   arr &&
  //   arr.map((item, index) => {
      
  //     return(
  //       <tr key={index}>
  //           <td> {item[1]} </td>
  //           <td> {item[0]} </td>
  //       </tr>
  //   )}
  // );
  
  // const orderHead = (title) => (
  //   <thead>
  //     <tr>
  //       <th colSpan="2">{title}</th>
  //     </tr>
  //     <tr>
  //       <th>Amount ({currencyArray[0]})</th>
  //       <th>Price ({currencyArray[1]})</th>
  //     </tr>
  //   </thead>
  // );

  return (
    <div>
      <div>
          {bitstamp_orders !== undefined && bitstamp_orders.length > 0 ? 
          <div id='bids'>{bitstamp_orders[0]['bids']}</div> : null}
      </div>
      <div>
          {bitmex_orders !== undefined && bitmex_orders.length > 0 ? 
          <div id='bids'>{bitmex_orders[0]['bids']}</div> : null}
      </div>
    </div>
  //   <div className="order-container">
  //     <table>
  //       {orderHead('Bids')}
  //       <tbody>{orderRows(bitstamp_bids)}</tbody>
  //     </table>
  //     <table>
  //       {orderHead('Asks')}
  //       <tbody>{orderRows(bitstamp_asks)}</tbody>
  //     </table>

  //     <table>
  //       {orderHead('Bids')}
  //       <tbody>{orderRows(bitmex_bids)}</tbody>
  //     </table>

  //     <table>
  //       {orderHead('Asks')}
  //       <tbody>{orderRows(bitmex_asks)}</tbody>
  //     </table>



  //   </div>
  );
};

export default OrderBook;
