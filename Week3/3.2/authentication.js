/*

Type of Authentication's

1) Hashing
-> In this method we simply hash the username and passwords to a string and next time we want to authenticate then we just
   simply again hash the username and password and match it with existing hashed strings.
-> This is a 1 way flow that means we can hash a string but cannot retrieve it back from the hashed string

2) Encryption
-> In this method we encrypt the username and password with a secret key and goes similar flow like Hashing for authenticating
-> The difference is the person having the secret key can also decrypt the data and see the usernames and passwords

3) Json Web Token (JWT)
-> This is widely used method for converting json objects into the tokens
-> We convert the user creds (json) with jwt.encode(obj, secret-key) the secret key helps in signing the token
-> The token consists of three parts header, payload and the signature
-> Anyone can decode the jwt token back to the json object but only the person with secret key can verify the signature
-> By verifying the signature means that when we create token, we append a signature at the backend of jwt token by using our secret-key
-> If any attacker will try to enter our system with the token created by him then his token won't have the right signature because he/she doesn't have our secret key

4) Local Storage
-> This is generally used to store the tokens in the web browser's local storage,
   There are other good methods as well like cookies but we will learn about them in future

*/
