import React, { Component } from "react";


import PortfolioItem from "./Portfolio-item";



export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("portfolio container has rendered")
    }

    portfolioItems() {
        const data = ["React Portfolio", "Maks for All website", "Book Api"]
    }
    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>


                <PortfolioItem />
            </div>
        )
    }
}