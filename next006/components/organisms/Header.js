import { SiteName } from "../molecules/SiteName";
import { SiteTitle } from "../molecules/SiteTitle";

export const Header = ({children, ...pageProps}) => {
    return (
        <>
        <div style={{border: "1px solid #f00", margin: "5px"}}>
            organismsで作ったヘッダーです
            <SiteTitle />
            <SiteName />
        </div>
        </>
    );
};