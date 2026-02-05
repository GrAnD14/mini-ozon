# 1. Базовый образ Node.js
FROM node:20

# 2. Рабочая папка внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь проект
COPY . .

# 6. Строим проект для продакшена
RUN npm run build

# 7. Устанавливаем легкий веб-сервер для отдачи статики
RUN npm install -g serve

# 8. Пробрасываем порт 3000
EXPOSE 3000

# 9. Команда запуска
CMD ["serve", "-s", "dist", "-l", "3000"]
