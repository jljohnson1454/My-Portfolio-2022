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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo perspiciatis optio sint hic repellat corporis eligendi, a similique accusantium quidem praesentium ex quam perferendis aliquam itaque dolorum et eaque amet!
                </p>
                < p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut obcaecati facere quidem nisi deserunt quam hic, nulla at quia et eos amet molestias pariatur impedit dolores a enim aliquid!
                </p>
                <div className="a-award">
                    <img src={Certificate} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">UT Boot Camp Certificate</h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sed enim. Accusantium nulla architecto numquam assumenda dolorum eaque? Hic eveniet aspernatur fugiat similique delectus excepturi nemo unde repellat incidunt eius!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;