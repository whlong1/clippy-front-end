# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive


## Todos

• daylight savings issue in new deliverable

• set default cohort in my profile

• Attendance form takenBy: profile.name, // <==

• names don't show up on attendance studentStatusrow

• show grading notes and code block for student quiz

• remove from cohort button issue - could just use change role

• give the onboarding container main a min height

• preferred first name



• is_new prop on user (auth 0) Onboarding Redirect rule should be camelcased
  update condition in app

• join cohorts should use indexCohorts hook

• weird loading is caused by key on popup, see if a useeffect will work instead

• add start time to cohort model and form

• style my profile page

• instructors should be able to submit materials for students

• my profile - edit should use profile form as a popup

• update default cohort for admins in my profile

• order deliverables correctly

• need to require requirement select on new deliverable

• fix styling on delete deliverable popup

• move contact information into left column on show person

• test scenario when no cohorts or profiles or attendance exist for an administrator

• on hover effect for links

• if github username is missing, other users photo appears in show person

• when awaiting instructor approval during onboarding, should have message that says waiting to join x cohort

• make sure date issues from previous iteration are resolved on deploy

## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates

• Invalidating Queries: https://www.codemzy.com/blog/invalidatequeries-react-query

• Querey Key Factories: https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories


## Tech

• https://github.com/uiwjs/react-codemirror


## Issues

• width of subheader class should scale based on content.

• on new attendance, if no date is selected manually and the default is used, the date is one day behind
  works if the date is selected manually.
  Default date works with new deliverable!


## Stretch Goals

• could add icons to forms

• Students should see there stats on MyProfile page

• Audit keys (need consistent key pattern for all resources)

• For security, might be worth refactoring how admin and student routes are handled

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation


## Site Admin Onboarding

• Create your account in Auth0.

• Click on the User Management tab in the Auth0 dashboard, and select Roles.

• Create a new role called Admin. Grant the Admin role whatever permissions you deem necessary.

• Assign the role of Admin to your account.

• Login to Clippy. After logging in you should be directed to onboarding. 

• Complete your profile information.


