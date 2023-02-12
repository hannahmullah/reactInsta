import React, { useState, useEffect } from 'react';
import '../App.css';
import avatar from './images/avatar.png'
import love from './images/love.png'
import comment from './images/comment.png'
import share from './images/share.png'
import Navbar from './Navbar';

const Post = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        fetchImages()
    }, []);

    const fetchImages = async () => {
        const response = await fetch(`https://picsum.photos/v2/list?limit=${limit}&page=${page}`);
        console.log(response)
        const data = await response.json();
        console.log(data);
        setPhotos(data);
        console.log(photos)
    }

    return (
        <>
            {photos.slice(0, limit * page).map((item, index) => {
                return (
                    <div className='postContainer'>
                        <div className='center'>
                            <div className='header'>
                                <img className='avatarImg' src={avatar} />
                                <h3 className='username'>{item.author}</h3>
                            </div>

                            <div className='postImg'>
                                <img className='image' src={item.download_url} alt='random images' width='600px' height='600px' />
                            </div>
                        </div>
                        <div className='analytics' style={{ 'marginleft': '10px' }}>
                            <img src={love} className='postLove' />
                            <img src={comment} className='postComment' />
                            <img src={share} className='postShare' />
                        </div>
                        <div className='likes' style={{ 'fontWeight': 'bold', 'marginLeft': '10px' }}>
                            7799 likes
                        </div>

                        <div className='commentSection'>
                            <input className='commentBox' placeholder='Add a comment...'></input>
                        </div>
                    </div>
                )
            })
            }
            {photos.length > limit * page && (
                <div className='loadMoreBtn'>
                    <button onClick={() => setPage(page + 1)}>Load More</button>
                </div>
            )}
        </>
    )
}

export default Post;
