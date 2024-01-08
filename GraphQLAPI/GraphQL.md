scema examples:

```
query ExampleQuery {
  sessions{
    title,
    room,
    track,
    id,
    level
  }
}
```


```
query ExampleQuery {
  sessions(room:"Europa"){
    title,
    room,
    track,
    id,
    level
  },
  speakers {
    id,
    bio
  }
}
```

```
query ExampleQuery {
  speakers {
    bio
  }
}
```


```
query ExampleQuery {
  speakers {
    bio,
    id
  },
  speakerById(id:"381b010e-f51d-4fca-a249-271f72a6a5b9") {
    bio,
    id
  }
  
  sessions{
    day
  },
  sessions {
    sessionById (id:"84473"){
      day,
      id
    }
  },
}
```
