import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import './TweetBox.css'
import db from '../../firebase'
import { collection, addDoc } from 'firebase/firestore/lite'
function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('')
	const [tweetImage, setTweetImage] = useState('')
	const sendTweet = (e) => {
		e.preventDefault()
		const postsCol = collection(db, 'posts')
		addDoc(postsCol, {
			displayName: 'Siamak',
			username: 'royalCrystal',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		})

		setTweetImage('')
		setTweetMessage('')
	}
	return (
		<div className='tweetBox'>
			<form action=''>
				<div className='tweetBox__input'>
					<Avatar src='https://i.pravatar.cc/300' />
					<input
						type='text'
						value={tweetMessage}
						onChange={(e) => setTweetMessage(e.target.value)}
						placeholder="What's happening?"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					type='text'
					className='tweetBox__imageInput'
					placeholder='Enter image URL'
				/>

				<Button
					onClick={sendTweet}
					type='submit'
					className='tweetBox__tweetButton'>
					Tweet
				</Button>
			</form>
		</div>
	)
}

export default TweetBox
