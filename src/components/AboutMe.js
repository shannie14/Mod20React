import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import bitmoji from '../bitmoji.png'

const styles = {
    card: {
        margin: 20,
        marginLeft: 100,
        marginRight: 100,

    },
};

function About() {
    return (
        <div style={styles.card}>
            <div class="row">
                <div class="col-3"><img class="photo" src={bitmoji} alt="photo" /></div>
                <div class="col-9"><p style={{ color: 'black', textAlign: 'left' }}>Sadie is an experienced web-developer with many projects under her belt. After graduating from the Trilogy BootCamp she went on to be a super coder and loves building with React.</p></div>
            </div>
        </div >
    );
}
export default About;