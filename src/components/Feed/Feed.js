import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import FlipMove from 'react-flip-move'
function Feed() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		try {
			async function getCities(db) {
				const postsCol = collection(db, 'posts')
				const postSnapshot = await getDocs(postsCol)
				const postsList = postSnapshot.docs.map((doc) => doc.data())
				setPosts(postsList)
			}
			getCities(db)
		} catch (error) {}
	}, [])
	return (
		<div className='feed'>
			{/* Header */}
			<div className='feed__header'>
				<h2>Home </h2>
			</div>
			{/* TweetBox */}
			<TweetBox />
			<FlipMove>
				{posts.map((post) => (
					<Post
						key={post.text}
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						text={post.text}
						avatar={post.avatar}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	)
}

export default Feed
