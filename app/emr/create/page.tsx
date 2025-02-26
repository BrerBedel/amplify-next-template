"use client"; // Ensures the component runs on the client side
import EMRCreateForm from "@/ui-components/EMRCreateForm"; // Import the generated form
import { Card, Heading } from "@aws-amplify/ui-react";

export default function CreateEMRPage() {
  return (
    <Card padding="20px">
      <Heading level={3}>Create a New EMR</Heading>
      <EMRCreateForm 
        onSuccess={(fields) => alert(`Successfully created: ${fields.name}`)}
        onError={(fields, errorMessage) => alert(`Error: ${errorMessage}`)}
      />
    </Card>
  );
}