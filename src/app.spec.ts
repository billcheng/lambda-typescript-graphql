import { lambdaHandler } from './app';
import { APIGatewayEvent, Context } from 'aws-lambda';

const event: APIGatewayEvent = {
    body: null,
    headers: {},
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: 'graphql',
    pathParameters: {},
    queryStringParameters: null,
    requestContext: null,
    resource: null,
    stageVariables: {}
}, context: Context = null;

describe('Tests index', () => {
    it('verifies successful response', async () => {
        event.httpMethod = 'OPTIONS';

        const result = await lambdaHandler(event, context);

        expect(result.statusCode).toEqual(204);
    });
});

