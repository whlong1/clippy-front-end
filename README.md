# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive


## Todos

• tags for deliverable show, premade constants

• style admin menu and components + update cohort form

• could add icons to forms?

• GradeStudentDeliverable + ShowPerson useRedirectOnRefresh

• style onboarding pages

• Students should see there stats on MyProfile page

• update how we handle quiz deliverables?

• style and refactor role select form

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

• on new attendance, if no date is selected manually and the default is used, the date is one day behind
  works if the date is selected manually.
  Default date works with new deliverable!

• bug: change a students role, then immediately change it again, no update occurs. 
  after refreshing or navigating to a new student and back,role can be changed again correctly
  issue seems to stem from the select menu not refreshing. value out of sync.