import React, { Component, PropTypes } from 'react';
import ArticleForm from './article-form';
import { Section, SectionHeader, Text } from 'rebass';

export default class Contents extends Component {
  renderArticles() {
    return this.props.articles.map(article => {
      return (
        <Section>
          <SectionHeader className="contents__title" heading={article.title} />
          <Text className="contents__body">{article.body}</Text>
        </Section>
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
