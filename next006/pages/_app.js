import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// ページ表示の最初にpropsがundefinedにならないようにする
// @see : https://zenn.dev/sora_kumo/articles/e86bbf0291d4a7
MyApp.getInitialProps = async () => ({pageProps: {}});

export default MyApp
