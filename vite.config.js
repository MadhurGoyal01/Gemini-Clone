import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'REACT_APP_',  // This ensures only variables prefixed with "REACT_APP_" are exposed
})