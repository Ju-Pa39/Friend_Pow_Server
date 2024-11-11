## Friendly-Paws

---
###### 

## SRS

## Figma

### env guide
PORT=3000

DATABASE_URL="mysql://u:pw@localhost:3306/Friendly-Paws"

JWT_SECRET

GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET

CLOUDINARY_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

STRIPE_PUBLISHABLE_KEY

STRIPE_SECRET_KEY

STATIC_DIR

EMAIL_ADMIN

EMAIL_PASS

---
## ER-Diagram
![Project Logo](./image/Screenshot%202024-10-27%20103025.png) 

---
## API Documentation
### Endpoint role User-Admin 
http://localhost:3000/auth

|  Name  |Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Register|post|/register|-|-|-|{email,password ,confirmPassword}
|Login|post|/login|-|-|-|{ email, password }
|Forget Password|post|/forget-password|-|-|-|{ email }
|Reset Password|post|/reset-password/:token|Y|-|-|{ password }
|Google Login|post|/login-google/|-|-|-|{ googleId }

### Endpoint 
http://localhost:3000/user
|Name|Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Donate|post|/donate|-|-|-| {userId, total, payment_method, transaction_id, is_recurring, receipt_url} |

### Endpoint role User
http://localhost:3000/user
|Name|Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Send Email|post|/send-email|Y|-|-|{ recipient, subject, message }|
|Get Profile|get|/profile|Y|-|-|-|
|Edit Profile|patch|/edit-profile/:userId|Y|Y|-| { firstname, lastname, phone, email }|
|Donate|post|/donate|-|Y|-| { firstname, lastname, phone, email }|

### Endpoint role User
http://localhost:3000/event
|Name|Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Show Event|get|/showpages|-|-|-|-|
|Register Event|post|/regisevent|Y|-|-|{eventId}|

### Endpoint role User
http://localhost:3000/payment
|Name|Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Config|get|/config|-|-|-|-|
|Create Payment|post|/create-payment-intent|-|-|-|{ amount } |
|Confirm Payment|post|/confirm-payment|-|-|-|{userId, amount, paymentMethod  } |

### Endpoint role Admin
http://localhost:3000/admin
|Name|Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Report Event by Date|get|/report-event|Y|-|{ startDate, endDate }|-|
|Report Event All|get|/report-event-all|Y|-|-|-|
|Report List User|get|/report-list-user-event/:eventId|Y|Y|-|-|
|Report Adopt by Date|get|/report-adopt|Y|-|{ startDate, endDate }|-|
|Report Adopt All|get|/report-adopt-all|Y|-|-|-|
|Report Donation by Date|get|/report-Donation|Y|-|{ startDate, endDate }|-|
|Report Donation All|get|/report-Donation-all|Y|-|-|-|
|Report Pet All|get|/report-Pet-all|Y|-|-|-|
|Get All User|get|/users|-|-|-|-|
|Update User|put|/users/:id|-|Y|-|{email, firstname, lastname, phone, role}|
|Delete User|delete|/users/:id|-|Y|-|-|
|Get All Adopt Req|get|/all-adopts/:count/:page|-|Y|-|-|
|Edit Adopt Req|get|/edit-adopt-request/:id|-|Y|-|{select}|
|Show Dashboard|get|/dashboard|-|-|-|-|
|Show Donation|get|/manage-donation|-|-|{ startDate, endDate, page = 1, limit = 20 } |-|
|Update Donation|put|/manage-donation/:id|-|Y|-|{status}|
|Create Event|post|/events|Y|-|-|{ title_en, title_th, date_start, date_end, description_en, description_th, location } |
|Update Event|post|/updateEvent/:id|Y|Y|-|{ title_en, title_th, description_en, description_th, date_start, date_end, location, status }  |
|Delete Event|post|/deleteEvent/:id|Y|Y|-|-|
|Get Home content|get|/home-content|-|-|-|-|
|Manage Home content|put|/home-content/:id|-|Y|-|{ content_en, content_th }|
|Get About content|get|/about-content|-|-|-|-|
|Manage About content|put|/about-content/:id|-|Y|-|{video_url,header_en,header_th,description_en,description_th,help_title_en, help_title_th,help_content_en,help_content_th, content_en,content_th} |
|Get Contact content|get|/contact-info|-|-|-|-|
|Manage Contact content|put|/contact-info/:id|-|Y|-| { header_en,header_th, content_en,content_th,generalInfo_en,generalInfo_th,email,phone,openingTimes_en,openingTimes_th,address_en, address_th,latitude,longitude}|
|Get Donation content|get|/donation-content|-|-|-|-|
|Manage Donation content|put|/donation-content/:id|-|Y|-|{ data }|
|Get Event Banner|get|/event-banner'|-|-|-|-|
|Manage Event Banner|put|/event-banner/:id|-|Y|-|{ files }|

### Endpoint role Admin
http://localhost:3000/export
|Name|Method |Path |Authen | Params | Query | Body |
|:----: |:----:|:----:|:----:  |:----:|:----:|:----: |
|Export Donation Excel|post|/donations-report|Y|-|-|{donations}|
|Export Adopt Excel|post|/adopts-report|Y|-|-|{adopts}|
|Export Events Excel|post|/events-report|Y|-|-|{events}|
|Export Events List Excel|post|/events-list-report|Y|-|-|{events}|
|Export Pets Excel|post|/pets-report|Y|-|-|{pets}|







// petroute user(donation)  adminroute