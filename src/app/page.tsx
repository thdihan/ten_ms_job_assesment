import CourseContent from "@/components/CourseContent";
import CourseDescription from "@/components/CourseDescription";
import CourseFeatures from "@/components/CourseFeatures";
import CourseHeader from "@/components/CourseHeader";
import CourseInstructor from "@/components/CourseInstructor";
import CourseModules from "@/components/CourseModules";
import CoursePreview from "@/components/CoursePreview";

export default async function Home() {
    const res = await fetch(
        "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
        {
            headers: {
                "X-TENMS-SOURCE-PLATFORM": "web",
                Accept: "application/json",
            },
        }
    );

    const data = await res.json();
    console.log(data);
    return (
        <div className="bg-background">
            <CourseHeader name="IELTS Course by Munzereen Shahid" />
            <div className="container mx-auto py-8 flex space-x-8">
                <div className="w-[65%]">
                    <CourseDescription />
                    <CourseInstructor />
                    <CourseModules />
                    <CourseContent />
                    <CourseFeatures />
                </div>
                <div className="w-[35%]">
                    <CoursePreview />
                </div>
            </div>
        </div>
    );
}
