import tkinter as tk

def create_polygon():
    x_val = float(entry_x.get())
    y_val = float(entry_y.get())
    width_val = float(entry_width.get())
    height_val = float(entry_height.get())

    # Создание полигона
    polygon = [
        [y_val, x_val],
        [y_val, x_val + width_val],
        [y_val + height_val, x_val + width_val],
        [y_val + height_val, x_val],
        [y_val, x_val]
    ]

    # Отображение полигона в текстовом виджете
    text_result.delete("1.0", "end")
    for coord in polygon:
        text_result.insert("end", f"{coord}\n")

# Создание главного окна
root = tk.Tk()
root.title("Создание полигона")

# Метки и поля ввода для x, y, width, height
label_x = tk.Label(root, text="x:")
label_x.grid(row=0, column=0)
entry_x = tk.Entry(root)
entry_x.grid(row=0, column=1)

label_y = tk.Label(root, text="y:")
label_y.grid(row=1, column=0)
entry_y = tk.Entry(root)
entry_y.grid(row=1, column=1)

label_width = tk.Label(root, text="Width:")
label_width.grid(row=2, column=0)
entry_width = tk.Entry(root)
entry_width.grid(row=2, column=1)

label_height = tk.Label(root, text="Height:")
label_height.grid(row=3, column=0)
entry_height = tk.Entry(root)
entry_height.grid(row=3, column=1)

# Кнопка для создания полигона
btn_create_polygon = tk.Button(root, text="Создать полигон", command=create_polygon)
btn_create_polygon.grid(row=4, columnspan=2)

# Текстовый виджет для вывода результатов
text_result = tk.Text(root, width=50, height=10)
text_result.grid(row=5, columnspan=2)

# Запуск главного цикла обработки событий
root.mainloop()
