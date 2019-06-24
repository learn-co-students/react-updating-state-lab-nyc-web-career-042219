import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
    constructor() {
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

    changeBitrate = () => {
        this.setState({
            settings: {
                bitrate: 12,
                video: {
                    resolution: '1080p'
                }
            }
        })
    }

    changeVideo = () => {
        this.setState({
            settings: {
                bitrate: this.state.settings.bitrate,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.changeBitrate}> </button>
                <button className='resolution' onClick={this.changeVideo}> </button>
            </div>
        )
    }
}