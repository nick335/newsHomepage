import data from "./data"
import FooterArticle from "./footerArticle"
import { nanoid } from "nanoid"

export default function Footer(){
  const articleElements = data.map(each => {
    return <FooterArticle 
                key={ nanoid() }
                idx = { each.idx }
                image = { each.image }
                header = { each.header }
                summary = { each.para }
            />
  })
  return(
    <footer className="mt-7 lg:flex lg:justify-between lg:pb-4 lg:flex-wrap xl:flex-nowrap">
      {articleElements}
    </footer>
  )
}