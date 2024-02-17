import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div>
            <span
              className="badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              {source}
            </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://www.hindustantimes.com/ht-img/img/2024/01/18/1600x900/WhatsApp_Image_2024-01-18_at_71941_PM_1705585814079_1705585814303.jpeg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
