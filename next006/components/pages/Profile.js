import { DefaultLayout } from "../templates/DefaultLayout";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

//export const Profile = (props) => {
export const Profile = ({children, ...pageProps}) => {
        const {memberNo} = pageProps;
console.log({name:"Profile.js", memberNo: memberNo});

    return(
        <>
        <DefaultLayout>
            <Header></Header>
            <div>{memberNo}のプロフィールページ</div>
            <Footer />
        </DefaultLayout>
        </>
    );
}