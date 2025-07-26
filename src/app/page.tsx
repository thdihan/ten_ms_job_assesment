import CourseContent from "@/components/CourseContent";
import CourseDescription from "@/components/CourseDescription";
import CourseHeader from "@/components/CourseHeader";
import CourseInstructor from "@/components/CourseInstructor";
import CourseModules from "@/components/CourseModules";
import CoursePreview from "@/components/CoursePreview";

export default function Home() {
    return (
        <div className="bg-background">
            <CourseHeader name="IELTS Course by Munzereen Shahid" />
            <div className="container mx-auto py-8 flex space-x-8">
                <div className="w-[65%]">
                    <CourseDescription />
                    <CourseInstructor />
                    <CourseModules />
                    <CourseContent />
                </div>
                <div className="w-[35%]">
                    <CoursePreview />
                </div>
            </div>
        </div>
    );
}
