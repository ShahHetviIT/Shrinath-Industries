import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Create a properly formatted define object
  const envWithStringValues = {};
  Object.keys(env).forEach(key => {
    envWithStringValues[`import.meta.env.${key}`] = JSON.stringify(env[key]);
  });

  return {
    plugins: [react()],
    server: {
      host: true, // Expose to all network interfaces
      port: 5173, // Use port 3000
      open: true, // Open browser automatically
      hmr: {
        overlay: true, // Show errors as overlay in browser
      },
    },
    // Define env variables to be replaced in the client code
    define: envWithStringValues
  }
})
