import React from 'react'
import { Link } from 'react-router-dom';

const About = (props) => {
        return (
            <>
                <div>
                    <div className="container my-2" style={{ fontFamily: "adamina" }}>
                        <h1 className="text-center" style={{ margin: "30px" }}>
                            {props.heading}
                        </h1>
                        <p className='card-body rounded' style={{ backgroundColor: "transparent", fontSize: '22px', border: 'solid #444444 1px' }}>
                            Welcome to <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <strong>WorldWrap</strong></Link>, your ultimate destination for comprehensive and
                            reliable news from around the globe. Our mission is to keep you informed,
                            engaged, and connected with the world by delivering the latest and most
                            relevant stories across various categories.</p>

                        <h1 className="text-center" style={{ margin: "20px" }}>
                            Our Vision
                        </h1>
                        <p className='card-body rounded' style={{ backgroundColor: "transparent", fontSize: '22px', border: 'solid #444444 1px' }}>
                            At <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <strong>WorldWrap</strong></Link>, we envision a world where information is
                            accessible, accurate, and impactful. We strive to provide our readers with
                            insightful news that not only informs but also inspires and empowers them
                            to make informed decisions.</p>

                        <h1 className="text-center" style={{ margin: "20px" }}>
                            Our Categories
                        </h1>
                        <div className="accordian-rounded" id="accordionExample" style={{ backgroundColor: "transparent", border: 'solid #444444 1px' }}>
                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Business</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Stay updated with the latest business trends, market insights, and economic developments.
                                        Our business section covers everything from corporate news to financial analyses, helping
                                        you stay ahead in the business world.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>Entertainment</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Dive into the world of entertainment with news on movies, music, celebrities, and more.
                                        We bring you the latest in pop culture, events, and exclusive interviews with your
                                        favorite stars.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>General</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Our general news section covers a wide range of topics, including politics, world events,
                                        and social issues. We aim to provide balanced and unbiased reporting to keep you informed
                                        about the happenings around the world.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>Health</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Get the latest health news, medical research, and wellness tips. Our health section focuses
                                        on providing valuable information to help you lead a healthier and happier life.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <strong>Science</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Explore the fascinating world of science with our in-depth articles on the latest
                                        discoveries, technological advancements, and scientific breakthroughs. We make complex
                                        topics accessible and engaging for our readers.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <strong>Sports</strong>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Follow your favorite sports and teams with our comprehensive sports coverage.
                                        From live scores to in-depth analyses, we bring you closer to the action in the
                                        world of sports.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ background: 'transparent' }}>
                                <h2 className="accordion-header" style={{ background: 'transparent' }}>
                                    <button style={{ background: 'transparent', fontSize: '20px', color: 'black' }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <strong>Technology</strong>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{ background: 'transparent', fontSize: '18px' }}>
                                        Stay ahead in the fast-paced world of technology with our tech news and reviews.
                                        Whether it's the latest gadgets, software updates, or tech industry news,
                                        we've got you covered.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-center" style={{ margin: "20px" }}>
                            Our Commitment
                        </h1>
                        <p className='card-body rounded' style={{ backgroundColor: "transparent", fontSize: '22px', border: 'solid #444444 1px' }}>
                            At <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <strong>WorldWrap</strong></Link>, we are committed to journalistic integrity, accuracy, and transparency.
                            Our dedicated team of writers and editors work tirelessly to bring you news that you can trust.
                            We believe in the power of information and its ability to bring about positive change in society.</p>

                        <h1 className="text-center" style={{ margin: "20px" }}>
                            Join Us
                        </h1>
                        <p className='card-body rounded' style={{ backgroundColor: "transparent", fontSize: '22px', border: 'solid #444444 1px' }}>
                            Join our community of informed readers and stay connected with the world. Follow us on social media,
                            subscribe to our newsletters, and never miss an update from
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><strong> WorldWrap</strong></Link>.</p>
                    </div>
                </div>
            </>
        )
}

export default About
