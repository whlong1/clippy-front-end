# clippy-front-end

https://tanstack.com/

https://auth0.com/docs/quickstart/spa/react/interactive


## Todos


• Audit props being passed

• Add Edit profile functionality

• Research cancelling queries, refetching, etc

• Check for validity of URLs in ExternalUrls.jsx (flag bad links/autocorrect?)

• Build out features/Admin components and functionality (cohorts, squads, profiles)

• Create a reusable feature landing wrapper component

• Audit keys (need consistent key pattern for all resources)

• Figure out if background refetching is functioning correctly

• Review access to admin functionality (front end and backend)

• Add toggle down functionality to each Role section on PeopleMenu

• For security, might be worth refactoring how admin and student routes are handled

• DeliverableStatusSelect and StudentStatusSelect can be renamed BlankStatus and display the value as well.

• In order to stick to current pattern, Home/Welcome component issue should be wrapped with ContentLayout (and given a corresponding menu) or redirect to people automatically.

• REFRESH TOKEN ISSUE SAFARI : https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation


## Notes

• React Query Keys: https://tkdodo.eu/blog/effective-react-query-keys

• Optimistic Updates: https://tanstack.com/query/v4/docs/react/guides/optimistic-updates