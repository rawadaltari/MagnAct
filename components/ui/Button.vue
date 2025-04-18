<template>
    <button
      :type="type"
      :disabled="disabled"
      class="ui-button"
      :class="[variantClass, sizeClass]"
      v-bind="$attrs"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  defineProps({
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
  
  const variantClass = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800'
  }
  
  const sizeClass = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }
  </script>
  
  <style scoped>
  .ui-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.2s;
    cursor: pointer;
    outline: none;
    border: none;
  }
  
  .ui-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .ui-button.dark {
    &.primary {
      background-color: #1d4ed8;
      &:hover {
        background-color: #1e40af;
      }
    }
    &.secondary {
      background-color: #374151;
      &:hover {
        background-color: #4b5563;
      }
    }
    &.ghost {
      color: #f3f4f6;
      &:hover {
        background-color: #1f2937;
      }
    }
  }
  </style>