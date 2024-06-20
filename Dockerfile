# Gunakan gambar Node.js resmi sebagai gambar dasar
FROM node:18

# Tetapkan direktori kerja
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin semua kode aplikasi
COPY . .

# Jika menggunakan Prisma, buat klien Prisma
RUN npx prisma generate

# Buka port yang digunakan aplikasi
EXPOSE 8080

# Perintah untuk menjalankan aplikasi
CMD ["npm", "run", "start"]
