The solution involves implementing a proper `keyExtractor` function that returns a unique key for each item in the `FlatList` data.  Here's a corrected example:

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

In this corrected version, the `keyExtractor` uses the `id` property of each item, ensuring that each item has a unique key.  If `id` is not guaranteed to be unique, another unique field should be used, or generate a unique key using a library like `uuid`.