import { useRouter } from "next/router";
import { Profile } from "../../components/pages/Profile";


const Member = () => {

    const router = useRouter();
    const {memberNo} = router.query;

    return (
        <>
        <Profile memberNo={memberNo} />
        </>
    );
}

export default Member;