# Team ID: 18
# Team Name: Radiants

## Inventory and Event Management System for PCCOE

### Description
The Inventory and Event Management System is a comprehensive web-based platform designed specifically for Pimpri Chinchwad College of Engineering (PCCOE). This solution streamlines the entire process of event management and resource coordination within the institution. By automating event planning, venue and resource booking, and inter-departmental communication, the system significantly enhances operational efficiency.

Key benefits include:
- Centralized event advertisement and registration
- Improved resource utilization
- Reduced manual errors
- Enhanced coordination between departments
- Time-saving automated processes

### Features
1. **Inventory Management**: 
   - Real-time tracking of event-related materials
   - Automated alerts for low stock
   - Usage history and trends analysis

2. **Role-based Access**:
   - Admin: Full system control and oversight
   - Organizer: Event creation and management capabilities
   - User: Event browsing and registration features

3. **Event & Resource Booking**:
   - Intuitive calendar interface for venue selection
   - Automatic conflict detection and resolution
   - Resource allocation and tracking

4. **Permission Requests**:
   - Streamlined workflow for seeking event approvals
   - Status tracking for submitted requests
   - Automated notifications for request updates

5.  **Reporting and Analytics**:
   - Event attendance tracking
   - Resource utilization reports
   - User engagement metrics

### Tech Stack
- **Frontend**: 
  - React.js
  - Redux for state management
  - Material-UI for responsive design

- **Backend**: 
  - FastAPI (Python)

- **Database**: 
  - PostgreSQL (hosted on Supabase)


### Screenshots
![Inventory Management](https://github.com/user-attachments/assets/45351b78-6d38-4372-b07b-67b1901fb963)
*Figure 1: Inventory Management Dashboard*

![Role-based Access](https://github.com/user-attachments/assets/16ff6588-09c3-430f-8a35-49e298108247)
*Figure 2: Role-based Access Control Panel*

![Permission Requests](https://github.com/user-attachments/assets/ab243df6-8edc-400b-afaa-963ad86b5d92)
*Figure 3: Permission Request Interface*

### Deployed URL
[Link to Deployed Solution]

### Video URL
[Link to Demo Video]

### Installation and Setup

#### Prerequisites
- Node.js (v14 or later)
- Python (v3.8 or later)
- PostgreSQL

#### Frontend Setup
1. Clone the repository:
   ```
   git clone [frontend-repo-url]
   cd [frontend-folder]
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

#### Backend Setup
1. Clone the backend repository:
   ```
   git clone https://github.com/tushar-badlani/Inventory
   cd Inventory
   ```
2. Install dependencies:
   ```
   pip install .
   ```
3. Navigate to the app directory and start the server:
   ```
   cd app
   uvicorn main:app --reload
   ```

### Usage Guide
1. **User Registration**: Navigate to the signup page and create an account.
2. **Logging In**: Use your credentials to log into the system.
3. **Creating an Event**: 
   - Click on "Create Event" in the dashboard
   - Fill in event details, select venue, and request resources
   - Submit for approval
4. **Booking Resources**: 
   - Go to the "Resources" tab
   - Select required items and quantities
   - Choose dates for reservation
5. **Viewing Analytics**: Access the "Reports" section for insights on event performance and resource utilization.

### Contributing
We welcome contributions to improve the Inventory and Event Management System. Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

