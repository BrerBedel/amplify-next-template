"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EMRUpdateForm from "@/ui-components/EMRUpdateForm";
import { generateClient, GraphQLResult } from "aws-amplify/api";
import { getEMR } from "@/ui-components/graphql/queries";
import { Card, Heading } from "@aws-amplify/ui-react";

// ✅ Define the expected type for an EMR object
interface EMR {
  emrId: string;
  name: string;
  authType: string;
  baseEndpoint: string;
  requiresCustomerSpecificEndpoint: boolean;
}

const client = generateClient();

export default function UpdateEMRPage() {
  const params = useParams();
  const id = params.id as string; // Get EMR ID from URL
  const [emr, setEMR] = useState<EMR | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEMR() {
      try {
        // ✅ Force TypeScript to recognize this as a query response
        const response = (await client.graphql({
          query: getEMR,
          variables: { emrId: id },
        })) as GraphQLResult<{ getEMR: EMR }>;

        // ✅ Ensure data exists before updating state
        if (response.data?.getEMR) {
          setEMR(response.data.getEMR);
        } else {
          console.error("No EMR data found.");
        }
      } catch (error) {
        console.error("Error fetching EMR:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchEMR();
  }, [id]);

  if (loading) return <p>Loading EMR...</p>;
  if (!emr) return <p>EMR not found.</p>;

  return (
    <Card padding="20px">
      <Heading level={3}>Update EMR</Heading>
      <EMRUpdateForm
        emrId={id}
        eMR={emr} // Prefill form with EMR data
        onSuccess={() => alert("EMR updated successfully!")}
        onError={(fields, errorMessage) => alert(`Error: ${errorMessage}`)}
      />
    </Card>
  );
}
