import { buildSchema, graphql } from 'graphql';
import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

import { course } from './resolvers/course';

const schema = buildSchema(`
        type Query {
            course(id: Int): Course
        }

        type Course {
            id: Int
            title: String
            author: String
            description: String
            topic: String
            url: String
        }
    `);

export async function post(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
    try {
        const body = JSON.parse(event.body);

        const result = await graphql({
            schema,
            source: body.query,
            variableValues: body.variables,
            rootValue: {
                course
            }
        });

        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(result)
        };

        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
}