import React, { Component } from 'react';
import Title from './Title';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Shipping extends Component {
    render() {
        return (
            <div className="py-5">
                <Title name="Shipping and" title="Returns" />
                <table border="0" cellspacing="50" bordercolor="#111111" width="85%" cellpadding="0" align="center">
                    <tr>

                    <td width="100%" align="left">

                    <ul>
                            
                    <li>Please allow up to 3 weeks for larger crochet items such as sweaters, baby afghans, and baby outfits. </li><br></br>
                    <li>Crochet items weighing less than 5 pounds will be shipped "Priority Mail" in the United States or FedEx Ground depending on the weight, size, and cost for your order.  The cheapest method will be used since the postage amount is not exact until the order is packaged and weighed.</li><br></br>
                    <li>International orders:  Please send an email to Tobita for International Postal rates.</li>
                    <br></br>
                    <li>The shipping and handling charge for Afghan orders is $16.00 for "Fed Ex Ground" due to the size and weight of the afghan or bedcover.  Fed Ex Ground services will not ship to a PO Box.  They will ship your package to your residential or business address.</li>
                    <br></br>
                    <li> Due to increase in the shipping rates, the shipping charges are listed based on the amount purchased through the website's shopping cart and is automatically calculated when you are paying through Paypal (<a href="http://www.paypal.com">http://www.paypal.com</a>).</li>
                    <br></br>
                    </ul>
                    <div className="row no-gutters mx-auto">
                        <div className="col-3 mx-auto align-content-center">
                            <ListGroup>
                                <ListGroup.Item className="font-weight-bold">Total Purchase Amount</ListGroup.Item>
                                <ListGroup.Item>$0 - $9.99</ListGroup.Item>
                                <ListGroup.Item>$10 - $49.99</ListGroup.Item>
                                <ListGroup.Item>$50 - $99.99</ListGroup.Item>
                                <ListGroup.Item>$100 - $199.99</ListGroup.Item>
                                <ListGroup.Item>$200 - up</ListGroup.Item>
                            </ListGroup>                            
                        </div>
                        <div className="col-6 d-flex flex-row flex-wrap align-content-center">
                            <ListGroup>
                                <ListGroup.Item className="font-weight-bold">Total Shipping Amount</ListGroup.Item>
                                <ListGroup.Item>$8.50</ListGroup.Item>
                                <ListGroup.Item>$9.50</ListGroup.Item>
                                <ListGroup.Item>$12.00</ListGroup.Item>
                                <ListGroup.Item>$16.00</ListGroup.Item>
                                <ListGroup.Item>$22.00</ListGroup.Item>
                            </ListGroup>                            
                        </div>
                    </div>                    
                    <br></br>
                    <b><u>Any excessive shipping amount will be refunded</u></b>. Please be assured that Tobita will use the cheapest method possible.
                    <br></br>
                    <br></br>
                    <p>
                        Refund Policy: ALL SALES ARE FINAL.
                        If for any reason you are not completely satisfied with your product, please send an email to Tobita.
                        All returns must be approved and shipped to Tobita's Crochet Items within 10 calendar days.
                        Shipping charges are non-refundable and 20% restocking fee applies.
                    </p>
                    If you have any questions or concerns regarding any of these policies, please send Tobita an email. Thank You.
                    <br></br>
                    </td>
                    </tr>
                </table>
            </div>
        )
    }
}
