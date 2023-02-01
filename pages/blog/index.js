import fs from "fs"
import path from "path"

const BlogListPage = () => {
  return <p>ここはブログ記事一覧ページです</p>
}

export const getStaticProps = () => {
  const dataDir = "data"
  const fileNames = fs.readdirSync(dataDir)
  const posts = fileNames.map(fileName => {
    return path.join(dataDir, fileName)
  })
  console.log(posts)

  return {
    props: {}
  }
}

export default BlogListPage