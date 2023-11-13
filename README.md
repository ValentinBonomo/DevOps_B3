# DevOps_B3

You need to have node.js & npm already install on your pc.
Go in the folder "DevOps_B3" .
You will need a terminal and enter the following command :
"npm init -y"
"npm install typescript --save-dev"
"npm install @types/node --save-dev"
If you want you can modify the "src/index.ts".
Build the index.ts file with "npx tsc" in terminal.
Then you can run your website by typing "node build/index.js".

Website part :

If you modify the url of your website by adding "/" it will show "Hello World!" but if you enter "/ping" the website will print the headers of the API and it doesn't matter what you write after "/" the website will show the 404 error page.