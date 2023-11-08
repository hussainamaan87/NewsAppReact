import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  }


  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df720bb5a387497da24187d951c82bee";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div className='container my-3'>
        <h1>NewsAtYourTips - Top Headlines</h1>
        <div className="row justify-content-center align-items-center g-2">
          {loading ? (
            <p>Loading...</p>
          ) : (
            articles.map((element) => (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.split(0,30):""}
                  description={element.description?element.description.split(0,30):""}
                  imageURL={element.urlToImage?element.urlToImage:""}
                  newsURL={element.url?element.url:""}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default News
  