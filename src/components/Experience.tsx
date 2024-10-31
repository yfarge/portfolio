import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export default function Experience() {
  return (
    <Tabs defaultValue="work">
      <TabsList className="mb-2 grid w-full grid-cols-2">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="work"> Work</TabsContent>
      <TabsContent value="education">Education</TabsContent>
    </Tabs>
  );
}
