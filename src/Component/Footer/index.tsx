import A from "./A"
import Li from "./Li"
import FooterTitle from "./Title"

export const Footer = () => {
    return (
        <>
            <div className="container grid grid-cols-4 gap-2 text-white pt-3">

                <div className="col-span-2 lg:col-span-1">
                    <FooterTitle title="ABOUT US" />
                    <p style={{ marginBottom: "0px" }}>Electrician</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus."</p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <FooterTitle title="CONTACT INFO" />

                    <ul style={{padding:"0px"}}>
                        <Li span="Address:" p="123 Street Name, City, England" />
                        <Li span="Phone:" p="(123) 456-7890" />
                        <Li span="Email:" p="mail@example.com" />
                        <Li span="Working Days/Hours:" p="Mon - Sun / 9:00 AM - 8:00 PM" />
                    </ul>

                </div>
                <div className="col-span-2 lg:col-span-1">
                    <FooterTitle title="CUSTOMER SERVICE" />

                    <ul style={{padding:"0px"}}>
                        <Li p="Help & FAQs" />
                        <Li p="Order Tracking" />
                        <Li p="Shipping & Delivery" />
                        <Li p="Orders History" />
                        <Li p="Advanced Search" />
                        <Li p="Corporate Sales" />
                        <Li p="Privacy" />
                    </ul>

                </div>
                <div className="col-span-2 lg:col-span-1">
                    <FooterTitle title="POPPULAR TAGS" />
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <A a="Bag" />
                        <A a="Black" />
                        <A a="Blue" />
                        <A a="clothes" />
                        <A a="Fashion" />
                        <A a="Hub" />
                        <A a="Jean" />
                        <A a="Shirt" />
                        <A a="Sweater" />
                        <A a="Skirt" />
                        <A a="Sport" />
                    </div>
                </div>

            </div>
        </>
    )
}
