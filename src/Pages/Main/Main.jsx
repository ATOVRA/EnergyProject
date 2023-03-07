import React, { useContext, useEffect } from "react";
import "./MainStyle.css";
import Photo1 from "../Images/photo1.jpg";
import Photo2 from "../Images/photo2.jpg";
import Photo3 from "../Images/photo3.jpg";
import Photo4 from "../Images/photo4.jpg";
import Ishlarimiz1 from "../Images/ishlarimiz1.jpg";
import Ishlarimiz2 from "../Images/ishlarimiz2.jpg";
import Ishlarimiz3 from "../Images/ishlarimiz3.jpg";
import Ishlarimiz4 from "../Images/ishlarimiz4.jpg";
import Ishlarimiz5 from "../Images/ishlarimiz5.jpg";
import Ishlarimiz6 from "../Images/ishlarimiz6.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { Language } from "../../Lang/Lang";
import { Context } from "../../Context/Context";

export const Main = () => {
  const { lang } = useContext(Context);
  const { ref, inView } = useInView({threshold: 0.2});
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const animationLeft2 = useAnimation();
  const animationRight2 = useAnimation();


  useEffect(() => {
    // console.log("Use inView", inView);
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: { type: "just", duration: 1, bounce: 0.3 }
      });
    }
    if (!inView) {
      animationLeft.start({
        x: "-100vw",
      });
    }

    if(inView){
      animationRight.start({
        x: 0,
        transition: {type: 'just', duration: 1, bounce: 0.3}
      })
    }
    if(!inView){
      animationRight.start({
        x: '+100vw',
      })
    }
    
  }, [inView]);

  return (
    <main>
      <div className="main-container">
        <section className="sectionTop" ref={ref} id='bosh sahifa'>
          <motion.div animate={animationLeft} className='motionDiv'>
            <img src={Photo1} alt="" className="topPhoto1" />
            <img src={Photo2} alt="" className="topPhoto2 topPhotoHover" />
          </motion.div>
          <motion.div animate={animationRight} className='motionDiv'>
            <img src={Photo3} alt="" className="topPhoto3 topPhotoHover" />
            <img src={Photo4} alt="" className="topPhoto4" />
          </motion.div>
        </section>
        <section className="section2" id="ishlarimiz">
          <h1 className="section2Title">{Language[lang].ishlarimiz}</h1>
          <div className="ishlarimizPhotosDiv">
            <motion.div className="motionDiv2" animate={animationLeft2}>
            <img src={Ishlarimiz3} alt="" className="ishlarimizPhoto1" />
            <img src={Ishlarimiz2} alt="" className="ishlarimizPhoto1" />
            <img src={Ishlarimiz6} alt="" className="ishlarimizPhoto1" />
            </motion.div>
            <motion.div className="motionDiv2" animate={animationRight2}>
            <img src={Ishlarimiz1} alt="" className="ishlarimizPhoto1" />
            <img src={Ishlarimiz5} alt="" className="ishlarimizPhoto1" />
            <img src={Ishlarimiz5} alt="" className="ishlarimizPhoto1" />
            </motion.div>
          </div>
        </section>
        <section className="section3" id="haqimizda">
          <h1>{Language[lang].bizHaqimizda}</h1>
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nesciunt sit repellat alias deserunt id dignissimos corrupti
            voluptates quibusdam ea quas mollitia aut quisquam temporibus
            dolores quaerat dolorem, culpa libero dolorum, suscipit illo ex
            totam magni. Asperiores nulla reiciendis ipsa cumque impedit sed
            blanditiis consequuntur quidem natus voluptas recusandae repellat
            laudantium dolores hic accusantium, eaque sapiente dolore
            perferendis commodi cupiditate tenetur consequatur. Modi dolore
            assumenda accusamus. Nemo repudiandae dolores veritatis incidunt
            repellat, quisquam aspernatur assumenda odit voluptate aliquam
            doloribus enim fuga quod expedita ad quidem minus, voluptatibus qui
            molestias ratione labore vitae quis cupiditate recusandae. Nesciunt
            quas itaque cum molestiae.
          </p>
        </section>
      </div>
    </main>
  );
};
