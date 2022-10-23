# Key features
- Basic router functionality.
- GET, POST, PUT, DELETE requests.
- Separation of backend services, router and controllers.
- Connection to a **MongoDB** database using the **Mongoose** library.
- JWT login and token services that will be written in a database.

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

- Add some more lines in the **.env** file as follows:

```bash
JWT_ACCESS_SECRET_KEY=access
JWT_REFRESH_SECRET_KEY=refresh
PORT=5000
CLIENT_ADDRESS="http://localhost:3000"
```

The first two lines will be your secret JWT token keys that will be used to validate the tokens.
We define the port in the **.env** file, too. If you don`t include this variable, the port on which the server is run default to 5000.
The client address is used to correctly send and receive HTTP requests with CORS. If your client runs on some other port than 3000, please change the **CLIENT_ADDRESS** variable to your client URL address.

- To start the development environment and test the code, run:

```bash
npm run dev
```

Now, your server is running. You can now save modified files to restart it at any time.

- Now, you can make REST API requests. Use **Postman API** or, if you are using VS Code, you can use the **Thunder Client** extension to make GET, POST, PUT, DELETE requests.

Note that the mail service is still under development as the implementation of IMAP and Google`s security services has changed since then, so the code included in the mail service is not valid and is commented out in some parts of the code.

Feel free to modify and use the code.

Explore and enjoy this resource!