
# sample-project

REST API using TypeScript with Node.js that returns data from sqlite database.
 
<br>

<h3>Preview</h3>

<h3>Using technology</h3>
- NodeJS and Expressjs API development
- Swagger and Swagger UI for documentation
- JEST for test
<br/>
<h3>Installation</h3>

- Install all depedency
<pre>
npm install
</pre>

- Start server
<pre>
npm run start
</pre>


<h3>Test cases</h3>
<pre>
npm test
</pre>


- Open API documentation in browser
<pre>
<a href="http://localhost:8080/api-docs/#/default">http://localhost:8080/api-docs/#/default</a>
</pre>

<br/>
<h3>Folder Structure</h3>
- all code in <code>api</code> folder
- <code>api/conn.js</code> is seqlite connection
- <code>index.js</code> is main server js has routing too.
- folder <code>api/controllers</code> have controller file
- folder <code>api/swagger.js and api/swagger.js</code> is configuration for swagger UI

</br>

<h3>We can also do</h3>
    We can use JWT token for authentication and authorization. Since all get request and due to time limitaion I am not introducing it currently.
    saparate routing from index.js to a specific route folder
    we can a saparate folder As model for data retrieval and manipulation and put all data login in it.
    can use forder structre for swagger, connnection etc.



**Hope will usefull for you all.**

