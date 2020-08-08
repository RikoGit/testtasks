<template>
  <div>adfgsdf</div>
</template>

<script>
export default {
  components: {
    BaseInputText,
    TodoListItem,
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue",
        },
        {
          id: nextTodoId++,
          text: "Learn about single-file components",
        },
        {
          id: nextTodoId++,
          text: "Fall in love",
        },
      ],
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText,
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== idToRemove;
      });
    },
  },
};
// Фамилия*•Имя*•Отчество •Дата рождения*•Номер телефона*(11 цифр. Начинается с 7)•Пол•Группа клиентов*. (Мультиселектор). Значения: [VIP, Проблемные, ОМС]•Лечащий врач. (Cелектор). Значения: [Иванов, Захаров, Чернышева]•Не отправлять СМС.(Чекбокс)Адрес:•Индекс•Страна •Область•Город*•Улица•Дом Паспорт:•Тип документа*. (Cелектор). Значения: [Паспорт, Свидетельство о рождении, Вод. удостоверение]•Серия •Номер •Кем выдан •Дата выдачи*
</script>

