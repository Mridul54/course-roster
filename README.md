1. Project Features
a. Course Selection and Credit Tracking

Description: Users can select courses for registration, and the project tracks the total credit hours of selected courses, ensuring it does not exceed a limit of 20 hours.
Implementation: Users can click the "Select" button on each course card to add it to their selection.
b. Dynamic Course Data Loading

Description: Course data is loaded dynamically from an external JSON source. This allows easy updates or additions to course information without altering the codebase.
Implementation: Course data is fetched from a JSON source, providing flexibility in managing course data.
c. Prevent Duplicate Selection

Description: Duplicate selections of the same course are prevented to enhance the user experience.
Implementation: The "Select" button becomes disabled after a user selects a course, ensuring each course can only be added to the selection once.



2. State Management
In our assignment project, we utilize React's built-in useState hook to manage various states:

Course Data State (cards)

Description: This state holds information about all available courses fetched from the JSON source.
Implementation: Managed using the useState hook.
Selected Courses State (selectcard)

Description: Tracks the state of selected courses. When a user selects a course, it's added to this state.
Implementation: Managed using the useState hook.
Remaining Hours State (remainingHours)

Description: Keeps track of the remaining credit hours.
Implementation: Managed using the useState hook. Updated when a course is selected.
Total Credit Hours State (totalCreditHours)

Description: Tracks the total credit hours of selected courses.
Implementation: Managed using the useState hook. Updated when a course is selected, with checks to ensure it doesn't exceed 20 hours.
Using React's useState hook simplifies component-level state management within functional components, making it efficient to handle data and UI updates based on user interactions and external data sources.