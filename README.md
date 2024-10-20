# Inventory and event management system for PCCOE


The solution is a web-based platform tailored for Pimpri Chinchwad College of Engineering (PCCOE) to streamline event management and resource coordination. The application automates the entire cycle of event planning, venue and resource booking, and communication across departments. Also acts as a centralised place for advertisement and registration of all events accross PCCOE

Key features include:

- Inventory Management: A real-time system to track and manage event-related materials, ensuring smooth procurement and usage tracking. <br/>
  <img width="336" alt="{F979AC46-68C9-45E7-93B6-81F37D7AB13F}" src="https://github.com/user-attachments/assets/45351b78-6d38-4372-b07b-67b1901fb963">
- Role based access: Assigned admin, organiser and user role for customised experience<br/>
- <img width="552" alt="{7C3D71FA-FDD5-4C9E-89AD-133C3138F5DD}" src="https://github.com/user-attachments/assets/16ff6588-09c3-430f-8a35-49e298108247">
- Event & Resource Booking: Allows staff and departments to book venues while automating approval processes and avoiding scheduling conflicts.
- Permission Requests: Simplifies seeking permissions from faculty and administrators for organizing events.<br/>
   <img width="212" alt="{FA03882B-D6E7-449F-B978-7568A3814AB0}" src="https://github.com/user-attachments/assets/ab243df6-8edc-400b-afaa-963ad86b5d92">
- Automated Communication: Utilized google's calender api for sending notifications about registered events.

This centralized platform enhances coordination, reduces manual errors, and makes event planning more efficient, benefiting both staff and students.


# Technical details

- Tech stack: React Js frontend, Fastapi backend and database is a postgres instance hosted on Supabase
- This is the frontend repo, backend is present on https://github.com/tushar-badlani/Inventory

# Usage
- Clone this and the backend repo in a folder
- In frontend folder, run the following command
  ```
  npm install
  npm run dev
  ```
- To start the backend, open the terminal in Inventory folder
  ```
  pip install .
  cd app
  uvicorn main:app --reload
  ```

