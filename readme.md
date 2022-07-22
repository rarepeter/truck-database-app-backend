# Key features
- Basic router functionality
- GET, POST, PUT, DELETE requests
- Separation of backend services, router and controllers
- Connection to a **MongoDB** database using the **Mongoose** library

# How to use
- Clone the repository to your file system;
- Change the console file system directory to the git repository location;
- Run the install command:

```bash
npm install
```

- create a **.env** file in your directory;

- In the **.env** file, write the connection string of your MongoDB database using the **TRUCKS_DB_URI** variable as follows:

```bash
TRUCKS_DB_URI="<your connection string>"
```

So, the final version should look something like this:

```bash
TRUCKS_DB_URI="mongodb+srv://<user>:<password>@cluster.zzrcw.mongodb.net/<database name>?retryWrites=true&w=majority"
```

If you created an admin user with the username **peter**, the password **tomatoes** and your database name is **trucks**, you would have the following connection string:

```bash
TRUCKS_DB_URI="mongodb+srv://peter:tomatoes@cluster.zzrcw.mongodb.net/trucks?retryWrites=true&w=majority"
```

- Add another line in the **.env** file as follows:

```bash
TRUCKS_NS="<your collection name>"
```

For example, if your collection name is **trucks**, then the second line in your **.env** file should look like this:

```bash
TRUCKS_NS="trucks"
```

- To start the development environment and test the code, run:

```bash
npm run dev
```

Now, your server is running. You can now save modified files to restart it at any time.

- Now, you can make REST API requests. Use **Postman API** or, if you are using VS Code, you can use the **Thunder Client** extension to make GET, POST, PUT, DELETE requests.

Feel free to modify and use the code.

Explore and enjoy this resource!