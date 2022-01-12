
export const SimpleButton = ({...pageProps}) => {
    const {memberNo} = pageProps;

    return (
        <>
            <button>atomsのボタン({memberNo})</button>
        </>
    );
}


