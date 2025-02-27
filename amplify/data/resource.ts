import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a
  .schema({
    // ✅ Existing To-Do App Model
    Todo: a
      .model({
        content: a.string(),
        isDone: a.boolean(), // ✅ Added "isDone" field as a boolean
      })
      .authorization((allow) => [allow.publicApiKey()]),

    EMR: a
      .model({
        emrId: a.id().required(),
        name: a.string().required(),
        authType: a.enum(["CLIENTSECRET", "OAUTH2"]),
        baseEndpoint: a.string().required(),
        requiresCustomerSpecificEndpoint: a.boolean().required(),
        customers: a.hasMany("EMRCustomer", "emrId"), // ✅ Added hasMany relationship
      })
      .authorization((allow) => [allow.publicApiKey()])
      .identifier(["emrId"]),

    EMRCustomer: a
    .model({
      customerId: a.id().required(),
      name: a.string().required(),
      emrId: a.id().required(),
      endpoint: a.string(),
      credentials: a.customType({
        clientId: a.string(),
        clientSecret: a.string(),
        jwtToken: a.string(),
      }),
      emr: a.belongsTo("EMR", "emrId"), // ✅ Correct belongsTo relationship with EMR
      triggers: a.hasMany("Trigger", "customerId"), // ✅ Added hasMany relationship to Trigger
    })
      .authorization((allow) => [allow.publicApiKey()])
      .identifier(["customerId"]),

    Trigger: a
    .model({
      triggerId: a.id().required(),
      customerId: a.id().required(),
      status: a.enum(["PENDING", "SUCCESS", "FAILED"]),
      timestamp: a.datetime().required(),
      customer: a.belongsTo("EMRCustomer", "customerId"), // ✅ Now correctly linked back to EMR_Customer
    })
      .authorization((allow) => [allow.publicApiKey()])
      .identifier(["triggerId"]),
  });

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
