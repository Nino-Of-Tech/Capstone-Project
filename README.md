# Sekofia Hospital Dashboard
 
## Description

### Introduction to the Project
Sekofia Hospital Dashboard is a desktop application built to address inefficiencies in health insurance verification within hospitals in Nigeria. The platform aims to streamline administrative processes for hospitals, reduce long patient wait times, and improve patient experiences by allowing hospital staff to quickly verify insurance claims and coverage statuses.

### Background / Problem Statement
The current healthcare system in Nigeria, like much of Africa, suffers from fragmented systems, where paper-based record-keeping and manual processes like email correspondence and phone calls slow down insurance approvals. On average, patients in Nigeria can wait up to 181 minutes for verification, as noted by studies such as the European Journal of Medical and Health Sciences. These inefficiencies discourage people from enrolling in health insurance plans, contributing to Nigeria’s low Universal Health Coverage (UHC) rate of only 3%.

### Solution
The Sekofia Hospital Dashboard aims to digitize and automate the insurance verification process through a hospital dashboard, reducing patient wait times and simplifying the verification workflow for hospital staff. By integrating insurance companies and basic patient records into one platform, the dashboard allows hospitals to verify coverage in real-time, enhancing the overall healthcare delivery process.


## Product/Solution
### Overview of the Solution
The Sekofia Healthcare Dashboard is an all-in-one platform for hospitals to manage insurance verifications, view basic patient records, and track claim histories. It provides real-time information on patients' insurance status and integrates with various insurance providers.

### How It Solves the Problem
By replacing the manual processes of insurance verification, the Sekofia Hospital Dashboard reduces the approval waiting times and helps hospitals track insurance claims quickly, therefore removing the existing claims paperwork processes. The platform improves patient experiences by speeding up the verification process and minimizing administrative overhead.

### Features
* Insurance Status Verification: Allows hospitals to quickly check if a patient’s insurance is active and valid. 
* Approved Insurance Companies View: Displays the list of insurance companies that the hospital is partnered with.
* Patient Record Management: Hospital staff can view details of patients including their past insurance claims and appointments.
* Appointment Requests: The system enables staff to approve or decline patient appointment requests based on their insurance status.
* Claims History Tracking: Provides a full overview of patient claims history to help hospitals manage administrative processes effectively.

### Goal of the Solution
* Reduce Waiting Times: Improve the verification process to decrease the time patients spend waiting.
* Simplify Administrative Work: Provide hospitals with easy-to-access information on insurance claims and statuses to reduce manual paperwork.
* Enhance Patient Experience: Improve the quality of care by allowing healthcare providers to focus on patient needs rather than administrative tasks.


## How to Set Up the Environment and the Project

1. Clone the Repository:

```bash
git clone https://github.com/[your_repo]/sekofia-healthcare-dashboard.git
cd sekofia-healthcare-dashboard
```

2. Install Dependencies: Run the following command to install the necessary libraries:

```bash
pip install -r requirements.txt
```

3. Configure Environment Variables: Ensure that any sensitive information, like API keys for insurance companies, is stored securely in a ```.env``` file.

4. Run the Application: To start the application, run:

```bash
python app.py
```

### Designs

Below are screenshots to the Figma mockups, and desktop app interface designs. 

##### Figma Mockups

<p align="center">
  <img src="https://res.cloudinary.com/dbisqdemp/image/upload/v1728509753/Screenshot_2024-10-09_231625_upn0nz.png" alt="Sign in page" width="45%">
  <img src="https://res.cloudinary.com/dbisqdemp/image/upload/v1728509873/Screenshot_2024-10-09_233707_ujdr6a.png" alt="Patient page" width="45%">
</p>

##### Desktop App Interface

<p align="center">
  <img src="https://res.cloudinary.com/dbisqdemp/image/upload/v1728509858/Screenshot_2024-10-09_233641_ibftof.png" alt="Home page" width="45%">
  <img src="https://res.cloudinary.com/dbisqdemp/image/upload/v1728509858/Screenshot_2024-10-09_233657_krnynf.png" alt="Insurance page" width="45%">
</p>

##### Other Screenshots:

<p align="center">
  <img src="https://res.cloudinary.com/dbisqdemp/image/upload/v1728509925/Screenshot_2024-10-09_233826_wblmih.png" alt="Mockup images 1" width="45%">
  <img src="https://res.cloudinary.com/dbisqdemp/image/upload/v1728509925/Screenshot_2024-10-09_233808_wvc4mk.png" alt="Mockup images 2" width="45%">
</p>

## Tech Stack: 

* Python (Flask), HTML, CSS, JavaScript, SQLite/MySQL for database management.

## Deployment Plan
Given the short timeline for project completion, here’s a cost-effective and time-efficient deployment plan:

* Hosting Platform: Use a cloud-based solution like Heroku for initial deployment, which is both free and easy to use. This will help me test the product before final deployment. Then I can later migrate to a dedicated server if needed.

* Backend Infrastructure: I will use Python Flask for the backend as it is lightweight and can handle the project’s current scope. Once the app is more robust, I plan to scale it using a more complex backend infrastructure.

* Testing: If time permits, I'm exploring the possibility of deploying the solution to 1-2 hospitals to gather feedback in early November. Then I can iterate based on the feedback, making necessary adjustments before the final presentation.

* Presentation: Plan to finalize the full product by the third week of November, ensuring that all bugs and usability issues are resolved before the capstone defense.


## Author: 
* Nino Chibuzor Nwachukwu [c.nwachukwu@alustudent.com]