// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleClick =  () => {
        this.setState(event => ({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }))
    }

    handleClick2 = () => {
        this.setState(event => ({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
                
            }
        }))
    }

    

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.handleClick} className='bitrate'>{this.state.settings.bitrate}</button>
                <button onClick={this.handleClick2} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
export default YouTubeDebugger