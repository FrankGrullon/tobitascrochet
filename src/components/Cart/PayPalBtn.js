import React from 'react';
//import PaypalExpressBtn from 'react-paypal-express-checkout';
import { PayPalButton } from "react-paypal-button-v2";
 

export default class MyApp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-end">
                    <PayPalButton
                    amount="0.01"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    this.props.clearCart();
                    this.props.history.push('/');
            
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                        orderId: data.orderID
                        })
                    });
                    }}
                    onCancel={(data) => {
                        console.log('The payment was cancelled!', data);
                        alert("Transaction Cancelled");
                    }}
                    options={{
                    clientId: "AXsjcrkuGEn0PJXndt7HP5Mn3hfNS5lZsU_plwgeyn-JZTHk0UYaDqak5XIu6KunJQaC78dURswiXyRJ"
                    }}
                    />
                </div>
            </div>
        
        );
    }
}

