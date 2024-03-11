import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'HmongDev Resume',
	description: "Steve Yang's Resume",
};

export default function RootLayout({ children }: any) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<body>{children}</body>
				</ThemeProvider>
			</html>
		</>
	);
}
