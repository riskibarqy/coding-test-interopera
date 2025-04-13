import { Card, CardHeader, CardContent } from "@/src/components/ui/card";
export function CardMetrics({title, value}) {
  return (
    <Card>
    <CardHeader>{title}</CardHeader>
    <CardContent className="text-2xl font-semibold">
      ${value.toLocaleString()}
    </CardContent>
  </Card>
  )
}
