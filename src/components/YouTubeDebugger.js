import React, { Component } from 'react';

export default class YoutubeDebugger extends React.Component {

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

    // clicked = (e) => {
    //     e.persist()

    //     if(e.target.className === 'bitrate') {
    //         this.setState({
    //             settings : {
    //                 ...this.state.settings,
    //                 bitrate: 12
    //             }
    //         })
    //     }

    //     if (e.target.className === 'resolution') {
    //         this.setState({
    //             settings : {
    //                 video : {
    //                     ...this.state.settings.video,
    //                     resolution: '720p'
    //                 }
    //             }
    //         })
    //     }
    // }

    clickedBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    clickedResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button
                className='bitrate' 
                onClick={this.clickedBitrate}
                />

                <button
                className='resolution' 
                onClick={this.clickedResolution}
                />
            </div>
        )
    }
}