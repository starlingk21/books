<!--
	@author bluefirex
-->
<template>
  <div class="index-view">
    <header class="pitch">
      <h2>Visma Real Estate - Frontend Assessment</h2>
    </header>

    <h3>Instructions</h3>

    <ol class="instructions">
      <li>Open this project in an IDE, preferably WebStorm or similar.</li>

      <li>
        Work through the tasks on this page. You are allowed to use search
        engines and results from it.
      </li>

      <li>
        Document your changes with git commits. A git repository is set up
        already.
      </li>

      <li>
        Archive your final result as a <code>.tar.gz</code> and send it back to
        us. Make sure to include all hidden files and folders such as
        <code>.git</code>.
      </li>
    </ol>

    <h3>Tasks</h3>

    <ol class="tasks">
      <li>
        <strong>Open <code>/src/App.vue</code></strong
        >.<br />
        In line 13 there is a "mistake". Add a comment above the line with a
        description of the problem, then correct it.
      </li>

      <li>
        <strong>In the same file</strong>, notice how the color
        <code>#17a</code> is repeated multiple times in the CSS. Find a way to
        consolidate this into one place.
      </li>

      <li>
        <strong>In the same file</strong>, vertically and horizontally center
        the text inside <code>.logo</code>
      </li>

      <li>
        <strong
          >Create a new interface <code>Book</code> in
          <code>/src/types.ts</code></strong
        >
        containing the title, author, ISBN and a URL to a cover image.<br />
      </li>

      <li>
        <strong>Open <code>/src/components/BookList.vue</code>.</strong><br />
        There are 4 issues in this file. Additionally, this component was
        written using the options API. Rewrite this component in the composition
        API and <code>script setup</code>, fixing the issues in the process.
        Please use <code>defineProps</code> with a prop object as its
        argument.<br />
        You can view your changes in the section "Demo: Book List".
      </li>

      <li>
        <strong>Implement a button to delete a book.</strong>
      </li>

      <li>
        <strong>Compile the project</strong> by running
        <code>npm run build</code>.
      </li>
    </ol>

    <section class="book-list">
      <h3>Demo: Book List</h3>

      <BookList :books="books" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import BookList from '@/components/BookList.vue';
import type { Book } from '@/types';

const books: Ref<Book[]> = ref<Book[]>([
  {
    title: 'Book A',
    author: 'Author A',
    isbn: '4700000000001',
    cover: 'https://picsum.photos/seed/p1/400/640', // 400 * 640
  },
  {
    title: 'Book B',
    author: 'Author B',
    isbn: '4700000000002',
    cover: 'https://picsum.photos/seed/p2/400/640',
  },
]);
</script>

<style lang="scss">
.index-view {
  max-width: 680px;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 32px;

  .pitch {
    h2 {
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
      padding: 0;
      color: #999;
    }
  }

  ol li + li {
    margin-top: 12px;
  }

  section.book-list {
    margin-top: 32px;
  }
}
</style>
