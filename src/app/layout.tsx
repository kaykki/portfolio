import { Metadata } from "next";
import "./styles.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: {
		absolute: '',
		default: "Kaki Kagatan",
		template: "%s | Kaki Kagatan",
	},
	description: 'Generated by Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="text-primary bg-secondary bg-gradient-radial">
				<Header />
				<main className="mt-[130px] mb-8 mx-[20px]
								tablet:mr-[75px] tablet:ml-[275px] tablet:mt-16 tablet:pt-0
								laptop:mr-[150px] laptop:ml-[350px] laptop:pt-0">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
