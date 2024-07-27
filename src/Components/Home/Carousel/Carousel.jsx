import './Carousel.css'

const Carousel = () => {
    return (
        <div className='carousel-container'>
            

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active" >
      <img className="d-block w-100 carousel-img"  src="carousel1.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-img"  src="carousel2.png" alt="Second slide"/>
    </div>
    {/* <div className="carousel-item">
      <img className="d-block w-100 carousel-img"  src="https://img.freepik.com/free-vector/realistic-beauty-sale-ad-template_52683-20023.jpg?ga=GA1.1.490700035.1716958785&semt=ais_hybrid" alt="Third slide"/>
    </div> */}

  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    );
};

export default Carousel;