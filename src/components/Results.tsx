import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

const Results: React.FC<ResultsProps> = ({
  backLink,
  onBackClick,
  firstName,
  description,
  hairColour,
  dob,
  timeslot,
  hasChildrenAccompany,
}: ResultsProps) => {

  return (
    <>
      <GovUK.BackLink as={Link} to={backLink} onClick={onBackClick}>
        Back
      </GovUK.BackLink>
      <GovUK.Panel title="Booking complete">Reference: A7P8K8_77AMA</GovUK.Panel>

      <GovUK.LeadParagraph>
        Your booking  has been received and confirmed.
      </GovUK.LeadParagraph>
      <GovUK.Heading size="L">What happens next</GovUK.Heading>
      <GovUK.Paragraph>
        You will receive an email which guides you to prepare for the session.
      </GovUK.Paragraph>
      <GovUK.HintText>
        Yes, we just somehow magically detected your email address.
      </GovUK.HintText>
      <GovUK.SectionBreak margin={4}/>
      <GovUK.Heading size="M">Your appointment details</GovUK.Heading>
      <GovUK.UnorderedList>
        <GovUK.ListItem>Name: {firstName}</GovUK.ListItem>
        <GovUK.ListItem>Description: {description}</GovUK.ListItem>
        <GovUK.ListItem>Preferred alpaca hair colour: {hairColour?.join(', ')}</GovUK.ListItem>
        <GovUK.ListItem>
          Date of appointment: {dob?.day}/{dob?.month}/{dob?.year}
        </GovUK.ListItem>
        <GovUK.ListItem>Time of appointment: {timeslot}</GovUK.ListItem>
        <GovUK.ListItem>Multiple pets: {hasChildrenAccompany}</GovUK.ListItem>
      </GovUK.UnorderedList>
    </>
  );
};

interface ResultsProps {
  backLink: string;
  onBackClick(): void;
  firstName: string;
  description: string;
  hairColour: string[];
  dob: {
    year?: string | number;
    month?: string | number;
    day?: string | number;
  };
  timeslot: string;
  hasChildrenAccompany: string;
}

Results.defaultProps = {
};

export default Results;