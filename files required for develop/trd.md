# Technical Requirements Document (TRD)

## Project Name: Studio Management System (SMS)
**Status:** Proposed | **Technical Architect:** Anvith Kumar  
**Target Stack:** Python, Flask, MySQL, HTML5, CSS3, JavaScript

---

## 1. System Architecture Overview
The Studio Management System (SMS) uses a classic monolithic **Model-View-Controller (MVC)** architectural pattern optimized for reliability, quick deployment, and lightweight local hosting.

```
       +------------------+
       |   Web Browser    |  <-- Mobile/Desktop Client
       +------------------+
                ^
                | HTTP Requests / Jinja2 Templates
                v
       +------------------+
       |   Flask Engine   |  <-- Routing, Middleware, Controller Logic
       +------------------+
         /      |       \
        /       |        \
  Models      Auth      Assets
  (SQLAlchemy/ (Flask-   (Local FS / Cloud)
   MySQL)      Session)
    |
    v
+-------+
| MySQL |  <-- Relational Database Store
+-------+
```

*   **Frontend (View):** Server-rendered HTML5 templates styled with semantic CSS3 and interactive vanilla JavaScript (handling image grid selections and AJAX file uploads).
*   **Backend (Controller/Router):** Lightweight Python Flask application handling application logic, authentication middleware, file routing, and database integrations.
*   **Database (Model):** Structured MySQL database storing normalized relational entities (users, bookings, assignments, files, statuses).

---

## 2. Technical Stack Detail

*   **Programming Language:** Python 3.x (guaranteeing rich standard libraries and ecosystem support)
*   **Web Framework:** Flask (a micro-framework selected for lightweight dependency footprints and granular router control)
*   **Session Management:** Flask-Session (secure server-side session cookies)
*   **Database Connector:** MySQL Connector Python or Flask-SQLAlchemy (ORM) for secure parametric querying
*   **Database System:** MySQL (relational database optimized for indexing multi-table foreign key relationships)
*   **Frontend Libraries:** Chart.js (for analytics/status reporting on dashboards) and vanilla CSS Grid/Flexbox (fully responsive, dependency-free CSS framework)

---

## 3. Database Schema (MySQL)

To track users, projects, and high-volume media files, the database consists of four core normalized tables.

```
+---------------+           +---------------+
|     users     |           |   bookings    |
+---------------+           +---------------+
| id (PK)       | <---+     | id (PK)       | <---+
| name          |     |     | client_id(FK) |     |
| email (Unique)|     |     | event_date    |     |
| password_hash |     |     | location      |     |
| role          |     |     | status        |     |
| created_at    |     |     +---------------+     |
+---------------+     |                           |
                      |                           |
+---------------+     |     +-------------------+ |
|  assignments  |     |     |       media       | |
+---------------+     |     +-------------------+ |
| id (PK)       |     |     | id (PK)           | |
| booking_id(FK)|-----+     | booking_id (FK)---|--+
| cameraman_id  |-----------+ | uploader_id (FK)  |--+
| editor_id     |-----------+ | file_path         |
| assigned_at   |             | file_type (raw/ed)|
+---------------+             | selection_status  |
                              | uploaded_at       |
                              +-------------------+
```

### Table Definitions

```sql
-- 1. Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Customer', 'Cameraman', 'Editor') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Bookings Table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    event_date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    status ENUM('Pending', 'Scheduled', 'Raw Uploaded', 'Selection Locked', 'Editing', 'Review Ready', 'Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Assignments Table
CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT UNIQUE NOT NULL,
    cameraman_id INT NOT NULL,
    editor_id INT NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (cameraman_id) REFERENCES users(id),
    FOREIGN KEY (editor_id) REFERENCES users(id)
);

-- 4. Media Table
CREATE TABLE media (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    uploader_id INT NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_type ENUM('Raw', 'Edited') NOT NULL,
    selection_status ENUM('Unselected', 'Selected', 'Approved') DEFAULT 'Unselected',
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (uploader_id) REFERENCES users(id)
);
```

---

## 4. Key API & Routing Specifications

### 4.1. Authentication Routes
*   `GET /login` : Renders login screen.
*   `POST /login` : Validates credentials, sets session context.
*   `POST /register` : Registers new customer; triggers OTP email sequence.
*   `POST /verify-otp` : Checks user OTP input against temporary server-stored variable.
*   `GET /logout` : Destroys active session, clears cookies.

### 4.2. Booking & Operations Routes (Admin & Customer)
*   `POST /bookings/create` : Customers create a raw booking.
*   `POST /bookings/assign` : Admins map `cameraman_id` and `editor_id` to `booking_id`.
*   `GET /dashboard` : Renders dashboard tailored strictly to user's session role.

### 4.3. Media Upload & Selection Routes (All Roles)
*   `POST /media/upload/<booking_id>` : Photographers/editors upload raw/edited binary assets.
*   `POST /media/select` : Clients POST an array of selected asset IDs to lock selected raw files.
*   `POST /media/approve/<booking_id>` : Clients lock final edited assets, moving status to `Completed`.

---

## 5. Key Implementation Guidelines

### 5.1. File Security & Storage Layout
*   Upload directories are organized hierarchically outside the public web root to prevent unauthorized direct asset crawling:
    ```
    /storage/
    └── projects/
        └── {booking_id}/
            ├── raw/
            └── edited/
    ```
*   Only authenticated users linked to a specific booking can stream file assets via Flask buffer relays (`send_from_directory` with active RBAC session verification).

### 5.2. Password Security & Cryptography
*   Plaintext passwords are strictly banned.
*   Backend hashing must utilize **bcrypt** or secure SHA-256 PBKDF2 cryptography algorithms (e.g., via Python's Werkzeug security helpers):
    ```python
    from werkzeug.security import generate_password_hash, check_password_hash
    ```

### 5.3. Error Handling & Exception Management
*   Secure database rollback policies inside standard `try-except-finally` blocks.
*   All file-system operations are protected against relative-path traversals using `secure_filename`:
    ```python
    from werkzeug.utils import secure_filename
    ```
*   Standard HTTP error handler templates are designed for `403 Forbidden`, `404 Not Found`, and `500 Server Error`.
