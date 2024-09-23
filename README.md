# Serverless Web Application for Dynamic Data Submission Using AWS S3, API Gateway, Lambda, and DynamoDB
# Introduction
This project is a serverless web application built on AWS, by using cloud services to provide a scalable and cost-efficient solution. The application uses Amazon S3 for static website hosting,a website which collects basic user information as a form submission. The form’s HTML code invokes AWS API Gateway which sends structured event to Lambda function which puts the data into DynamoDB table. This architecture demonstrates the power of serverless computing, reducing operational complexity and scaling automatically with user demand
# Architecture
# Complete Documentation
https://docs.google.com/document/d/1vNNRykGt3B1XoaifaYFZ0CgXzy82Ldq37QuhTyrWJXk/edit?usp=sharing
# Tech Stack
- **Frontend**: HTML (hosted on S3)
- **Backend**: AWS Lambda (Node.js)
- **Database**: DynamoDB
- **API**: AWS API Gateway
# Deployment
## Step 1: S3 Bucket Creation

- **S3 Bucket:**
  - Created an S3 bucket to host the static website files.
  
- **File Upload:**
  - Uploaded the website files (HTML, CSS, JS) into the S3 bucket.
  
- **Static Website Hosting:**
  - Enabled static website hosting for the S3 bucket to make the site publicly accessible.
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

## Step 3: Lambda Function Creation

- **Lambda Function:**
  - Created a Lambda function using JSON, serving as an intermediary between the S3 static website and DynamoDB.
  
- **AWS SDK Operations:**
  - Used the AWS SDK to perform important operations such as:
    - `PutItem`
    - `GetItem`
    - `Query`
    - `Scan`
    - `UpdateItem`
    - `DeleteItem`

### Testing the Lambda Function

- **Status Code 200:**
  - Upon testing, the function returned a `statusCode 200`, indicating that data has been successfully entered into the DynamoDB table.
  
- **Confirmed Entry:**
  - Verified the DynamoDB table to confirm that the data was inserted successfully.

---

## Step 4: API Gateway Creation

- **POST API:**
  - Created a POST API to invoke the Lambda function, which serves as an intermediary between the S3 website and DynamoDB.
  
- **CORS (Cross-Origin Resource Sharing):**
  - Enabled CORS to allow the S3 static website to communicate with the API.

### Testing the API Gateway

- **Testing:** 
  - Submitted the request body using the API test page, confirming that the API Gateway is working successfully.

---

## Step 5: IAM Permissions

- **IAM Role for Lambda:**
  - Granted the necessary permissions to the Lambda function via IAM (Identity and Access Management) to allow it to access the DynamoDB table.
  
- **Allow Policy:**
  - Created an allow policy in JSON format to give the Lambda function the required access.

---

## Step 6: HTML Form Modification

- **Form Submission:**
  - Modified the HTML code to invoke the API when the user clicks on the submit button. The API sends the form data to DynamoDB via the Lambda function.

---

### Conclusion

This project demonstrates a basic serverless web application architecture, utilizing AWS services to handle scalable form submissions and data storage with minimal operational overhead.
