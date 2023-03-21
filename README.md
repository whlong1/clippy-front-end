# clippy-front-end

## Stretch Goals

• metadata

• Changing cohorts should potentially remove students from existing cohorts.
  isWithdrawn boolean on profile causes issues with conditional rendering on instructor view.
  Multi cohort association does not impact student facing view if isWithdrawn is false.

• Check for bad external links on myprofile

• Display cohorts a student is in on my profile

• Default time for new deliverables (timezone issues)

• Add icons to attendance rows

• JoinCohorts should use indexCohorts hook.

• Subission panel is a bit messy, could fix up directory structure

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

• Bulk update marks withdrawn students as complete

• Condition to redirect if no lab exists (only an issue if student is viewing while deliverable is deleted)

• REFRESH TOKEN ISSUE SAFARI+FIREFOX : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation

## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates

• Invalidating Queries: https://www.codemzy.com/blog/invalidatequeries-react-query

• Querey Key Factories: https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories

## Tech

• https://github.com/uiwjs/react-codemirror

• https://tanstack.com/

• https://auth0.com/docs/quickstart/spa/react/interactive