import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <div className='header'>
            <div className='innards'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">Sadie Maklouf</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#About">about me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Portfolio">portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Contact">contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{#Contact}">resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Header;