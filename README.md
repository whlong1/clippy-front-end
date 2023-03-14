# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive


## Todos

• order deliverables correctly

• move contact information into left column on show person

• test scenario when no cohorts or profiles or attendance exist for an administrator

• when awaiting instructor approval during onboarding, should have message that says waiting to join x cohort

• style admin menu and components + update cohort form

• style onboarding pages

• Students should see there stats on MyProfile page?

• on hover effect for links

• make sure date issues from previous iteration are resolved on deploy

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


## Stretch Goals

• could add icons to forms

• Audit keys (need consistent key pattern for all resources)

• For security, might be worth refactoring how admin and student routes are handled

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation
