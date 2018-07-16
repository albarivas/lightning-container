Sample app that embeds a tic tac toe react app (https://reactjs.org/tutorial/tutorial.html) using lightning:container and handles the communication between the app and Salesforce

Instructions:

1. Go to react folder and run: npm run build
2. This will download all the dependant modules and generate bundled files in dist
3. Navigate to dist folder and compress its files using: zip -vr react.zip ./*  -x "*.DS_Store" (If you are using MAC OS)
4. This will generate a zip file, that you will need to upload to the org in a static resource. Call it "react"
5. Deploy the salesforce code to the org
