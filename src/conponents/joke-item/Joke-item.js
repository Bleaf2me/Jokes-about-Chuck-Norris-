
import React from 'react'
import './Joke-item.css'

const Joke = ({ value, categories, id, url  }) => {
    return (
      <div className="joke-field">
        <div className="joke">
          <div className="like"><i className="far fa-heart"></i></div>
          <div className="joke-container">
            <div className="message-container">
              <p className="pre-id">ID:</p>
              <a className="id" href={ url }>{ id }</a>
              <img src="img/link.svg" alt="" />
              <div className="joke-text">{ value }</div>
              <div className="joke-footer">
                <div className="last-update">last update</div>
                <div className="joke-category">{ categories }</div>
              </div>
            </div>
          </div>
      </div>
      </div>
    )
}
export default Joke;
