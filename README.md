# Alpaca Appointment System
A demo project of react app with Gov.UK style.

Hosted demo: https://demo-react-app-alpaca.netlify.app/

## How this was done
The project folder itself is created by  create-react-app.

I installed sass, [govuk-react](https://github.com/govuk-react/govuk-react) and [govuk-frontend](https://github.com/alphagov/govuk-frontend/).

Govuk-react and govuk-frontend can be used separately. And in my personal opinion, it might be better to just choose one between them, not to use both at the same time.


### govuk-react

[govuk-react](https://github.com/govuk-react/govuk-react)
This library provides some govuk components in React components, which we can readily import in react app.

The componenets are made with "styled-component" way, so the GovUK styles are already embedded in there.

Also the repo has a [storybook](https://govuk-react.github.io/govuk-react/?path=/story/welcome--page) of available components, and some example application demo as well.

Most of this repo is built with this library. The alpaca booking form is wholely adopting the example form provided.

However, as it use the styled-component way to manage style, so you may find it difficult to figure out about the class & css.
Also some components in GovUK design system site (e.g. Accordion) seems not yet included in this library.


### govuk-frontend
[govuk-frontend](https://github.com/alphagov/govuk-frontend/)
This library provides the style, image, fonts and js file needed to make something in govuk style.

To use it, I copied the assets from node_modules package and place them in src. Also I put a import statement in my sass file.
Also, I installed 'sass' package to get sass compiled.

After that, we need to put the GovUK classnames to relevant elements for this to work.



I didn't put the js initAll script in index.html, as I worry that might affect react's own housekeeping too much.

**About the accordion**
The accordion in this project is built with govuk-frontend. 
I imported the vanilla js object and uses its .init function to setup the behaviour. 
But personally I think this is not a preferrable way to work with React. If I have more time, I would try to reimplement the behaviour with react state & onClick function instead.

Also, I notice that the accordion's css need a parent element with classname 'js-enable' to work.

