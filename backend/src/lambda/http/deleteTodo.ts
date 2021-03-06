import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

import { deleteTodo } from '../../businessLogic/todoLogic'


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
 const todoId = event.pathParameters.todoId
 const jwtToken = event.headers.Authorization.split(' ')[1]
 await deleteTodo(todoId, jwtToken);

 // TODO: Remove a TODO item by id
 return {
   statusCode: 204,
   headers: {
     'Access-Control-Allow-Origin': '*'
   },
   body: ''
 }
}
