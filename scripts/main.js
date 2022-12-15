const atlastURI = 'https://data.mongodb-api.com/app/data-qbimb/endpoint/data/v1';


const sampleRequest = `curl --request POST \
  'https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/v1/action/findOne' \
  --header 'Content-Type: application/json' \
  --header 'api-key: <Data API Key>' \
  --data-raw '{
      "dataSource": "<cluster name>",
      "database": "learn-data-api",
      "collection": "people",
      "filter": { "name": "John Sample" }
  }'`;
  



  