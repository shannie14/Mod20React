import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

const styles = {
    card: {
        margin: 20,
        marginLeft: 100,
        marginRight: 100,

    },
};

function Portfolio() {
    return (
        <div style={styles.card}>
            <h2>Portfolio</h2>
            <div class="row">
                <div class="col-md-4 col-sm-6" style={{ border: '1px solid rgba(0, 0, 0, 0.9)' }}>
                    <a href="https://shannongolf.herokuapp.com/">APP 1 on Heroku</a><br></br>
                    <a href="https://github.com/shannie14/Mod20React">GitHub for App 1</a>

                </div>
                <div class="col-md-4 col-sm-6" style={{ border: '1px solid rgba(0, 0, 0, 0.9)' }}>
                    <a href="https://shannongolf.herokuapp.com/">APP 2 on Heroku</a><br></br>
                    <a href="https://github.com/shannie14/Mod20React">GitHub for App 2</a>
                </div>
                <div class="col-md-4 col-sm-6" style={{ border: '1px solid rgba(0, 0, 0, 0.9)' }}>
                    <a href="https://shannongolf.herokuapp.com/">APP 3 on Heroku</a><br></br>
                    <a href="https://github.com/shannie14/Mod20React">GitHub for App 3</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6" style={{ border: '1px solid rgba(0, 0, 0, 0.9)' }}>
                    <a href="https://shannongolf.herokuapp.com/">APP 4 on Heroku</a><br></br>
                    <a href="https://github.com/shannie14/Mod20React">GitHub for App 4</a>
                </div>
                <div class="col-md-4 col-sm-6" style={{ border: '1px solid rgba(0, 0, 0, 0.9)' }}>
                    <a href="https://shannongolf.herokuapp.com/">APP 5 on Heroku</a><br></br>
                    <a href="https://github.com/shannie14/Mod20React">GitHub for App 5</a>
                </div>
                <div class="col-md-4 col-sm-6" style={{ border: '1px solid rgba(0, 0, 0, 0.9)' }}>
                    <a href="https://shannongolf.herokuapp.com/">APP 6 on Heroku</a><br></br>
                    <a href="https://github.com/shannie14/Mod20React">GitHub for App 6</a>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;