<!--
	@author bluefirex
-->
<template>
  <div class="sample-book">
    <div class="cover">
      <img :src="book.cover" :alt="book.title" />
    </div>

    <div class="meta">
      <span class="title">{{ book.title }}</span>
      <span class="author">by {{ book.author }}</span>
      <span class="isbn">ISBN: {{ book.isbn }}</span>

      <div class="actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.sample-book {
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 8px;
  border-radius: 12px + 8px;

  transition: background 0.2s, scale 0.2s;

  --secondary: #999;

  .cover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 132px;
    height: 196px;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 12px;

      transition: box-shadow 0.2s;

      box-shadow: 0px 0.8px 1.1px rgba(#000, 0.016),
        0px 2.1px 2.9px rgba(#000, 0.022), 0px 4.3px 5.8px rgba(#000, 0.028),
        0px 8.8px 12px rgba(#000, 0.034), 0px 24px 33px rgba(#000, 0.05);
    }

    &:hover img {
      box-shadow: 0px 1.3px 1.5px rgba(#000, 0.009),
        0px 3.3px 3.7px rgba(#000, 0.013), 0px 6.7px 7.6px rgba(#000, 0.017),
        0px 13.9px 15.7px rgba(#000, 0.021), 0px 38px 43px rgba(#000, 0.03);
    }
  }

  .meta {
    flex: 1;

    span {
      display: block;

      &.title {
        font-weight: 600;
        font-size: 1.1rem;
      }

      &.author,
      &.isbn {
        color: var(--secondary);
      }

      &.isbn {
        margin-top: 8px;
        font-size: 0.9em;
      }
    }

    > .actions {
      margin-top: 16px;
    }
  }

  &:hover {
    background: #f0f0f0;
    scale: 1.06;
  }
}
</style>
