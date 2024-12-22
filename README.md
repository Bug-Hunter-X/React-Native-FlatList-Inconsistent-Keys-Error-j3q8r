# React Native FlatList Inconsistent Keys Error

This repository demonstrates a common error encountered when using the `FlatList` component in React Native: inconsistent keys supplied for list items. The error arises when the `keyExtractor` function does not provide a unique key for each item in the data array. This can lead to unexpected behavior, such as incorrect rendering or component updates.

## How to reproduce the error

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run the app on an emulator or device.
4. Observe the error message in the console and the inconsistent rendering of list items.

## Solution

The solution involves providing a unique key for each item using a suitable `keyExtractor` function. The provided solution demonstrates how to correct the `keyExtractor` function to ensure uniqueness.

## Additional Notes

Always ensure your `keyExtractor` function provides unique keys to prevent this common error. The `keyExtractor` is essential for efficient rendering and updates in `FlatList`.  Consider using unique IDs or a combination of attributes that will guarantee uniqueness for your data.