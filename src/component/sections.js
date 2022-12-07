


function Sections() {
    return (
        <div className='container-fluid p-0'>

            <section className='resume-section' id='about'>
                <div className='resume-section-content'>
                    <h1 className='mb-0'>Thanaphong <span className='text-brick'>Songsisai</span></h1>
                    <div className='subheading mb-5'>
                        74 Municipal Street 2 · Klang Wiang, CO 55110 · (+66) 094-713-1582 ·<a
                            href="mailto:thanaphong16454@gmail.com">thanaphong16454@gmail.com</a>
                    </div>
                    <p className='lead mb-5'>I am experienced in leveraging agile frameworks to provide a robust synopsis for
                        high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further
                        the overall value proposition.</p>
                    <div className='social-icons'>
                        <a className='social-icon' href='/'><i className='fab fa-linkedin-in'></i></a>
                        <a className='social-icon' href='/'><i className='fab fa-github'></i></a>
                        <a className='social-icon' href='/'><i className='fab fa-twitter'></i></a>
                        <a className='social-icon' href='/'><i className='fab fa-facebook'></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id='experience'>
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Web Developer</h3>
                            <div className="subheading mb-3">Intelitec Solutions</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end
                                of the day, going forward, a new normal that has evolved from generation X is on the
                                runway heading towards a streamlined cloud solution. User generated content in real-time
                                will have multiple touchpoints for offshoring.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sections;