import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';


const onButtonClick = () => {
    fetch('sadie.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'sadie.pdf';
            alink.click();
        })
    })
}



function Contact() {
    return (

        <div class="row justify-content-md-center">
            <div class="col-md-auto"> <h4>CONTACT SADIE</h4></div>
            <div class="col-md-auto"><form className="form">
                <label className="label">Name:  <input type="text" name="name" /></label>
                <label className="label">Email:  <input type="text" name="email" /></label>
                <label className="label">Message:  <input type="text" name="message" /></label>
                <input type="submit" className="submit" value="Submit" />
            </form></div>
            <button className="resume" onClick={onButtonClick}>
                Download Resume
            </button>
        </div>
    );


}
export default Contact;