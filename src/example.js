import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Example Hello World Component
 */
class Example extends Component {
    /**
     * get the props
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            title: props.title?props.title:'Hello World',
        };
    }
    /**
     * render the component
     * @return {JSX} the hello world view
     *
     */
    render() {
        return (
            <div className="">{this.state.title}
                <p>It worked!</p>
            </div>
        );
    }
}

Example.propTypes = {
    title: PropTypes.string,
};

export default Example;
