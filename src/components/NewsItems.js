import React from 'react'

const NewsItems = (props) => {
        let { title, description, imageurl, newsurl, author, date } = props;
        return (
            <div>
                <div className="card" style={{ background: '#444', color: 'white' }}>
                    {imageurl ? (
                        <img src={imageurl} className="card-img-top" alt="News" />
                    ) : (
                        <div className="card-img-top" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '180px', backgroundColor: '#444', color: '#fff' }}>
                            <h1 style={{ textDecoration: 'none', color: 'inherit' }}>World<span style={{ color: '#00d1cd' }}>Wrap</span></h1>
                            <span style={{ fontSize: '10px', textAlign: 'center' }}>Unwrapping
                                <span style={{ color: '#00d1cd' }}> the</span> Truth,
                                <span style={{ color: '#00d1cd' }}> One</span> Story
                                <span style={{ color: '#00d1cd' }}> at</span> a
                                <span style={{ color: '#00d1cd' }}> Time</span>
                            </span>
                        </div>

                    )}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm" style={{ background: '#00d1cd', color: 'white' }}>Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems
