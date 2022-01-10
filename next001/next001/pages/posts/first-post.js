import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import {Layout} from "../../components/layout";

export default function FirstPost() {
    return (
        <>
            {/*
                <h1>First Post</h1>
                <div>ページベースのルーティング例</div>
                <div style={{border:"1px solid #a9a9a9",padding: "10px"}}><pre>
                pagesディレクトリに「posts」ディレクトリを新設し、その中に「first-post.js」を作成。
                ブラウザから「http://localhost:3000/posts/first-post」でアクセスすると、表示される。
                    </pre>
                </div>
                <a href="/">戻る</a>
            */}
            <Layout>
            <Head>
                    <title>ページベースのルーティング例</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload" // スクリプトのレイジーロードを行う
                    onLoad={() => {
                        console.log(`script loaded correctly, window.FB has been populated`);
                    }
                    }
                />
                <h1>First Posts</h1>
                <p>ページベースのルーティング例</p>
                <div style={{border:"1px solid #a9a9a9",padding: "10px;",wordWrap:"break-word;"}}>
                    <pre style={{whiteSpace: "pre-wrap"}}>
                pagesディレクトリに「posts」ディレクトリを新設し、その中に「first-post.js」を作成。
                ブラウザから「http://localhost:3000/posts/first-post」でアクセスすると、表示される。
                    </pre>
                </div>
                <h2>
                    <Link href="/"><a>戻る</a></Link>
                </h2>
            </Layout>
        </>
    );
}