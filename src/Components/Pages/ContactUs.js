import phoneImage from '../../Images/phone.jpg'
import webAdd from '../../Images/webadd.png'
import postadd from '../../Images/postaladd.jpg'
function ContactUs() {
    return ( 
        <div className="bg-white rounded shadow mx-auto" >
            <div>
                <h1 className="align-text-center">Contact Us</h1>
            </div>
            <div className="text-center">
                <p>Reach out to us with any questions,concerns, or inquiries.</p>
            </div>
            

            <div className="d-flex flex-column justiy-content-center align-items-center ">

            <div className="d-flex flex-row col-3 shadow p-3 mb-5 bg-white rounded text-center">
                <img style={{height:"20px",width:"20px"}}src={phoneImage}></img>
                <h4>+132-254-265-452</h4>
            </div>
            <div className="d-flex flex-row col-3 shadow p-3 mb-5 bg-white rounded">
            <img style={{height:"40px",width:"40px"}}src={webAdd}></img>
            <h4>www.emart.com</h4>
            </div>
            <div className="d-flex flex-row col-3 shadow p-3 mb-5 bg-white rounded">
            <img style={{height:"30px",width:"30px"}}src={postadd}></img>
            <h4>123 Street56,ABCD city</h4>
            </div>
            
            </div>

            <div>

            </div>
        </div>
     );
}

export default ContactUs;