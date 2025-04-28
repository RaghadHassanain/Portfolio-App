import LineImage from '../../assets/Line.png';
function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <ul>
          <li>Email: raghadnawaf009@hotmail.com</li>
          <li>Phone: +966551982506</li>
          <li>Address: Riyadh, Saudi Arabia </li>
        </ul>
      </div>
       <img src={LineImage} alt="Decorative Line" className="line-image" />
    </section>
  );
}

export default Contact;