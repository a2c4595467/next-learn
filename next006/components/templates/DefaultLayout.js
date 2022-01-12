/**
 * レイアウトテンプレート
 * 
 * @see https://nextjs-ja-translation-docs.vercel.app/docs/routing/dynamic-routes
 * @see https://stackoverflow.com/questions/60457262/next-js-layout-component-pass-props-to-children
 * @param {*} param0 
 * @returns 
 */

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