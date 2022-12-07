// import '../assets/dist/css/bootstrap.min.css';
// import '../assets/dist/js/bootstrap.bundle.min';
import img_profile from '../assets/img/profile1.jpg';

function Navbar() {
    return (

        <nav className='navbar navbar-expand-lg navbar-dark bg-brick shadow' id='sideNav'>
            <a href='#page-top' className='navbar-brand js-scroll-trigger'>
                <span className='d-block d-lg-none'>Thanaphong Songsisai</span>
                <span className='d-none d-lg-block'><img src={img_profile} className='img-fluid img-profile rounded-circle mx-auto mb-2'></img></span>
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon'></span></button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href='#about' className='nav-link'>About</a></li>
                    <li className='nav-item'><a href='#experience' className='nav-link'>Experience</a></li>
                    <li className='nav-item'><a href='#education' className='nav-link'>Education</a></li>
                    <li className='nav-item'><a href='#skills' className='nav-link'>Skills</a></li>
                    <li className='nav-item'><a href='#interests' className='nav-link'>Interests</a></li>
                    <li className='nav-item'><a href='#awards' className='nav-link'>Awards</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
