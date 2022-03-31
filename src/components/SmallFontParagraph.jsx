import { Paragraph } from "govuk-react";

const SmallFontParagraph = ({children}) => {
    return (
        <Paragraph supportingText>{children}</Paragraph>
    );
};

export {SmallFontParagraph};