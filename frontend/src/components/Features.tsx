import React from "react";
import FeatureCard from "./FeatureCard";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";

export default function Features() {
  return (
    <section className="mt-16">
      <SectionHeading title="Features" />
      <Container>
        <Paragraph className="md:mt-8 text-blue">
          we've tried our best to give great services possible. Our platform
          offers a range of cutting-edge capabilities designed to maximize
          security, optimize performance, and provide best user experience.
        </Paragraph>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <FeatureCard
            title="Cloud-Based Penetration Testing"
            icon="src/assets/feature-icon-01.svg"
          >
            <Paragraph>
              Enable users to conduct comprehensive penetration tests on their
              websites without the need for local installations.
            </Paragraph>
          </FeatureCard>
          <FeatureCard
            title="Load Testing as a Service"
            icon="src/assets/feature-icon-02.svg"
          >
            <Paragraph>
              Provide a robust load testing feature that allows users to
              simulate heavy user traffic scenarios on their websites.
            </Paragraph>
          </FeatureCard>
          <FeatureCard
            title="Customizable Reporting"
            icon="src/assets/feature-icon-03.svg"
          >
            <Paragraph>
              users can generate customized reports summarizing the results of
              their penetration and load tests.
            </Paragraph>
          </FeatureCard>
          <FeatureCard
            title="User-Friendly Dashboard"
            icon="src/assets/feature-icon-04.svg"
          >
            <Paragraph>
              a centralized dashboard where users can monitor the results of
              their tests in real-time.
            </Paragraph>
          </FeatureCard>
        </div>
      </Container>
    </section>
  );
}
