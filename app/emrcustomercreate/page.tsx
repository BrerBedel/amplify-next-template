"use client"; // Ensures the component runs on the client side
import EMRCustomerCreateForm from "@/ui-components/EMRCustomerCreateForm"; // Import the generated form
import { Card, Heading } from "@aws-amplify/ui-react";

export default function CreateEMRCustomerPage() {
  return (
    <Card padding="20px">
      <Heading level={3}>Create a New EMR Customer</Heading>
      <EMRCustomerCreateForm 
        onSuccess={(fields) => alert(`Successfully created: ${fields.name}`)}
        onError={(fields, errorMessage) => alert(`Error: ${errorMessage}`)}
      />
    </Card>
  );
}
