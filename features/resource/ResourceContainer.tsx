import { Block } from '@/components/global/Block'
import { Container } from '@/components/global/Container'
import ResourceHeroSec from './components/ResourceHeroSec'
import TculesResources from './components/TculesResources'
import TculesSubscription from './components/TculesSubscription'

const ResourceContainer = () => {
  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
            <ResourceHeroSec/>
            <TculesResources/>
            <TculesSubscription/>
        </Block>
      </Container>
    </main>
  )
}

export default ResourceContainer
