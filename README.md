# clippy-front-end

## Todos

• check math on deliverable and attendance percentages

## Stretch Goals

• Add icons to attendance rows

• JoinCohorts should use indexCohorts hook.

• Animation to StatusPage + ContentStatus

• Audit popup styling. Use single stylesheet for consistency.

• When awaiting instructor approval during onboarding, should have message that says waiting to join x cohort

• If a student wants to change cohorts, better to create separate functionality. Only allow student to access current cohort. Archive should be available through some other means

• Add start time to Cohort model and form

• Consider adding icons to forms

• Students should see there stats on MyProfile page

• From MyProfile, allow admins join to set a new default cohort (need to add them to cohort model, skip approval stage). Also, allow admins to join a cohort without updating their default cohort. At the moment, multiple cohorts can be joined during onboarding, but only the most recent will be set as the user's default.

• Audit keys (need consistent key pattern for all resources)

• For security, might be worth refactoring how admin and student routes are handled


## Issues

• Temporary fix added to ```getDefaultDate``` helper function in ```src/features/Deliverables/helpers/helpers.js getDefaultDate```

• Issue appears to be resolved: If github username is missing, other users photo appears in show person

• Issue appears to be resolved: On new attendance, if no date is selected manually and the default is used, the date is one day behind
  works if the date is selected manually. Default date works with new deliverable

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation

  ## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates

• Invalidating Queries: https://www.codemzy.com/blog/invalidatequeries-react-query

• Querey Key Factories: https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories

## Tech

• https://github.com/uiwjs/react-codemirror

• https://tanstack.com/

• https://auth0.com/docs/quickstart/spa/react/interactive