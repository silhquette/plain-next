# Gunakan image Node.js versi 22.15 sebagai dasar
FROM node:22.15-alpine

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file proyek Anda, termasuk direktori public
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Ekspose port yang digunakan Next.js
EXPOSE 3000

# Jalankan aplikasi Next.js
CMD ["npm", "start"]