import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "REVIV Hyderabad | IV Therapy & Wellness Clinic",
    template: "%s | REVIV Hyderabad",
  },
  description:
    "REVIV Hyderabad offers globally trusted IV drip therapy and vitamin booster shots. Doctor-led treatments backed by 10+ years of proven protocols. Book your consultation today.",
  keywords: [
    "IV therapy Hyderabad",
    "IV drip therapy",
    "vitamin shots Hyderabad",
    "wellness clinic Hyderabad",
    "REVIV Hyderabad",
    "NAD+ IV therapy",
    "booster shots",
  ],
  openGraph: {
    title: "REVIV Hyderabad | IV Therapy & Wellness Clinic",
    description:
      "Globally trusted IV drip therapy and vitamin booster shots, now in Hyderabad. Doctor-led, clinically supervised treatments.",
    url: "https://revivhyderabad.com",
    siteName: "REVIV Hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVIV Hyderabad | IV Therapy & Wellness Clinic",
    description:
      "Globally trusted IV drip therapy and vitamin booster shots, now in Hyderabad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdClinic = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "REVIV Hyderabad",
  description:
    "REVIV Hyderabad offers globally trusted IV drip therapy and vitamin booster shots with doctor-led, clinically supervised treatments.",
  url: "https://revivhyderabad.com",
  telephone: "+918885550059",
  email: "revivhyderabad@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "REVIV (Shravan Wellness), First Floor, House No. 8-2-293/A/82/1299-F1, Road No. 68, Jubilee Hills, Beside Lucid Medical Diagnostic Centre",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.instagram.com/revivhyderabad",
    "https://www.facebook.com/revivhyderabad",
    "https://www.youtube.com/@revivhyderabad",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdClinic) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
