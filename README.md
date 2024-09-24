# Serverless Web Application for Dynamic Data Submission Using AWS S3, API Gateway, Lambda, and DynamoDB
# Complete Documentation
https://docs.google.com/document/d/1vNNRykGt3B1XoaifaYFZ0CgXzy82Ldq37QuhTyrWJXk/edit?usp=sharing
# Introduction
This project is a serverless web application built on AWS, by using cloud services to provide a scalable and cost-efficient solution. The application uses Amazon S3 for static website hosting,a website which collects basic user information as a form submission. The form’s HTML code invokes AWS API Gateway which sends structured event to Lambda function which puts the data into DynamoDB table. This architecture demonstrates the power of serverless computing, reducing operational complexity and scaling automatically with user demand
# Architecture
![ss](https://github.com/user-attachments/assets/f66cf49d-8b18-479e-a9cc-d95ded1aa3fd)
# Tech Stack
- **Frontend**: HTML (hosted on S3)
- **Backend**: AWS Lambda (Node.js)
- **Database**: DynamoDB
- **API**: AWS API Gateway
# Deployment

## [View Deployment Guide](.DEPLOYMENT.md)
This file provides comprehensive steps for deploying the serverless web application on AWS. It ensures that users can successfully deploy the application in their AWS environment.

# Challenges Faced

## [View Challenges Encountered](.CHALLENGES.md)
This file outlines key challenges faced during the development of the serverless web application using AWS services. Each challenge details the error, solution, and outcome.

# Future Improvements

I will consider exploring future enhancements such as user authentication with AWS Cognito, Enhanced Validation for better client- and server-side validation to improve user experience, Frontend Framework from vanilla HTML to a modern framework like React or Vue.js for better scalability and performance and will continuously keep updating the portfolio with new projects and achievements.

# Conclusion

This serverless web application demonstrates the power and flexibility of AWS services such as S3, API Gateway, Lambda, and DynamoDB to build scalable and efficient web applications without server management. By utilizing a serverless architecture, the project ensures cost-effectiveness, scalability, and ease of maintenance. The application successfully enables users to form submissions and store dynamic data. This project serves as a robust example of leveraging cloud technology to build modern, scalable, and cost-efficient web solutions.

