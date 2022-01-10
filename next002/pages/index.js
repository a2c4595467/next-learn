import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps(context) {
  const allPostsData = getSortedPostsData();

  // オブジェクト型で返却する。
  return {
    props: {
      allPostsData
    }
  }
}

// for ServerSide-Rendering
// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData();

//   // オブジェクト型で返却する。
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }


// allPostsDataプロップスを取得した状態でレンダリング
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.js を勉強中です。</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* allPostsDataプロップスを利用して表示する */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>ブログ</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}
