import React from 'react';
import TweenLite from 'gsap';

export default class Header extends React.Component {
  componentDidMount() {
    TweenLite.fromTo(this.refs.header, .5, {
      opacity: 0
    }, {
      delay: .6,
      opacity: 1,
      ease: Quad.easeInOut
    })
  }
  render() {
    return (
      <header>
        <h1 ref="header" className="header">{this.props.title}</h1>
      </header>
    )
  }
}
