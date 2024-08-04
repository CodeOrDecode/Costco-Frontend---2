import React from "react";
import Afterloginnav from "../Allsimiler/Afterloginnav";
import style from "../Css/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../Allsimiler/Footer";

const Afterlogin = () => {
    const responsive1 = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    
      const responsive2 = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
      };

      

  return <div className={style.home}>
  <Afterloginnav />
  <img
    className={style.banner1}
    src="https://mobilecontent.costco.com/live/resource/img/24w11036/d_24w11036_hero_july_connection-v.jpg"
    alt=""
  />
  <Carousel
    className={style.crousel1}
    responsive={responsive1}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
  >
    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/24w12026/d_24w12026_hero_macbook_air_v2.jpg"
        alt=""
      />
    </div>

    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/24g1203/d_24g1203_hero_watching.jpg"
        alt=""
      />
    </div>

    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/24w10160/d_24w10160_cat_hero_tisdale-v.jpg"
        alt=""
      />
    </div>

    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/24w11147/d_24w11147_bms_apparel_v1.jpg"
        alt=""
      />
    </div>

    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/24w12047/d_24w12047_hero_back_to_school_apparel.jpg"
        alt=""
      />
    </div>

    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/24w10175/d_24w10175_home_hero_beat_the_heat.jpg"
        alt=""
      />
    </div>

    <div>
      <img
        className={style.sliderimg}
        src="https://mobilecontent.costco.com/live/resource/img/Weekend_Getaways/20240722_Weekend_Getaways_CmpnUS_ComHero_D_V2.jpg"
        alt=""
      />
    </div>
  </Carousel>

  <div className={style.banner2}>
    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695433-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner2p}>Dining Table</p>
    </div>

    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100530889-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner2p}>6-Piece Seating Set</p>
    </div>

    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1844199-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner2p}>Uber</p>
    </div>

    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1784904-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner2p}>Disney Arch</p>
    </div>
  </div>

  <div className={style.banner3}>
    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1715568-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner3p}>LG Refrigerator</p>
    </div>

    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1827493-847__2&recipeName=350"
        alt=""
      />
      <p className={style.banner3p}>Lenovo Laptop</p>
    </div>

    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1529180-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner3p}>Lunch Box</p>
    </div>

    <div>
      <img
        src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1712043-847__1&recipeName=350"
        alt=""
      />
      <p className={style.banner3p}>Domino's</p>
    </div>
  </div>

  <img
    className={style.banner4}
    src="https://mobilecontent.costco.com/staging/resource/img/24w06080/d_24w06080_banner_gold_eagle.jpg"
    alt=""
  />

  <div className={style.banner5}>
    <img
      src="https://cdn.bfldr.com/56O3HXZ9/at/pg4hj44wvg47m4b8p73j3pg4/d-24w01107-banner-membership.jpg?&format=jpg"
      alt=""
    />
    <img
      src="https://cdn.bfldr.com/56O3HXZ9/at/9zswttn4v5gz2z83thjjrjg/d-24w01107-banner-renew-membership.jpg?&format=jpg"
      alt=""
    />
  </div>

  <Carousel responsive={responsive2} className={style.crousel2}>
    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/6tmgcc8cz2krrp375txxrh8/4000223041-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1,199.99</p>
      <p className={style.crousel2des}>
        Coddle Aria Fabric Sleeper Sofa with Reversible Chaise
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/bpmx83ff2gqrckbs6jjg8v/4000258686-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$549.99</p>
      <p className={style.crousel2des}>
        Casper Cooling Select 12" Hybrid Medium Firm Mattress
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/at/cjwt6sscw8c5wc67n7wt55w/4000242671-847__1.jpg?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1699.99</p>
      <p className={style.crousel2des}>
        Thomasville Tisdale Modular Sectional 6-piece Dark Gray
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/xp57pfbj8jc8xf96xxbhs9/100694157-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$599.99</p>
      <p className={style.crousel2des}>
        Sealy Posturepedic Carver 11” Firm or 13.5” Plush Mattress
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/wwsfkkjjmgfk53nx5cz/4000244918-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1799.99</p>
      <p className={style.crousel2des}>
        Thomasville Lowell 6-piece Modular Sectional
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/jkp5pp464bpp4ckcsvhkv69p/1695582-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$2199.99</p>
      <p className={style.crousel2des}>
        Sereen 6-piece Fabric Modular Sectional
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/44jfstgvmjxj4rpjs5rzx59g/4000222494-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$699.99</p>
      <p className={style.crousel2des}>
        Novaform 14” ComfortGrande Advanced Gel Memory Foam Mattress
      </p>
    </div>
  </Carousel>

  <img
    className={style.banner6}
    src="https://mobilecontent.costco.com/live/resource/img/24w12085/d-24w12085-banner-huggies.jpg"
    alt=""
  />

  <Carousel responsive={responsive2} className={style.crousel2}>
    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/2zjm3kvj4sh6r7jhj63hp4xr/4000182774-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1,199.99</p>
      <p className={style.crousel2des}>
        Coddle Aria Fabric Sleeper Sofa with Reversible Chaise
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/bpmx83ff2gqrckbs6jjg8v/4000258686-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$549.99</p>
      <p className={style.crousel2des}>
        Casper Cooling Select 12" Hybrid Medium Firm Mattress
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/3j66t4957fz8nrqnc9t8q7/4000240037-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1699.99</p>
      <p className={style.crousel2des}>
        Thomasville Tisdale Modular Sectional 6-piece Dark Gray
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/qg7zb35rnnfpcwrzth3bmnqv/100526720-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$599.99</p>
      <p className={style.crousel2des}>
        Ghostbed Luxe 13" Memory Foam Mattress
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/wwsfkkjjmgfk53nx5cz/4000244918-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1799.99</p>
      <p className={style.crousel2des}>
        Thomasville Lowell 6-piece Modular Sectional
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/jkp5pp464bpp4ckcsvhkv69p/1695582-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$2199.99</p>
      <p className={style.crousel2des}>
        Sereen 6-piece Fabric Modular Sectional
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/44jfstgvmjxj4rpjs5rzx59g/4000222494-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$699.99</p>
      <p className={style.crousel2des}>
        Novaform 14” ComfortGrande Advanced Gel Memory Foam Mattress
      </p>
    </div>
  </Carousel>

  <div className={style.banner8}>
    <img
      src="https://mobilecontent.costco.com/live/resource/img/Mid_Tier/20240729_Mid_tier_Vacations_TrioUS_Trio.jpg"
      alt=""
    />
    <img
      src="https://mobilecontent.costco.com/staging/resource/img/24w09191/24w09191_third_ban_pediasure_v2.jpg"
      alt=""
    />

    <img
      src="https://mobilecontent.costco.com/staging/resource/img/24w12088/24w12088_third_banner_hisense.jpg"
      alt=""
    />
  </div>

  <Carousel responsive={responsive2} className={style.crousel2}>
    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/54pqwnbrnbq72stxqhsjr7/4000198796-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1,199.99</p>
      <p className={style.crousel2des}>Café Dishwasher Drawer</p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/gmnw7zpf8vmwtqsbcbrtq/100426121-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$549.99</p>
      <p className={style.crousel2des}>
        Whirlpool 20 cu. ft. Top Freezer Refrigerator
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/68tvnjqpgqj36ngsmjv4x4/100500393-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1699.99</p>
      <p className={style.crousel2des}>
        KitchenAid 25.8CuFt 36" Multi-Door Freestanding Refrigerator
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/cvzq5vvpcg8vwnntp7pwnc/1348605-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$599.99</p>
      <p className={style.crousel2des}>
        Maytag 25 cu. ft. Side-by-Side Refrigerator
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/xc937tppbr24tmpxw8387th/2761858-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$1799.99</p>
      <p className={style.crousel2des}>
        Whirlpool 25 cu. ft. French Door Refrigerator Accu-Chill
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/sn95cfm9jjwc973fj34cbw/1202695-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$2199.99</p>
      <p className={style.crousel2des}>
        GE 21.3 cu. ft. Upright Freezer with Plastic Shelves
      </p>
    </div>

    <div className={style.crousel2cur}>
      <img
        className={style.sliderimg2}
        src="https://cdn.bfldr.com/U447IH35/as/nzbrhsbw9xxx8bhxmk2863jm/4000182146-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
        alt=""
      />
      <p className={style.crousel3des}>$699.99</p>
      <p className={style.crousel2des}>
        Midea 18 cu. ft. Top-Mount Refrigerator with Ice Maker
      </p>
    </div>
  </Carousel>

  
  <Footer />
</div>
}

export default Afterlogin