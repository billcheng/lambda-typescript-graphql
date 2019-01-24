import { APIGatewayEvent, Context, APIGatewayProxyResult, Callback } from 'aws-lambda';
import { renderGraphiQL } from './graphiql/renderGraphiQL';
import { post } from './post';

export const lambdaHandler = (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {

    try {
        switch (event.httpMethod) {
            case 'POST':
                return post(event, context);

            case 'GET':
                return process.env.AWS_SAM_LOCAL ? get(event, context) : null;

            case 'OPTIONS':
                return options(event, context);
        }
    } catch (e) {
        return Promise.resolve({
            statusCode: 500,
            body: e.toString()
        });
    }

};

function get(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {

    try {
        const params = event.queryStringParameters || {};
        const query = params.query || '';
        const variables = JSON.parse(params.variables || '{}');
        const operationName = params.operationName || '';
        const result = ``;

        const body = renderGraphiQL({
            query,
            variables,
            operationName,
            result
        });

        return Promise.resolve({
            statusCode: 200,
            headers: {
                'Content-Type': `text/html; charset=utf-8`
            },
            body
        });
    } catch (e) {
        console.log(e);
        throw e;
    }
}

function options(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
    return Promise.resolve({
        statusCode: 204,
        headers: {
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
            'Access-Control-Allow-Origin': '*'
        },
        body: null
    });
}