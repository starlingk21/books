<!--
	@author bluefirex
-->
<template>
  <div class="sample-book-list">
    <ul class="books">
      <li
        v-for="(book, index) in books"
        :key="index"
        @click="removeBook(index)"
      >
        <Book :book="book" />
      </li>
    </ul>

    <div class="actions">
      <button @click="addRandomBook">Add Random Book</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Book from '@/components/Book.vue';
import type { Ref } from 'vue';
import { type PropType, ref } from 'vue';
import type { Book as BookType } from '@/types';

const props = defineProps({
  books: {
    type: Array as PropType<BookType[]>,
    required: true,
    default: [],
  },
});

const availableBooks: Ref<BookType[]> = ref([
  {
    title: 'How To',
    author: 'Randall Monroe',
    isbn: '4708364246039',
    cover:
      'https://m.media-amazon.com/images/I/61yDxuC-3XL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Just a Geek',
    author: 'Wil Wheaton',
    isbn: '9780596806310',
    cover: 'https://m.media-amazon.com/images/I/61tp4nitFeL._SL1500_.jpg',
  },
  {
    title: 'Quirkology: The Curious Science of Everyday',
    author: 'Richard Wiseman',
    isbn: '9781447273387',
    cover: 'https://m.media-amazon.com/images/I/81TYDiCxS1L._SL1500_.jpg',
  },
]);

const addRandomBook = () => {
  const randomNumber = Math.floor(
    Math.random() * (availableBooks.value.length - 1)
  );
  const randomBook = availableBooks.value[randomNumber];

  props.books.push(randomBook);
};

const removeBook = (index: number) => {
  props.books.splice(index, 1);
};
</script>

<style lang="scss">
.sample-book-list {
  .books {
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 16px;
  }

  > .actions {
    border-top: 1px solid #e0e0e0;
    margin-top: 32px;
    padding-top: 24px;
  }
}
</style>
