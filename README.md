## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed
We would like you to clone this repository and amend the home page to display a list of Cards with the launches data retrieved from the spacex data API. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v5/

You can find docs for this API here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

Your solution should cover the following tasks:
- Make API request(s) on page load
- Display data top 10 items
- Provide some test coverage for your project

The data that we would like you to display are:
- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure.

### Outstanding items

Firstly, this was a very enjoyable task! 3-4 hrs (well, if being honest a little over 4hrs) was nowhere near enough time, but I hope it's given a sense of my thought process. There is a tonne of stuff left to do, seemingly at every turn there was a load more work I could have added!

Here is a live URL on [Vercel](vercel.com) that I added as part of the process [https://spacex-launches-neon.vercel.app/](https://spacex-launches-neon.vercel.app/) adding this allowed me to see, in fairly real-time, any build issues encountered (usually typing errors)

- Tests: 100% there would be before anything would go near to a prod environment. Tests for the two (likely more for final verson) current API routes are needed, all components need a test to ensure integrity and no extra markup is being output. With a limited user journey e2e tests would seem overkill at present.
- Typing: Given time I put `any` on most of the typing to get things working. In prod world there would be a `types` dir where all expect data interfaces would be held, these could then be used in data retrival.
- Markup/Styling: Default `nextjs` styling applied, real world would obviously use brand styles/design system - this would likely dictate markup too if using a DS.
- Better defensive coding: Aware that empty elements (looking at you `<p></p>`) are output due to lack of check on data integrity, real work would have more resiliant checks (see type definition point) to ensure that there is _always_ something output, either the right data, or a graceful error message
- Upgrade FS to full nextjs v13 recommendations: Looking at server components due to the lack of data changing would probably be a big win
- Better FE: A more considered approach for a11y and mobile/responsive, though it using a DS, most of these issues would be mitigated

### Enhancements

Aside from the general aesthetics of the page, I'd like to have introduced pagination and a clickable card. I think the clickable card would be great and really allow for the rich information to shine. Pagination seems logical, there are currently 200+ data items, so to limit to 10 seems poor for the user.

Doing this would allow to use some nice nextjs functions like `<Link>` to do route prefetching, as well as looking at implementing SSR or ISR
