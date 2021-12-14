import React from 'react'
import LogoBlack from 'images/logo-black.png';

const Header = props => {
    return (
        <header className="site-header mo-left header-full header">
  <div className="sticky-header main-bar-wraper navbar-expand-lg">
    <div className="main-bar clearfix ">
      <div className="container-fluid">
        <div className="logo-header mostion">
          <a href="index.html"><img src={LogoBlack} alt = "logo" /></a>
        </div>
        <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <div className="extra-nav">
          <div className="extra-cell">
            <ul>
              <li className="search-btn">
                <a id="quik-search-btn"><i className="ti-search m-r10" /><span>Search</span></a>
              </li>
              <li>
                <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn secondry radius-no">Subscribe</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="dlab-quik-search">
          <form action="#">
            <input name="search" defaultValue type="text" className="form-control" placeholder="Search..." />
            <span id="quik-search"><i className="ti-search" /></span>
          </form>
          <span className="search-remove" id="quik-search-remove"><i className="ti-close" /></span>
        </div>
        <div className="header-nav navbar-collapse collapse justify-content-left" id="navbarNavDropdown">
          <div className="logo-header">
            <a href="index.html"><img src="images/logo.png" alt /></a>
          </div>
          <ul className="nav navbar-nav">	
            <li className="active">
              <a href="javascript:void(0);">Home<i className="fa fa-chevron-down" /></a>
              <ul className="sub-menu">
                <li><a href="index.html">Home 01</a></li>
                <li><a href="index-2.html">Home 02</a></li>
                <li><a href="index-3.html">Home 03</a></li>
                <li><a href="index-4.html">Home 04</a></li>
                <li><a href="index-5.html">Home 05</a></li>
              </ul>	
            </li>
            <li>
              <a href="javascript:void(0);">Post Layout<i className="fa fa-chevron-down" /></a>
              <ul className="sub-menu">
                <li><a href="post-standart.html">Post Standart</a></li>
                <li><a href="post-left-sidebar.html">Post Left Sidebar</a></li>
                <li><a href="post-header-image.html">Post Header Image</a></li>
                <li><a href="post-slide-show.html">Post Slide Show</a></li>
                <li><a href="post-side-image.html">Post Side Image</a></li>
                <li><a href="post-gallery.html">Post Gallery</a></li>
                <li><a href="post-gallery-alternative.html">Post Gallery Alt</a></li>
                <li><a href="post-link.html">Post Link</a></li>
                <li><a href="post-audio.html">Post Audio</a></li>
                <li><a href="post-video.html">Post Video</a></li>
                <li><a href="post-pagination.html">Post With Pagination</a></li>
                <li><a href="post-open-gutenberg.html">Post Open Gutenberg</a></li>
              </ul>
            </li>
            <li className="has-mega-menu post-slider life-style">
              <a href="javascript:void(0);">Category<i className="fa fa-chevron-down" /></a>
              <div className="mega-menu">
                <div className="life-style-bx">
                  <div className="life-style-tabs">
                    <ul>
                      <li><a href="javascript:void(0);" id="st-all" className="post-tabs active">All</a></li>
                      <li><a href="javascript:void(0);" id="st-beauty" className="post-tabs">Beauty</a></li>
                      <li><a href="javascript:void(0);" id="st-lifestyle" className="post-tabs">Lifestyle</a></li>
                      <li><a href="javascript:void(0);" id="st-fashion" className="post-tabs">Fashion</a></li>
                      <li><a href="javascript:void(0);" id="st-travel" className="post-tabs">Travel</a></li>
                    </ul>
                  </div>
                  <div className="life-style-post text-center">
                    <div id="all" className="life-style-post-bx show">
                      <div className="header-blog-carousel owl-carousel owl-btn-center-lr">
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-standart.html"><img src="images/category/pic1.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-standart.html">Ready or Not, the Return into of the Hobo Bag Is Nigh</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-left-sidebar.html"><img src="images/category/pic2.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-left-sidebar.html">This Week on Instagram, Celebri ties Went All-In on Prints</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-full-width.html"><img src="images/category/pic3.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title">
                                <h5 className="post-title"><a href="post-header-image.html">Anniversary With An Exhibition At Dallas Contemporary</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-slide-show.html"><img src="images/category/pic4.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-slide-show.html">La Dolce Vita Meets Old School on Beach Style </a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="beauty" className="life-style-post-bx">
                      <div className="header-blog-carousel owl-carousel owl-btn-center-lr">
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-standart.html"><img src="images/category/pic1.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-standart.html">Ready or Not, the Return into of the Hobo Bag Is Nigh</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-left-sidebar.html"><img src="images/category/pic2.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-left-sidebar.html">This Week on Instagram, Celebri ties Went All-In on Prints</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-full-width.html"><img src="images/category/pic3.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title">
                                <h5 className="post-title"><a href="post-header-image.html">Anniversary With An Exhibition At Dallas Contemporary</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-slide-show.html"><img src="images/category/pic4.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-slide-show.html">La Dolce Vita Meets Old School on Beach Style </a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="lifestyle" className="life-style-post-bx">
                      <div className="header-blog-carousel owl-carousel owl-btn-center-lr">
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-standart.html"><img src="images/category/pic1.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-standart.html">Ready or Not, the Return into of the Hobo Bag Is Nigh</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-left-sidebar.html"><img src="images/category/pic2.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-left-sidebar.html">This Week on Instagram, Celebri ties Went All-In on Prints</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-full-width.html"><img src="images/category/pic3.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title">
                                <h5 className="post-title"><a href="post-header-image.html">Anniversary With An Exhibition At Dallas Contemporary</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-slide-show.html"><img src="images/category/pic4.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-slide-show.html">La Dolce Vita Meets Old School on Beach Style </a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="fashion" className="life-style-post-bx">
                      <div className="header-blog-carousel owl-carousel owl-btn-center-lr">
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-standart.html"><img src="images/category/pic1.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-standart.html">Ready or Not, the Return into of the Hobo Bag Is Nigh</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-left-sidebar.html"><img src="images/category/pic2.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-left-sidebar.html">This Week on Instagram, Celebri ties Went All-In on Prints</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-full-width.html"><img src="images/category/pic3.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title">
                                <h5 className="post-title"><a href="post-header-image.html">Anniversary With An Exhibition At Dallas Contemporary</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-slide-show.html"><img src="images/category/pic4.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-slide-show.html">La Dolce Vita Meets Old School on Beach Style </a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="travel" className="life-style-post-bx">
                      <div className="header-blog-carousel owl-carousel owl-btn-center-lr">
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-standart.html"><img src="images/category/pic1.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-standart.html">Ready or Not, the Return into of the Hobo Bag Is Nigh</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-left-sidebar.html"><img src="images/category/pic2.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-left-sidebar.html">This Week on Instagram, Celebri ties Went All-In on Prints</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-full-width.html"><img src="images/category/pic3.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title">
                                <h5 className="post-title"><a href="post-header-image.html">Anniversary With An Exhibition At Dallas Contemporary</a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="blog-post blog-sm">
                            <div className="dlab-post-media">
                              <a href="post-slide-show.html"><img src="images/category/pic4.jpg" alt /></a>
                            </div>
                            <div className="dlab-post-info">
                              <div className="dlab-post-title ">
                                <h5 className="post-title"><a href="post-slide-show.html">La Dolce Vita Meets Old School on Beach Style </a></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0);">Shop<i className="fa fa-chevron-down" /></a>
              <ul className="sub-menu">
                <li><a href="shop-product.html">Product</a></li>
                <li><a href="shop-product-details.html">Product Details</a></li>
                <li><a href="shop-cart.html">Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">Pages<i className="fa fa-chevron-down" /></a>
              <ul className="sub-menu">
                <li><a href="about-me.html">About</a></li>
                <li><a href="archive.html">Archive</a></li>
                <li><a href="author.html">Author</a></li>
                <li><a href="category.html">Category</a></li>
                <li><a href="tags.html">Tags</a></li>
                <li><a href="search-results.html">Search results</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a href="sitedown.html">Maintenance</a></li>
                <li><a href="error-404.html">Error 404</a></li>
              </ul>
            </li>
            <li><a href="contact-me.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

    )
}

Header.propTypes = {

}

export default Header
