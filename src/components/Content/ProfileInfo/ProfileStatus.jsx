import React from 'react'



class ProfileStatus extends React.Component {
    state = {
    editMode: false,
    text: 'Hi, guys'}

activatedEditmode() {
    this.setState ({editMode: true})
    }
deactivatedEditMode() {
    this.setState ({editMode: false})
    }

    render () {
    return (
    <div>
{!this.state.editMode &&
    <div OnDoubleClick = {this.activatedEditmode}> {this.props.status} </div>}
{this.state.editMode &&
   <input autoFocus = {true} onBlur = {this.deactivatedEditMode} 
   value = {this.props.status}/> }
    </div>
    )
}
}

export default ProfileStatus

