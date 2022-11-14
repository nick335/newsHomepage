import data from "./data"
import FooterArticle from "./footerArticle"
import { nanoid } from "nanoid"

export default function Footer(props){
  const articleElements = data.map((each, y) => {
    return <FooterArticle 
                key={ nanoid() }
                idx = { each.idx }
                image = { each.image }
                header = { each.header }
                summary = { each.para }
                imgdivRef = { props.imgdiv[y] }
                contentdivRef = {props.contentdiv[y] }
                footeridxRef = { props.footeridxs[y] }
                footerheaderRef = { props.footerheaders[y] }
                footerparaRef = { props.footerparas[y] }
            />
  })
  return(
    <footer className="mt-7 lg:flex lg:justify-between lg:pb-4 lg:flex-wrap xl:flex-nowrap">
      {articleElements}
    </footer>
  )
}