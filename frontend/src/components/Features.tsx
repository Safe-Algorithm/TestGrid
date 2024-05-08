import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <>
      <p className="mb-4 md:text-xl xl:text-3xl !leading-8 md:!leading-10 leading-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        rerum magni, alias quibusdam, voluptatum ipsa laboriosam autem nulla
        blanditiis temporibus nisi odit. Laboriosam, veritatis. Excepturi
        adipisci distinctio molestiae quod ea.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard
          title="Cloud-Based Penetration Testing"
          icon="src/assets/feature-icon-01.svg"
        >
          Enable users to conduct comprehensive penetration tests on their
          websites without the need for local installations.
        </FeatureCard>
        <FeatureCard
          title="Load Testing as a Service"
          icon="src/assets/feature-icon-02.svg"
        >
          Provide a robust load testing feature that allows users to simulate
          heavy user traffic scenarios on their websites.
        </FeatureCard>
        <FeatureCard
          title="Customizable Reporting"
          icon="src/assets/feature-icon-03.svg"
        >
          users can generate customized reports summarizing the results of their
          penetration and load tests.
        </FeatureCard>
        <FeatureCard
          title="User-Friendly Dashboard"
          icon="src/assets/feature-icon-04.svg"
        >
          a centralized dashboard where users can monitor the results of their
          tests in real-time.
        </FeatureCard>
      </div>
    </>
  );
}
