import React from 'react';
import './card.css';

const Card = () => {
    const item = {
        voting: 123,
        poster: 'https://in.pinterest.com/manasamanasa06531/appu-rajkumara/',
        title: 'Dummy Movie Title',
        genre: 'Action',
        director: 'John Doe',
        stars: 'John Smith, Jane Doe',
        runTime: 120,
        language: 'English',
        date: '2023-07-12',
        pageViews: 1000,
        totalVoted: 500
    };

    const newDate = new Date(item.date).toDateString();

    return (
        <div className="cardView">
            <div className="row">
                <div>
                    <div className="triangleUp"></div>
                    <span className="totalVoteCount">{item.voting}</span>
                    <div className="triangleDown"></div>
                    <span className="votesText">Votes</span>
                </div>
                <div>
                    <img className="image" src={item.poster ? item.poster : null} alt="" />
                </div>
                <div className="flexShrink">
                    <h1 className="title">{item.title}</h1>
                    <p className="labels">Genre:<span style={{ color: 'black' }}>{item.genre}</span></p>
                    <p className="labels">Director:<span style={{ color: 'black' }}>{item.director}</span></p>
                    <p className="labels">Starring:<span style={{ color: 'black' }}>{item.stars}</span></p>
                    <p style={{ fontWeight: 'bold' }}>{item.runTime ? item.runTime : 'null'} Mins | {item.language} | {newDate}</p>
                    <p style={{ color: '#089dd4' }}>{item.pageViews} views | Voted by {item.totalVoted} people</p>
                </div>
            </div>
            <button className="watchTrailerBtn">Watch Trailer</button>
        </div>
    );
};

export default Card;
