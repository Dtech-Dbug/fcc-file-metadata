# [File Metadata Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

## Endpoint and Response

- endpoint: `'/api/fileanalyze'`
- response 👇

```js
{
  "name": "tweet-export-15978-1637590343.8907.png",
  "type": "image/png",
  "size": 522301
}
```

## Schema Design

```js
const fileDataSchema = new mongoose.Schema({
  name: String,
  type: String,
  size: Number,
});
```

## Additional Dependancies

- [multer](https://www.npmjs.com/package/multer): for handling file uploading.

---

<details>
  <summary>Code on Clouds ☁☁Click to expand!</summary>
  
 - find the link to Replit: [here](https://replit.com/@DwaipayanChakro/fcc-filemetadata#server.js)
</details>
