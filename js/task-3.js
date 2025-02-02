class StringBuilder {
  #value; // Оголошення приватної властивості

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація рядка
  }

  getValue() {
    return this.#value; // Повертає поточне значення рядка
  }

  padEnd(str) {
    this.#value += str; // Додає str в кінець рядка
  }

  padStart(str) {
    this.#value = str + this.#value; // Додає str на початок рядка
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Додає str з обох сторін
  }
}

// Перевірка коректності роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
