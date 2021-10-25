import Layout from '$components/Layout'
import BasicMeta from '$components/meta/BasicMeta'
import OpenGraphMeta from '$components/meta/OpenGraphMeta'

import Home from './Home'
import Social from './Social'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      {/* <TwitterCardMeta url={'/'} /> */}
      <div>
        <Home />
        <Social />
      </div>
    </Layout>
  )
}
