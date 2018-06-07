import React from "react";
import {Component} from "react";
import {v4} from "uuid";
import StarRatingComponent from 'react-star-rating-component';



class Cards extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        if (this.props.cardDetails) {

            return (
                <div className="d-flex justify-content-start mt-1">
                    {
                        this.props.cardDetails.map(card => (
                            <div className="card text-info border-info mb-3 custom-styles mr-1">
                                <div className="card-header">
                                    <div className="d-flex justify-content-center">{card.title}</div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="http://www.boingo.com/broadband/#s4058" target="_blank">
                                        <img className="card-img-top mt-1"
                                             src={card.imageURL}
                                             alt="Card image cap"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="h6 card-title mr-2">{card.feature}</p>
                                        <button type="button" className="btn btn-primary btn-sm rounded" onClick={() => window.open(card.url, "_blank")}>Claim Now</button>
                                    </div>
                                    <p className="card-text">
                                        <span className="glyphicons glyphicons-check">{card.description}</span>
                                    </p>
                                    <StarRatingComponent
                                        name="rate"
                                        editing={false}
                                        renderStarIcon={() => <span>★</span>}
                                        starCount={5}
                                        value={card.rating}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

            );
        }
        else {
            return (null);
        }
    }
}

export default Cards;
