# DiUS Shopping


### Installation and test

Run following commands:

1. npm i
2. npm run qc

### Notes

1. I haven't added any comments as it leads to big files and I have tried to write code which is self-explanatory without the need of any comments

2. The eslintrc.js have the rules defined for linting. I have kept the rules to a minimum for this code test but a lot other can be added.

3. jest.config.js have the coverage threshold defined and is 100%.

4. app.test.ts is the test class which has all the scenarios defined to test and can be executed through npm run test or npm run qc

5. As of now all the pricing rules are defined in items.ts. Any changes would need changing this file. 
If the project requires too many rule files, we need to think of using DB like dynamo DB etc.

### Folder Structure

1. items folder have all the pricing rules defined
2. deals folders have the special methods to handle the special deals
3. checkout folder have the scan and total methods to scan the items and get the total.
4. The execution begins from app.ts to processor. I have defined 1 scenario there and rest are covered in app.test.ts