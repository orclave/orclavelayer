import './globals.css'

export const metadata = {
    title: 'Orclave Layer — AI Spending Controls for the Agentic Era',
    description: 'The programmable spending layer for autonomous AI agents. Set limits, enforce rules, safeguard assets.',
    icons: {
        icon: '/logo_transparent.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
