# Product Requirements Document (PRD)

## Project Name: Studio Management System (SMS)
**Status:** Proposed | **Target Release:** MVP | **Author:** Anvith Kumar  
**Target Audience:** Customers, Studio Cameramen, Editors, and Studio Administrators

---

## 1. Executive Summary & Business Goals
The **Studio Management System (SMS)** is an end-to-end web-based workflow automation platform designed for modern photography and production studios. Traditional studio operations are plagued by fragmented communication, manual file sharing (via physical drives or unstructured cloud links), and inefficient photo-selection loops.

The primary goals of this product are:
*   **Centralize Operations:** Unify customers, cameramen, and editors under a single role-based application.
*   **Streamline Workflows:** Automate the complete pipeline from booking assignments to photo uploads, customer selection, photo editing, and final digital album delivery.
*   **Improve Security:** Secure user data, client galleries, and asset folders through role-based access control and temporary passcode/OTP authentications.
*   **Accelerate Turnaround Time:** Reduce the back-and-forth selection and editing cycles through real-time status tracking and interactive web portals.

---

## 2. User Roles & Personas
The system serves four distinct user roles, each with custom dashboards and workflows:

| Role | Description | Primary Actions |
| :--- | :--- | :--- |
| **Customer (Client)** | The end-client who hires the studio. | Book slots, view uploaded raw photos, select favorites for editing, approve final deliverables, download completed albums. |
| **Cameraman (Photographer)** | The field specialist capturing the media. | View assigned shoots/bookings, upload raw captured images to specific client folders, track assignment status. |
| **Editor** | The digital asset artist. | Retrieve customer-selected raw images, upload edited versions, update post-production status, deliver final high-resolution assets. |
| **Admin (Studio Owner/Manager)** | The orchestrator of operations. | Manage bookings, assign cameramen/editors to specific client jobs, oversee system-wide workflows, track overall progress. |

---

## 3. Product Features & Functional Requirements

### 3.1. Authentication & Role-Based Dashboards
*   **Secure Sign-In:** Users log in using their email and password, backed by a secure session token.
*   **Email OTP Verification:** A one-time password (OTP) verification layer to ensure client identity and secure access to high-value assets during account registration or password recovery.
*   **Dynamic Dashboard Redirection:** Upon authentication, the system automatically redirects the user to their specific dashboard environment (Admin, Customer, Cameraman, or Editor).

### 3.2. Core Workflow Engine (The 7-Step Pipeline)

```
[1. Booking] ➔ [2. Assignment] ➔ [3. Raw Upload] ➔ [4. Selection] ➔ [5. Editing] ➔ [6. Approval] ➔ [7. Album Delivery]
```

1.  **Booking Stage (Customer/Admin):**
    *   The customer or admin initiates a booking slot (event type, date, location).
    *   The booking status starts as `Pending Approval` and moves to `Scheduled` once confirmed.
2.  **Assignment Stage (Admin):**
    *   The administrator assigns a specific **Cameraman** and **Editor** to the scheduled booking.
3.  **Raw Photo Upload (Cameraman):**
    *   Post-event, the assigned Cameraman accesses their dashboard to upload the raw unedited photos directly to the system.
    *   Files are grouped into a dedicated event folder under the customer’s profile.
    *   The status updates to `Raw Uploaded`.
4.  **Client Selection (Customer):**
    *   The Customer receives a notification to log in and review the raw proofs.
    *   Using an interactive gallery, the Customer selects/stars specific images to be edited.
    *   Once selection is locked, the status transitions to `Selection Completed`.
5.  **Editing & Post-Production (Editor):**
    *   The designated Editor’s dashboard displays the list of customer-selected images.
    *   The Editor downloads the raw files, performs color grading and retouching, and uploads the edited files.
    *   Status shifts to `Edited / Review Ready`.
6.  **Client Approval Loop (Customer):**
    *   The Customer reviews the high-resolution edited proofs on their portal.
    *   The Customer can either request minor revisions or mark the images as `Approved`.
7.  **Final Digital Album Delivery (System):**
    *   Once approved, the system generates a downloadable, secure link for the final digital album.
    *   The project status is set to `Delivered & Completed`.

### 3.3. Asset & Folder Management
*   **Automatic Directory Isolation:** For every new booking, the system creates structured directories to prevent file collisions.
*   **Bulk Image Upload:** Supports secure, chunked, or multi-file uploads with visual progress bars.
*   **Status Indicators:** Visual badges (`Raw Uploaded`, `Selection Locked`, `Editing In Progress`, `Approved`, `Delivered`) displayed on all management dashboards to track assignment status.

---

## 4. Non-Functional Requirements (NFRs)

### 4.1. Security & Compliance
*   **Secure Session Management:** Encrypted cookie-based sessions.
*   **Role-Based Access Control (RBAC):** Strict validation on all endpoints to prevent unauthorized role escalation (e.g., ensuring Customers cannot access Admin endpoints, and Editors can only view assigned projects).
*   **Secure Delivery:** High-resolution digital assets must be protected against hotlinking; final downloads are gated behind active user sessions.

### 4.2. Performance & Storage Constraints
*   **Storage Management:** Since raw image files are exceptionally large, the system must utilize optimized compressed preview thumbnails (JPEG/WebP) for rapid client loading, while keeping raw files stored securely.
*   **Upload Limits:** Maximum file size restrictions must be clearly enforced at the frontend to avoid server timeouts.

### 4.3. Usability & Device Accessibility
*   **Mobile-Responsive Gallery:** Customers must be able to perform selection, view statuses, and approve final albums seamlessly on mobile devices, tablets, and desktops.
*   **Intuitive Grid Interface:** Simple grid layout with swipe-to-scroll, keyboard navigation, and clear select/deselect overlays.

---

## 5. Scope & Future Iterations

### In-Scope (MVP)
*   User registration and secure OTP-based login.
*   Admin dashboard for manual cameraman and editor mapping.
*   Basic image uploading for Cameramen and Editors.
*   Interactive photo selection grid for Customers.
*   Basic project status tracker.

### Out of Scope (Future Phases)
*   **In-App Messaging:** Direct chat threads between Customers, Cameramen, and Editors.
*   **Payment Gateway Integration:** Direct payment processing for booking deposits and final installment release.
*   **Auto-Watermarking:** Automated custom digital watermarks applied to raw/proof files before client approval to protect copyright.
