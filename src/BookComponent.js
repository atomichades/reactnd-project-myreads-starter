import React from "react";
import './App.css'

class BookItem extends React.Component{

    handleChange(event){
        console.log(event.option)
    }

    render() {
        return(
            <li key = {this.props.title}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.url})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(item) => {this.handleChange(item)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        )

    }
}

export {BookItem}