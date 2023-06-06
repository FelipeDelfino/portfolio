import Document, { Html, Head, Main, NextScript } from "next/document"
export default class MyDocuments extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Aqui você encontrará um pouquinho sobre mim e sobre minha história nesse mundo da programação."/>
                    <title>Felipe Delfino</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}