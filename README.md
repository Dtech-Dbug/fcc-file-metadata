# [File Metadata Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

## Endpoint and Response

- endpoint: `'/api/fileanalyse'`
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

**Note:** You can add more fields to the response. Check out the what multer does by attaching a file attr. to the request object.

- The file attr. is also an object w/ the following attributes/properties 👇

```js
{
  fieldname: 'upfile',
  originalname: 'icon',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: '2927e6dfdacfcec4eece9fec28865e84',
  path: 'uploads/2927e6dfdacfcec4eece9fec28865e84',
  size: 1332
}
```

---

<details>
  <summary>Code on Clouds ☁☁Click to expand!</summary>
  
 - find the link to Replit: [here](https://replit.com/@DwaipayanChakro/fcc-filemetadata#server.js)
</details>
