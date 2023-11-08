import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
        let {title, description, imageURL, newsURL}=this.props;
        return (
            <div className="card my-3" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageURL} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsURL} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
