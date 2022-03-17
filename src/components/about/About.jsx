import "./about.css";
import Certificate from "../../img/certificate.jpg";
import Ganon from "../../img/ganon.jpeg";

const About = () => {
    return (
        <div className="a" >
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                   <img
                        src={Ganon}
                        alt=""
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                "You step into the Road, and if you don't keep your feet, there is no knowing where you might be swept off to"
                </p>
                < p className="a-desc">
                    JRR Tolkien could not have been more right. I procrastinated in college
                    that I was nowhere near good enough to be a programmer, let alone have the self-discipline to
                    upkeep the necessary skills. Flash forward ten years later, having earned a Bachelor's Degree in English and held multiple jobs, I just spent six months
                    learning new technologies and languages, bettering not only myself but my resolve. If you need a new website, debugging, or updates to existing applications, I'm here to help!
                    All because I took a step off the road. 
                </p>
                <div className="a-award">
                    <img src={Certificate} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">UT Boot Camp Certificate</h4>
                        <p className="a-award-desc">
                            Earned from an intensive six month program at the University of Texas in Austin, TX
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;