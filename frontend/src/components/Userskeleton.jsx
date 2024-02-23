import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const Userskeleton = () => {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', width: '85%', height: '2000px' }}><SkeletonTheme baseColor="#aaadab" highlightColor="#444">
    <div style={{ backgroundColor: '#dbcfce', borderRadius: '10px', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Skeleton count={1} height='200px' width='100%' />
      <Skeleton height='20px' width='89%' count={6} style={{ marginBottom: '10px', marginTop: '20px', marginLeft: '10px', marginRight: '10px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto', justifyContent: 'space-evenly', width: '100%' }}>
        <Skeleton height='33px' width='80px' count={1} style={{ marginBottom: '10px' }} />
        <Skeleton height='33px' width='80px' style={{ marginBottom: '10px' }} count={1} />
      </div>
    </div>
  </SkeletonTheme>
  </div>
  )
}

export default Userskeleton