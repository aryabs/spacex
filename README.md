# SpaceX Launch Tracker 

This project is a SpaceX Launch Tracker application built with React, Next.js, and Material-UI. It displays detailed information about SpaceX launches, including mission names, dates, statuses, and more. The project was enhanced and tested as part of a coding challenge.

Features
1. Launch Cards
Dynamic Information Display:
Mission Name
Launch Date (formatted)
Status (Success, Failed, Upcoming)
Mission Details
Failure Reason (if applicable)
Mission Patch Image
Smooth hover animations for a modern look.
watch button with icon![image](https://github.com/user-attachments/assets/8dcadb12-b66f-4f7b-a3eb-b95f441ace31)

3. Pagination
Implements a pagination system to navigate through the list of launches.
Dynamically calculates the total number of pages based on the number of launches.
Allows users to navigate between pages using "Previous" and "Next" buttons.
3 .Responsive Design
Cards adjust dynamically to screen sizes using Material-UI's Grid system:
1 card per row on small screens.
2 cards per row on medium screens.
3 cards per row on large screens.
4 cards per row on extra-large screens.
4. Error Handling
Displays fallback content (e.g., placeholder images) if data is missing or unavailable.
5. Modern UI/UX
Built with Material-UI for a clean and polished design.
Consistent typography and spacing for better readability.
Dynamic styling for launch statuses:
Green for "Success",Red for "Failure",Blue for "Upcoming".
6. Testing
Comprehensive unit tests using Jest:
Tests for LaunchCard component to ensure proper rendering of launch details.
Tests for Pagination component to verify correct page navigation.
Tests for the home page to ensure the header and pagination are rendered correctly.
