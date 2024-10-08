import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react({
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false, // Disable the JSX namespace check
        },
      },
    },
  })],
});
