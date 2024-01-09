scema examples:

```graphql
query ExampleQuery {
  sessions {
    title
    room
    track
    id
    level
  }
}
```

```graphql
query ExampleQuery {
  sessions(room: "Europa") {
    title
    room
    track
    id
    level
  }
  speakers {
    id
    bio
  }
}
```

```graphql
query ExampleQuery {
  speakers {
    bio
  }
}
```

```graphql
query ExampleQuery {
  speakers {
    bio
    id
  }
  speakerById(id: "381b010e-f51d-4fca-a249-271f72a6a5b9") {
    bio
    id
  }

  sessions {
    day
  }
  sessions {
    sessionById(id: "84473") {
      day
      id
    }
  }
}
```

## Mutation

```graphql
mutation {
  toggleFavoriteSession(id: "84473") {
    title
    favorite
  }
}
```
