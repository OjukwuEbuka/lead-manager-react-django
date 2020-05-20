import React, {Component, Fragment} from 'react';
import {withAlert} from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
    }

     componentDidUpdate(prevProps){
         const {error, alert} = this.props;
         if(error !== prevProps.error){
             if(error.msg.name) alert.error('Name is required')
             if(error.msg.email) alert.error('Email is required')
            //  alert.error("There is an error");            
         }
     }

     render(){
         return <Fragment />
     }
}

const mapStateToProps = state => ({
    error: state.errorReducer
});

export default connect(mapStateToProps)(withAlert()(Alerts))