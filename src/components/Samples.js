import React, { Component } from 'react';
import Title from './Title';
import Carousel from 'react-bootstrap/Carousel';

let carouselStyle = {
    width: "640px",
    height: "400px"
};

export default class Samples extends Component {
    render() {
        return (
            <div className="py-5">
                <Title name="Various" title="Crochet Samples" />
                <p className="text-center py-3">
                Here are some sample crochet items that I have made over the years.  The patterns for Looney Tunes (copyrighted by Leisure Arts & Warner Bros.), Mickey and Minnie Mouse (copyrighted by Leisure Arts and Disney), Pooh and Friends (copyrighted by Leisure Arts and Disney) were purchased locally.  Tobita designed the other items such as the 
                gift baskets.  The gift baskets contained a crochet theme, for example, bathroom set or baby nursery set.  These were given as donations to raise funds at a children's elementary school.
                </p><br></br><br></br>
                <Carousel  className="d-block m-auto" style={carouselStyle} indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="img/manger.jpg"
                        alt="Manger"
                        />
                        <Carousel.Caption>
                        <h3>Nativity Scene</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-97 m-auto"
                        src="img/bathgiftset.jpg"
                        alt="Bath Giftset"
                        />
                        <Carousel.Caption>
                        <h3>Bath Gift Set</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/bugsbunny.jpg"
                        alt="Bugs Bunny"
                        />
                        <Carousel.Caption>
                        <h3>Bugs Bunny</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/eeyore.jpg"
                        alt="Eeyore"
                        />
                        <Carousel.Caption>
                        <h3>Eeyore</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 m-auto"
                        src="img/lion.jpg"
                        alt="Lion"
                        />
                        <Carousel.Caption>
                        <h3>Lion</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 m-auto"
                        src="img/looneytunes.jpg"
                        alt="Looney Tunes"
                        />
                        <Carousel.Caption>
                        <h3>Looney Tunes Characters</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/mickeyminnie.jpg"
                        alt="Mickey and Minnie"
                        />
                        <Carousel.Caption>
                        <h3>Mickey and Minnie</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/piglet.jpg"
                        alt="Piglet"
                        />
                        <Carousel.Caption>
                        <h3>Piglet</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/pooh.jpg"
                        alt="Pooh"
                        />
                        <Carousel.Caption>
                        <h3>Winnie the Pooh</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-65 m-auto"
                        src="img/sylvester.jpg"
                        alt="Sylvester"
                        />
                        <Carousel.Caption>
                        <h3>Sylvester</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 m-auto"
                        src="img/taz.jpg"
                        alt="Taz"
                        />
                        <Carousel.Caption>
                        <h3>Taz</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/Tigger.jpg"
                        alt="Tigger"
                        />
                        <Carousel.Caption>
                        <h3>Tigger</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 m-auto"
                        src="img/TiggerandEeyore.jpg"
                        alt="Tigger and Eeyore"
                        />
                        <Carousel.Caption>
                        <h3>Tigger and Eeyore</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/tweety.jpg"
                        alt="tweety"
                        />
                        <Carousel.Caption>
                        <h3>Tweety Bird</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-70 m-auto"
                        src="img/scover.jpg"
                        alt="Shelf Cover"
                        />
                        <Carousel.Caption>
                        <h3>Shelf Cover</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-60 m-auto"
                        src="img/babygiftbasket.jpg"
                        alt="Baby Gift Basket"
                        />
                        <Carousel.Caption>
                        <h3>Baby Gift Basket</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-60 m-auto"
                        src="img/minniemouse.jpg"
                        alt="Minnie Mouse"
                        />
                        <Carousel.Caption>
                        <h3>Minnie Mouse</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/frozendolls.jpg"
                        alt="Frozen dolls"
                        />
                        <Carousel.Caption>
                        <h3>Frozen Characters</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/ninjaturtlesscarf.jpg"
                        alt="Ninja Turtles Scarf"
                        />
                        <Carousel.Caption>
                        <h3>Ninja Turtles Scarf</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/minionpillowsanddoll.jpg"
                        alt="Minion Pillows and Doll"
                        />
                        <Carousel.Caption>
                        <h3>Minion Pillows and Doll</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/superheroesset1.jpg"
                        alt="Super Heroes 1"
                        />
                        <Carousel.Caption>
                        <h3>Super Heroes 1</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/superheroesset2.jpg"
                        alt="Super Heroes 2"
                        />
                        <Carousel.Caption>
                        <h3>Super Heroes 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-50 m-auto"
                        src="img/minionsafghan2.jpg"
                        alt="Minions Afghan"
                        />
                        <Carousel.Caption>
                        <h3>Minions Afghan</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-75 m-auto"
                        src="img/spidermanafghan.jpg"
                        alt="Spiderman Afghan"
                        />
                        <Carousel.Caption>
                        <h3>Spider-Man Afghan</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        )
    }
}
