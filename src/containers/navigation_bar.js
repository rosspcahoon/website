import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectTab } from '../actions/index';
import { bindActionCreators } from 'redux';

class NavigationBar extends Component {
    classNameSelector(tab) {
        if (tab.name === this.props.activeTab) {
            return "btn nav-btn-sel pull-xs-right";
        } else {
            return "btn nav-btn pull-xs-right";
        }
    }

    renderButtons(){
        return  this.props.tabs.map((tab) => {
            return (
                    <Link
                        className = {this.classNameSelector(tab)}
                        onClick={() => this.props.selectTab(tab.name)}
                        to = {tab.url} >
                        {tab.name}
                    </Link>
            );
        });
    }

    render() {
        return (
            <div className="navigation-bar">
                    <div className=" title pull-left">
                        ROSS CAHOON
                    </div>
                    {this.renderButtons()}

             </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeTab: state.activeTab,
        tabs: state.tabs
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectTab: selectTab }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);