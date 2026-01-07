import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import ResourceHeroSec from "./components/ResourceHeroSec";
import TculesResources from "./components/TculesResources";
import TculesSubscription from "./components/TculesSubscription";
import { Suspense } from "react";

const ResourceContainer = () => {
  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Suspense fallback={<div>Loading case studies...</div>}>
            <ResourceHeroSec />
            <TculesResources />
            <TculesSubscription />
          </Suspense>
        </Block>
      </Container>
    </main>
  );
};

export default ResourceContainer;
