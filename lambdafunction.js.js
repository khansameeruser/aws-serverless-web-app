const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // Parse the incoming request body
    const body = JSON.parse(event.body);

    // Define the parameters for the DynamoDB put operation
    const params = {
        TableName: 'websitetable',  // DynamoDB table name
        Item: {
            id: body.id,  // Partition key (unique identifier)
            EmailID: body.email,  
            Name: body.name,
            PhoneNumber: body.PhoneNumber,
            Age: body.age,
            Location: body.location
        }
    };

    // Insert the item into DynamoDB
    try {
        await dynamo.put(params).promise();
        return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data inserted successfully!' }),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type', // Add this line
    }
};
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not insert data' }),
            headers: {
                'Access-Control-Allow-Origin': '*'  // Allow cross-origin requests from S3
            }
        };
    }
};