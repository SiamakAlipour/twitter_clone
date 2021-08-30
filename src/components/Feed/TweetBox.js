import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'
function TweetBox() {
	return (
		<div className='tweetBox'>
			<form action=''>
				<div className='tweetBox__input'>
					<Avatar src='https://i.pravatar.cc/300' />
					<input type='text' placeholder="What's happening?" />
				</div>
				<input
					type='text'
					className='tweetBox__imageInput'
					placeholder='Enter image URL'
				/>

				<Button className='tweetBox__tweetButton'>Tweet</Button>
			</form>
		</div>
	)
}

export default TweetBox
