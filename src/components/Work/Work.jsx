import "./Work.css"
import video1 from "../../assets/pictures/video.mp4"
const Work = () => {
    return (
        <div className="work" id="Work">
            <div className="overlay-work"></div>
            <div className="work-container" style={{ textAlign: "center" }}>
                <h1>
                    Ish Jarayoni
                </h1>
            </div>

            <div className="work-container iframe">

                <video
                    className="video"
                    controls
                    preload
                    src={video1} >
                </video>

            </div>



        </div>
    )
}

export default Work