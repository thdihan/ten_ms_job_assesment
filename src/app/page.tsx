import CourseContent from "@/components/CourseContent";
import CourseCta from "@/components/CourseCta";
import CourseDescription from "@/components/CourseDescription";
import CourseDetails from "@/components/CourseDetails";
import CourseFeatures from "@/components/CourseFeatures";
import CourseHeader from "@/components/CourseHeader";
import CourseInstructor from "@/components/CourseInstructor";
import CourseModules from "@/components/CourseModules";
import CoursePreview from "@/components/CoursePreview";
import { getCourseDetails } from "@/lib/api/getCourseDetails";
import Head from "next/head";

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
    const about = await data?.data?.sections.find(
        (s: any) => s.type == "about"
    );
    const preview = await data?.data?.media.find(
        (s: any) => s.resource_value == "zrlYnaZftEQ"
    );

    const checklist = await data?.data?.checklist;
    const seo = await data.seo;

    return (
        <>
            <Head>
                <title>{seo?.title}</title>
                <meta name="description" content={seo?.description} />

                {/* Keywords */}
                {seo?.keywords?.length > 0 && (
                    <meta name="keywords" content={seo.keywords.join(", ")} />
                )}

                {/* Open Graph Tags */}
                {seo?.defaultMeta?.map((meta: any, index: number) => {
                    const key = `${meta.type}:${meta.value}`;
                    return (
                        <meta
                            key={index}
                            {...(meta.type === "property"
                                ? { property: meta.value }
                                : { name: meta.value })}
                            content={meta.content}
                        />
                    );
                })}

                {/* JSON-LD Structured Data */}
                {seo?.schema?.map((item: any, index: number) =>
                    item.meta_value ? (
                        <script
                            key={index}
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: item.meta_value,
                            }}
                        />
                    ) : null
                )}
            </Head>

            <div className="bg-background">
                <CourseHeader
                    name={
                        data?.data?.title || "IELTS Course by Munzereen Shahid"
                    }
                    enrolled={
                        data?.data &&
                        data?.data?.checklist
                            ?.find((l: any) =>
                                l?.text?.includes("Total Enrolled")
                            )
                            ?.text.split(" ")[2] + " Students"
                    }
                />
                <div className="container mx-auto py-8 flex space-x-8 flex-col md:flex-row">
                    <div className="w-full md:w-[65%]">
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
                        <CourseDetails about={about} />
                    </div>
                    <div className="w-full md:w-[35%]">
                        <CoursePreview preview={preview} />
                        <CourseCta checklist={checklist} />
                    </div>
                </div>
            </div>
        </>
    );
}
