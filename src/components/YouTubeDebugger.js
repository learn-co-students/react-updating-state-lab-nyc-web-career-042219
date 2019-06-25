import React from 'react'

export default class YouTubeDebugger extends React.Component {
	constructor(){
		super()
		this.state = {
			errors: [],
		  	user: null,
		  	settings: {
		    	bitrate: 8,
		    	video: {
	      			resolution: '1080p'	
	      			}
	      		}	
	      	}
		}

	incrementBitrate = () => {
		this.setState({
			settings: {
			...this.state.settings,
			bitrate: 12
			}	
		})
	}

	resolutionChange = () => {
		this.setState({
			settings: {
				...this.state.settings,
			video: {
					resolution: '720p'
				}
			}
		})
	}

	render(){
		return(
			<div>
			<button className="bitrate" onClick={this.incrementBitrate}></button>
			<button className="resolution" onClick={this.resolutionChange}></button>
			</div>
		)
	}
}