import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styled/theme/default';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import createStore from "../store";

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if ( Component.getInitialProps ) {
            pageProps = await Component.getInitialProps({ ctx })
        }

        return { pageProps };
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if ( jssStyles ) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));