# uranium
Backend cohort Mar22-Jul22


TOPIC: Mongoose Populate and Reference
- For this assignment the session branch is session/populate-reference
- For the solution you have to create a new branch in your own repoassignment/populate-reference2
- Try to use your own mongodb Atlas clusters to avoid sharing of collections
and thus errors, please make sure you write the schema correctly. Use
these collection names - developers, batches
- A batch document looks like this.
{
_id: ObjectId("65321bfa4d9fe0d34da86829"),
name: “Uranium”,
size: 250,
program: “backend”
}
- A developer document should look like this
{
_id: ObjectId("61951bfa4d9fe0d34da86829"),
name:"Sabiha Khan",
gender:”female”,
percentage:75,
batch: ObjectId("65321bfa4d9fe0d34da86829")
}

1. Write an api POST /batches that creates a batch from the details in the request body. Please note
that the program should be an enum with the following allowed values only - backend and frontend
2. Write an api POST /developers that creates a developer from the details in the request body.
Please note that the gender should be an enum with the following allowed values - male, female
and other. Also, batch attribute is a reference to the batches collection.
3. Write an api GET /scholarship-developers that fetches the list of eligible developers for
scholarship. An eligible developer is female with percentage greater than or equal to 70
4. Write an api GET /developers?percentage=value1&program=value2 that only returns the
developers for a given program with a percentage greater than or equal to the received value.
Please note the batch name and the program values are received in the request as query params.
For example GET /developers?percentage=55&program=radium should return all the developers
from radium batch with a percentage greater than or equal to 5