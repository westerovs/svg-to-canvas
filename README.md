# SVG path to CANVAS
Перегоняет path svg в канвас
<br>
Циклом получаем все вершины и рисуем их как rect и кривые безье в канвас, 
<br>
повторяя тем самым исходную фигуру на SVG

## Внимание. Стабильная работа только с кривыми безье. Т.к делал под свою задачу.

### Важно: что бы фигура была корректно отрисована, она должна на этапе рисования дизайнером начинаться именно с того места, с которого вы анимируете
Т.е если нужно отрезок A > B анимировать в этой последовательности, 
<br>а дизайнер рисовал фигуру от B до A, то у вас ничего хорошего не выйдет.
<br>Не подходит для сложных фигур!
