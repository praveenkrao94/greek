import React from 'react';
import './card.css';

const Card = () => {
    const item = {
        voting: 1,
        poster: "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1558340965271_Yuvarathnaa.jpg",
        title: 'Yuvarathnaa',
        genre: 'action,drama',
        director: 'Santhosh Ananddram',
        stars: 'puneeth rajkumar',
        runTime: 0,
        language: 'Kannada',
        date: '2021-04-01',
        pageViews: 335,
        totalVoted: 3
    };
    const item2 = {
        voting: 2,
        poster: "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1584421321076_Roberrt.jpg",
        title: 'Roberrt',
        genre: 'Action',
        director: 'Tarun Sudhir',
        stars: 'Darshan Thoogudeep,Jagapathi Babu,Asha Bhat,Vinod Prabhakar',
        runTime: 120,
        language: 'Kannada',
        date: '2021-03-11',
        pageViews: 433,
        totalVoted: 4
    };
    const item3 = {
        voting: 2,
        poster: "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1615298876928_Inspector_Vikram.jpg",
        title: 'Inspector Vikram',
        genre: 'Action',
        director: 'Narasimha',
        stars: 'Bhavana,Darshan,Prajwal Devaraj,Pradeep Doddaiah',
        runTime: 120,
        language: 'Kannada',
        date: '2021-02-05',
        pageViews: 188,
        totalVoted: 0
    };
    const item4 = {
        voting: 0,
        poster: "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg",
        title: 'K.G.F: Chapter 2',
        genre: 'Action',
        director: 'Prashanth Neel',
        stars: 'Sanjay Dutt,Raveena Tandon,Yash,Srinidhi Shetty',
        runTime: 120,
        language: 'Kannada',
        date: '2022-04-14',
        pageViews: 188,
        totalVoted: 500
    };

    const newDate = new Date(item.date).toDateString();
    const newDate2 = new Date(item2.date).toDateString();
    const newDate3 = new Date(item3.date).toDateString();
    const newDate4 = new Date(item4.date).toDateString();

    return (
        <>

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

            <div className="cardView">
                <div className="row">
                    <div>
                        <div className="triangleUp"></div>
                        <span className="totalVoteCount">{item2.voting}</span>
                        <div className="triangleDown"></div>
                        <span className="votesText">Votes</span>
                    </div>
                    <div>
                        <img className="image" src={item2.poster ? item2.poster : null} alt="" />
                    </div>
                    <div className="flexShrink">
                        <h1 className="title">{item2.title}</h1>
                        <p className="labels">Genre:<span style={{ color: 'black' }}>{item2.genre}</span></p>
                        <p className="labels">Director:<span style={{ color: 'black' }}>{item2.director}</span></p>
                        <p className="labels">Starring:<span style={{ color: 'black' }}>{item2.stars}</span></p>
                        <p style={{ fontWeight: 'bold' }}>{item2.runTime ? item2.runTime : 'null'} Mins | {item2.language} | {newDate2}</p>
                        <p style={{ color: '#089dd4' }}>{item2.pageViews} views | Voted by {item2.totalVoted} people</p>
                    </div>
                </div>
                <button className="watchTrailerBtn">Watch Trailer</button>
            </div>

            <div className="cardView">
                <div className="row">
                    <div>
                        <div className="triangleUp"></div>
                        <span className="totalVoteCount">{item3.voting}</span>
                        <div className="triangleDown"></div>
                        <span className="votesText">Votes</span>
                    </div>
                    <div>
                        <img className="image" src={item3.poster ? item3.poster : null} alt="" />
                    </div>
                    <div className="flexShrink">
                        <h1 className="title">{item3.title}</h1>
                        <p className="labels">Genre:<span style={{ color: 'black' }}>{item3.genre}</span></p>
                        <p className="labels">Director:<span style={{ color: 'black' }}>{item3.director}</span></p>
                        <p className="labels">Starring:<span style={{ color: 'black' }}>{item3.stars}</span></p>
                        <p style={{ fontWeight: 'bold' }}>{item3.runTime ? item3.runTime : 'null'} Mins | {item3.language} | {newDate3}</p>
                        <p style={{ color: '#089dd4' }}>{item3.pageViews} views | Voted by {item3.totalVoted} people</p>
                    </div>
                </div>
                <button className="watchTrailerBtn">Watch Trailer</button>
            </div>
            <div className="cardView">
                <div className="row">
                    <div>
                        <div className="triangleUp"></div>
                        <span className="totalVoteCount">{item4.voting}</span>
                        <div className="triangleDown"></div>
                        <span className="votesText">Votes</span>
                    </div>
                    <div>
                        <img className="image" src={item4.poster ? item4.poster : null} alt="" />
                    </div>
                    <div className="flexShrink">
                        <h1 className="title">{item4.title}</h1>
                        <p className="labels">Genre:<span style={{ color: 'black' }}>{item4.genre}</span></p>
                        <p className="labels">Director:<span style={{ color: 'black' }}>{item4.director}</span></p>
                        <p className="labels">Starring:<span style={{ color: 'black' }}>{item4.stars}</span></p>
                        <p style={{ fontWeight: 'bold' }}>{item4.runTime ? item4.runTime : 'null'} Mins | {item4.language} | {newDate4}</p>
                        <p style={{ color: '#089dd4' }}>{item4.pageViews} views | Voted by {item4.totalVoted} people</p>
                    </div>
                </div>
                <button className="watchTrailerBtn">Watch Trailer</button>
            </div>
        </>
    );
};

export default Card;
