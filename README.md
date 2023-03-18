# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive

## Issues

• join cohort won't work for admins setting default, need new functions.
  admin will need to select their desired role for the cohort as well.

• if github username is missing, other users photo appears in show person

• fix styling on delete deliverable popup - make consistent popup styling

• scroll issue on edit profile onboarding

• width of subheader class should scale based on content.

• on new attendance, if no date is selected manually and the default is used, the date is one day behind
  works if the date is selected manually.
  Default date works with new deliverable!

• daylight savings issue in new deliverable

## Todos

• join cohorts should use indexCohorts hook

• weird loading is caused by key on popup, see if a useeffect will work instead

• style my profile page

• order deliverables correctly

• need to require requirement select on new deliverable

• move contact information into left column on show person

• on hover effect for links

• When awaiting instructor approval during onboarding, should have message that says waiting to join x cohort

• make sure date issues from previous iteration are resolved on deploy

## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates

• Invalidating Queries: https://www.codemzy.com/blog/invalidatequeries-react-query

• Querey Key Factories: https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories


## Tech

• https://github.com/uiwjs/react-codemirror


## Stretch Goals

• Add start time to cohort model and form

• could add icons to forms

• Students should see there stats on MyProfile page

• Audit keys (need consistent key pattern for all resources)

• For security, might be worth refactoring how admin and student routes are handled

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation
