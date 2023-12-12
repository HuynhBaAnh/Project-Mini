import ContentItem from "../Content_Item"
import Image from "../Image"

function HomeProduct({ img, content, Item }: { img: string, content:string, Item:string }) {
    return (
        <>
            <div>
                <Image img={img} />
            </div>

            <div >
                <a href="" style={{textDecoration:"none", color:"black"}}><strong>{content}</strong></a>
                <ContentItem Item={Item}/>
                <a href="" style={{textDecoration:"none", color:"black", fontWeight:"500"}}>Read more</a>
            </div>


        </>
    )
}
export default HomeProduct