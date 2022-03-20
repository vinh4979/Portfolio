import React, { useCallback, useState } from 'react'
import SwiperCore, { Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

// For title
import { BiCodeAlt } from 'react-icons/bi'
import { HiViewGrid } from 'react-icons/hi'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import styled from 'styled-components'

//img projects
import ncinema2 from 'src/assets/images/ncinema.png'
import shoppingOnline from 'src/assets/images/Logo/projectImages/shopping-online.png'
import Portfolio from 'src/assets/images/Logo/projectImages/Portfolio.png'
import TechniqueSkills from './TechniqueSkills'
import {
  projectSkillGridsCinema,
  projectSkillGridsLibUICinema,
  projectSkillGridsLibUIPortfolio,
  projectSkillGridsProtfolio
} from 'src/util/Constant'
import FadeInWhenVisible from 'src/util/InViewHelper'
import { AnimatePresence } from 'framer-motion'
import Modal from './Modal'

// install Swiper modules
SwiperCore.use([Navigation])

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  z-index: 0;
  .project__item {
    /* margin: 5rem 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .project__img {
      max-width: 650px;
      min-height: 200px;
      transition: var(--transition);
      overflow: hidden;
      border-radius: var(--radius);
      img {
        border-radius: var(--radius);
        transition: var(--transition);
        object-fit: contain;
        border: 2px solid var(--gray-1);
      }
      &:hover img {
        transform: scale(1.2);
      }
    }
    .project__info {
      h2 {
        font-size: 2.5rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
      }
    }
    .btn {
      font-size: 1.5rem;
      background-color: var(--gray-1);
      padding: 1rem 1rem;
      border: 2px solid transparent;
      border-radius: var(--radius);
      display: inline-block;
      color: black;
      transition: var(--transition);
      cursor: pointer;
      margin-right: 2rem;
      &:hover {
        color: var(--gray-1);
        background: var(--deep-dark);
      }
    }
    .btn2 {
      font-size: 1.5rem;
      background: transparent;
      padding: 1rem 1rem;
      border: 2px solid var(--gray-1);
      border-radius: var(--radius);
      display: inline-block;
      color: var(--gray-1);
      transition: var(--transition);
      &:hover {
        background-color: rgb(188, 180, 180, 1);
        color: var(--deep-dark);
      }
    }
  }
  .project__brief {
    display: block !important;
    margin: 0 15rem;
    h2 {
      display: flex;
      margin: 2rem 0;
      font-family: 'Montserrat', sans-serif;
      font-size: 2.5rem;
      font-weight: 400;
      span {
        margin-right: 1rem;
      }
    }
    /* .techStack {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      .btn2 {
        font-size: 1.5rem;
        padding: 0.5em 1.5em !important;
      }
    } */
    p {
      font-size: 1.2rem;
      padding: 0.25rem;
      line-height: 1.5rem;
      font-weight: 300;
    }
  }
  .swiper-slide {
    min-height: 400px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    --swiper-navigation-size: 2.5rem;
    top: 35%;
    color: var(--gray-1);
    margin: 0 10rem;
    font-weight: bold;
  }
`
const Backdrop = styled.div`
  background-color: rgb(10, 32, 41);
`
const ModalShow = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`

export default function ProjectSwiper() {
  const [isModalVideo, setModalVideo] = useState(false)
  const handleCloseModal = useCallback(value => {
    setModalVideo(false)
  })
  const handleOpenModal = () => {
    setModalVideo(true)
  }
  return (
    <Container>
      <AnimatePresence>
        {isModalVideo && (
          <ModalShow className="section-middle">
            <Backdrop className="backdrop" onClick={handleCloseModal} />
            <Modal
              handleCloseModal={handleCloseModal}
              video={'https://www.youtube.com/embed/SaVxCSxC8GU'}
            />
          </ModalShow>
        )}
      </AnimatePresence>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true
        }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            {/* list project */}
            <FadeInWhenVisible>
              <div className="project__item">
                <div className="project__img">
                  <a
                    href="https://github.com/vinh4979/B-Cinema.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ncinema2} alt="gInterior" />
                  </a>
                </div>
                <div className="project__info">
                  <h2>B - Cinema Website</h2>
                </div>
                <div>
                  <button className="btn" onClick={handleOpenModal}>
                    View Project
                  </button>
                  <a
                    href="https://github.com/vinh4979/B-Cinema.git"
                    target="_blank"
                    className="btn2"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>

            <div className="project__brief">
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <HiViewGrid />
                  </span>
                  Overview
                </h2>
                <p>This is an online Booking Ticket Website.</p>
                <p>A web application for booking movie ticket online</p>
                <p>Feature:</p>
                <p>
                  {' '}
                  - Listing movies from movie api, allows users book movie
                  ticket online.{' '}
                </p>
                <p>- Allows users login and sign up for new account.</p>
                <p>
                  - Allows users manage their profile and booking/purchase
                  history.
                </p>
                <p>- More and more...</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <BiCodeAlt />
                  </span>
                  Technology Used
                </h2>
                {/* Skill */}
                <TechniqueSkills skillGrids={projectSkillGridsCinema} />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <BiCodeAlt />
                  </span>
                  UI Library Used
                </h2>
                {/* Skill */}
                <TechniqueSkills skillGrids={projectSkillGridsLibUICinema} />
                {/* Skill */}
              </FadeInWhenVisible>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* list project */}
            <FadeInWhenVisible>
              <div className="project__item">
                <div className="project__img">
                  <a
                    href="https://shopping-online-teal.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={shoppingOnline} alt="gInterior" />
                  </a>
                </div>
                <div className="project__info">
                  <h2>Shopping-Online Website</h2>
                </div>
                <div>
                  <a
                    href="https://shopping-online-teal.vercel.app/"
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/vinh4979/Shopping_online.git"
                    target="_blank"
                    className="btn2"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
            <div className="project__brief">
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <HiViewGrid />
                  </span>
                  Overview
                </h2>
                <p>This is an E-commerce Website.</p>
                <p>A web application for shopping online</p>
                <p>Features:</p>
                <p>
                  {' '}
                  - Listing products from product api, allows users to purchase
                  products online.{' '}
                </p>
                <p>- Allows users to login and sign up for new accounts.</p>
                <p>
                  - Allows users to search for products through various methods:
                  searching by type, searching by price, searching by name,...{' '}
                </p>
                <p>
                  - Allow users to manage their profiles and booking/purchasing
                  history.
                </p>
                <p>- More and more...</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <BiCodeAlt />
                  </span>
                  Technology Used
                </h2>
                {/* Skill */}
                <TechniqueSkills skillGrids={projectSkillGridsCinema} />
              </FadeInWhenVisible>
              {/* <h2>
                <span>
                  <BiCodeAlt />
                </span>
                UI Library Used
              </h2> */}
              {/* Skill */}
              {/* <TechniqueSkills skillGrids={projectSkillGridsCinema} /> */}
              {/* Skill */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {/* list project */}
            <FadeInWhenVisible>
              <div className="project__item">
                <div className="project__img">
                  <a
                    href="http://ncineplex.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Portfolio} alt="gInterior" />
                  </a>
                </div>
                <div className="project__info">
                  <h2>Protfolio Website</h2>
                </div>
                <div>
                  <a
                    href="http://ncineplex.netlify.app/"
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/ngtn0502/movieTicket-project"
                    target="_blank"
                    className="btn2"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
            <div className="project__brief">
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <HiViewGrid />
                  </span>
                  Overview
                </h2>
                <p>This is a personal portfolio Website.</p>
                <p>
                  A web in charge of introducing about what i am and what i do
                  to contribute for interviewer's company
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <BiCodeAlt />
                  </span>
                  Technology Used
                </h2>
                {/* Skill */}
                <TechniqueSkills skillGrids={projectSkillGridsProtfolio} />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <h2>
                  <span>
                    <BiCodeAlt />
                  </span>
                  UI Library Used
                </h2>
                {/* Skill */}
                <TechniqueSkills skillGrids={projectSkillGridsLibUIPortfolio} />
                {/* Skill */}
              </FadeInWhenVisible>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
