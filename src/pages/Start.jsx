import {
  Heading,
  Caption,
  Paragraph as P,
  UnorderedList as UL,
  ListItem as LI,
  GridCol,
  Button,
  GridRow,
} from "govuk-react";
import {Link as RouterLink} from "react-router-dom"
import StartIcon from "../components/StartIcon";
import { SmallFontParagraph as Small } from "../components/SmallFontParagraph";
import SearchAlpaca from "../components/SearchAlpaca";
import Accordion from "../components/Accordion";
import DefaultBreadCrumbs from '../components/DefaultBreadCrumbs';

const Start = () => {
  return (
    <section id="start">
      <DefaultBreadCrumbs />
      <Caption>HMRC (Hoofed Mammals Recreation Centre)</Caption>
      <Heading size="XL">Alpaca Appointment Service</Heading>

      <GridRow>
      <GridCol>
        <P>Use this service to:</P>
        <UL mb="4" className="list-small-font">
          <LI>Book an appointment of our alpaca-assisted therapy session.</LI>
          <LI>Learn about animal-assisted therapy.</LI>
          <LI>Watch some videos of our lovely animals.</LI>
        </UL>
        <P>Booking takes around 5 minutes.</P>
        <Button as={RouterLink} style={{display: "inline-block"}} to="/form" icon={<StartIcon fill="white" />} start>
          Start Now
        </Button>

        <hr />
        <Heading size="M">Before you start</Heading>
        <Small>You can also [book an appointment by post.](#)</Small>
        <Small>
          The online service is also available in [Alpacaean or Llamaish](#) 🦙.
        </Small>
        <Small>
          **You can’t register for this service if you’ve own an alpaca
          illegally.**
        </Small>
      </GridCol>
      <GridCol setWidth={"one-quarter"}>
       <SearchAlpaca /> 
       <Accordion />
      </GridCol>
      </GridRow>
    </section>
  );
};

export default Start;
