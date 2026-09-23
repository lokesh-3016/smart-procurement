import MaterialDetailClient from "./MaterialDetailClient";
import { materialsData } from "@/lib/materials-data";

export function generateStaticParams() {
  return materialsData.map((material) => ({
    id: material.id,
  }));
}

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <MaterialDetailClient params={params} />;
}