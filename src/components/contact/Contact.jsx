import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import LinkedIn from "../../img/linkedin.png"
import Resume from "../../img/resume.png"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vu2drx8', 'template_jfjz1oa', formRef.current, '2RBLRIRvxxs3WoV_b')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    
        
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
                <div className="c-info-item">
                    <img
                    src={Resume}
                    alt=""
                    className="c-icon"
                    />
                    https://tinyurl.com/bdfv3ypr
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
                 {done && "  Thank you! I'll be reaching out shortly!"}
             </form>
        </div>
        </div>
        </div>
  )
}

export default Contact