import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from "../styled/theme/default";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if ( Component.getInitialProps ) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    renderHead() {
        return (
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                />
                <title>NextJS Application</title>
            </Head>
        );
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                {this.renderHead()}
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}