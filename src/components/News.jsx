import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
  };

  static propTypes = {
    country: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // let data = await fetch(
    //   `https://newsapi.org/v2/everything?q=technology&?country=in&&category=${this.props.category}&apikey=b81b9434fc2e4a01a665b0fe43ca53b3&${this.setState.page}&pagesize=9`
    // );
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apikey=b81b9434fc2e4a01a665b0fe43ca53b3&pagesize=12&page=${this.state.page}`
    );
    let jsonData = await data.json();
    this.setState({
      article: jsonData.articles,
    });
  }

  prevPage = async () => {
    // let data = await fetch(
    //   `https://newsapi.org/v2/everything?q=technology&?country=in&&category=${this.props.category}&apikey=b81b9434fc2e4a01a665b0fe43ca53b3&page=${
    //     this.state.page - 1
    //   }&pagesize=9`
    // );
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&&category=${
        this.props.category
      }&apikey=b81b9434fc2e4a01a665b0fe43ca53b3&pagesize=9&page=${
        this.state.page - 1
      }`
    );
    let jsonData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: jsonData.articles,
    });
  };

  nextPage = async () => {
    // let data = await fetch(
    //   `https://newsapi.org/v2/everything?q=technology&?country=in&&category=${this.props.category}&apikey=b81b9434fc2e4a01a665b0fe43ca53b3&page=${
    //     this.state.page + 1
    //   }&pagesize=9`
    // );
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&&category=${
        this.props.category
      }&apikey=b81b9434fc2e4a01a665b0fe43ca53b3&pagesize=9&page=${
        this.state.page + 1
      }`
    );
    let jsonData = await data.json();

    this.setState({
      page: this.state.page + 1,
      article: jsonData.articles,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1
            className="text-center"
            style={{
              color: "black",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Latest News Headlines
          </h1>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col my-3">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 70) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 180)
                        : "" + element.title
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://t4.ftcdn.net/jpg/03/18/27/83/360_F_318278322_5XZE9O10xz8mpundHqGBDzukYfw9HOoD.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt ? element.publishedAt : "Unknown"}
                    source={
                      element.source.name ? element.source.name : "Unknown"
                    }
                    key={undefined}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-around md-4 py-4 p-4">
          <button
            type="button"
            class="btn btn-primary"
            disabled={this.state.page <= 1}
            onClick={this.prevPage}
            style={{ backgroundColor: "black" }}
          >
            &larr;Prev
          </button>
          <button
            style={{ backgroundColor: "black" }}
            type="button"
            class="btn btn-primary"
            onClick={this.nextPage}
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}
