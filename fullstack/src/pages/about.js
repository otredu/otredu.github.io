import { Banner } from '../components/Banner/Banner';
import { BodyText } from '../components/BodyText/BodyText';
import Element from '../components/Element/Element';
import Footer from '../components/Footer/Footer';
import { Image } from './../components/Image/Image';
import Layout from '../components/layout';
import { PartBanner } from '../components/PartBanner/PartBanner';
import React from 'react';
import SEO from '../components/seo';
import content from '../content/pages/about.json';
import landingImage from '../images/landing.png';
import mainSEOdescription from '../content/seo/mainSEOdescription';
import mainSEOtags from '../content/seo/mainSEOtags';

const About = () => {
  const { intro } = content.fi;

  return (
    <Layout>
      <SEO
        lang="fi"
        title="Kurssista | React ja node.js"
        description={mainSEOdescription['fi']}
        keywords={[
          ...mainSEOtags,
          'Tredu',
        ]}
      />

      <Banner style={{ paddingBottom: 0, overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '-70px',
          }}
          className="container"
        >
          <Image
            className="col-4 push-right-2"
            contain
            style={{ margin: 0 }}
            alt="Stacked cubes with React logo and JavaScript text"
            src={landingImage}
          />
        </div>
      </Banner>

      <Element className="container spacing spacing--mobile--large">
        <Element className="col-8 push-right-1">
          <BodyText
            heading={{ level: 'h1', title: 'Yleistä' }}
            headingFontSize="2.3rem"
          />

          <Element flex spaceBetween>
            <div className="col-10 spacing--after">
              <BodyText text={intro} className="link" headingFont />

              <BodyText
                className="link"
                headingFont
                text={[
                  'Kurssin esitietoina on web-ohjelmoinnin ja tietokantojen perustuntemus, sekä git-versionhallintajärjestelmän peruskäytön hallintaa. Avuksi on myös kyky pitkäjänteiseen työskentelyyn sekä valmius omatoimiseen tiedonhakuun ja ongelmanratkaisuun. Kysy tarkemmat harjoitustöiden palautusohjeet kurssisi opettajalta.']}
              />
            </div>
          </Element>
        </Element>
      </Element>

      <PartBanner lang="fi" />
      <Footer lang="fi" />
    </Layout>
  );
};

export default About;
