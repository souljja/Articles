import React from 'react';
import Title from "./Title.js";
import Footer from "./Footer.js";
import DateHelper from './DateHelper';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article:props.article,
      isEditing: false
    };
  }

  handler = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    if(!this.state.isEditing){
    return (
      <div>
        <article>
          <Title title={this.state.article.title}
            author={this.state.article.author} />
          <section>{this.state.article.text}</section>
        <Footer date={this.state.article.date}
          handler={this.handler}
          isEditing={this.state.isEditing}/></article>
      </div>
    );
    } else {
      return (
        <form>
        <article>
          <header>
            <h1>
              <input value={this.state.article.title}/>
            </h1>
            <div className="byline">
              <address className="author">By {this.state.article.author}</address>
            </div>
          </header>
            <section>
              <textarea value={this.state.article.text}/>
            </section>
          <footer>
            <time>{DateHelper.formatDate(this.state.article.date, true)}</time>
            <div className="buttons_group">
              <button onClick={this.handler}>Edit</button>
              <button>Delete</button>
            </div>
          </footer>
          </article>
        </form>
      );
    }
  }
}

export default Article;