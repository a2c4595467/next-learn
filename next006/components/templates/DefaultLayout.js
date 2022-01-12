

export const DefaultLayout = ({children, ...pageProps}) => {

    return (
        <>
            <div>
                <p>DefaultLayoutです。</p>
                {children}
            </div>
        </>
    );
}