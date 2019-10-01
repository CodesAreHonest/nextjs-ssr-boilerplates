import React, { Component } from "react";
import { connect } from "react-redux";
import { testOperations } from "../redux/ducks/test";

class Test extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.doSomething();
    }

    render() {
        return (
            <div>Test {this.props.value}</div>
        )
    }
}

const mapStateToProps = ({test}) => {

    return {
        value: test.value
    }

};

const mapDispatchToProps = {
    ...testOperations
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);