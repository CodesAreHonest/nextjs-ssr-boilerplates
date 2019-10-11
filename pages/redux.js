import React from 'react'
import { connect } from 'react-redux'

import { startClock, tickClock } from '../ducks/sample/actions'
import Page from '../components/page'

class Other extends React.Component {
    static async getInitialProps(props) {
        const { store, isServer } = props.ctx
        store.dispatch(tickClock(isServer))
        return { isServer }
    }

    componentDidMount() {
        this.props.startClock();
    }

    render() {
        return <Page title='Other Page' linkTo='/' NavigateTo='Index Page'/>
    }
}

const mapDispatchToProps = dispatch => ({
    startClock: () =>
        dispatch(startClock())
});

export default connect(null, mapDispatchToProps)(Other)
