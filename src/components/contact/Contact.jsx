import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import LinkedIn from "../../img/linkedin.png"
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's Discuss Your Project</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img
                    src={Phone}
                    alt=""
                    className="c-icon"
                    />
                    +1 512 586 0027
                </div>
                <div className="c-info-item">
                    <img
                    src={Email}
                    alt=""
                    className="c-icon"
                    />
                    jljohnson1454@gmail.com
                </div>
                <div className="c-info-item">
                    <img
                    src={Address}
                    alt=""
                    className="c-icon"
                    />
                    Austin, TX
                </div>
                <div className="c-info-item">
                    <img
                    src={LinkedIn}
                    alt=""
                    className="c-icon"
                    />
                    https://www.linkedin.com/in/jacobleejohnson/
                </div>

            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>What's your story?</b> Get in touch. Always freelancing so there's plenty of work to do!
             </p>
             <form ref={formRef} onSubmit={handleSubmit}>
                 <input type="text" placeholder="Name" name="user_name" />
                 <input type="text" placeholder="Subject" name="user_subject" />
                 <input type="text" placeholder="Email" name="user_email" />
                 <textarea rows="5" placeholder="Message" name="message" />
                 <button>Submit</button>
             </form>
        </div>
        </div>
        </div>
  )
}

export default Contact