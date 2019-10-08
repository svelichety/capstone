import React, {Component} from 'react';

class InviteFriends extends Component {

    state = {
        emailIds:[]
    }

    addEmail = () =>{
        this.setState({emailIds:[...this.state.emailIds, ""]})
    }

    handleChange(event, index){
        this.state.emailIds[index] = event.target.value;
        this.setState({emailIds: this.state.emailIds});
    }

    removeEmailId(index){
        this.state.emailIds.splice(index, 1);
        this.setState({emailIds: this.state.emailIds});
    }

    sendInvitation = () => {
        console.log(this.state, '$$$$$');
    }

    render(){
        return( 
            <div className='form pa4 br3 shadow-5 center'>
                <h3>Invite Friends</h3>

                {
                    this.state.emailIds.map((emailId, index) => {
                        return(
                            <div key={index}>
                                <input onChange={(e)=>this.handleChange(e,index)} value={emailId}/>
                                <button onClick={() => this.removeEmailId(index)} className='grow shadow-5 ma1'>X</button>
                            </div>
                        )
                    })
                }

                <br/>
                <button onClick={this.addEmail} className='grow shadow-5'>+</button>
                <br/>
                <br/>
                <button onClick={this.sendInvitation} className='grow shadow-5'>Invite</button>
            </div>
        );
    }
}

export default InviteFriends;