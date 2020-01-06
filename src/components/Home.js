import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="mx-auto justify-content-center">
                    <div className="row mx-auto justify-content-center pb-5">
                        <img src="./tobitascrochetlogo.png" className="img-fluid" alt="crochet logo"/>
                    </div>
                    <p className="mx-auto pl-5 pr-5 pt-7">
                        If you have never been here before, please take a moment and browse through the various pages that are listed. You will find some very beautiful crochet work and crochet designs that will spark your interest.
                        If you are looking for a site where you can purchase crochet items or you would like to have a customized item, you came to the right place! This is not a warehouse or a store and there are no crochet supplies or patterns here ... just a place where crochet items are made with lots of love, some character, simplicity, and charm. 
                        All crochet items are individually hand crocheted ... not machine made and they are not pre made or stored. I use high quality threads and yarns so you can be assured that you will be getting a high quality crochet product that will last for many years.
                        Periodically, Tobita will be adding more handmade crochet items to this website as requests are completed.
                    </p>
                </div>
            </div>
        )
    };
}
