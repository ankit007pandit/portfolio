import "./Contact.scss";

export default function Contact() {
  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
       <div className="section">
        <a href="https://github.com/ankit007pandit" className="dock-item" target={'_blank'} rel="noreferrer">
            <img src="assets/github.svg" alt="github" />
            <label>GitHub</label>
        </a>
        <a href="https://api.whatsapp.com/send?phone=919052873305&text=Hi%20Ankit%2C%20found%20your%20portfolio%20%3A)" className="dock-item" target={'_blank'} rel="noreferrer">
            <img src="assets/whatsapp.svg" alt="github" />
            <label>WhatsApp</label>
        </a>
        <a href="https://www.linkedin.com/in/ankit-dixit-46b20027/" className="dock-item" target={'_blank'} rel="noreferrer">
            <img src="assets/linkedin.svg" alt="github" />
            <label>LinkedIn</label>
        </a>
        <a href="https://www.facebook.com/ankit007pandit/" className="dock-item" target={'_blank'} rel="noreferrer">
            <img src="assets/facebook.svg" alt="github" />
            <label>Facebook</label>
        </a>
        <a href="mailto:ankitdixit821@gmail.com" className="dock-item" rel="noreferrer">
            <img src="assets/email.svg" alt="github" />
            <label>Email</label>
        </a>
        <a href="tel:09052873305" className="dock-item" rel="noreferrer">
            <img src="assets/phone.svg" alt="github" />
            <label>Phone</label>
        </a>
       </div>
      </div>
    </div>
  );
}