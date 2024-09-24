# This is a step by step Deployment Guide

## Step 1: S3 Bucket Creation

- **S3 Bucket:**
  - Created an S3 bucket to host the static website files.
  
- **File Upload:**
  - Uploaded the website files (HTML, CSS, JS) into the S3 bucket.
  
- **Static Website Hosting:**
  - Enabled static website hosting for the S3 bucket to make the site publicly accessible.
 
![unnamed (15)](https://github.com/user-attachments/assets/9bbfa09c-baee-48ee-8e32-5594bb97f036)

![unnamed](https://github.com/user-attachments/assets/5aa1150d-5958-49a1-82f1-7037ac1004bb)

## Step 2: DynamoDB Table Creation

- **Primary Key:** 
  - Added `Email ID` as the primary key since it's a unique identifier for each user, which helps avoid potential conflicts or duplicates (e.g., users with the same name or location).
  
- **Attributes:** 
  - Added website form attributes to store user data, including:
    - `Name`
    - `Phone Number`
    - `Age`
    - `Location`

---

![unnamed (1)](https://github.com/user-attachments/assets/a94d0fc5-aa89-4b0a-b77c-6c9ab80bd2a0)

## Step 3: Lambda Function Creation

- **Lambda Function:**
  - Created a Lambda function using JSON, serving as an intermediary between the S3 static website and DynamoDB.

  ![unnamed (2)](https://github.com/user-attachments/assets/c7565c26-b650-4af3-a6f9-2e547fd7a955)

- **AWS SDK Operations:**
  - Used the AWS SDK to perform important operations such as:
    - `PutItem`
    - `GetItem`
    - `Query`
    - `Scan`
    - `UpdateItem`
    - `DeleteItem`

  ![unnamed (3)](https://github.com/user-attachments/assets/85f357eb-77d7-46e1-885a-00f083a96f5b)

### Testing the Lambda Function

- **Status Code 200:**
  - Upon testing, the function returned a `statusCode 200`, indicating that data has been successfully entered into the DynamoDB table.

  ![unnamed (4)](https://github.com/user-attachments/assets/66aa448a-5cae-4cba-9ae4-ec3fe216f05a)

- **Confirmed Entry:**
  - Verified the DynamoDB table to confirm that the data was inserted successfully.
---

![unnamed (6)](https://github.com/user-attachments/assets/d63cda3d-1e7a-4901-9cf2-881f4a21759d)

## Step 4: API Gateway Creation

- **POST API:**
  - Created a POST API to invoke the Lambda function, which serves as an intermediary between the S3 website and DynamoDB.

![unnamed (7)](https://github.com/user-attachments/assets/26679e12-1b78-4f6c-8aa8-dce6f9751529)

- **CORS (Cross-Origin Resource Sharing):**
  - Enabled CORS to allow the S3 static website to communicate with the API.

![unnamed (5)](https://github.com/user-attachments/assets/8dba0cec-d2f5-44d8-860d-21b6af9eee2a)

### Testing the API Gateway

- **Testing:** 
  - Submitted the request body using the API test page, confirming that the API Gateway is working successfully.

---

![unnamed (10)](https://github.com/user-attachments/assets/52d4330e-346d-4d4c-87b7-13fed9876864)

## Step 5: IAM Permissions

- **IAM Role for Lambda:**
  - Granted the necessary permissions to the Lambda function via IAM (Identity and Access Management) to allow it to access the DynamoDB table.
  
- **Allow Policy:**
  - Created an allow policy in JSON format to give the Lambda function the required access.

---

![unnamed (11)](https://github.com/user-attachments/assets/ddd5ee86-2880-4ee0-98c8-63aeb557a648)

## Step 6: HTML Form Modification

- **Form Submission:**
  - Modified the HTML code to invoke the API when the user clicks on the submit button. The API sends the form data to DynamoDB via the Lambda function.

---

![unnamed (12)](https://github.com/user-attachments/assets/cb0c29c0-fa5e-4c7c-a721-95e0040101fe)

## Final Result

![unnamed (9)](https://github.com/user-attachments/assets/f5dc44f2-ac6c-4690-8e4e-bb2a11f77dac)

![unnamed (13)](https://github.com/user-attachments/assets/6c1c7edf-5676-4a2f-90e7-dfcb2f15fc62)

![unnamed (14)](https://github.com/user-attachments/assets/4df07101-c386-4124-9322-37dd99713ca8)

![unnamed (16)](https://github.com/user-attachments/assets/20a20acb-b65a-4422-9b10-98f62c40f013)

S3 Hosted static website successfully invoking the API which sends data to lambda function which puts submitted data records into DynamoDB table database
