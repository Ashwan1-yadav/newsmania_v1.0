import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div
        class="card container"
        style={{
          width: "21rem",
          margin: "3px",
          padding: "3px",
          border: "1px solid #71717a",
          borderRadius: "10px",
          boxShadow: "0px 0px 5px 0.5px",
        }}
      >
        <img
          src={imageUrl}
          style={{
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 1px 1px 0 rgba(0, 5, 7,70)",
          }}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{title}...</h5>
          <p class="card-text">{description}...</p>
          <p
            class="text-muted"
            style={{
              lineHeight: "5px",
              fontSize: "12px",
            }}
          >
            <i>Author</i> : {author}
          </p>
          <p
            class="text-muted"
            style={{
              lineHeight: "5px",
              fontSize: "12px",
            }}
          >
            <i>Published on</i> : {new Date(date).toGMTString()}
          </p>
          <p
            class="text-muted"
            style={{
              lineHeight: "5px",
              fontSize: "12px",
            }}
          >
            <i>Source</i> : {source}
          </p>

          <a
            href={newsUrl}
            style={{
              color: "white",
              backgroundColor: "#000000",
              textDecoration: "none",
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "0 1px 1px 0 rgba(0, 5,7,7)",
            }}
            target="_blank"
            class="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
