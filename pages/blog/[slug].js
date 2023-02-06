import fs from "fs"

const BlogPage = () => {
  return <p>ここはブログ記事詳細ページです。</p>
}

export const getStaticPaths = () => {
  const fileNames = fs.readdirSync("data")
  const paths = fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, "")
      }
    }
  })

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}

export default BlogPage