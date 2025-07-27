export async function getCourseDetails() {
    const res = await fetch(
        "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
        {
            headers: {
                "X-TENMS-SOURCE-PLATFORM": "web",
                Accept: "application/json",
            },
            // Optional: ISR - cache and revalidate every 3600s (1 hour)
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) throw new Error("Failed to fetch IELTS course data");
    return res.json();
}
