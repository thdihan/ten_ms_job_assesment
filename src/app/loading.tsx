export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col space-y-4 items-center justify-center bg-white text-black">
            {/* <p className="text-xl font-semibold animate-pulse">
                Loading IELTS course...
            </p> */}
            <div
                className="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-dashed border-accent border-t-transparent"
            ></div>
            <p className="text-xl font-semibold animate-pulse">
                Loading IELTS course...
            </p>
        </div>
    );
}
