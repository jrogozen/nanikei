import React from 'react'
import { connect } from 'react-redux'

let RichTextEditor

if (__CLIENT__) {
  RichTextEditor = require('react-rte').default
}

const ArticleCreator = React.createClass({
  propTypes: {},
  getDefaultProps() {
    return {
      handleSubmit: () => {}
    }
  },
  getInitialState() {
    return {
      loaded: false,
      text: '',
      title: '',
      active: true,
      description: '',
      category: ''
    }
  },
  componentDidMount() {
    this.setState({
      loaded: true,
      text: RichTextEditor.createEmptyValue()
    })
  },
  handleChange(text) {
    this.setState({ text })
  },
  render() {
    let { description, active, category, loaded, text, title } = this.state

    return (
      <div className="ArticleCreator">
        <form>
          <div className="article-options">
            <div className="options-group">
              <label>title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  this.setState({ title: e.target.value })
                }}
              />
            </div>
            <div className="options-group">
              <label>description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  this.setState({ description: e.target.value })
                }}
              />
            </div>
            <div className="options-group">
              <label>category</label>
              <select
                type="select"
                onChange={(e) => {
                  this.setState({ category: e.target.value })
                }}
              >
                <option value="conjugations">Conjugations</option>
              </select>
            </div>
            <div className="options-group">
              <label>active</label>
              <input
                type="checkbox"
                value={active}
                onChange={(e) => {
                  this.setState({ active: e.target.value })
                }}
              />
            </div>
          </div>
        {loaded && (
          <RichTextEditor
            value={text}
            onChange={this.handleChange}
          />
        )}
        </form>
      </div>
    )
  }
})

export default connect()(ArticleCreator)