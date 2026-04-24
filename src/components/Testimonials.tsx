// import { Star, Quote } from "lucide-react";
import testimonialsImage from "@/assets/testimonials-map-hq.png";
// const Testimonials = ({ testimonials }) => {


//   return (
//     <section id="testimonials" className="py-20" style={{ backgroundImage: `url(${testimonialsImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Client Testimonials
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Hear from leaders who have transformed their organizations with our HR expertise.
//             </p>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={index}
//                 className="bg-white/90 border-b border-primary/10 rounded-xl p-8 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 relative backdrop-blur-[3px]"
//               > 
//                 {/* Quote Icon */}
//                 <div className="absolute -top-4 left-8">
//                   <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
//                     <Quote className="w-4 h-4 text-white" />
//                   </div>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center space-x-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 italic h-[55%]">
//                   "{testimonial.quote}"
//                 </blockquote>

//                 {/* Result Badge */}
//                 <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6 inline-block">
//                   ✓ {testimonial.result}
//                 </div>

//                 {/* Author */}
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
//                     <img src={testimonial?.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-foreground">{testimonial.name}</div>
//                     <div className="text-sm text-muted-foreground">
//                       {testimonial.title}, {testimonial.company}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Stats Section */}
//           <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary mb-2">98%</div>
//               <div className="text-muted-foreground">Client Satisfaction</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary mb-2">500+</div>
//               <div className="text-muted-foreground">Successful Placements</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary mb-2">25</div>
//               <div className="text-muted-foreground">Countries Served</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary mb-2">48hrs</div>
//               <div className="text-muted-foreground">Response Time</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import { User as PersonIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
  result?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {

  const isMobileTablet = useMediaQuery({ maxWidth: 768 });
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: isMobileTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 600,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  return (
    // <section id="testimonials" className="py-20" style={{ backgroundImage: `url(${testimonialsImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 1 }}>

    <section className="relative overflow-hidden py-20  lg:pb-2 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 opacity-50"
        style={{ backgroundImage: `url(${testimonialsImage})` }}
        aria-hidden="true"
      />
      {/* </section> */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from leaders who have transformed their organizations with our HR expertise.
            </p>
          </div>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-3 md:px-4 pt-[54px] h-[450px] sm:h-[500px] md:h-[634px] xl:h-[550px]">
                <div className="card bg-white h-[90%] flex-end shadow-effect pt-3 pb-5 md:pt-4 md:pb-8 pl-5 pr-5 md:pl-8 md:pr-8 rounded-3xl text-center border border-gray-200 cursor-pointer">
                  <div className="mx-auto mb-4 -mt-14 relative">
                    <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 relative z-10 bg-white flex items-center justify-center"
                    >
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full relative z-10 bg-white"
                        />
                      ) : (
                        <PersonIcon className="w-16 h-16 md:w-10 md:h-10 relative z-10 bg-white text-gray-500" />
                      )}
                    </div>

                  </div>
                  <div className="mb-4">
                    <div className="text-primary font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic text-sm md:text-base">{testimonial.quote}</p>


                  <div className="flex justify-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">48hrs</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .shadow-effect {
          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1),
            0 15px 12px rgba(0, 0, 0, 0.02);
        }
        // .slick-prev,
        // .slick-next {
        //   width: 50px;
        //   height: 50px;
        //   background: rgba(255, 255, 255, 0.9);
        //   border-radius: 50%;
        //   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        //   z-index: 10;
        //   transition: all 0.3s ease;
        // }

        // .slick-prev {
        //   left: -60px;
        // }

        // .slick-next {
        //   right: -30px;
        // }

        .slick-prev:before,
        .slick-next:before {
          font-size: 48px;
          color: #3190e7;
          opacity: 0.8;
        }

        // .slick-prev:hover,
        // .slick-next:hover {
        //   background: #3190e7;
        //   box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
        // }

        .slick-prev:hover:before,
        .slick-next:hover:before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .slick-prev,
          .slick-next {
            width: 40px;
            height: 40px;
          }

          .slick-prev {
            left: -20px;
          }

          .slick-next {
            right: -20px;
          }

          .slick-prev:before,
          .slick-next:before {
            font-size: 16px;
          }
        }

        /* Emphasized center with faint side cards */
        .slick-slide .card {
          margin: 0 auto;
          transform: scale(0.88);
          filter: blur(2px);
          transition: transform 320ms ease, opacity 320ms ease,
            filter 320ms ease, box-shadow 320ms ease;
          will-change: transform, opacity, filter;
        }
        .slick-center .card {
          transform: scale(1.04);
          opacity: 1;
          filter: none;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12),
            0 16px 20px rgba(0, 0, 0, 0.06);
        }

        /* Mobile & small-laptop: disable blur/scale for equal-size cards */
        @media (max-width: 1023px) {
          .slick-slide .card {
            transform: none;
            filter: none;
          }
          .slick-center .card {
            transform: none;
          }
        }

        /* Avatar ring/glow to match requested image style */
        .avatar-wrap {
          width: 84px;
          height: 84px;
          border-radius: 9999px;
          padding: 3px;
          background: linear-gradient(180deg, #e9f2ff 0%, #d5e6ff 100%);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          object-fit: cover;
          display: block;
          background-color:rgb(79, 81, 87);
        }
        .slick-center .avatar-wrap {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 6px rgba(49, 144, 231, 0.12);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
