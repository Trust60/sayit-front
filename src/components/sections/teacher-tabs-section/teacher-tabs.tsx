import { CalendarDays, MessageCircleMore, Newspaper } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeacherSocial from "./teacher-social";
import TeacherPosts from "./teacher-posts";

export default function TeacherTabs({
  social,
  teacherId,
}: {
  social:
    | {
        linkedin?: string;
        youtube?: string;
        instagram?: string;
        tiktok?: string;
        twitter?: string;
        facebook?: string;
      }
    | undefined;
  teacherId: string;
}) {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="before:bg-border relative mb-3 h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px">
        <TabsTrigger
          value="tab-1"
          className="bg-muted data-[state=active]:bg-card data-[state=active]:border overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          <CalendarDays className="opacity-60" size={16} aria-hidden="true" />
          Графік
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="bg-muted data-[state=active]:bg-card overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          <Newspaper className="opacity-60" size={16} aria-hidden="true" />
          Пости
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="bg-muted data-[state=active]:bg-card overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          <MessageCircleMore
            className="opacity-60"
            size={16}
            aria-hidden="true"
          />
          Соцмережі
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">
          Content for Tab 1
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <TeacherPosts teacherId={teacherId} />
      </TabsContent>
      <TabsContent value="tab-3">
        <TeacherSocial social={social || {}} />
      </TabsContent>
    </Tabs>
  );
}
