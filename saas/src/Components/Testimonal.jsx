import React from 'react';
import { cn } from "./lib/utils";
import "./../Styles/Testimonal.module.css"
import Styles from "./../Styles/Testimonal.module.css"
import Marquee from 'react-fast-marquee';
import img1 from "./../Image/bg1.png";
import PopUp from './pop';
const reviews = [
    {
        name: 'Jack',
        username: '@jack',
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jill',
        username: '@jill',
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: img1,
    },
    {
        name: 'John',
        username: '@john',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jane',
        username: '@jane',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jenny',
        username: '@jenny',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'James',
        username: '@james',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jane',
        username: '@jane',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jenny',
        username: '@jenny',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jane',
        username: '@jane',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    },
    {
        name: 'Jenny',
        username: '@jenny',
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: img1,
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={"relative w-60 cursor-pointer overflow-hidden rounded-xl border border-gray-300 bg-black hover:bg-gray-700 dark:border-gray-600 dark:bg-black dark:hover:bg-gray-700"}>
            <blockquote>{body}</blockquote>
            <div className={Styles.frnt}>
                <img className="rounded-full" width="70" height="60" alt="" src={img} />
                <div className="d-flex front">
                    <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
                        <p style={{ color: 'white', lineHeight: '5px' }}>{name}</p> <p className="text-xs font-medium text-gray-500 dark:text-gray-400" style={{ lineHeight: '5px' }}>{username}</p>
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

const MarqueeDemo = () => {
    return (
        <>
            <div className="w-full bg-light dark:bg-gray-900 py-20 overflow-hidden relative">
                <p className={Styles.test}>Testimonals</p>
                <h1 className={Styles.test2}>Loved by Thousands</h1>
                <p className={Styles.test3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laudantium cumque voluptatibus? Illo nesciunt tempore, quasi earum harum voluptas animi blanditiis voluptate nam eveniet fugiat.</p>
                <div className="mb-6">
                    <Marquee speed={50} pauseOnHover gradient={false}>
                        {firstRow.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                </div>
                <div>
                    <Marquee speed={50} pauseOnHover gradient={false} direction="right">
                        {secondRow.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
            <PopUp />
        </>
    );
};

export default MarqueeDemo;
