# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive


## Todos

• style admin menu and components + update cohort form

• could add icons to forms?

• Student tag should go inside submission materials on grading page
  display student who is being graded alongside the link

• GradeStudentDeliverable + ShowPerson useRedirectOnRefresh

• deliverable row indicator

• style onboarding pages

• Students should see there stats on MyProfile page

• update how we handle quiz deliverables?

• tags for deliverable show, premade constants

• Audit keys (need consistent key pattern for all resources)

• For security, might be worth refactoring how admin and student routes are handled

• on hover effect for links

• make sure date issues from previous iteration are resolved on deploy

• attendance list might need a condition for 0 attendance?

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation


## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates

• Invalidating Queries: https://www.codemzy.com/blog/invalidatequeries-react-query

• Querey Key Factories: https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories


## Tech

• https://github.com/uiwjs/react-codemirror


## Issues

• SubmissionTracker and DueDate p tags require 2px margin-top to bring them inline with other subheaders. Investigate cause.

• width of subheader class should scale based on content.

• autocomplete in code editor is too narrow, some bit of css is impacting this. resolve