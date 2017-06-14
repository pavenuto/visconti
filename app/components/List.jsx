import React from 'react';
import { TweenLite } from 'gsap';


export default class List extends React.Component {
  componentDidMount() {
    TweenLite.fromTo(this.refs.list, .5, {
      opacity: 0
    }, {
      delay: this.props.delay ? this.props.delay : 0.5,
      opacity: 1,
      ease: Quad.easeInOut
    })
  }
  render() {
    return (
      <ol ref="list" className="List">
          {this.props.items.map((item) => {
            return <li className="List__item">{item}</li>;
          })}
      </ol>
    )
  }
}
