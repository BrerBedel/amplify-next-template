"use client";
import { useEffect, useState } from "react";
import { generateClient, GraphQLResult } from "aws-amplify/api";
import { listEMRS } from "@/ui-components/graphql/queries";
import Link from "next/link";
import { Button, Card, Heading } from "@aws-amplify/ui-react";

// ✅ Define the expected type for an EMR object
interface EMR {
  emrId: string;
  name: string;
  authType: string;
  baseEndpoint: string;
  requiresCustomerSpecificEndpoint: boolean;
}

const client = generateClient();

export default function EMRListPage() {
  const [emrs, setEMRs] = useState<EMR[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEMRs() {
      try {
        // ✅ Force TypeScript to recognize this as a query response
        const response = (await client.graphql({
          query: listEMRS,
        })) as GraphQLResult<{ listEMRs: { items: EMR[] } }>;

        // ✅ Ensure data exists before updating state
        if (response.data?.listEMRs?.items) {
          setEMRs(response.data.listEMRs.items);
        } else {
          console.error("No EMRs found.");
        }
      } catch (error) {
        console.error("Error fetching EMRs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEMRs();
  }, []);

  if (loading) return <p>Loading EMRs...</p>;

  return (
    <Card padding="20px">
      <Heading level={3}>EMR List</Heading>
      {emrs.length === 0 ? (
        <p>No EMRs available.</p>
      ) : (
        emrs.map((emr) => (
          <div key={emr.emrId}>
            <p>{emr.name} - {emr.authType}</p>
            <Link href={`/emr/update/${emr.emrId}`}>
              <Button>Edit</Button>
            </Link>
          </div>
        ))
      )}
    </Card>
  );
}
