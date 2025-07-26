import CourseDescription from "@/components/CourseDescription";
import CourseHeader from "@/components/CourseHeader";

export default function Home() {
    return (
        <div className="bg-background">
            <CourseHeader name="IELTS Course by Munzereen Shahid" />
            <div className="container mx-auto py-8 flex ">
                <div>
                    <CourseDescription />
                </div>
                <div></div>
            </div>
        </div>
    );
}
