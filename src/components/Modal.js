import React, { memo } from 'react'
import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'
// import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
// import { CLOSE_MODAL } from 'src/redux/types/type.js'

const trailerModalVariants = {
  hidden: {
    opacity: 0,
    y: 600,
    x: -400
  },
  visible: {
    opacity: 1,
    y: -300,
    x: -400,
    transition: {
      duration: 0.7
    }
  }
}
const Modal = memo(props => {
  const { handleCloseModal } = props
  return (
    <Wrapper>
      <motion.div
        variants={trailerModalVariants}
        initial="hidden"
        animate="visible"
        layout
        className="modal"
        key="child"
        exit={{ y: 500, opacity: 0 }}
      >
        <AiOutlineCloseCircle
          className="modal__close"
          onClick={() => handleCloseModal(false)}
        />
        <iframe
          id="ytplayer"
          title="youtube"
          type="text/html"
          src={props.video}
          frameBorder="0"
        />
      </motion.div>
    </Wrapper>
  )
})

export default Modal

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(84%, 50%);
  z-index: 3000;
  .modal {
    position: relative;
    .modal__close {
      position: absolute;
      top: -2rem;
      right: -2rem;
    }
  }
  iframe {
    border: 4px solid #fff;
    width: 300px;
    height: 250px;
  }
  svg {
    width: 3rem;
    height: 3rem;
    fill: #fff;
    cursor: pointer;
  }
  @media screen and (min-width: 576px) {
    top: 50%;
    left: 50%;
    transform: translate(25%, 40%);
    iframe {
      width: 540px;
      height: 290px;
    }
    .modal {
    }
  }
  @media screen and (min-width: 800px) {
    top: 55%;
    left: 50%;
    transform: translateX(4.4%);
    iframe {
      width: 740px;
      height: 490px;
    }
    .modal__close {
      top: -2.5rem;
      right: -2.5rem;
    }
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`
