import React, { Component, PropTypes } from 'react';
import { Input, Textarea, Panel, PanelHeader } from 'rebass';

export default class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const title = this.state.title.trim();
    const body = this.state.body.trim();
    if (!title || !body) return;
    this.props.addArticle({ article: { title, body } });
  }

  render() {
    return (
      <div className="article-form">
        <Panel theme="default">
          <PanelHeader theme="default">
            Form
          </PanelHeader>
          <Input
            type="text"
            className="article-form__title"
            onChange={this.onTitleChange.bind(this)}
            placeholder="title"
          />
          <Textarea
            className="article-form__body"
            onChange={this.onBodyChange.bind(this)}
          />
          <Input
            className="article-form__submit"
            type="submit"
            onClick={this.onSubmit.bind(this)}
            value="Post"
            style={{ width: 100 }}
          />
        </Panel>
      </div>
    );
  }
}
