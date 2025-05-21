from flask import Flask, render_template
import MySQLdb
from datetime import datetime

app = Flask(__name__)

# Настройки подключения к базе данных
db_config = {
    'host': 'localhost',
    'user': 'username',  # Замените на ваше имя пользователя
    'password': 'password',  # Замените на ваш пароль
    'database': 'schedule_db'
}

@app.route('/')
def index():
    # Подключение к базе данных
    db = MySQLdb.connect(**db_config)
    cursor = db.cursor()

    # Получаем расписание на сегодня
    today = datetime.now().date()
    cursor.execute("SELECT subject, time, date FROM schedule WHERE date = %s", (today,))
    schedule_data = cursor.fetchall()

    cursor.close()
    db.close()

    return render_template('index.html', schedule=schedule_data, today=today)

if __name__ == '__main__':
    app.run(debug=True)
