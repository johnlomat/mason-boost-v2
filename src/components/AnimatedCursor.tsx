'use client' // indicates Client Component

// Import with next's dynamic import
import dynamic from 'next/dynamic'

import getDeviceType from '@/lib/getDeviceType'

const AnimatedCursor = dynamic(
  () =>
    getDeviceType() === 'Desktop'
      ? import('react-animated-cursor')
      : Promise.resolve({ default: () => null }),
  { ssr: false },
)

export default AnimatedCursor
