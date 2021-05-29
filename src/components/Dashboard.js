import React, { Component } from "react";
import { connect } from 'react-redux'
import Tweet from "./tweet";

class Dashboard extends Component {
    render() {
        debugger
        console.log(this.props.tweetIds)
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.tweetIds.map((id)=>(
                     <li key={id}>
                         <Tweet id={id}/>
                     </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ tweets }) {
    return {
        tweetIds: Object.keys(tweets)
        .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp )
    }
   
}

export default connect(mapStateToProps)(Dashboard)