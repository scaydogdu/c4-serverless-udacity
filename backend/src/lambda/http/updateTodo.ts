import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'

import { updateTodo } from '../../businessLogic/todoLogic'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
 const todoId = event.pathParameters.todoId;
 const updatedTodo: UpdateTodoRequest = JSON.parse(event.body);
 const jwtToken = event.headers.Authorization.split(' ')[1];
 await updateTodo(todoId,updatedTodo,jwtToken);


 return {
   statusCode: 204,
   headers: {
     'Access-Control-Allow-Origin' : '*'
   },
   body: ''
 }
 // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
}
