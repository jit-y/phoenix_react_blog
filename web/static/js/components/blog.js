import React, { Component } from 'react';
import Contents from './contents';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.blog.fetchArticles();
  }

  render() {
    console.log(this.state);
    return(
      <div className="blog">
        <Contents
          articles={this.props.blog.articles}
          article={this.props.actions.blog.addArticle}
        />
      </div>
    );
  }
}
