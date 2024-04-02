import React from 'react';
import "./Blog.css"; 

const BlogSection = () => {
    return (
        <section className="section gray-bg" id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2>On the blog</h2>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                <a href="#">
                                    <img src="https://ohlolly.com/cdn/shop/articles/Screenshot_2024-02-12_at_8.54.40_PM.png?v=1707789539&width=600" title="" alt=""width={"350px"}height={'280px'} />
                                </a>
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">The Buzz About Face Sculpting</a></h5>
                                <p>Type in the words “gua sha” on TikTok, and videos of people’s transformative face lifts and glowing skin flood the screen. </p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                <a href="#">
                                <img src="https://ohlolly.com/cdn/shop/articles/Simplify-Routine-Anna-Still-IG.jpg?v=1701295566&width=600" title="" alt=""width={"350px"}height={'280px'} />
                                </a>
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">Habit Stacking: The Why, What, & How to Make Skin Care Stick</a></h5>
                                <p>. It’s that time of year again when we all make and break habits over bubbling champagne</p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                <a href="#">
                                <img src="https://ohlolly.com/cdn/shop/articles/Ohlolly_Manyo-Our-Vegan-Heartleaf-Cica-Toner-3_975x_e13adf7a-0949-481a-b739-e0b5ab1a3d9e.webp?v=1692749401&width=600" title="" alt=""width={"350px"}height={'280px'} />
                                </a>
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">The Best Skincare Routine for Acne</a></h5>
                                <p>Zits. Pimples. Blemishes. Spots. Acne goes by numerous names and manifests itself in many different ways med bumps.</p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
