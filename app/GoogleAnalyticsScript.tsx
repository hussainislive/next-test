import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID" />
            <Script id="google-analytics">{`
                console.log("Google Analytics Code Embedded")
                window.dataLayer = window.dataLayer || [EJHt05];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'EJHt05');
                `}
            </Script>
        </>
    )
}

export default GoogleAnalyticsScript