# Challenges Faced

## CHALLENGE 01: Website Access Permission Issue on S3 Static Website Hosting

**Error:**
Website returned an "Access Denied" error when accessing the static website URL.

![unnamed](https://github.com/user-attachments/assets/73f462b0-4d92-495f-b1d6-f1016744461e)


**Solution:**
- Modified the **Block public access** bucket settings, allowed ACL, and enabled access point policies.
- After further research in AWS documentation, I discovered that a **Bucket Policy** was required for public access.
- Implemented a simple bucket policy allowing objects to be publicly accessible.

![unnamed (2)](https://github.com/user-attachments/assets/9a849975-f022-4682-8937-1b1ac44c01b8)

**Result:**
The static website URL is now accessible.

![unnamed (3)](https://github.com/user-attachments/assets/db5d70b1-6f46-4197-8639-d71cb07ffc55)

---

## CHALLENGE 02: Reference Error in Lambda Function

**Error:**
Received Reference Error in Lambda Function:

```json
{
  "errorType": "ReferenceError",
  "errorMessage": "require is not defined in ES module scope, you can use import instead",
  "trace": []
}
```

![unnamed (4)](https://github.com/user-attachments/assets/2cf3d307-4cd0-4104-9435-ef924019913a)

It is giving reference error that instead of “require” function I have to use “import” function because require function is not included in the ES module scope

**Solution:**

Lambda now require ES module syntax so I will  modify my code by using the import statement instead of require
So I will change 

Replace this
- "const AWS = require('aws-sdk');"

With this
- "import AWS from 'aws-sdk';"

**Result:**

![unnamed (5)](https://github.com/user-attachments/assets/269eaf75-cef4-4cbd-a996-17c5f9cad2f5)

Now the data is entered successfully

## CHALLENGE 03: Form fails to submit (Error generated due to CORS Policy)

**Error:**
I checked with inspect option on console and it says “API has been blocked by CORS policy

![unnamed (8)](https://github.com/user-attachments/assets/41ec26cb-f48f-4d51-b313-589907ef124e)

**Solution:**

I reconfigured my CORS setting, allowed Access-Control-Allow-Methods as OPTIONS AND POST so the post request can get through
Also in the Access-Control-Allow-Origin I put “*” to allow all resources

![unnamed (7)](https://github.com/user-attachments/assets/f71d4505-4b89-427e-b005-c12a4e27e0bc)

**Result:**

![unnamed (9)](https://github.com/user-attachments/assets/3727867a-7849-442d-9d56-03ba504242fd)

The form has been successfully submitted now, after I updated the CORS policy

## CHALLENGE 04: Data submitted through form does not show up in DynamoDB table

**Error:**

![unnamed (6)](https://github.com/user-attachments/assets/aa1ad19b-9a5a-4da3-9529-adaf98aecd0e)

![unnamed (11)](https://github.com/user-attachments/assets/a1dc4681-b14a-460b-85b4-b57a5e8c52e1)

Data is submitting successfully but not data entry not showing up in dynamoDB table

![unnamed (12)](https://github.com/user-attachments/assets/07bc9917-8776-44fe-9046-992df2eafc77)

The data I just submitted does not get updated in the dynamoDB table

**Solution:**

![unnamed (13)](https://github.com/user-attachments/assets/39b0f7a8-c1f5-4603-9ac0-d5b0c4e81379)

Lambda Proxy Integration should be turned ON to allow API to send structured data to Lambda so that Lambda can process and understand it

**Result:**

![unnamed (14)](https://github.com/user-attachments/assets/9fe34745-3a2d-44ce-84fe-1522e2339ff7)

The data has been successfully updated in DynamoDB table records

