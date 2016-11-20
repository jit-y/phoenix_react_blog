import React, { Component, PropTypes } from 'react';
import ArticleForm from './article-form';

export default class Contents extends Component {
  renderArticles() {
    return this.props.articles.map(article => {
      return (
        <div>
          <h2 className="contents__title">{article.title}</h2>
          <p className="contents__body">{article.body}</p>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="contents">
        <ArticleForm addArticle={this.props.article} />
        {this.props.articles.length !== 0 ? this.renderArticles() : 'loading'}
      </div>
    );
  }
}
