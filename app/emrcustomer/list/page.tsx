"use client";
import { useEffect, useState } from "react";
import { generateClient, GraphQLResult } from "aws-amplify/api";
import { listEMRCustomers } from "@/ui-components/graphql/queries";
import Link from "next/link";
import { Button, Card, Heading } from "@aws-amplify/ui-react";

// ✅ Define the expected type for an EMR Customer object
interface EMRCustomer {
  customerId: string;
  name: string;
  endpoint?: string;
}

const client = generateClient();

export default function EMRCustomerListPage() {
  const [customers, setCustomers] = useState<EMRCustomer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        // ✅ Force TypeScript to recognize this as a query response
        const response = (await client.graphql({
          query: listEMRCustomers,
        })) as GraphQLResult<{ listEMRCustomers: { items: EMRCustomer[] } }>;

        // ✅ Ensure data exists before updating state
        if (response.data?.listEMRCustomers?.items) {
          setCustomers(response.data.listEMRCustomers.items);
        } else {
          console.error("No EMR Customers found.");
        }
      } catch (error) {
        console.error("Error fetching EMR Customers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  if (loading) return <p>Loading EMR Customers...</p>;

  return (
    <Card padding="20px">
      <Heading level={3}>EMR Customer List</Heading>
      {customers.length === 0 ? (
        <p>No EMR Customers available.</p>
      ) : (
        customers.map((customer) => (
          <div key={customer.customerId}>
            <p>
              <strong>{customer.name}</strong> - {customer.endpoint || "No endpoint"}
            </p>
            <Link href={`/emrcustomer/update/${customer.customerId}`}>
              <Button>Edit</Button>
            </Link>
          </div>
        ))
      )}
    </Card>
  );
}
