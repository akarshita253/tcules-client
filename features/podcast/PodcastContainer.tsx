import { Block } from "@/components/global/Block"
import { Container } from "@/components/global/Container"

const PodcastContainer = () => {
  return (
    <>
       <Container className="grid grid-cols-12 gap-6 ">
        <Block className="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13">
        c  {/* <HeadingAndTime
            title={title}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
          <FeatureImage featureImage={featureImage} /> */}
        </Block>
      </Container>
    </>
  )
}

export default PodcastContainer
