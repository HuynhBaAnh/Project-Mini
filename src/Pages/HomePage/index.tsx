import Slide from '../../Component/Header/Slide'
import Content from '../../Component/Content'

const HomePage = () => {
    return (
        <>
            <div className="navbar" style={{ paddingTop: "0px" }}>
                <Slide />
            </div>

            <div className="content m-2">
                <Content />
            </div>

        </>
    )
}

export default HomePage