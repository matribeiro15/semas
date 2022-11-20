import '../styles/globals.css'
import '../styles/animations.css'
import React, { useState,useEffect} from 'react'
import {useRouter} from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
      const script = document.createElement("script")
      script.src = "/scripts/default.js";
      document.body.appendChild(script)
      return () => {
          document.body.removeChild(script)
      }
    });

  return <Component {...pageProps} />
}

export default MyApp
