import { SimpleInput } from "../atoms/SimpleInput";
import { SimpleButton } from "../atoms/SimpleButton";

export const SiteTitle = () => {
    return (
        <>
        <div style={{border: "1px solid #FF0", margin: "5px", padding: "2px"}}>
            <p>Molecules内で作ったタイトルです</p>
            <SimpleInput />
            <SimpleButton />
        </div>
        </>
    );
}