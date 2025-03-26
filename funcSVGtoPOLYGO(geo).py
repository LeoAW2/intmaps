import tkinter as tk
from tkinter import messagebox
import numpy as np

def parse_svg_path(svg_path):
    # Удаляем 'm', 'z', делим на части и парсим координаты
    svg_path = svg_path.replace('m', '').replace('z', '').strip()
    segments = svg_path.split()
    initial_point = tuple(map(float, segments[0].split(',')))
    moves = [tuple(map(float, segment.split(','))) for segment in segments[1:]]

    # Вычисляем абсолютные координаты
    coordinates = [initial_point]
    current_x, current_y = initial_point
    for dx, dy in moves:
        current_x += dx
        current_y += dy
        coordinates.append((current_x, current_y))

    # Замыкаем полигон
    coordinates.append(initial_point)
    return np.array(coordinates)


def rotate_90_degrees(coordinates):
    # Находим центроид
    centroid = coordinates.mean(axis=0)

    # Вращаем на 90 градусов по часовой стрелке вокруг центроида
    rotated_coordinates = []
    for x, y in coordinates:
        # Применяем правильные формулы для вращения
        new_x = centroid[1] - (y - centroid[1])
        new_y = (x - centroid[0]) + centroid[0]
        rotated_coordinates.append((new_x, new_y))

    # Добавляем начальную точку для замыкания
    rotated_coordinates.append(rotated_coordinates[0])
    return rotated_coordinates


def shift_coordinates(coordinates, shift_x=105):
    # Смещаем координаты x на 105 единиц
    shifted_coordinates = [(x + shift_x, y) for x, y in coordinates]
    return shifted_coordinates


def svg_to_rotated_and_shifted_coordinates(svg_path):
    coordinates = parse_svg_path(svg_path)
    rotated_coordinates = rotate_90_degrees(coordinates)
    shifted_coordinates = shift_coordinates(rotated_coordinates)
    return shifted_coordinates



def on_submit():
    svg_input = entry_svg_input.get("1.0", "end-1c")
    if svg_input:
        try:
            final_coords = svg_to_rotated_and_shifted_coordinates(svg_input)
            text_result.delete("1.0", "end")
            text_result.insert("end", "Результат:\n")
            for coord in final_coords:
                text_result.insert("end", f"{coord}\n")
        except Exception as e:
            text_result.delete("1.0", "end")
            text_result.insert("end", f"Ошибка: {str(e)}")
    else:
        text_result.delete("1.0", "end")
        text_result.insert("end", "Пожалуйста, введите координаты SVG.")

# Создание главного окна
root = tk.Tk()
root.title("Конвертер SVG координат")

# Создание метки и поля ввода для SVG координат
label_svg_input = tk.Label(root, text="Введите координаты SVG:")
label_svg_input.pack()
entry_svg_input = tk.Text(root, width=50, height=10)
entry_svg_input.pack()

# Кнопка для отправки координат
btn_submit = tk.Button(root, text="Преобразовать", command=on_submit)
btn_submit.pack()

# Текстовый виджет для вывода результатов
text_result = tk.Text(root, width=50, height=10)
text_result.pack()

# Запуск главного цикла обработки событий
root.mainloop()