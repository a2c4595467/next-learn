import "../styles/global.css";

//export const App = (props) => {
// ↑この記述だと、以下のエラーとなる
//Server Error
// Error: The default export is not a React Component in page: "/_app"
// This error happened while generating the page. Any console logs will be displayed in the terminal window.

export default function App(props) {
        const {Component, pageProps} = props;
    return <Component {...pageProps} />
};