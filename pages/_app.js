import '../styles/globals.css';
import '../styles/mapStyles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { NextUIProvider } from "@nextui-org/react";

export default function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <Component {...pageProps} />
            <audio id="audio" loop volume="0.4">
                <source src="Mr. Probz - Waves.mp3" type="audio/mpeg" />
            </audio>
        </NextUIProvider>
    );
}