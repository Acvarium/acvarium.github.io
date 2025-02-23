---
weight: 1
bookCollapseSection: true
bookFlatSection: true
title: "Основи GDScript"
layout: single
draft: true

---

## Що воно таке?

`GDScript` - інтерпретована об'єктно-орієнтована мова програмування високого рівня, що комбінує в собі як динамічну типізацію, так і можливості строго визначати типи змінних. Ця мова базована на відступах, чим є подібною до `Python`. Вона націлена на те, щоб бути оптимізованою та глибоко інтегрованою з рушієм розробки комп'ютерних ігор `Godot`. Попри те, що `GDScript` є повністю незалежною від `Python`, та не базується на ній, вони ділять багато спільних рис. 

## Приклад коду

{{< highlight GDScript >}}

# Усе, що є написано після символу "#" являється коментарем

# тому ця частина не сприймається інтерпретатором а лише служить підказкою для нас

# Кожен файл з кодом є класом

# (не обов'язково) зображення, що відображатиметься в редакторі:

@icon("res://path/to/optional/icon.svg")

# (не обов'язково) визначення класу:

class_name MyClass

# Наслідування:

extends BaseClass

# Атрибути класу

var a = 5
var s = "Hello"
var arr = [1, 2, 3]
var dict = {"key": "value", 2: 3}
var other_dict = {key = "value", other_key = 2}
var typed_var: int
var inferred_type := "String"

# Константи.

const ANSWER = 42
const THE_NAME = "Charly"

# Перелічування

enum {UNIT_NEUTRAL, UNIT_ENEMY, UNIT_ALLY}
enum Named {THING_1, THING_2, ANOTHER_THING = -1}

# Вбудовані векторні типи

var v2 = Vector2(1, 2)
var v3 = Vector3(1, 2, 3)

# Функції.

func some_function(param1, param2, param3):
    const local_const = 5

    if param1 < local_const:
        print(param1)
    elif param2 > 5:
        print(param2)
    else:
        print("Fail!")
    
    for i in range(20):
        print(i)
    
    while param2 != 0:
        param2 -= 1
    
    match param3:
        3:
            print("param3 is 3!")
        _:
            print("param3 is not 3!")
    
    var local_var = param1 + 3
    return local_var

# Функції перевизначають такі, що мають ідентичну назву в базовому/супер класі

# Якщо усе ще треба викликати версію із базового класу, потрібно викликати super

func something(p1, p2):
    super(p1, p2)

# Є також можливість викликати інші функції з базового/супер класу:

func other_something(p1, p2):
    super.something(p1, p2)

# Внутрішній клас

class Something:
    var a = 10

# Конструктор

func _init():
    print("Constructed!")
    var lv = Something.new()
    print(lv.a)

{{< / highlight >}}
