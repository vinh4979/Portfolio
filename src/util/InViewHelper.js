import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function FadeInWhenVisible({
  children,
  variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 }
  }
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
export default FadeInWhenVisible
