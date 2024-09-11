import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const RevealDiv = ({
  children,
  className,
  key,
}: {
  children: React.ReactNode
  className?: string
  key?: string
}) => (
  <motion.div
    key={key}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.25, delay: 0.25 }}
    className={className}
  >
    {children}
  </motion.div>
)

const RevealAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default RevealAnimation
