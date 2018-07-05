import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CustomToolbar extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    this.defaultValue = '14px';
    this.state = {
      showSizePanel: false,
      showEmojiPanel: false
    }
  }

  showSizePanel = () => {
    // debugger;
  };

  render() {
    const { showSizePanel, showEmojiPanel } = this.state;
    const { className } = this.props;
    let sizePanelClass = classNames({
        'hide': true,
        'custom-size-panel': true
    });

    return (
      <div id="toolbar" className={className}>
        <div className="toolbar-grp">
          <button className="item ql-link" />
          <button className="item ql-bold" />
          <button className="item ql-italic" />
          <button className="item ql-underline" />
        </div>

        <div className="toolbar-grp">
          <select className="item ql-color">
          {
            /*
            <option value="red" />
            <option value="green" />
            <option value="blue" />
            <option value="orange" />
            <option value="violet" />
            <option value="#d0d1d2" />
            <option value="black" />        
             */
          }
          </select>
        </div>

        <div className="toolbar-grp">
          <select className="item ql-align"></select>
          {
            /*
          <button className="ql-align" />
          <button className="ql-align" value="center" />
          <button className="ql-align" value="right" />
             */
          }
        </div>

        <div className="toolbar-grp">
          <button type="button" className="item ql-list" value="ordered" />
          <button type="button" className="item ql-list" value="bullet" />
        </div>

        <div className="toolbar-grp">
          <button className="item ql-emoji" />
        </div>

        <div className="toolbar-grp">
          <button className="item ql-image" />
        </div>

        <div className="toolbar-grp">
          <div className="item custom-size" onClick={this.showSizePanel}></div>
          <div className={sizePanelClass}>
            <button type="button" className="ql-customSize item" value="32px">32px</button>
            <button type="button" className="ql-customSize item" value="24px">24px</button>
            <button type="button" className="ql-customSize item" value="18px">18px</button>
            <button type="button" className="ql-customSize item" value="16px">16px</button>
            <button type="button" className="ql-customSize item" value="13px">13px</button>
            <button type="button" className="ql-customSize item" value="12px">12px</button>
          </div>
        </div>

        <div className="toolbar-grp">
          <button className="item ql-clean" />
        </div>

        <div className="toolbar-grp">
          <button className="item ql-entry" />
        </div>

        <div className="toolbar-grp">
          <button className="item ql-insertStar">
            <span className="octicon octicon-star" />
          </button>
        </div>
      </div>
    );
  }
}

export default CustomToolbar;