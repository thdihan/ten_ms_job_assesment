import CourseContent from "@/components/CourseContent";
import CourseDescription from "@/components/CourseDescription";
import CourseFeatures from "@/components/CourseFeatures";
import CourseHeader from "@/components/CourseHeader";
import CourseInstructor from "@/components/CourseInstructor";
import CourseModules from "@/components/CourseModules";
import CoursePreview from "@/components/CoursePreview";
import { getCourseDetails } from "@/lib/api/getCourseDetails";

export default async function Home() {
    const data = await getCourseDetails();
    console.log(data);
    // console.log();
    const instructor = await data?.data?.sections.find(
        (s: any) => s.type == "instructors"
    );

    const features = await data?.data?.sections.find(
        (s: any) => s.type == "features"
    );

    const pointers = await data?.data?.sections.find(
        (s: any) => s.type == "pointers"
    );
    const feature_explanations = await data?.data?.sections.find(
        (s: any) => s.type == "feature_explanations"
    );
    const preview = await data?.data?.media.find(
        (s: any) => s.resource_value == "zrlYnaZftEQ"
    );
    return (
        <div className="bg-background">
            <CourseHeader
                name={data?.data?.title || "IELTS Course by Munzereen Shahid"}
                enrolled={
                    data?.data &&
                    data?.data?.checklist
                        ?.find((l: any) => l?.text?.includes("Total Enrolled"))
                        ?.text.split(" ")[2] + " Students"
                }
            />
            <div className="container mx-auto py-8 flex space-x-8">
                <div className="w-[65%]">
                    <CourseDescription
                        text={
                            data?.data?.description ||
                            "<p>Description not found.</p>"
                        }
                    />
                    <CourseInstructor ins={instructor.values} />
                    <CourseModules features={features} />
                    <CourseContent pointers={pointers} />
                    <CourseFeatures
                        feature_explanations={feature_explanations}
                    />
                </div>
                <div className="w-[35%]">
                    <CoursePreview preview={preview} />
                </div>
            </div>
        </div>
    );
}
