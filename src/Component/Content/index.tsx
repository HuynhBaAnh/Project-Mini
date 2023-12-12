import ContentItem from "./Content_Item"
import MyForm from "./Form";
import HomeProduct from "./HomeProduct";
import Image from "./Image"
import ProductList from "./ProductList";
import Strong from "./Strong"
import TitleContent from "./Title"
import { FaPhoneAlt } from "react-icons/fa";


function Content() {
    return (
        <>
            <div className="container grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 sm:order-last md:order-first">
                    <Image img="public/img/category-img-1.jpg" />
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <h3 className="text-orange-600">Our Services</h3>
                    <TitleContent title="Responsive & Professional" />
                    <ContentItem Item="We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on." />
                    <Strong name="Call us today" />
                    <Strong icon={<FaPhoneAlt />} name=" 1900-111000" className="strong_organ" />
                    <ContentItem Item="We're available 24/7, 365 days a year." />
                </div>
            </div>

            <div className="container">
                <TitleContent title="What We Offer" />
                <div className="grid grid-cols-6 gap-2 ">

                    <div className="sm:col-span-3 col-span-3 md:col-span-2">
                        <HomeProduct img="public/img/lighting-upgrades-thumb-G3.jpg" content="Lighting Upgrades" Item="Electrical panel maintenance, therefore, should be part of your regular routine." />
                    </div>
                    <div className="sm:col-span-3 col-span-3 md:col-span-2">
                        <HomeProduct img="public/img/electrical-repairs-thumb-G1.jpg" content="Electrical repairs" Item="Electrical repairs should always be handled by a professional electrician" />
                    </div>
                    <div className="sm:col-span-3 col-span-3 md:col-span-2">
                        <HomeProduct img="public/img/surge-protection-thumb-G4.jpg" content="Surge Protection" Item="An electrical surge can happen for a number of reasons, including lightning strikes." />
                    </div>

                </div>
            </div>

            <div className="container">
                <TitleContent title="Danh sách sản phẩm" />
                <ProductList/>
            </div>

            <div className="container">
                <TitleContent title="Subscribe to Our Newsletter" />
                <ContentItem Item="Do not want to miss news, updates, note and any offer on our products, then please subscriber to our mailling list." />
                <MyForm />
            </div>


        </>
    )
}
export default Content