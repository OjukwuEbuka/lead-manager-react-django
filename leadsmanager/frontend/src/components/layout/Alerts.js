import React, {Component, Fragment} from 'react';
import {withAlert} from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

     componentDidUpdate(prevProps){
         const {error, alert, message} = this.props;
         if(error !== prevProps.error){
             if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
             if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
             if(error.msg.message) alert.error(`Message: ${error.msg.email.join()}`)
            //  alert.error("There is an error");            
         }
         
         if(message !== prevProps.message){
            if(message.deleteLead) alert.success(`Message: ${message.deleteLead}`)
            if(message.addLead) alert.success(`Message: ${message.addLead}`)
         }
     }

     render(){
         return <Fragment />
     }
}

const mapStateToProps = ({errorReducer, messageReducer}) => ({
    error: errorReducer,
    message: messageReducer
});
// const mapStateToProps = state => ({
//     error: state.errorReducer
// });

export default connect(mapStateToProps)(withAlert()(Alerts))