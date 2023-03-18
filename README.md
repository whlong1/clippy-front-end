# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive

## Todos

• Students should not see waitlist or inactive!

• Edit profile cannot be used as a popup, scroll issue

• check math on deliverable and attendance percentages

• join cohort won't work for admins setting default, need new functions.
  admin will need to select their desired role for the cohort as well.

• fix styling on delete deliverable popup - make consistent popup styling

• scroll issue on edit profile onboarding

• width of subheader class should scale based on content.

• join cohorts should use indexCohorts hook

• weird loading is caused by key on popup, see if a useeffect will work instead

• on hover effect for links

• Issue appears to be resolved:
  if github username is missing, other users photo appears in show person

• Issue appears to be resolved:
  on new attendance, if no date is selected manually and the default is used, the date is one day behind
  works if the date is selected manually. Default date works with new deliverable

## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates

• Invalidating Queries: https://www.codemzy.com/blog/invalidatequeries-react-query

• Querey Key Factories: https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories


## Tech

• https://github.com/uiwjs/react-codemirror


## Stretch Goals

• When awaiting instructor approval during onboarding, should have message that says waiting to join x cohort

• If a student wants to change cohorts, better to create separate functionality
  only allow student to access current cohort. archive should be available through some other means

• Add start time to cohort model and form

• could add icons to forms

• Students should see there stats on MyProfile page

• Audit keys (need consistent key pattern for all resources)

• For security, might be worth refactoring how admin and student routes are handled

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation


## Issues

•  Temporary fix added to ```getDefaultDate``` helper function in ```src/features/Deliverables/helpers/helpers.js getDefaultDate```
