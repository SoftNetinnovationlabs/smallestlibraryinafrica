# from docx import Document
# from docx.shared import Inches

# # Create the document
# doc = Document()
# doc.add_heading('NutriPulse – Web Application Plan & System Overview', 0)

# # Founder & Development Info
# doc.add_heading('1. Founder & Development Info', level=1)
# doc.add_paragraph("Founder: Benard\nDeveloped by: SoftNet Kenya")

# # App Overview
# doc.add_heading('2. App Overview', level=1)
# doc.add_paragraph("""
# NutriPulse is a web-based nutrition management platform designed for clinical nutritionists, dietitians, and healthcare professionals to manage patient dietary care efficiently. 
# It offers personalized meal planning, progress tracking, health data analysis, and facilitates collaboration with patients and healthcare providers.
# """)

# # Target Users
# doc.add_heading('3. Target Users', level=1)
# doc.add_paragraph("""
# 1. Nutritionists & Dietitians
# 2. Clinics & Hospitals
# 3. Patients (with chronic illnesses like diabetes, obesity, hypertension, etc.)
# 4. Wellness centers
# """)

# # Core Features
# doc.add_heading('4. Core Features', level=1)
# doc.add_paragraph("""
# 1. Patient Registration & Profile Management
# 2. Intake Form with Medical & Dietary History
# 3. Personalized Meal Plan Generator
# 4. Health Metrics Logging (BMI, Glucose, BP, etc.)
# 5. Progress Charts and Reporting
# 6. Appointment Scheduling & Notifications
# 7. Communication System (Chat/Notes)
# 8. Secure Document Sharing (e.g., Lab reports)
# 9. Role-based Access (Admin, Nutritionist, Patient)
# 10. Payment Integration (For clinics if needed)
# """)

# # Tech Stack
# doc.add_heading('5. Tech Stack (MERN)', level=1)
# doc.add_paragraph("""
# - Frontend: React.js + Tailwind CSS
# - Backend: Node.js + Express.js
# - Database: MongoDB
# - Authentication: JWT / OAuth
# - Hosting: Render / Vercel / Firebase (Frontend), MongoDB Atlas (DB)
# """)

# # Business Model - B2B
# doc.add_heading('6. Business Model (B2B)', level=1)
# doc.add_paragraph("""
# NutriPulse will be licensed to clinics and healthcare professionals on a subscription basis.
# Each clinic pays monthly/yearly to access the platform for their team and patients.
# Optional: add SMS/email credit packages, premium analytics tools, or API access.
# """)

# # Use Case Example: Diabetic Patient
# doc.add_heading('7. Example Use Case: Diabetic Patient', level=1)
# doc.add_paragraph("""
# - Patient signs up at a clinic partnered with NutriPulse.
# - Nutritionist Lavenda logs the patient's health info and goals.
# - System generates a customized diabetes-focused meal plan.
# - Patient logs glucose readings and meals daily.
# - Nutritionist monitors progress, modifies plans, and sends updates.
# - Patient gets notifications and visual reports weekly.
# """)

# # Next Steps
# doc.add_heading('8. Next Steps', level=1)
# doc.add_paragraph("""
# 1. Finalize UI/UX design for the MVP.
# 2. Develop patient and nutritionist dashboards.
# 3. Implement appointment & messaging systems.
# 4. Pilot with a local clinic or hospital.
# 5. Gather feedback and iterate.
# 6. Explore Android app (Kotlin) development later.
# """)

# # Save the document
# doc_path = "/mnt/data/NutriPulse_WebApp_Plan.docx"
# doc.save(doc_path)

# doc_path
