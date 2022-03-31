import {
  Heading,
  Caption,
  Paragraph as P,
  UnorderedList as UL,
  ListItem as LI,
  GridCol,
  Button,
  GridRow,
  Link
} from "govuk-react";
import {Link as RouterLink} from "react-router-dom"
import StartIcon from "../components/StartIcon";
import { SmallFontParagraph as Small } from "../components/SmallFontParagraph";
import SearchAlpaca from "../components/SearchAlpaca";

const Start = () => {
  return (
    <section id="start">
      <Caption>HMRC (Hoofed Mammals Recreation Center)</Caption>
      <Heading size="XL">Alpaca Appointment Service</Heading>

      <GridRow>

      <GridCol>
        <P>Use this service to:</P>
        <UL mb="4" className="list-small-font">
          <LI>Book an appointment to play with our alpacas.</LI>
          <LI>Learn about animal-assisted therapy.</LI>
          <LI>Watch some videos of our lovely animals.</LI>
        </UL>
        <P>Booking takes around 5 minutes.</P>
        <Link as={RouterLink} to="/form">
        <Button icon={<StartIcon fill="white" />} start>
          Start Now
        </Button>
        </Link>

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
      <GridCol>
       <SearchAlpaca /> 
      </GridCol>
      </GridRow>
    </section>
  );
};

export default Start;
