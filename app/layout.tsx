import type { Metadata } from "next";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            {/* <head></head> */}
            <body>{children}</body>
        </html>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const title = "example-nextjs-app";
    const description = "example-nextjs-app";

    return {
        title: title,
        description: description,
        openGraph: {
            type: "website",
            title: title,
            description: description,
            siteName: title,
            url: "",
            images: [
                {
                    url: "",
                    width: 1600,
                    height: 900,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@example",
            title: title,
            description: description,
            images: [],
        },
    };
}
