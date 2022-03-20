import React from 'react'
import Typed from 'typed.js'
import styled from 'styled-components'

const TypedReactHooksDemo = ({ string, ele }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [string],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <Wrapper className="type-wrap">
      {ele ? (
        <h2 style={{ whiteSpace: 'pre' }} ref={el} />
      ) : (
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  span {
    display: inline;
  }
  h2 {
    /* text-align: center;
    display: inline; */
    /* font-size: 3rem; */
    font-weight: 700;
  }
`

export default TypedReactHooksDemo
